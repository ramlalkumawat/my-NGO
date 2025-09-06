import React from 'react';
import { Helmet } from 'react-helmet-async'; // Will need to install react-helmet-async

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Punaroday Foundation - Empowering Rajasthan’s Future",
  description = "Punaroday Foundation Sanstha works for women empowerment, youth skill development, education, tourism development, health, environment, and sports in Rajasthan.",
  keywords = "Punaroday, NGO, Rajasthan, Women Empowerment, Youth Skill Development, Education, Digital Literacy, Tourism, Health, Environment, Sports, Social Impact",
  ogImage = "/placeholder.svg", // Placeholder image
  ogUrl = window.location.href,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={ogUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;