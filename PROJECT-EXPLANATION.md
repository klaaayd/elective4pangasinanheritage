# Project Explanation: Pangasinan Heritage Showcase

## Overview
This project was created entirely from scratch to satisfy the requirements of Activity 1. It is a completely independent Next.js 14 application tailored specifically for highlighting the tourism and heritage of Pangasinan province.

## Key Decisions

### 1. From-Scratch Development
No existing code, components, or CSS from previous projects were reused. The folder structure was generated fresh via `create-next-app`, and all subsequent files were manually authored to fit this exact use case.

### 2. Atomic Design Implementation
The UI architecture is strictly segmented into:
- **Atoms**: Basic, indivisible elements like `Button`, `Badge`, `Heading`, and `Text`.
- **Molecules**: Combinations of atoms like `DestinationCard` and `SearchBar`.
- **Organisms**: Complex sections like `Header`, `Footer`, `Hero`, and `DestinationGrid`.

This provides high reusability and scalability for the design system.

### 3. Custom Pangasinan Design System
The visual identity is entirely bespoke. The color palette was selected to reflect Pangasinan's natural beauty:
- **Blue**: Represents the waters of the Hundred Islands.
- **Green**: Represents the island vegetation and Bued Mangroves.
- **Sand/Yellow**: Represents the beaches of Bolinao and the Tayug Sunflower Maze.
- **Salt (Off-White)**: Represents the famous salt beds of Dasol.

Typography pairs the highly legible `Inter` (for UI) with the classic `Playfair Display` (for headings) to evoke a sense of heritage.

### 4. Technical Stack
Next.js 14 (App Router) was selected over alternatives like Vite/React because of its built-in SSR (Server-Side Rendering) capabilities. For a tourism showcase, SEO (Search Engine Optimization) and fast initial page loads (optimized via React Server Components) are paramount. Tailwind CSS was utilized to rapidly build the custom design system without the overhead of external UI libraries, keeping the bundle size small.

