import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, type ContactSubmission } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

// Email notification function
async function sendEmailNotification(submission: ContactSubmission): Promise<void> {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || "Carvetealglobal@gmail.com";

    // Send email notification using FormSubmit.co
    // This is a free service that doesn't require API keys
    // For production, configure the recipient email in the FormSubmit.co URL
    const emailData = {
      name: `${submission.name} (Carve Teak Global - Furniture Inquiry)`,
      email: submission.email,
      phone: submission.phone,
      message: `
NEW FURNITURE INQUIRY - CARVE TEAK GLOBAL

Customer Details:
- Name: ${submission.name}
- Phone: ${submission.phone}
- Email: ${submission.email}

Message:
${submission.message}

---
Company: GAU VEDA GLOBAL LLP
Submission ID: ${submission.id}
Submitted: ${submission.createdAt.toLocaleString()}
      `.trim(),
      _subject: `New Furniture Inquiry from ${submission.name} - Carve Teak Global`,
      _template: "table",
    };

    // Send email via FormSubmit.co
    const response = await fetch(`https://formsubmit.co/ajax/${adminEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      throw new Error(`FormSubmit.co returned ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    
    console.log("\n✅ EMAIL NOTIFICATION SENT:");
    console.log("To:", adminEmail);
    console.log("Subject:", emailData._subject);
    console.log("From:", submission.name, `<${submission.email}>`);
    console.log("Status:", result.success ? "SUCCESS" : "FAILED");
    console.log("---\n");

  } catch (error) {
    // Log error but don't fail the submission
    console.error("❌ Failed to send email notification:", error);
    console.error("Submission was still saved in database");
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.message 
        });
      }

      const submission = await storage.createContactSubmission(validationResult.data);

      // Send email notification
      await sendEmailNotification(submission);

      console.log("New contact submission received:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        message: submission.message.substring(0, 50) + "...",
        timestamp: submission.createdAt,
      });

      res.status(201).json({ 
        success: true, 
        message: "Thank you for your inquiry! We will contact you soon.",
        submissionId: submission.id 
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      res.status(500).json({ error: "Failed to process submission" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
