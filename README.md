# HelloAI Assessment – UI Developer (React.js)

## Overview
This project is a modern, static web app built with React (using Next.js for routing and structure) and Tailwind CSS, designed to reflect the UI quality expected from today's AI product interfaces. It was created as part of a UI Developer Assessment.

---

## Assessment Requirements & Implementation

### 1. Landing Page
- **Modern, minimalistic hero section** with a clear call-to-action ("Get Started").
- Clean layout inspired by OpenAI/Notion.
- Button routes to the Dashboard.

### 2. Dashboard Page
- **Responsive layout** with a sidebar for navigation.
- **Metric cards** display example stats (revenue, users, etc.).
- **Charts**: Includes bar, line, and doughnut charts (using Chart.js via react-chartjs-2).
- **Modern styling**: Uses Tailwind CSS for a flat, minimal, and visually appealing look. Color palette and gradients are inspired by leading AI products.
- **Recent activity** section with avatars and subtle hover effects.

### 3. Chat Page
- **ChatGPT-like interface**: Scrollable chat history, fixed input bar, and mock user/assistant messages.
- **Subtle animations**: Fade-in for messages, smooth scroll to bottom, and animated typing indicator.
- **Sidebar** for chat history and new chat creation.
- **Responsive**: Works well on mobile and desktop.

---

## Tech Stack
- **React.js** (with Next.js app directory for routing)
- **Tailwind CSS** for styling
- **Chart.js** (via react-chartjs-2) for charts
- **Lucide React** for icons

---

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

---

## Code Structure
- All main code is in [`/src/app`](./src/app)
  - `page.tsx` – Landing page
  - `dashboard/page.tsx` – Dashboard
  - `chat/page.tsx` – Chat interface

---

## Design Choices
- **Modern, minimal UI**: Inspired by OpenAI, Notion, and Linear.
- **Consistent color palette**: Blues and purples for a tech-forward, AI feel.
- **Flat minimalism**: Clean cards, soft gradients, and clear typography.
- **Responsiveness**: Layouts adapt to all screen sizes.
- **Subtle interactivity**: Animations for chat, hover effects, and smooth transitions.

---

## Assessment Checklist
- [x] Landing page with hero and CTA
- [x] Dashboard with metrics, charts, and navigation
- [x] Chat page mimicking ChatGPT
- [x] Modern, responsive, and accessible UI
- [x] Code organized and readable

---

## Contact
If you have any questions or concerns, feel free to reach out!

---


