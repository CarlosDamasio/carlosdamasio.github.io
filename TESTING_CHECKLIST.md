# 🧪 MVP Testing Checklist

**Start Date**: 10 December 2025  
**Dev Server**: http://localhost:3000  
**Branch**: `001-modern-portfolio`

---

## Pre-Testing Setup

- [ ] Dev server running: `npm start`
- [ ] Open browser to http://localhost:3000
- [ ] Clear browser cache (Cmd+Shift+Delete)
- [ ] Open DevTools (F12) to check for errors

---

## Homepage Testing (T020)

### Visual Elements
- [ ] "Lead Platform Engineer" headline visible in large text
- [ ] Tagline: "Building scalable infrastructure..." displays
- [ ] Professional summary text is readable
- [ ] Key expertise badges displayed (Go, Python, JavaScript, etc.)
- [ ] Profile image loads correctly
- [ ] Four CTA buttons visible (View CV, See Projects, LinkedIn, GitHub)

### Career Highlights Section
- [ ] "Career Highlights" heading visible
- [ ] PlayStation experience card shows:
  - [ ] Job title
  - [ ] Company and location
  - [ ] Years (2021-2023)
  - [ ] Description text
- [ ] Novabase experience card shows:
  - [ ] Job title
  - [ ] Company and location
  - [ ] Years
  - [ ] Description text

### About Section
- [ ] "About This Site" heading visible
- [ ] About text displays correctly

### Functionality
- [ ] View CV button links to /CV page
- [ ] See Projects button links to /Projects page
- [ ] LinkedIn button opens in new tab
- [ ] GitHub button opens in new tab
- [ ] No console errors (check DevTools)

### Responsive Design
- [ ] Mobile (320px): 
  - [ ] Single column layout
  - [ ] Image displays below text
  - [ ] All buttons readable
  - [ ] Text is not cut off
- [ ] Tablet (768px):
  - [ ] Two-column layout works
  - [ ] Image positioned correctly
  - [ ] Buttons visible
- [ ] Desktop (1920px):
  - [ ] Professional layout
  - [ ] Image size appropriate
  - [ ] Spacing looks good

---

## CV Page Testing (T021)

### Page Load
- [ ] CV page loads without errors
- [ ] Page title "Curriculum Vitae" visible
- [ ] Subtitle: "Professional Background & Expertise" shows

### Download Button
- [ ] Download button visible in top right
- [ ] Button is clickable (shows message about feature)

### Professional Summary
- [ ] Summary section visible
- [ ] Text from cv-data.json displays correctly

### Work Experience
- [ ] "Work Experience" heading visible
- [ ] PlayStation entry shows:
  - [ ] Job title: "Senior Platform Engineer"
  - [ ] Company: "PlayStation"
  - [ ] Location: "San Francisco, CA"
  - [ ] Years: "2021 - 2023"
  - [ ] Description text
  - [ ] Responsibilities listed
  - [ ] Achievements listed
- [ ] Novabase entry shows:
  - [ ] All above fields populated
  - [ ] Years: "2019 - 2020"

### Education
- [ ] "Education" section visible
- [ ] Education entry shows:
  - [ ] Degree: "Bachelor's in Computer Science"
  - [ ] Institution name
  - [ ] Graduation date
  - [ ] Description

### Skills Section
- [ ] "Skills & Expertise" heading visible
- [ ] "Programming Languages" subsection shows badges:
  - [ ] Go, Python, JavaScript/TypeScript, Bash, SQL
- [ ] "Cloud Platforms & Infrastructure" shows:
  - [ ] Kubernetes, AWS, GCP, Docker
- [ ] "Tools & Technologies" shows:
  - [ ] Terraform, Ansible, Jenkins, etc. (multiple items)
- [ ] "Professional Competencies" shows:
  - [ ] Technical Leadership, Mentoring, etc.

### Certifications
- [ ] "Certifications" section visible
- [ ] CKA certification shows:
  - [ ] Name: "Certified Kubernetes Administrator"
  - [ ] Issuer: "CNCF"
  - [ ] Issued date
  - [ ] Expiry date (color-coded based on status)
  - [ ] Credential ID

### Languages
- [ ] "Languages" section visible
- [ ] English: Native
- [ ] Portuguese: Native

### Contact Section
- [ ] Contact section visible at bottom
- [ ] Email button links to mailto:
- [ ] LinkedIn button opens in new tab
- [ ] GitHub button opens in new tab
- [ ] Website button opens in new tab

### Responsive Design
- [ ] Mobile: Single column, readable text
- [ ] Tablet: Good layout, no overflow
- [ ] Desktop: Professional presentation

### Functionality
- [ ] All links work correctly
- [ ] No console errors
- [ ] Images (if any) load properly

---

## Projects Page Testing (T032)

### Page Load
- [ ] Projects page loads without errors
- [ ] Page title "Projects & Portfolio" visible
- [ ] Subtitle visible

### Projects Grid (if populated)
- [ ] Project cards display in grid layout
- [ ] Each card shows:
  - [ ] Project image (or placeholder)
  - [ ] Project title
  - [ ] Short description
  - [ ] Company name
  - [ ] Technologies listed as tags

### Work Achievements Section
- [ ] "Key Work Achievements" heading visible
- [ ] Introduction text displays

### PlayStation Section
- [ ] "PlayStation - Senior Platform Engineer" heading
- [ ] Three achievement cards visible:
  - [ ] Microservices Infrastructure
  - [ ] CI/CD Pipeline Optimization
  - [ ] Team Leadership & Engineering Culture
- [ ] Each card shows:
  - [ ] Achievement title
  - [ ] Dates/timeframe
  - [ ] Description text
  - [ ] Technology badges

### Novabase Section
- [ ] "Novabase - Platform Engineer" heading
- [ ] Three achievement cards visible:
  - [ ] CI/CD Pipeline Design
  - [ ] Monitoring & Observability
  - [ ] Operations Automation
- [ ] Same card structure as PlayStation

### Technologies Summary
- [ ] "Technologies Demonstrated" section visible
- [ ] Four subsections with tech stacks:
  - [ ] Cloud & Infrastructure
  - [ ] DevOps & Automation
  - [ ] Programming Languages
  - [ ] Monitoring & Observability
- [ ] All technologies display as badges

### Call to Action
- [ ] "Interested in Collaborating?" heading
- [ ] Three buttons visible:
  - [ ] Email button
  - [ ] LinkedIn button
  - [ ] GitHub button
- [ ] All buttons functional

### Responsive Design
- [ ] Mobile: Single column, readable
- [ ] Tablet: Two-column where appropriate
- [ ] Desktop: Professional layout

### Functionality
- [ ] All links functional
- [ ] No console errors
- [ ] No broken links

---

## Navigation Testing

### GlobalBar
- [ ] Logo/home link visible
- [ ] CV navigation link visible
- [ ] Projects navigation link visible
- [ ] CV download icon visible
- [ ] GitHub icon/link visible
- [ ] LinkedIn icon/link visible

### DynamicSideBar (Desktop only)
- [ ] Home link visible
- [ ] About link visible
- [ ] Professional section shows:
  - [ ] CV link
  - [ ] Projects link
- [ ] Career section shows:
  - [ ] PlayStation (with 2021)
  - [ ] Novabase (with 2019)
  - [ ] Education
- [ ] Extra section shows:
  - [ ] CarlosDamasio link

### Navigation Links
- [ ] CV link in GlobalBar → CV page (/CV)
- [ ] CV link in sidebar → CV page (/CV)
- [ ] Projects link in GlobalBar → Projects page (/Projects)
- [ ] Projects link in sidebar → Projects page (/Projects)
- [ ] Home link → Home page (/)
- [ ] About link → About page
- [ ] Career links → respective career pages

---

## Cross-Browser Testing

### Chrome/Brave
- [ ] All pages load
- [ ] All styles render correctly
- [ ] Responsive design works
- [ ] No console errors

### Firefox
- [ ] All pages load
- [ ] All styles render correctly
- [ ] Responsive design works
- [ ] No console errors

### Safari
- [ ] All pages load
- [ ] All styles render correctly
- [ ] Responsive design works
- [ ] No console errors

---

## Mobile Testing

### iPhone/Small Device (320px)
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] Images are visible
- [ ] No horizontal scrolling
- [ ] Navigation works

### iPad/Tablet (768px)
- [ ] Layout is appropriate
- [ ] Images visible
- [ ] All elements accessible
- [ ] Buttons work

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Can navigate using Tab key
- [ ] Can click buttons with Enter/Space
- [ ] Focus states are visible

### Semantic HTML
- [ ] Headings are properly structured (h1, h2, h3)
- [ ] Links are actual `<a>` tags
- [ ] Buttons are actual `<button>` tags

### ARIA Labels
- [ ] Links have descriptive text
- [ ] Buttons have clear labels
- [ ] Images have alt text (if applicable)

---

## Performance Check (DevTools)

### Network Tab
- [ ] No 404 errors
- [ ] Images load quickly
- [ ] All resources load (CSS, JS)

### Console Tab
- [ ] No JavaScript errors
- [ ] No warnings about missing props
- [ ] No security warnings

### Lighthouse (Optional)
- [ ] Performance > 80
- [ ] Accessibility > 80
- [ ] Best Practices > 80
- [ ] SEO > 80

---

## Data Validation

### CV Data
- [ ] All cv-data.json fields display correctly
- [ ] No undefined/null values shown
- [ ] Dates format correctly
- [ ] All arrays (skills, etc.) display

### Projects Data
- [ ] projects-data.json integrated (if populated)
- [ ] Technology tags display
- [ ] Project information shows clearly

---

## Security Check

### Links & Validation
- [ ] External links (LinkedIn, GitHub) use https
- [ ] No console security warnings
- [ ] Links open in new tabs with rel="noopener noreferrer"

### Data Display
- [ ] No hardcoded API keys visible
- [ ] No sensitive data exposed
- [ ] No secrets in console

---

## Final Checklist

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Responsive design tested on 3+ screen sizes
- [ ] All links functional
- [ ] No console errors/warnings
- [ ] CV data displays correctly
- [ ] Projects achievements visible
- [ ] Contact information accessible
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Mobile tested
- [ ] Performance acceptable
- [ ] No security issues

---

## Known Issues (Track Here)

### Issues Found
1. [ ] Issue description | Severity | Fixed: Y/N
2. [ ] Issue description | Severity | Fixed: Y/N
3. [ ] Issue description | Severity | Fixed: Y/N

---

## Sign-Off

**Tester**: _________________  
**Date**: _________________  
**Status**: ☐ Ready for Production  ☐ Need Fixes

**Notes**: 

---

## After Testing

If all tests pass:
1. [ ] Push to GitHub
2. [ ] Create Pull Request
3. [ ] Deploy to production (if applicable)
4. [ ] Announce launch

If issues found:
1. [ ] Log issues above
2. [ ] Fix issues
3. [ ] Re-test
4. [ ] Repeat until all tests pass
