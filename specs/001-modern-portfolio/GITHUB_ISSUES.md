# GitHub Issues: Modern Portfolio Website (001-modern-portfolio)

**Repository**: CarlosDamasio/carlosdamasio.github.io  
**Project**: Modern Portfolio  
**Branch**: `001-modern-portfolio`  
**Status**: Ready to create in GitHub UI

---

## Instructions

### Quick Start: GitHub CLI

```bash
# Example: Create an epic issue
gh issue create \
  --title "[EPIC] Phase 1: Setup & Configuration" \
  --body "Initialize project structure and setup tooling\n\nSee: specs/001-modern-portfolio/tasks.md (T001-T007)" \
  --label "epic,phase-1" \
  --assignee @me

# For each issue below, replace title, body, labels, etc.
```

### Manual: GitHub Web UI

1. Go to: https://github.com/CarlosDamasio/carlosdamasio.github.io/issues/new
2. Copy title and body from each issue below
3. Add labels and assignee
4. Create issue

---

## EPIC ISSUES (3 total)

### EPIC-001: Phase 1 Setup & Configuration

**Title**: `[EPIC] Phase 1: Setup & Configuration`

**Labels**: `epic`, `phase-1`

**Milestone**: `v1.0 MVP`

**Body**:
```
Initialize project structure, security utilities, environment configuration, and tooling setup.

## Scope

- Review and document current site architecture
- Setup security utilities directory structure
- Create environment variable management
- Configure linting and formatting tools
- Add dependency scanning tools

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T001-T007)

## Acceptance Criteria

- [ ] Project architecture documented
- [ ] Security utilities directory created
- [ ] Environment variables configured
- [ ] ESLint and Prettier working
- [ ] Dependency scanning configured

## Status

- Blocked by: Nothing (can start immediately)
- Blocks: Phase 2
```

---

### EPIC-002: Phase 2 Security & Infrastructure Foundation (CRITICAL BLOCKER)

**Title**: `[EPIC] Phase 2: Security & Infrastructure Foundation (CRITICAL - BLOCKS ALL USER STORIES)`

**Labels**: `epic`, `phase-2`, `security`

**Milestone**: `v1.0 MVP`

**Body**:
```
Core infrastructure that MUST be complete before ANY user story can be implemented.

## Scope

- Security utilities (XSS prevention, sanitization)
- Security headers configuration (CSP, X-Frame-Options)
- Secrets detection and prevention
- Data models for CV and projects
- Reusable component foundation
- Input validation utilities
- Environment configuration management
- Navigation refactoring for unified experience

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T008-T017)

## Acceptance Criteria

- [ ] XSS prevention utilities working
- [ ] Security headers configured
- [ ] Secrets detection functional
- [ ] Data models created (cv-data.json, projects-data.json)
- [ ] Reusable components created (ProjectCard, CVSection, ExperienceEntry)
- [ ] Input validators working
- [ ] Environment variables configured
- [ ] Navigation components updated

## ⚠️ CRITICAL

This phase BLOCKS all user story implementation. No work on US1-US5 can begin until this is 100% complete.

## Status

- Blocked by: Phase 1 ✓
- Blocks: ALL User Stories (US1, US2, US3, US4, US5)
```

---

### EPIC-003: Phases 3-5 User Stories (MVP)

**Title**: `[EPIC] Phases 3-5: User Stories (P1 - MVP)`

**Labels**: `epic`, `phase-3-5`, `mvp`

**Milestone**: `v1.0 MVP`

**Body**:
```
Implementation of all P1 (high-priority) user stories and core MVP features.

## User Stories

1. **US1**: Visitor Discovers Professional Credentials
   - Homepage redesign with professional headline
   - CV section with download functionality
   - Related issues: US1 issue

2. **US2**: Prospect Reviews Past Projects
   - Projects portfolio section
   - Project detail pages
   - Related issues: US2 issue

3. **US3**: Website Maintains Security & Zero Secrets
   - Secret scanning and validation
   - Security headers and testing
   - Pre-deployment security checklist
   - Related issues: US3 issue

## Additional Features

4. **US4**: Modern Professional Design (P2)
   - Visual design modernization
   - Color scheme and typography updates
   - Related issues: US4 issue

5. **US5**: Performance Optimization (P2)
   - Core Web Vitals > 90
   - Code splitting and optimization
   - Related issues: US5 issue

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T018-T071)

## MVP Scope

- Minimum: US1 + US2 + US3 (P1 complete)
- Enhanced: Add US4 + US5 (full v1.0)

## Status

- Blocked by: Phase 2 ✓
- Related: Phase 8 (Polish), Phase 9 (Deployment)
```

---

## USER STORY ISSUES (5 total)

### US1-001: Display Professional Credentials on Homepage

**Title**: `[US1] Display Professional Credentials on Homepage (P1 - MVP)`

**Labels**: `user-story`, `us1`, `phase-3`, `mvp`, `p1`

**Milestone**: `v1.0 MVP`

**Assignee**: (Assign to developer)

**Body**:
```
As a visitor, I want to immediately see Carlos's professional credentials and understand his role and expertise, so I can quickly assess his experience level.

## Feature Description

Redesign homepage to prominently feature:
- Professional headline (Lead Platform Engineer)
- Key expertise areas
- Quick links to CV and projects
- Responsive layout (mobile first)

## Acceptance Scenarios

1. **Given** a visitor lands on the homepage, **When** they view the above-the-fold content, **Then** they see a compelling overview of professional role and key expertise areas
2. **Given** a visitor wants to download the CV, **When** they look for CV section, **Then** they can easily access and download in professional format
3. **Given** a visitor wants to explore experience, **When** they navigate career section, **Then** they can browse chronological work history
4. **Given** a visitor is on mobile, **When** they access professional info, **Then** content is readable and navigation is clear

## Acceptance Criteria

- [ ] Homepage updated with professional headline
- [ ] CV section created and accessible
- [ ] PDF download working
- [ ] Navigation updated with CV link
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility requirements met (semantic HTML, aria labels)
- [ ] All tests passing

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T018-T028)

## Independent Test

Load homepage → See professional role prominently → Navigate to CV → Download/view full resume → Test on mobile

## Status

- Blocked by: Phase 2 ✓
- Depends on: Nothing (independent)
- Can run parallel with: US2, US3
- Blocks: Nothing (independent)
```

---

### US2-002: Build Projects Portfolio Section

**Title**: `[US2] Build Projects Portfolio Section (P1 - MVP)`

**Labels**: `user-story`, `us2`, `phase-4`, `mvp`, `p1`

**Milestone**: `v1.0 MVP`

**Assignee**: (Assign to developer)

**Body**:
```
As a prospective client or employer, I want to review Carlos's past projects and understand the scope of work, technical challenges, and outcomes delivered.

## Feature Description

Build projects section featuring:
- List of past projects (PlayStation, Novabase, etc.)
- Project detail pages
- Business context and technical challenges
- Outcomes and impact delivered
- Links to source code or deployments
- Responsive grid/list layout
- Project filtering/sorting (optional)

## Acceptance Scenarios

1. **Given** a visitor wants to see past projects, **When** they navigate to portfolio, **Then** they see curated list of significant work
2. **Given** a visitor is viewing a project, **When** they read details, **Then** they understand business context, technical challenges, and outcomes
3. **Given** a visitor wants to link to a project, **When** they click project, **Then** they can share direct link and view code/deployment
4. **Given** a visitor is on mobile, **When** they browse portfolio, **Then** layout adapts and projects remain scannable

## Acceptance Criteria

- [ ] Projects list page created
- [ ] Project detail page created
- [ ] projects-data.json populated with entries
- [ ] Project links sanitized and validated
- [ ] Responsive layout tested
- [ ] Breadcrumb navigation working
- [ ] All tests passing

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T029-T040)

## Independent Test

Navigate to Projects → See project list → Click project → View details and links → Test on mobile

## Status

- Blocked by: Phase 2 ✓
- Depends on: Nothing (independent)
- Can run parallel with: US1, US3
- Blocks: Nothing (independent)
```

---

### US3-003: Implement Security & Zero-Secrets Policy

**Title**: `[US3] Implement Security & Zero-Secrets Policy (P1 - MVP)`

**Labels**: `user-story`, `us3`, `phase-5`, `security`, `mvp`, `p1`

**Milestone**: `v1.0 MVP`

**Assignee**: (Assign to developer)

**Body**:
```
As a visitor and stakeholder, I need confidence that the website is secure, with no secrets exposed in the codebase or deployed assets.

## Feature Description

Implement comprehensive security baseline:
- Security headers (CSP, X-Frame-Options, etc.)
- Input validation and sanitization
- XSS protection
- Secrets detection and prevention
- Pre-commit hooks to block secret commits
- CI/CD security scanning
- Pre-deployment security checklist
- Responsible disclosure documentation

## Acceptance Scenarios

1. **Given** the codebase is checked for secrets, **When** a security scanner runs, **Then** no API keys, tokens, or credentials are found
2. **Given** environment config is needed, **When** build runs, **Then** sensitive config injected at deployment time only
3. **Given** visitor views website source, **When** they inspect assets, **Then** no secrets visible in HTML/CSS/JS
4. **Given** security audit is performed, **When** application tested for OWASP Top 10, **Then** resistant to injection, XSS, CSRF attacks

## Acceptance Criteria

- [ ] Security headers configured
- [ ] XSS prevention utilities working
- [ ] Input validation implemented
- [ ] Secret scanning passing (zero findings)
- [ ] Pre-commit hooks working
- [ ] CI/CD security checks configured
- [ ] Security tests passing
- [ ] OWASP scanning clean
- [ ] Responsible disclosure documentation created

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T041-T050)

## Independent Test

Run secret scanner → Get zero findings → Run OWASP scan → Get clean report → Verify no secrets in deployed assets

## Status

- Blocked by: Phase 2 ✓
- Depends on: Nothing (independent)
- Can run parallel with: US1, US2
- Blocks: Production deployment until passing
```

---

### US4-004: Modernize Visual Design & Styling

**Title**: `[US4] Modernize Visual Design & Styling (P2)`

**Labels**: `user-story`, `us4`, `phase-6`, `design`, `p2`

**Milestone**: `v1.0`

**Assignee**: (Assign to developer)

**Body**:
```
As a visitor, I want the website to look modern and professional, reflecting the caliber of a lead platform engineer.

## Feature Description

Update visual design:
- Contemporary color scheme
- Modern typography
- Component styling with Styled Components
- Modern layouts (CSS Grid, Flexbox)
- Micro-interactions and animations
- Consistent visual system across pages
- Design system documentation

## Acceptance Scenarios

1. **Given** a visitor lands on site, **When** they see homepage, **Then** design appears contemporary and professional
2. **Given** a visitor browses different devices, **When** they view desktop/tablet/mobile, **Then** design responsive and usable
3. **Given** a visitor reads content, **When** they scroll, **Then** clear visual hierarchy and good whitespace

## Acceptance Criteria

- [ ] Color scheme updated
- [ ] Typography modernized
- [ ] Components styled with Styled Components
- [ ] All pages updated to new design
- [ ] Responsive tested across devices
- [ ] Micro-interactions implemented
- [ ] Design system documented
- [ ] Visual regression tests passing

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T053-T060)

## Independent Test

Load website on desktop → Assess modern appearance → Load on mobile → Verify responsive → Check visual hierarchy

## Status

- Blocked by: US1, US2, US3 completion
- Depends on: Foundational components from Phase 2
- Can run parallel with: US5
- Blocks: Polish phase
```

---

### US5-005: Achieve Core Web Vitals > 90

**Title**: `[US5] Achieve Core Web Vitals > 90 (P2)`

**Labels**: `user-story`, `us5`, `phase-7`, `performance`, `p2`

**Milestone**: `v1.0`

**Assignee**: (Assign to developer)

**Body**:
```
As a visitor, I want the website to load quickly and perform smoothly, giving the professional impression expected of a platform engineer.

## Feature Description

Performance optimization:
- Code splitting by route
- Image optimization (WebP, responsive sizes, lazy loading)
- Bundle size reduction and tree-shaking
- Caching strategy
- LCP optimization (< 2.5s broadband, < 4s 4G)
- CLS optimization (< 0.1)
- FID/INP optimization (< 100ms)
- Service worker (optional, offline support)

## Acceptance Scenarios

1. **Given** visitor on fast connection, **When** homepage loads, **Then** fully interactive within 2 seconds
2. **Given** visitor on 4G, **When** homepage loads, **Then** fully interactive within 4 seconds
3. **Given** visitor interacts with UI, **When** they click/scroll, **Then** response immediate (< 100ms)

## Acceptance Criteria

- [ ] LCP < 2.5s (broadband), < 4s (4G)
- [ ] FID/INP < 100ms
- [ ] CLS < 0.1
- [ ] Lighthouse performance > 90
- [ ] Bundle size < 50 KB gzipped
- [ ] Code splitting working
- [ ] Image optimization complete
- [ ] Caching configured
- [ ] Performance budget enforced

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T061-T071)

## Independent Test

Run Lighthouse audit → Score > 90 → Measure Core Web Vitals → All targets met → Test on simulated 4G

## Status

- Blocked by: US1, US2, US3 completion
- Depends on: Foundational components from Phase 2
- Can run parallel with: US4
- Blocks: Polish phase
```

---

## SUPPORTING ISSUES (2 total)

### SUPPORT-001: Phase 8 Polish & Cross-Cutting Concerns

**Title**: `Phase 8: Polish & Cross-Cutting Concerns`

**Labels**: `phase-8`, `feature`

**Milestone**: `v1.0`

**Body**:
```
Final improvements affecting multiple user stories before production deployment.

## Scope

- Accessibility audit with axe tool
- SEO optimization (meta tags, sitemap, robots.txt)
- Comprehensive documentation updates
- Final code review and cleanup
- Security audit before deployment
- Deployment checklist and runbook
- Final testing pass (manual + automated)

## Acceptance Criteria

- [ ] WCAG 2.1 AA compliant (axe audit passing)
- [ ] SEO optimization complete
- [ ] Documentation updated
- [ ] Security audit passing
- [ ] Final testing complete
- [ ] Deployment checklist created

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T072-T079)

## Status

- Blocked by: All user stories (US1-US5) ✓
- Blocks: Phase 9 (Deployment)
```

---

### SUPPORT-002: Phase 9 Deployment & Production Monitoring

**Title**: `Phase 9: Deployment & Production Monitoring`

**Labels**: `phase-9`, `deployment`

**Milestone**: `v1.0`

**Body**:
```
Get website live and setup monitoring for production health.

## Scope

- Setup GitHub Actions CI/CD pipeline
- Automated testing on pull requests
- Automated security scanning
- Automated build and deployment to GitHub Pages
- Setup production monitoring (Core Web Vitals, errors)
- Create post-deployment checklist
- Create maintenance documentation

## Acceptance Criteria

- [ ] GitHub Actions workflow configured
- [ ] Automated testing working
- [ ] Automated security scanning working
- [ ] Deployment to GitHub Pages working
- [ ] Monitoring configured
- [ ] Post-deployment checklist complete
- [ ] Site live and healthy

## Related Tasks

See: `specs/001-modern-portfolio/tasks.md` (T080-T083)

## Status

- Blocked by: Phase 8 ✓
- Blocks: Nothing (final phase)
```

---

## LABELS (Recommended to Create)

```
Priority:
- p1: High priority (MVP critical)
- p2: Medium priority (important, not blocking)

Type:
- epic: Large feature grouping
- user-story: User story implementation
- feature: New feature
- bug: Bug fix
- docs: Documentation

Phase:
- phase-1, phase-2, ..., phase-9

Domain:
- security: Security-related
- design: UI/UX design
- performance: Performance optimization
- accessibility: Accessibility
- testing: Testing

Status:
- mvp: Part of v1.0 MVP
- ready: Ready to start
- blocked: Blocked on dependencies
```

---

## MILESTONES (Recommended to Create)

1. **v1.0 MVP** - Phase 1-5 (Foundation + P1 Stories)
   - Due date: ~2-3 weeks (with parallel work)
   - Includes: Setup, Foundation, US1, US2, US3

2. **v1.0** - All phases complete
   - Due date: ~4-6 weeks total
   - Includes: All phases 1-9

---

## GITHUB PROJECT BOARD

### Create New Project

1. Go to: https://github.com/CarlosDamasio/carlosdamasio.github.io/projects
2. Click "New project"
3. Name: "Modern Portfolio"
4. Description: "Modernize personal portfolio website - Phase tracking and task management"
5. Use "Board" template

### Columns

1. **Backlog** - Issues ready to start
2. **In Progress** - Currently being worked on
3. **In Review** - Code review pending
4. **Testing** - QA testing in progress
5. **Done** - Completed and merged

### Automation

- When issue created → add to Backlog
- When PR created → add to In Review
- When PR merged → move to Done

---

## CREATING THE ISSUES

### Option 1: GitHub CLI (Fastest)

```bash
# Phase 1 epic
gh issue create --title "[EPIC] Phase 1: Setup & Configuration" \
  --body "$(cat <<'EOF'
Initialize project structure and setup tooling.

See: specs/001-modern-portfolio/tasks.md (T001-T007)
EOF
)" \
  --label "epic,phase-1" \
  --milestone "v1.0 MVP"

# Repeat for other issues...
```

### Option 2: GitHub Web UI (Safest)

1. Go to: https://github.com/CarlosDamasio/carlosdamasio.github.io/issues/new
2. Copy title and body from this file
3. Add labels and milestone
4. Click "Create issue"
5. Repeat for each issue

### Option 3: Bulk Import

Some GitHub automation tools can bulk create issues from CSV or YAML.

---

## WORKFLOW AFTER CREATION

1. Create all 10 issues (3 epics + 5 user stories + 2 supporting)
2. Create GitHub Project "Modern Portfolio"
3. Add all issues to project
4. Set up automation
5. Assign team members
6. Start Phase 1 tasks!

---

**Created**: 10 December 2025  
**Status**: Ready to create in GitHub  
**Next**: Execute issue creation using your preferred method above
