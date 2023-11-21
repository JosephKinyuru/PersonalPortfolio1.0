import { useEffect, useState } from 'react';

const Sitemap = () => {
  const [sitemapData, setSitemapData] = useState('');

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await fetch('/src/Assets/sitemap.xml');
        const xmlText = await response.text();
        setSitemapData(xmlText);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    };

    fetchSitemap();
  }, []);

  return (
    <div>
      <pre>{sitemapData}</pre>
    </div>
  );
};

export default Sitemap;