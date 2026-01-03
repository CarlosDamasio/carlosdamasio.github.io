import React from 'react';
import { sanitizeUrl, sanitizeText } from '../security/sanitize';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard Component
 * Displays a single project with image, title, description, and technologies
 * Sanitizes all data to prevent XSS attacks
 */
const ProjectCard = ({ project, onClick, featured = false }) => {
  if (!project) {
    return null;
  }

  const {
    id,
    title,
    shortDescription,
    imageUrl,
    company,
    technologies = [],
    featured: isFeatured = featured
  } = project;

  // Sanitize data
  const safeTitle = sanitizeText(title || '');
  const safeDescription = sanitizeText(shortDescription || '');
  const safeCompany = sanitizeText(company || '');
  const safeImageUrl = sanitizeUrl(imageUrl || '');

  const handleClick = () => {
    if (onClick && id) {
      onClick(id);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      className={`${styles.projectCard} ${isFeatured ? styles.featured : ''}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="article"
      tabIndex={0}
      aria-label={`Project: ${safeTitle}`}
    >
      {safeImageUrl && (
        <div className={styles.imageContainer}>
          <img
            src={safeImageUrl}
            alt={safeTitle}
            className={styles.image}
            loading="lazy"
          />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{safeTitle}</h3>
          {safeCompany && (
            <span className={styles.company} title={`Company: ${safeCompany}`}>
              {safeCompany}
            </span>
          )}
        </div>

        {safeDescription && (
          <p className={styles.description}>{safeDescription}</p>
        )}

        {technologies && technologies.length > 0 && (
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span
                key={`${id}-tech-${index}`}
                className={styles.tech}
                title={`Technology: ${sanitizeText(tech)}`}
              >
                {sanitizeText(tech)}
              </span>
            ))}
          </div>
        )}

        {onClick && (
          <div className={styles.footer}>
            <button
              className={styles.viewButton}
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
              aria-label={`View details for ${safeTitle}`}
            >
              View Details →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
