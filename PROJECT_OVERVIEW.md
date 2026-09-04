# Aurevia International School | Digital Portal

A high-end, responsive web platform designed for **Aurevia International School**, located in Narpoli, Bhiwandi. This project reflects a sophisticated, trustworthy, and elite educational brand through a modern tech stack and "Oxford Academic" design philosophy.

---

## ðŸ« School Profile
- **Institution:** Aurevia International School (often referred to as BPS in UI components)
- **Principal:** Ms. Shifa Ansari (M.Phil, Mumbai University)
- **Levels:** Kindergarten (Jr. & Sr. KG) to Secondary (1st - 10th Standard)
- **Policy:** Exclusive Single-Division Learning
- **Address:** Sitara Ashiyana, 855, Nagar, Dargah Rd, Narpoli, Bhiwandi, Maharashtra 421305
- **Legacy:** Established in 1995, maintaining 30+ years of academic excellence.
- **Achievements:** 100% Board Merit, Focused Urban Academy, Single-Division Sessions.

---

## ðŸŽ¨ Brand Identity & UI/UX
The portal follows a **Boutique Educational Branding** strategy:
- **Tone:** Sophisticated, Trustworthy, Elite, Traditional yet Innovative.
- **Color Palette:** 
  - `Deep Navy (#0A0A0A / #0B1D3A)` - Primary Authority
  - `Liquid Gold (#D4AF37 / #C9A646)` - Accent & Heritage Highlights
  - `Brand White (#FFFFFF)` - Clean, modern background
- **Typography:**
  - **Headlines:** `Playfair Display` (High-contrast Serif for prestige)
  - **Technical Stats:** `Monospace` (Wide-tracked for authority)
  - **Body:** `Montserrat` (Clean, wide-tracked Sans-serif for readability)

---

## ðŸš€ Technical Stack
- **Framework:** [React 18](https://reactjs.org/)
- **Routing:** [React Router Dom v6](https://reactrouter.com/) (Multi-page architecture)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Cinematic reveals & scroll effects)
- **Iconography:** [Lucide React](https://lucide.dev/) (Minimalist SVG icons)

---

## âœ¨ Key Features

### 1. Oxford-Style Hero Section
- **Immersive Experience:** Full-height hero with high-contrast typography and cinematic "reveal" animations.
- **Verified Achievements:** Real-time counters for Board Merit (100%), Urban Academy focus, and Exclusive Single-Division Sessions.
- **Interactive Widgets:** Glassmorphic trust badges (A++ Accreditation) and floating elite community elements.

### 2. Academic Excellence & Toppers
- **Academic Pillars:** Grid-based presentation of "Global Perspective", "Character Leadership", and "Innovation Focus".
- **Toppers Showcase:** Dedicated gallery highlighting top academic performers and their achievements.
- **Exclusive Pedagogy:** Standardized split shifts (Secondary: 7:30 AM | Primary: 12:30 PM) ensuring personalized single-division instruction.

### 3. Verified Infrastructure
- **Modern Facilities:** Specialized 3-card structure showcasing Computer Labs (Technical Excellence), AV Room (Multimedia Learning), and Playground (Physical Education).
- **Institutional Safety:** 24/7 AI-enhanced CCTV monitoring, gated access, and cloud-based attendance.

### 4. Dual-Layered Notice Board
- **Home Preview:** A high-level summary of urgent announcements and upcoming events.
- **Digital Gazette:** A standalone detailed notice board with categorized updates and historical archives.

### 5. Multi-Step Admission Protocol
- **The Journey:** Structured path from Initial Inquiry â†’ Interaction â†’ Documentation â†’ Final Enrollment.
- **Inquiry Tracker (Demo Mode):** Refactored digital inquiry gateway with local storage persistence and unique tracking ID generation (`AIS-2026-XXXX`).
- **Confirmation UX:** Premium glassmorphic success modal confirming application receipt for the 2026-27 session.

### 6. Interactive Demo & Admin Controls
- **Emergency Alert System:** A global, marquee-style alert banner in `MainLayout.jsx` for simulating critical administrative announcements (e.g., weather alerts).
- **Development Toggle:** A hidden floating control for presentation-ready state toggling of institutional alerts.
- **Dynamic Curriculum Filter:** Segmented tab interface in `Academics.jsx` for real-time filtering of Pre-Primary, Primary, and Secondary grade details.

### 7. Cinematic Performance & UX
- **Kinetic Smooth Scrolling:** Globally applied smooth-scrolling engine for weighted, fluid vertical navigation.
- **Seamless Route Transit:** React Router scroll restoration with instant viewport reset and global Framer Motion `<AnimatePresence>` for cross-fade page shifts.
- **Refined Navigation Geometry:** Floating pill navbar with fixed central positioning (`top-6 left-1/2`), enhanced `backdrop-blur`, and adaptive bounding shadows.

---

## ðŸ“‚ Project Structure
```text
Aurevia/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ assets/          # High-resolution branding & photography
â”‚   â””â”€â”€ components/     
â”‚       â”œâ”€â”€ AcademicPillars.jsx  # Core educational philosophies
â”‚       â”œâ”€â”€ NoticeBoard.jsx      # Interactive preview for Home page
â”‚       â”œâ”€â”€ Testimonials.jsx     # Parent & student feedback
â”‚       â””â”€â”€ Toppers.jsx          # Academic achievers gallery
â”œâ”€â”€ App.jsx             # React Router v6 configuration & ScrollToTop logic
â”œâ”€â”€ Home.jsx            # Multi-section landing page with Hero & Facility highlights
â”œâ”€â”€ Academics.jsx       # Curriculum framework with Dynamic Tab Filtering
â”œâ”€â”€ Admissions.jsx      # Enrollment protocol & Inquiry Tracker with Persistence
â”œâ”€â”€ Infrastructure.jsx  # Verified facilities gallery & security protocols
â”œâ”€â”€ Facilities.jsx      # Detailed facilities showcase (Labs, AV Room, Playground)
â”œâ”€â”€ NoticeBoard.jsx     # Standalone "Digital Gazette" page
â”œâ”€â”€ Contact.jsx         # Communication hub & location mapping
â”œâ”€â”€ MainLayout.jsx      # Shared layout with Global Alert System & Demo Controls
â”œâ”€â”€ Navbar.jsx          # Premium navigation with magnetic hover effects
â”œâ”€â”€ Footer.jsx          # Detailed site map & split-shift timings
â”œâ”€â”€ tailwind.config.js  # Custom "Boutique Academic" theme configuration
â””â”€â”€ index.css           # Global styles & custom Framer Motion variants
```


---

## ðŸ› ï¸ Local Setup & Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## ðŸ“ Developer Notes
- **Whitespace:** Prioritize generous padding (Oxford style) to maintain the luxury aesthetic.
- **Imagery:** Use high-resolution, grayscale-filtered photography for a consistent prestige look.
- **Routing:** All new pages should be added to the `Routes` component in `App.jsx`.

---
*Built with excellence for Aurevia International School.*
