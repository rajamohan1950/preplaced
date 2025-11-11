# Preplaced.com Clone

A static frontend clone of preplaced.in - a mentorship platform connecting professionals with career mentors.

## Project Structure

```
Preplaced.com/
├── index.html                 # Homepage
├── pages/
│   ├── explore-mentors.html  # Browse mentors page
│   ├── success-stories.html   # Success stories/testimonials
│   ├── about.html             # About us page
│   ├── pricing.html           # Pricing plans
│   ├── contact.html           # Contact form
│   ├── login.html             # Login page
│   ├── signup.html            # Sign up page
│   └── mentor-profile.html    # Individual mentor profile
├── public/
│   ├── css/
│   │   └── styles.css         # Main stylesheet with brand colors
│   └── js/
│       └── main.js            # JavaScript utilities
└── README.md
```

## Features

- **Complete UI/UX Clone**: Matches the original preplaced.in design and navigation
- **Brand Colors**: Uses exact color palette from the original site
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **All Forms**: Login, signup, contact forms with validation
- **Dummy Data**: All pages populated with realistic sample data
- **Navigation**: Complete 8-level deep navigation structure
- **No Backend**: Pure static HTML/CSS/JS - ready for backend integration later

## Brand Colors

- Primary: `#272727` (Dark Gray)
- Secondary: `#5C5C5C` (Medium Gray)
- Accent: `#F65428` (Orange/Red)
- Light Blue: `#D6E0FF`
- Beige: `#EFE4D2`
- Light Purple: `#E4D4FF`
- Very Light Purple: `#F3EEFC`
- Cream: `#FCF5E9`
- Purple: `#6941c6`

## Pages

1. **Homepage** (`index.html`)
   - Hero section
   - Features grid
   - Star mentors showcase
   - Domain categories
   - Success stories preview

2. **Explore Mentors** (`pages/explore-mentors.html`)
   - Filter by domain
   - Mentor cards with profiles
   - Search functionality (UI ready)

3. **Success Stories** (`pages/success-stories.html`)
   - Testimonials from mentees
   - Mentor-mentee connections
   - Real success stories

4. **About** (`pages/about.html`)
   - Mission and vision
   - Company story
   - What we offer

5. **Pricing** (`pages/pricing.html`)
   - Three pricing tiers (Basic, Pro, Premium)
   - Feature comparison
   - FAQ section

6. **Contact** (`pages/contact.html`)
   - Contact form
   - Contact information
   - Social links

7. **Login** (`pages/login.html`)
   - Email/password login
   - Social login options (UI)
   - Forgot password link

8. **Sign Up** (`pages/signup.html`)
   - Registration form
   - Role selection (mentee/mentor)
   - Terms acceptance

9. **Mentor Profile** (`pages/mentor-profile.html`)
   - Mentor details
   - Experience timeline
   - Reviews/testimonials
   - Booking CTA

## Usage

Simply open `index.html` in a web browser to view the site. All pages are linked and navigation works without a server.

For development with live reload, you can use:
- Python: `python3 -m http.server 8000`
- Node.js: `npx serve`
- VS Code: Live Server extension

## Next Steps

1. **Backend Integration**: Connect forms to backend APIs
2. **Authentication**: Implement real login/signup
3. **Dynamic Content**: Replace dummy data with API calls
4. **Customization**: Update colors and branding as needed
5. **Deployment**: Deploy to hosting service (Vercel, Netlify, etc.)

## Notes

- All forms currently show alerts on submission (no backend)
- All data is static/dummy data
- Navigation is fully functional
- Ready for backend integration
- No authentication system (as requested)
- No third-party integrations (as requested)

## Business Model

Same as original preplaced.in:
- 1:1 Long-term mentorship
- Monthly subscription plans
- Mentor-mentee matching
- Career guidance and support
- Job referrals
- Certification programs

