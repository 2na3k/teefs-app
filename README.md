# TeeFS Project

I vibe code this!!!

TeeFS is a distributed file system that provides familiar interfaces similar to S3 or Google Drive. This web application allows users to access, manage, and share files through an intuitive interface with the power of distributed storage behind it.

## Project Overview

The core concept of TeeFS is to provide easy access to distributed file systems through the familiar format `tfs://{folder_1}/.../file`. This project includes a landing page, login functionality (redirects to 404 for now), and will eventually feature a full file management interface.

## Project Structure

```
teefs-app/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── textarea.tsx
│   │   ├── Contact.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── mode-toggle.tsx
│   │   ├── Navbar.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   └── theme-provider.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Implemented Files
- `src/App.tsx`
- `src/main.tsx`
- `src/index.css`
- `src/pages/Home.tsx`
- `src/pages/NotFound.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Features.tsx`
- `src/components/Pricing.tsx`
- `src/components/Testimonials.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/mode-toggle.tsx`
- `src/components/theme-provider.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/dropdown-menu.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/textarea.tsx`
- `src/types/index.ts`
- `src/lib/utils.ts`

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React with TypeScript
- Vite for bundling
- Tailwind CSS for styling
- shadcn/ui for UI components
- React Router for navigation
- Lucide React for icons

## Future Implementations

- Complete login page with Google authentication
- Main panel with file system interface
- File upload, download, and management functionality
- Implementation of the tfs:// protocol