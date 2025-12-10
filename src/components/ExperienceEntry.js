import React from 'react';
import { sanitizeText } from '../security/sanitize';
import { sanitizeUrl } from '../security/sanitize';
import styles from './ExperienceEntry.module.css';

/**
 * ExperienceEntry Component
 * Displays a single work experience entry with timeline design
 * Sanitizes all data to prevent XSS attacks
 */
const ExperienceEntry = ({
  experience,
  index = 0,
  expandable = false,
  expanded = false,
  onToggle
}) => {
  if (!experience) {
    return null;
  }

  const {
    company,
    jobTitle,
    startDate,
    endDate,
    location,
    description,
    responsibilities = [],
    achievements = [],
    technologies = [],
    imageUrl,
    companyWebsite
  } = experience;

  const safeCompany = sanitizeText(company || '');
  const safeJobTitle = sanitizeText(jobTitle || '');
  const safeStartDate = sanitizeText(startDate || '');
  const safeEndDate = sanitizeText(endDate || '');
  const safeLocation = sanitizeText(location || '');
  const safeDescription = sanitizeText(description || '');
  const safeImageUrl = sanitizeUrl(imageUrl || '');
  const safeWebsite = sanitizeUrl(companyWebsite || '');

  const handleToggle = () => {
    if (onToggle && expandable) {
      onToggle(index);
    }
  };

  const handleKeyPress = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && expandable && onToggle) {
      handleToggle();
    }
  };

  return (
    <div
      className={`${styles.entry} ${expanded ? styles.expanded : ''}`}
      role="article"
      tabIndex={expandable ? 0 : -1}
      onClick={expandable ? handleToggle : undefined}
      onKeyPress={expandable ? handleKeyPress : undefined}
    >
      {/* Timeline indicator */}
      <div className={styles.timeline}>
        <div className={styles.dot} aria-hidden="true" />
        <div className={styles.line} aria-hidden="true" />
      </div>

      {/* Main content */}
      <div className={styles.content}>
        {/* Header with company and dates */}
        <div className={styles.header}>
          <div className={styles.titleSection}>
            {safeImageUrl && (
              <img
                src={safeImageUrl}
                alt={`${safeCompany} logo`}
                className={styles.logo}
                loading="lazy"
              />
            )}

            <div className={styles.titles}>
              <h3 className={styles.company}>
                {safeWebsite ? (
                  <a
                    href={safeWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                  >
                    {safeCompany}
                    <span className={styles.externalIcon} aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  safeCompany
                )}
              </h3>

              <h4 className={styles.title}>{safeJobTitle}</h4>
            </div>
          </div>

          {expandable && (
            <button
              className={`${styles.toggleButton} ${expanded ? styles.expanded : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
              aria-label={`${expanded ? 'Collapse' : 'Expand'} experience details for ${safeCompany}`}
              aria-expanded={expanded}
            >
              <span aria-hidden="true">▼</span>
            </button>
          )}
        </div>

        {/* Meta information */}
        <div className={styles.meta}>
          {safeStartDate && (
            <span className={styles.dates}>
              📅 {safeStartDate}
              {safeEndDate && ` → ${safeEndDate}`}
            </span>
          )}

          {safeLocation && (
            <span className={styles.location}>
              📍 {safeLocation}
            </span>
          )}
        </div>

        {/* Description (always visible) */}
        {safeDescription && (
          <p className={styles.description}>{safeDescription}</p>
        )}

        {/* Expandable sections */}
        {(expanded || !expandable) && (
          <>
            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <div className={styles.section}>
                <h5 className={styles.sectionTitle}>Technologies</h5>
                <div className={styles.techList}>
                  {technologies.map((tech, idx) => (
                    <span
                      key={`tech-${idx}`}
                      className={styles.techBadge}
                      title={`Technology: ${sanitizeText(tech)}`}
                    >
                      {sanitizeText(tech)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Responsibilities */}
            {responsibilities && responsibilities.length > 0 && (
              <div className={styles.section}>
                <h5 className={styles.sectionTitle}>Responsibilities</h5>
                <ul className={styles.list}>
                  {responsibilities.map((resp, idx) => (
                    <li key={`resp-${idx}`}>
                      {sanitizeText(resp)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {achievements && achievements.length > 0 && (
              <div className={styles.section}>
                <h5 className={styles.sectionTitle}>Key Achievements</h5>
                <ul className={styles.achievementsList}>
                  {achievements.map((achievement, idx) => (
                    <li key={`achievement-${idx}`} className={styles.achievement}>
                      <span className={styles.checkmark} aria-hidden="true">
                        ✓
                      </span>
                      {sanitizeText(achievement)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* Expand hint for collapsible entries */}
        {expandable && !expanded && (
          <div className={styles.expandHint}>
            <span className={styles.hintText}>
              Click to view details
            </span>
            <span className={styles.hintIcon} aria-hidden="true">
              ▼
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

ExperienceEntry.displayName = 'ExperienceEntry';

export default ExperienceEntry;
