import React from 'react';
import { sanitizeText } from '../utils/validators';
import styles from './CVSection.module.css';

/**
 * CVSection Component
 * Displays CV information including education, experience, skills, and certifications
 * Sanitizes all data to prevent XSS attacks
 */
const CVSection = ({ cvData, expanded = false, onToggle }) => {
  if (!cvData) {
    return null;
  }

  const {
    professionalSummary,
    education = [],
    experience = [],
    skills = {},
    certifications = [],
    languages = []
  } = cvData;

  return (
    <section className={`${styles.cvSection} ${expanded ? styles.expanded : ''}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.icon}>📋</span>
          Curriculum Vitae
        </h2>
        {onToggle && (
          <button
            className={styles.toggleButton}
            onClick={onToggle}
            aria-label={expanded ? 'Collapse CV section' : 'Expand CV section'}
            aria-expanded={expanded}
          >
            {expanded ? '−' : '+'}
          </button>
        )}
      </div>

      {!expanded && onToggle && (
        <div className={styles.preview}>
          <p className={styles.previewText}>
            Click to expand full CV details
          </p>
        </div>
      )}

      {(expanded || !onToggle) && (
        <div className={styles.content}>
          {/* Professional Summary */}
          {professionalSummary && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Professional Summary</h3>
              <p className={styles.sectionContent}>
                {sanitizeText(professionalSummary)}
              </p>
            </section>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Education</h3>
              <div className={styles.items}>
                {education.map((edu, index) => (
                  <div key={`edu-${index}`} className={styles.item}>
                    <div className={styles.itemHeader}>
                      <h4 className={styles.itemTitle}>
                        {sanitizeText(edu.institution || '')}
                      </h4>
                      {edu.graduationDate && (
                        <span className={styles.itemDate}>
                          {sanitizeText(edu.graduationDate)}
                        </span>
                      )}
                    </div>
                    {edu.degree && (
                      <p className={styles.itemSubtitle}>
                        {sanitizeText(edu.degree)}
                      </p>
                    )}
                    {edu.fieldOfStudy && (
                      <p className={styles.itemDetail}>
                        {sanitizeText(edu.fieldOfStudy)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {experience && experience.length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Experience</h3>
              <div className={styles.items}>
                {experience.map((exp, index) => (
                  <div key={`exp-${index}`} className={styles.item}>
                    <div className={styles.itemHeader}>
                      <div>
                        <h4 className={styles.itemTitle}>
                          {sanitizeText(exp.company || '')}
                        </h4>
                        <p className={styles.itemSubtitle}>
                          {sanitizeText(exp.jobTitle || '')}
                        </p>
                      </div>
                      <span className={styles.itemDate}>
                        {sanitizeText(exp.startDate || '')} −{' '}
                        {sanitizeText(exp.endDate || '')}
                      </span>
                    </div>
                    {exp.description && (
                      <p className={styles.itemDetail}>
                        {sanitizeText(exp.description)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {skills && Object.keys(skills).length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Skills</h3>
              <div className={styles.skillsGrid}>
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className={styles.skillCategory}>
                    <h4 className={styles.skillCategoryTitle}>
                      {sanitizeText(category)}
                    </h4>
                    <div className={styles.skillList}>
                      {Array.isArray(skillList) ? (
                        skillList.map((skill, index) => (
                          <span
                            key={`skill-${index}`}
                            className={styles.skillBadge}
                          >
                            {sanitizeText(skill)}
                          </span>
                        ))
                      ) : (
                        <span className={styles.skillBadge}>
                          {sanitizeText(String(skillList))}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Certifications</h3>
              <div className={styles.items}>
                {certifications.map((cert, index) => (
                  <div key={`cert-${index}`} className={styles.item}>
                    <div className={styles.itemHeader}>
                      <h4 className={styles.itemTitle}>
                        {sanitizeText(cert.name || '')}
                      </h4>
                      {cert.issueDate && (
                        <span className={styles.itemDate}>
                          {sanitizeText(cert.issueDate)}
                        </span>
                      )}
                    </div>
                    {cert.issuer && (
                      <p className={styles.itemSubtitle}>
                        {sanitizeText(cert.issuer)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages && languages.length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Languages</h3>
              <div className={styles.languageList}>
                {languages.map((lang, index) => (
                  <div key={`lang-${index}`} className={styles.language}>
                    <span className={styles.languageName}>
                      {sanitizeText(lang.name || '')}
                    </span>
                    {lang.proficiency && (
                      <span className={styles.languageProficiency}>
                        {sanitizeText(lang.proficiency)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </section>
  );
};

CVSection.displayName = 'CVSection';

export default CVSection;
