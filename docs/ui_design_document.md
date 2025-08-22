# User Interface Design Document  

## Layout Structure  
- **Landing Section**:  
  - Centered name, short tagline, degree.  
  - Simple background, one accent color.  
- **Navigation**:  
  - Sticky top bar with 5 sections: Projects, Internships, Class Projects, Awards, Contact.  
- **Main Sections**:  
  1. **Projects (Thesis + Campaigns)**: Grid of cards (image/logo + title + summary + “read more” link).  
  2. **Internship Experience**: Two-column cards with company logos, responsibilities, and document links.  
  3. **Projects in Class**: Grid cards with thumbnails, each expanding for more detail.  
  4. **Awards**: List format with optional badges/icons, expandable details.  
  5. **Education & Skills**: Vertical timeline for education; icon/text list for skills.  
  6. **Contact**: Email, LinkedIn, and phone number displayed with recognizable icons.  

---

## Core Components  
- **Hero Section**: Name, short intro, and CTA (scroll to Projects).  
- **Card Component**: Image/logo, title, short description, “read more” link.  
- **Expandable Detail Modal**: Opens when user clicks on project/internship for full description + external link.  
- **List Component**: Awards and skills in structured lists.  
- **Timeline Component**: Education milestones.  
- **Contact Section**: Icons linking to email, LinkedIn, phone.  

---

## Interaction Patterns  
- **Navigation**: Sticky top bar, smooth scroll to sections.  
- **Hover Effects**: Light shadow or scale effect on cards.  
- **Expandable Content**: Clicking cards opens modal with project details.  
- **External Links**: Open in new tab for PDF/Google Drive content.  
- **Responsiveness**: Grid collapses to single-column on mobile.  

---

## Visual Design Elements & Color Scheme  
- **Primary Color**: Dark navy (#1E2A38) for corporate feel.  
- **Accent Color**: Emerald green (#2E7D60) for highlights/links.  
- **Background**: White (#FFFFFF) for clarity.  
- **Cards**: Subtle gray border with soft shadow.  
- **Icons**: Minimal line icons (LinkedIn, Email, Award badges).  

---

## Mobile, Web App, Desktop Considerations  
- **Mobile**:  
  - Grid collapses into stacked cards.  
  - Navigation becomes hamburger menu.  
- **Web/Desktop**:  
  - Grid with 2–3 columns for projects.  
  - Hover states visible.  
- **Tablet**:  
  - Two-column layout maintained.  

---

## Typography  
- **Headings**: Sans-serif, bold (e.g., Inter or Poppins).  
- **Body Text**: Clean sans-serif, medium weight.  
- **Hierarchy**:  
  - H1 = Portfolio Owner’s Name.  
  - H2 = Section Titles.  
  - H3 = Card Titles.  

---

## Accessibility  
- **Color Contrast**: All text meets WCAG AA contrast ratio.  
- **Keyboard Navigation**: Cards and modals accessible via Tab/Enter.  
- **Alt Text**: Required for all project images/thumbnails.  
- **Font Size**: Minimum 16px body, scalable on mobile.  
- **ARIA Labels**: For navigation and interactive components.  
