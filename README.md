# CaringIQ Landing Page

A modern, conversion-focused landing page for CaringIQ's AI-powered caregiving platform featuring Cari, the intelligent care companion.

## 🚀 Features

- **Modern Design**: Clean, responsive interface built with Tailwind CSS
- **Hero Section**: Compelling messaging with clear call-to-action
- **Feature Showcase**: Highlights Cari AI assistant capabilities
- **Social Proof**: Testimonials and user stories
- **Waitlist Signup**: Functional form with validation
- **Contact Form**: Direct communication channel
- **Mobile Responsive**: Optimized for all devices
- **Vercel Ready**: Optimized for deployment on Vercel

## 🛠 Tech Stack

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Custom components with Lucide React icons
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel (optimized configuration)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd caringiq-landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000`

## 🏗 Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features showcase
│   │   ├── Testimonials.tsx # Social proof
│   │   ├── WaitlistForm.tsx # Waitlist signup
│   │   ├── ContactForm.tsx  # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── lib/                 # Utility functions
│   │   ├── utils.ts         # General utilities
│   │   └── validations.ts   # Zod schemas
│   └── types/               # TypeScript types
│       └── index.ts         # Type definitions
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

## 🎨 Design System

### Colors
- **Primary**: CaringIQ purple (`caring-600: #d946ef`)
- **Secondary**: Blue accent (`primary-600: #0284c7`)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Consistent card styling
- **Forms**: Validated input fields
- **Navigation**: Responsive header with mobile menu

## 📝 Form Validation

Both forms use Zod schemas for validation:

### Waitlist Form
- First name (min 2 characters)
- Last name (min 2 characters)
- Email (valid email format)
- Care role (required selection)
- Urgency level (required selection)

### Contact Form
- Name (min 2 characters)
- Email (valid email format)
- Reason for contact (required selection)
- Message (optional)

## 🚀 Deployment

### Vercel Deployment

This project is optimized for Vercel deployment:

1. **Connect to Vercel**:
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js and deploy

2. **Environment Variables** (if needed):
   ```env
   NEXT_PUBLIC_SITE_URL=your-domain.vercel.app
   ```

3. **Custom Domain**:
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.ts` includes:
- CaringIQ brand colors
- Custom animations
- Responsive breakpoints

### Next.js
Configuration in `next.config.js` includes:
- App directory enabled
- Image optimization
- Environment variables

### Vercel
Configuration in `vercel.json` includes:
- Build settings
- Route handling
- Environment configuration

## 📱 Responsive Design

The landing page is fully responsive with:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Optimized typography scaling

## 🎯 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Optimized for all metrics
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to CaringIQ.

## 🆘 Support

For support, email hello@caringiq.com or create an issue in this repository.

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Form validation with React Hook Form and Zod
- Deployed on Vercel 