import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

export function useSEO({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMeta = (
      property: string,
      content: string,
      isProperty = false
    ) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMeta('description', description);
    
    if (keywords) {
      updateMeta('keywords', keywords);
    }

    // Update Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', type, true);
    
    if (image) {
      updateMeta('og:image', image, true);
      updateMeta('og:image:alt', title, true);
    }
    
    if (url) {
      updateMeta('og:url', url, true);
    }

    // Update Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    
    if (image) {
      updateMeta('twitter:image', image);
      updateMeta('twitter:image:alt', title);
    }

    // Update canonical link
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }
  }, [title, description, image, url, type, keywords]);
}

