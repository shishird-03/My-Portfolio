# 🌐 3D Interactive Personal Portfolio

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

An immersive, high-performance **3D Personal Portfolio Web Application** built with **React**, **Three.js**, **React Three Fiber**, and **Tailwind CSS**. Features interactive WebGL 3D models, smooth camera controls, immersive background audio, dynamic pop-up stage cards, interactive timeline, and a functional 3D contact scene powered by **EmailJS**.

---

## 📌 Repository Description (Short)

> **Short Description for GitHub Repo Header:**
> *An interactive, immersive 3D personal portfolio web app built using React 18, Three.js, React Three Fiber, Vite, and Tailwind CSS. Features dynamic 3D scenes, spatial rotation controls, interactive project cards, work experience timeline, and an EmailJS-integrated contact form.*

---

## Table of Contents

- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Directory Structure](#-directory-structure)
- [🚀 Getting Started](#-getting-started)
- [🔑 Environment Variables](#-environment-variables)
- [📦 Production Build & Testing](#-production-build--testing)
- [🌐 Deployment (Vercel)](#-deployment-vercel)
- [👤 Author & Links](#-author--links)
- [📄 License](#-license)

---

## ✨ Key Features

- **🎮 Interactive 3D Canvas & Island Scene**: Explore an interactive 3D floating island model (`GLTF/GLB`) with mouse drag and key navigation (Arrow keys / A, D).
- **✈️ Animated 3D Objects**: Embedded animated 3D assets including a flying Plane, soaring Bird, Fox character, and dynamic Sky backdrop using `@react-three/drei` and `@react-three/fiber`.
- **🔊 Ambient Soundscape**: Integrated background audio toggle with smooth play/pause audio state management.
- **🏷️ Dynamic Stage Info Cards**: Contextual call-to-action overlays (`HomeInfo`) popping up dynamically based on island rotation angle.
- **⏱️ Work Experience Timeline**: Modern vertical timeline component (`react-vertical-timeline-component`) showcasing internship & project experience.
- **📩 Functional 3D Contact Form**: Interactive contact form embedded alongside an animated 3D Fox model with direct email dispatch via **EmailJS**.
- **📱 Fully Responsive Design**: Mobile-first glassmorphism and styled utility layout built with **Tailwind CSS**.
- **⚡ Blazing Fast Build**: Powered by **Vite** for lightning-fast HMR and optimized production bundling.

---

## 🛠️ Tech Stack

### **Core Frontend & Frameworks**
| Technology | Role |
| :--- | :--- |
| **[React 18](https://react.dev/)** | Core UI Library & Component Architecture |
| **[Vite](https://vitejs.dev/)** | Next-Generation Frontend Tooling & Development Server |
| **[React Router DOM v6](https://reactrouter.com/)** | Client-side Single Page Application (SPA) Routing |

### **3D Graphics & Animations**
| Technology | Role |
| :--- | :--- |
| **[Three.js](https://threejs.org/)** | WebGL 3D Engine & Rendering Library |
| **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)** | React renderer for Three.js scene graph |
| **[@react-three/drei](https://github.com/pmndrs/drei)** | Useful helpers and abstractions for React Three Fiber |
| **[@react-spring/three](https://react-spring.dev/)** | Spring-physics based animation library for 3D components |

### **Styling & UI**
| Technology | Role |
| :--- | :--- |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework for modern responsive UI |
| **[PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)** | CSS processing and cross-browser vendor prefixing |
| **[React Vertical Timeline](https://github.com/steve2030/react-vertical-timeline-component)** | Customizable timeline tree layout for experience history |

### **Services & Utilities**
| Technology | Role |
| :--- | :--- |
| **[@emailjs/browser](https://www.emailjs.com/)** | Client-side email dispatch for the contact form |
| **[ESLint](https://eslint.org/)** | Code quality enforcement and linting |

---

## 📂 Directory Structure

```text
PersonalPortfolio/
├── public/                 # Static assets (3D GLTF/GLB models, audio files)
├── src/
│   ├── assets/             # Images, icons, and logo assets
│   │   ├── icons/          # Tech stack & navigation icons
│   │   └── images/         # Company & project images
│   ├── components/         # Reusable UI Components
│   │   ├── Alert.jsx       # Notification feedback toast
│   │   ├── CTA.jsx         # Call to action section
│   │   ├── Footer.jsx      # Social icons & footer info
│   │   ├── HomeInfo.jsx   # Dynamic 3D island info popups
│   │   ├── Loader.jsx      # Canvas loading spinner
│   │   └── Navbar.jsx      # Navigation header bar
│   ├── constants/          # Site data (skills, experience, projects, links)
│   │   └── index.js
│   ├── hooks/              # Custom React hooks (e.g. alert notifications)
│   ├── models/             # React Three Fiber 3D Components
│   │   ├── Bird.jsx        # 3D Bird animation
│   │   ├── Forest.jsx      # 3D Forest environment model
│   │   ├── Fox.jsx         # 3D Fox model with keyframe animations
│   │   ├── Island.jsx      # Main interactive 3D Island GLTF scene
│   │   ├── Plane.jsx       # 3D Plane model
│   │   └── Sky.jsx         # 3D Sky environment sphere
│   ├── pages/              # SPA Route Pages
│   │   ├── About.jsx       # Skills & experience timeline page
│   │   ├── Contact.jsx     # 3D Contact page with EmailJS form
│   │   ├── Home.jsx        # Interactive 3D canvas home scene
│   │   └── Projects.jsx    # Projects showcase page
│   ├── App.jsx             # Main router & app layout entry
│   ├── index.css           # Custom utility classes & Tailwind setup
│   └── main.jsx            # React root DOM renderer
├── .env.example            # Environment variables template
├── index.html              # HTML entry point
├── package.json            # Dependencies & build scripts
├── tailwind.config.js      # Tailwind customization & typography
├── vercel.json             # Vercel SPA deployment rules
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shishird-03/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory by copying `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 🔑 Environment Variables

The contact form requires **EmailJS** credentials to send emails directly from the site.

In your `.env` file:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

> 💡 **Tip:** Obtain your free keys by creating an account on [EmailJS](https://www.emailjs.com/).

---

## 📦 Production Build & Testing

To create an optimized production build:

```bash
npm run build
```

To preview the built app locally:

```bash
npm run preview
```

---

## 🌐 Deployment (Vercel)

This project is optimized for effortless deployment on **Vercel** with full Single Page Application (SPA) routing support (`vercel.json`).

### Step-by-Step Deployment:

1. Push your repository to GitHub (ensure `.env` and `node_modules` are ignored in `.gitignore`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository (`My-Portfolio`).
4. Vercel will auto-detect the configuration:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Under **Environment Variables**, add:
   - `VITE_APP_EMAILJS_SERVICE_ID`
   - `VITE_APP_EMAILJS_TEMPLATE_ID`
   - `VITE_APP_EMAILJS_PUBLIC_KEY`
6. Click **Deploy**.

---

## 👤 Author & Links

**Shishir D**
- **GitHub**: [@shishird-03](https://github.com/shishird-03)
- **LinkedIn**: [Shishir D](https://www.linkedin.com/in/shishir-d-85219a28b/)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
