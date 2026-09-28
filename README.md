# Ember Login Page

A modern login page built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.

## Project Structure

```
ember/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Features

- Modern, responsive design with gradient background
- Card-based layout with subtle shadows
- Form validation styling
- Lucide React icons for visual enhancement
- Fully responsive layout
- Accessible form elements
- Tailwind CSS for styling
- TypeScript for type safety
- Shadcn UI components (Button, Input, Card)

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Design Details

The login page features:
- Clean, modern aesthetic with indigo accent colors
- Centered card layout with subtle shadow
- Email and password input fields with proper labeling
- Prominent sign-in button
- "Don't have an account?" link for navigation
- Responsive design that works on mobile and desktop
- Smooth hover and focus states

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (custom implementation)
- **Icons**: Lucide React
- **Build**: PostCSS with Autoprefixer

## File Descriptions

- `app/page.tsx`: Main login page component
- `app/layout.tsx`: Root layout with metadata and global styles
- `app/globals.css`: Global CSS including Tailwind directives and custom variables
- `components/ui/`: Reusable UI components (Button, Input, Card)
- `lib/utils.ts`: Utility functions for class merging
- `next.config.js`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS plugins configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

## Customization

To modify the design:
- Edit `app/globals.css` for color variables and global styles
- Modify `tailwind.config.js` for theme customization
- Update the content in `app/page.tsx` to change the login form structure
- Adjust the icon in the header by modifying the SVG in `app/page.tsx`