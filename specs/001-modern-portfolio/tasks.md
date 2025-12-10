# Tasks: Modern Portfolio Website

**Input**: Design documents from `/specs/001-modern-portfolio/`
**Prerequisites**: plan.md ✓, spec.md ✓
**Status**: Ready for implementation

**Organization**: Tasks organized by user story (US1-US5) with setup and foundational phases. Each user story is independently testable and deployable.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Review and document current site architecture
- [X] T002 Setup security utilities directory: `src/security/`
- [X] T003 Create environment variable management: `src/utils/env.js`
- [X] T004 [P] Create `.env.example` with all non-secret config
- [ ] T005 [P] Configure ESLint and Prettier for code consistency
- [ ] T006 [P] Add security scanning tools (npm audit, snyk config)

---

## Phase 2: Foundational Infrastructure (BLOCKING)

**Purpose**: Core infrastructure that MUST be complete before user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T007 Create `src/security/sanitize.js` with XSS prevention utilities
  - Export `sanitizeHtml()` function using DOMPurify or similar
  - Export `sanitizeUrl()` for link validation
  - Export `sanitizeText()` for safe text rendering
- [X] T008 Create security headers configuration: `src/security/headers.js`
  - CSP (Content Security Policy) configuration
  - X-Frame-Options, X-Content-Type-Options headers
  - HSTS configuration for HTTPS enforcement
- [X] T009 Create secrets detection utility: `src/security/secrets.js`
  - Function to block hardcoded secrets/API keys
  - Validation to ensure env vars used instead
- [X] T010 [P] Create data models in `src/assets/`:
  - `cv-data.json` - CV structure with education, experience, skills
  - `projects-data.json` - Projects with description, tech stack, dates, links
  - `experiences.json` - Career entries (PlayStation, Novabase, Education)
- [X] T011 Create `src/components/ProjectCard.js` - Reusable project display component
- [X] T012 Create `src/components/CVSection.js` - Reusable CV display component
- [X] T013 Create `src/components/ExperienceEntry.js` - Reusable experience entry component
- [X] T014 [P] Create `src/utils/validators.js`
  - URL validation for project links
  - Email validation if contact info needed
  - Date validation for career entries
- [X] T015 Create `src/utils/constants.js` with app constants
- [X] T016 Update `src/App.js` to integrate security utilities at startup
  - Initialize CSP headers
  - Enable secret detection in dev mode
- [X] T017 [P] Add unit tests for security utilities in `tests/unit/`
  - Test sanitizeHtml() with XSS payloads
  - Test sanitizeUrl() with malicious URLs
  - Test validators with edge cases

**Checkpoint**: Security foundation, data models, and core utilities ready. User story implementation can now begin.

---

## Phase 3: User Story 1 - Visitor Discovers Professional Credentials (Priority: P1) 🎯 MVP

**Goal**: Homepage and CV section prominently display credentials, allowing visitors to understand professional background immediately

**Independent Test**: 
- Load homepage → See professional role and key expertise within 10 seconds
- Find CV section → Download or view full resume
- All on mobile and desktop with responsive layout

### Tests for User Story 1

- [ ] T018 [P] Unit tests for CV components in `tests/unit/CVSection.test.js`
  - Test CVSection renders with data from cv-data.json
  - Test CV data loading and error handling
  - Test responsive rendering
- [ ] T019 [P] Integration test for homepage journey in `tests/integration/homepage.test.js`
  - Test: User lands on homepage → sees professional headline
  - Test: User scrolls → finds CV section
  - Test: User clicks download → receives PDF

### Implementation for User Story 1

- [ ] T020 [P] Update homepage in `src/features/home/Home.js`
  - Add professional headline (Lead Platform Engineer)
  - Add key expertise areas prominently
  - Add quick links to CV and projects
  - Ensure responsive layout (mobile first)
- [ ] T021 [P] Create CV page in `src/features/career/CV.js` (or rename existing component)
  - Display education section from cv-data.json
  - Display work experience summary
  - Display key skills and certifications
- [ ] T022 [P] Create `src/assets/cv-data.json` with full CV structure
  - Professional summary
  - Education entries (dates, institution, degree)
  - Work experience (dates, company, role, responsibilities, achievements)
  - Skills (languages, technologies, frameworks)
  - Certifications (if applicable)
- [ ] T023 Create PDF download functionality for resume
  - Generate or link to resume.pdf
  - Ensure accessible from CV section and homepage
  - Add button for download within 2 clicks
- [ ] T024 Update navigation in `src/features/navs/GlobalBar.js`
  - Add link to CV section
  - Ensure visible on all screen sizes
- [ ] T025 [P] Update navigation in `src/features/navs/DynamicSideBar.js`
  - Add CV navigation item
  - Ensure consistent with GlobalBar
- [ ] T026 Ensure homepage SEO and accessibility
  - Add semantic HTML (header, main, section tags)
  - Add aria-labels for screen readers
  - Ensure proper heading hierarchy (h1, h2, h3)
- [ ] T027 Test CV data loading with error handling
  - Handle missing cv-data.json gracefully
  - Show fallback content if data fails to load
- [ ] T028 Performance optimization for CV section
  - Lazy load CV data if needed
  - Optimize any images in CV section

**Checkpoint**: User Story 1 complete. Homepage showcases credentials, CV accessible. Can be deployed independently.

---

## Phase 4: User Story 2 - Prospect Reviews Past Projects (Priority: P1) 🎯 MVP

**Goal**: Portfolio section showcases past work (PlayStation, Novabase, etc.) with detailed project information, links to source code/deployments

**Independent Test**:
- Navigate to projects section → See list of past projects
- Click on project → View project details, tech stack, outcomes
- Find links to code or deployment → Can click and navigate

### Tests for User Story 2

- [ ] T029 [P] Unit tests for ProjectCard component in `tests/unit/ProjectCard.test.js`
  - Test ProjectCard renders with project data
  - Test links are safe (sanitized)
  - Test responsive card layout
- [ ] T030 [P] Unit tests for Projects page in `tests/unit/ProjectList.test.js`
  - Test projects load from projects-data.json
  - Test filtering/sorting (if applicable)
- [ ] T031 Integration test for project portfolio journey in `tests/integration/projects.test.js`
  - Test: User navigates to Projects → sees list
  - Test: User clicks project → sees detail page
  - Test: User clicks external links → validates safe navigation

### Implementation for User Story 2

- [ ] T032 Create `src/features/projects/Projects.js` - Main projects list page
  - Display grid/list of all projects
  - Include project titles, images, brief descriptions
  - Add filtering/sorting (by date, technology, company)
  - Ensure responsive layout
- [ ] T033 Create `src/features/projects/ProjectDetail.js` - Individual project detail page
  - Display full project information
  - Show business context and technical challenges
  - Display outcomes/impact delivered
  - Include links to source code, deployment, or documentation
- [ ] T034 [P] Create `src/assets/projects-data.json` with complete project listings
  - PlayStation project entry
  - Novabase project entry
  - Other past projects
  - Each with: name, description, dates, tech stack, company, role, outcomes, links
- [ ] T035 [P] Create and optimize project images for portfolio
  - Add thumbnails for project cards
  - Optimize images for web (size, format)
  - Ensure alt text for accessibility
- [ ] T036 Update navigation to include Projects link
  - Add to GlobalBar in `src/features/navs/GlobalBar.js`
  - Add to DynamicSideBar in `src/features/navs/DynamicSideBar.js`
  - Ensure visible and prominent on homepage
- [ ] T037 Update homepage in `src/features/home/Home.js` with projects teaser
  - Show 3-5 featured projects on homepage
  - Link to full projects page
- [ ] T038 Implement project link sanitization and validation
  - Use sanitizeUrl() for all project links
  - Validate links point to safe external sites
  - Handle broken links gracefully
- [ ] T039 Create breadcrumb navigation for project detail pages
  - Show: Projects > Project Name
  - Improve UX and SEO
- [ ] T040 Add sharing functionality for projects (optional)
  - Generate shareable project URLs
  - Include Open Graph meta tags for social sharing

**Checkpoint**: User Story 2 complete. Projects section fully functional with details and links. Can be deployed independently.

---

## Phase 5: User Story 3 - Website Maintains Security Posture (Priority: P1) 🎯 MVP

**Goal**: Ensure zero secrets exposed, protect against common vulnerabilities, validate security baseline before deployment

**Independent Test**:
- Run secret scanning → Find zero API keys, credentials, tokens
- Inspect deployed assets → Find no secrets in HTML/CSS/JS bundles
- Run OWASP scanning → No critical/high severity vulnerabilities
- Verify build process → Secrets only from environment, never in code

### Tests for User Story 3

- [ ] T041 Create security validation test suite in `tests/security/`
  - Test that no hardcoded API keys exist in code
  - Test that env variables are used correctly
  - Test that secrets are never logged
- [ ] T042 [P] Add pre-commit hook to prevent secret commits
  - Use husky + lint-staged
  - Block commits with suspected secrets
- [ ] T043 Setup secret scanning in CI/CD
  - Add npm audit to build pipeline
  - Add snyk or similar tool
  - Fail build on high-severity vulnerabilities

### Implementation for User Story 3

- [ ] T044 [P] Add security headers to production build
  - Configure in `public/index.html` or serve headers
  - CSP: Restrict script sources
  - X-Frame-Options: DENY (no framing)
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
- [ ] T045 Implement input validation for all user-facing features
  - Use validators from `src/utils/validators.js`
  - Sanitize any external data before rendering
  - Validate URLs, email addresses, dates
- [ ] T046 Ensure no secrets in environment configuration
  - Create `.env.example` with placeholders (no real values)
  - Document all required env vars
  - Verify build fails if required secret missing
- [ ] T047 Add secret detection to build process
  - Implement pre-build check in build scripts
  - Use regex patterns to detect common secret patterns
  - Fail build if secrets detected
- [ ] T048 Create deployment checklist
  - Document security validation steps
  - Create GitHub Actions workflow for automated checks
  - Require manual approval before production deployment
- [ ] T049 [P] Document security practices in README
  - How to handle secrets safely
  - How to validate security before deployment
  - Contact info for security issues (responsible disclosure)
- [ ] T050 Setup GitHub secret scanning
  - Enable native GitHub secret scanning
  - Add custom patterns if needed
  - Alert on any detected secrets

**Checkpoint**: User Story 3 complete. Security foundation verified, zero secrets exposed, protection against common vulnerabilities. Ready for production deployment.

---

## Phase 6: User Story 4 - Website Presents Modern Professional Design (Priority: P2)

**Goal**: Update visual design to appear contemporary and professional, reflecting caliber of lead platform engineer

**Independent Test**:
- Load website on desktop → See modern, polished design
- Load on mobile → Design is responsive and professional
- Scroll through pages → Visual hierarchy is clear, good use of whitespace

### Tests for User Story 4

- [ ] T051 Visual regression tests for key pages
  - Test homepage layout consistency
  - Test responsive behavior across breakpoints
- [ ] T052 A/B testing or user feedback on new design (optional)
  - Gather feedback on visual appeal
  - Ensure professional appearance confirmed

### Implementation for User Story 4

- [ ] T053 [P] Update color scheme and typography
  - Review current theme in `src/assets/Themes.js`
  - Update to modern, professional colors
  - Choose contemporary font stack (system fonts or Google Fonts)
  - Ensure sufficient contrast for accessibility
- [ ] T054 [P] Modernize component styling with Styled Components
  - Update existing components with modern CSS
  - Use CSS Grid and Flexbox for layouts
  - Ensure consistent spacing and alignment
- [ ] T055 [P] Create design system documentation
  - Document colors, typography, spacing system
  - Create component showcase/storybook (optional)
- [ ] T056 [P] Update homepage visual design
  - Hero section with compelling headline
  - Feature cards for key sections
  - Modern footer with social links
- [ ] T057 [P] Update sidebar and navigation visuals
  - Modern, clean sidebar styling
  - Consistent with Primer React design language
  - Ensure mobile-responsive
- [ ] T058 Add micro-interactions and animations
  - Smooth page transitions
  - Hover effects for interactive elements
  - Loading states for async operations
- [ ] T059 Ensure consistent visual appearance across all pages
  - Audit all pages for design consistency
  - Update outliers to match new design system
- [ ] T060 Test design on various devices and browsers
  - Chrome, Firefox, Safari, Edge (latest 2 versions)
  - Mobile devices (iOS Safari, Chrome Android)
  - Tablets

**Checkpoint**: User Story 4 complete. Website appearance updated to modern, professional standards. Ready for deployment.

---

## Phase 7: User Story 5 - Website Performance Standards (Priority: P2)

**Goal**: Achieve sub-4s load time, Core Web Vitals > 90, ensure smooth interactions

**Independent Test**:
- Measure LCP < 2.5s (broadband), < 4s (4G)
- Measure FID < 100ms
- Measure CLS < 0.1
- Verify Time to Interactive < 2s (broadband), < 4s (4G)

### Tests for User Story 5

- [ ] T061 Performance benchmarking test
  - Measure load time on different connections
  - Measure Core Web Vitals
  - Document baseline and improvements
- [ ] T062 Performance regression testing
  - Add performance budgets to build
  - Fail build if bundle size exceeds limits

### Implementation for User Story 5

- [ ] T063 [P] Analyze current performance with Lighthouse
  - Identify performance bottlenecks
  - Document recommendations
- [ ] T064 [P] Implement code splitting by route
  - Use React.lazy() and Suspense for route-based splitting
  - Load CV and projects sections on-demand
- [ ] T065 [P] Optimize images
  - Convert to modern formats (WebP with fallbacks)
  - Implement responsive images (srcset)
  - Add lazy loading for below-fold images
- [ ] T066 [P] Minify and optimize assets
  - Tree-shake unused dependencies
  - Review bundle analysis (source-map-explorer)
  - Remove unused CSS
- [ ] T067 [P] Implement caching strategy
  - Setup service worker for offline support (optional)
  - Configure cache headers for static assets
  - Ensure updated content loads on demand
- [ ] T068 Optimize Largest Contentful Paint (LCP)
  - Preload critical resources
  - Optimize main content image/video
  - Minimize render-blocking resources
- [ ] T069 Optimize Cumulative Layout Shift (CLS)
  - Fix layout shifts during load
  - Set explicit sizes for images
  - Avoid inserting content above existing content
- [ ] T070 Optimize First Input Delay (FID) / Interaction to Next Paint (INP)
  - Break up long JavaScript tasks
  - Defer non-critical JavaScript
  - Minimize main thread work
- [ ] T071 [P] Run final Lighthouse audit
  - Verify all Core Web Vitals > 90
  - Verify performance score > 90
  - Document results

**Checkpoint**: User Story 5 complete. Performance optimizations applied, Core Web Vitals targets met. Ready for final deployment.

---

## Phase 8: Cross-Cutting Concerns & Polish

**Purpose**: Final improvements affecting multiple user stories

- [ ] T072 [P] Accessibility audit with axe or similar tool
  - Run automated accessibility checks
  - Fix any WCAG 2.1 AA violations
  - Manual testing for keyboard navigation
- [ ] T073 [P] SEO optimization
  - Add meta tags to all pages
  - Create sitemap.xml
  - Add robots.txt
  - Ensure proper heading hierarchy
- [ ] T074 [P] Create comprehensive documentation
  - Update README.md with setup and deployment instructions
  - Document data structures (cv-data.json, projects-data.json)
  - Document security practices
  - Create CONTRIBUTING.md for future updates
- [ ] T075 Create quickstart.md for new developers
  - How to setup local environment
  - How to run tests
  - How to build and deploy
- [ ] T076 Final code review and cleanup
  - Remove console logs and debug code
  - Refactor any duplicated code
  - Ensure consistent code style
- [ ] T077 [P] Final security audit before deployment
  - Run all secret scanning tools
  - Run OWASP scanning
  - Verify no vulnerabilities
  - Generate security report
- [ ] T078 Create deployment checklist and runbook
  - Document step-by-step deployment process
  - Include rollback procedures
  - Document monitoring and alerts
- [ ] T079 Final testing pass
  - Manual functional testing of all features
  - Cross-browser testing
  - Mobile device testing
  - Test on real 4G connection if possible

**Checkpoint**: All features complete, thoroughly tested, security validated. Ready for production deployment.

---

## Phase 9: Deployment & Monitoring

**Purpose**: Get website live and monitor for issues

- [ ] T080 Setup GitHub Actions CI/CD pipeline
  - Automated testing on pull requests
  - Automated security scanning
  - Automated build and deployment to GitHub Pages
- [ ] T081 Setup production monitoring
  - Monitor Core Web Vitals with web-vitals library
  - Setup error tracking (Sentry, LogRocket, or similar - optional)
  - Monitor security (GitHub alerts, npm audit)
- [ ] T082 Create post-deployment checklist
  - Verify site loads in production
  - Verify all links work
  - Verify Core Web Vitals in production
  - Verify no console errors
- [ ] T083 Create support/maintenance documentation
  - How to update CV data
  - How to add new projects
  - How to report security issues
  - How to handle urgent updates

---

## Dependencies & Execution Order

### Phase Dependencies

1. **Setup (Phase 1)**: No dependencies ✓
2. **Foundational (Phase 2)**: Depends on Setup ✓ **CRITICAL BLOCKER**
3. **US1 (Phase 3)**: Depends on Foundational ✓
4. **US2 (Phase 4)**: Depends on Foundational (can run parallel with US1)
5. **US3 (Phase 5)**: Depends on Foundational (can run parallel with US1-US2)
6. **US4 (Phase 6)**: Depends on US1-US3 complete (design updates existing features)
7. **US5 (Phase 7)**: Depends on US1-US3 complete (performance tuning)
8. **Polish (Phase 8)**: Depends on all user stories
9. **Deployment (Phase 9)**: Depends on Polish complete

### Parallel Opportunities

- Phase 1 setup tasks marked [P] can run in parallel
- Phase 2 foundational tasks marked [P] can run in parallel
- US1, US2, US3 can run in parallel after Foundational
- Within each user story, all [P] marked tasks can run in parallel
- Different team members can work on different user stories simultaneously

### Example Parallel Schedule (with 3+ developers)

```
Day 1: Dev A, B, C work together on Phase 1 & 2 (Setup + Foundational)
Day 2+: Once Foundational done:
  - Dev A: User Story 1 (Credentials)
  - Dev B: User Story 2 (Portfolio)  
  - Dev C: User Story 3 (Security)
  - Run in parallel, independent tasks marked [P]
Day X: All stories done, team works on Phase 8 (Polish) together
Day Y: Phase 9 (Deployment) - final verification and launch
```

---

## Success Metrics

| Task Phase | Success Criteria | Validation |
|-----------|-----------------|-----------|
| Phase 1 | All setup tasks complete | Code review + CI/CD passes |
| Phase 2 | All utilities tested and working | Unit tests pass, no security issues |
| Phase 3 | US1 independently functional | Can deploy homepage alone |
| Phase 4 | US2 independently functional | Can deploy projects alone |
| Phase 5 | Zero secrets, no vulnerabilities | Secret scanning passes, OWASP clean |
| Phase 6 | Design meets modern standards | Visual review + responsive testing |
| Phase 7 | Core Web Vitals > 90 | Lighthouse audit passes |
| Phase 8 | All accessibility/SEO complete | axe audit passes, SEO checklist done |
| Phase 9 | Live in production | Site accessible, monitoring active |

---

## Notes

- [P] = Can run in parallel (independent, different files)
- [US#] = Maps to User Story number for traceability
- Complete Phase 2 (Foundational) before starting ANY user story
- Each user story can be independently deployed as an increment
- Stop at any checkpoint to validate and deploy if desired
- Use git tags to mark each checkpoint completion
- Keep commits atomic - one logical change per commit

---

**Next Step**: Begin with Phase 1 setup tasks or request to convert these tasks to GitHub Issues for project tracking.
