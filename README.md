# MASLD/MASH Learning Center

A modern, password-protected educational website showcasing MASLD/MASH research, statistics, and educational activities. Built with Next.js and designed with a sleek, professional interface.

## Features

- **Password Protection**: Secure access with environment-based authentication
- **Modern Design**: Glassmorphism effects, animated gradients, and smooth transitions
- **Responsive Layout**: Optimized for all device sizes
- **Educational Content**: 
  - MASLD/MASH statistics with animated counters and references
  - Educational activities with external links to ReachMD content
  - Curated research resources from PubMed
  - Video introduction section
- **Professional Branding**: Updated ReachMD logo integration with GLC branding and consistent theming

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file with: `SITE_PASSWORD=mash123`
4. Run the development server: `npm run dev`
5. Visit `http://localhost:3000` and enter the password to access the site

## Technologies Used

- **Frontend**: React with Next.js 14 App Router
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Authentication**: Custom password protection with environment variables

## Deployment

This project is ready for deployment on Vercel. Make sure to add the `SITE_PASSWORD` environment variable in your Vercel project settings.

## Environment Variables

- `SITE_PASSWORD` - The password required to access the website