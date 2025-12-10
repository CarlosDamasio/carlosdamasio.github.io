# GitHub Issues & Project Setup Guide

**Project**: Modern Portfolio Website (001-modern-portfolio)
**Repository**: CarlosDamasio/carlosdamasio.github.io
**Branch**: `001-modern-portfolio`

## How to Create GitHub Issues

### Option 1: Manual UI (GitHub Web)

Go to: https://github.com/CarlosDamasio/carlosdamasio.github.io/issues/new

### Option 2: Using GitHub CLI

```bash
# Install GitHub CLI if needed
# brew install gh

# Create an issue
gh issue create --title "Phase 1: Setup & Configuration" \
  --body "Initialize project structure and setup tooling" \
  --label "feature,phase-1" \
  --assignee @me

# Create with milestones/projects
gh issue create --title "Phase 1: Setup" \
  --body "See specs/001-modern-portfolio/tasks.md" \
  --project "Modern Portfolio" \
  --milestone "v1.0"
```

## Recommended GitHub Issues Structure

### Epics (Meta Issues)

**Epic 1**: Modern Portfolio Website - Phase 1 Setup
```
Title: [EPIC] Phase 1: Setup & Configuration
Labels: epic, phase-1, feature
Description: Initialize project structure, setup security utilities, create data models
See: specs/001-modern-portfolio/tasks.md T001-T007
```

**Epic 2**: Modern Portfolio Website - Phase 2 Foundation
```
Title: [EPIC] Phase 2: Security & Infrastructure Foundation
Labels: epic, phase-2, feature, security
Description: Core security, data models, reusable components
Blocks: All user story implementation
See: specs/001-modern-portfolio/tasks.md T008-T017
```

**Epic 3**: Modern Portfolio Website - User Stories (P1)
```
Title: [EPIC] Phase 3-5: User Stories (P1) - MVP
Labels: epic, phase-3-5, feature, mvp
Description: US1-US3 implementation (Credentials, Portfolio, Security)
See: specs/001-modern-portfolio/tasks.md T018-T050
```

### Feature/Story Issues

**US1**: Visitor Discovers Professional Credentials
```
Title: US1: Display Professional Credentials on Homepage
Labels: user-story, phase-3, mvp, p1
Milestone: v1.0 MVP
Description:
- [ ] T020: Update homepage with professional headline
- [ ] T021: Create CV page
- [ ] T022: Create cv-data.json structure
- [ ] T023: Add PDF download functionality
- [ ] T024-T028: Navigation, SEO, performance

See: specs/001-modern-portfolio/spec.md (User Story 1)
```

**US2**: Prospect Reviews Past Projects
```
Title: US2: Build Projects Portfolio Section
Labels: user-story, phase-4, mvp, p1
Milestone: v1.0 MVP
Description:
- [ ] T032: Create Projects list page
- [ ] T033: Create Project detail page
- [ ] T034: Create projects-data.json
- [ ] T035-T040: Images, navigation, validation, sharing

See: specs/001-modern-portfolio/spec.md (User Story 2)
```

**US3**: Website Security & Zero Secrets
```
Title: US3: Implement Security & Zero-Secrets Policy
Labels: user-story, phase-5, security, p1
Milestone: v1.0 MVP
Description:
- [ ] T041-T043: Security testing and pre-commit hooks
- [ ] T044-T050: Headers, validation, secret detection, documentation

See: specs/001-modern-portfolio/spec.md (User Story 3)
```

**US4**: Modern Professional Design
```
Title: US4: Modernize Visual Design & Styling
Labels: user-story, phase-6, design, p2
Milestone: v1.0
Description:
- [ ] T053-T060: Colors, typography, component updates, testing

See: specs/001-modern-portfolio/spec.md (User Story 4)
```

**US5**: Performance Optimization
```
Title: US5: Achieve Core Web Vitals > 90
Labels: user-story, phase-7, performance, p2
Milestone: v1.0
Description:
- [ ] T061-T071: Performance benchmarking, code splitting, optimization

See: specs/001-modern-portfolio/spec.md (User Story 5)
```

### Supporting Issues

```
Title: Phase 8: Polish & Cross-Cutting Concerns
Labels: phase-8, feature
Description: Accessibility audit, SEO, documentation, final testing
See: specs/001-modern-portfolio/tasks.md T072-T079

---

Title: Phase 9: Deployment & Production Monitoring
Labels: phase-9, deployment
Description: CI/CD setup, monitoring, documentation
See: specs/001-modern-portfolio/tasks.md T080-T083
```

## GitHub Project Board Setup

### Columns
1. **Backlog** - Tasks ready to be started
2. **In Progress** - Currently being worked on
3. **In Review** - Code review pending
4. **Testing** - QA/testing in progress
5. **Done** - Completed and merged

### Automation

```yaml
# When issue created with label "user-story" → add to "Backlog"
# When PR references issue → move to "In Review"
# When PR merged → move to "Done"
```

### Views

**By Priority**: Filter by labels P1, P2, P3
**By Phase**: Filter by phase-1, phase-2, etc.
**By Status**: By column (Backlog, In Progress, etc.)

## Recommended Labels

```
# Priority
- p1: High priority (MVP critical)
- p2: Medium priority (important, not blocking)
- p3: Low priority (nice to have)

# Type
- feature: New feature
- epic: Large feature grouping
- user-story: User story from spec
- bug: Bug fix
- docs: Documentation
- security: Security-related
- performance: Performance optimization

# Phase
- phase-1: Setup & Configuration
- phase-2: Foundation & Infrastructure
- phase-3: US1 Implementation
- phase-4: US2 Implementation
- phase-5: US3 Implementation
- phase-6: US4 Implementation
- phase-7: US5 Implementation
- phase-8: Polish & Polish
- phase-9: Deployment
- deployment: Deployment tasks

# Status
- mvp: Part of v1.0 MVP
- ready: Ready to start implementation

# Domain
- security: Security-related
- design: UI/UX design
- performance: Performance
- accessibility: Accessibility
- testing: Testing
```

## Milestones

```
v1.0 MVP (P1 User Stories + Foundation)
├── Phase 1: Setup (T001-T007)
├── Phase 2: Foundation (T008-T017)
├── Phase 3: US1 Credentials (T018-T028)
├── Phase 4: US2 Portfolio (T029-T040)
└── Phase 5: US3 Security (T041-T050)

v1.1 Polish & Performance
├── Phase 6: US4 Design (T053-T060)
├── Phase 7: US5 Performance (T061-T071)
├── Phase 8: Polish (T072-T079)
└── Phase 9: Deployment (T080-T083)
```

## Quick Links

- **Spec**: `/specs/001-modern-portfolio/spec.md`
- **Plan**: `/specs/001-modern-portfolio/plan.md`
- **Tasks**: `/specs/001-modern-portfolio/tasks.md`
- **Checklist**: `/specs/001-modern-portfolio/checklists/requirements.md`

## Next Steps

1. Create the epic and story issues using GitHub UI or CLI
2. Create GitHub Project board and add issues
3. Set up automation rules
4. Assign team members to stories
5. Start with Phase 1 tasks

---

**Created**: 10 December 2025
**Status**: Ready for issue creation
