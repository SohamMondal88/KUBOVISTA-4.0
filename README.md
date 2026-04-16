# 🌍 KUBOVISTA 4.0

<div align="center">
  <img src="public/icon-192x192.png" alt="KUBOVISTA Logo" width="120" />
  
  **Next-Generation Travel & Tourism Platform**
  
  [![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite)](https://vitejs.dev/)
  [![Firebase](https://img.shields.io/badge/Firebase-10.0-FFCA28?logo=firebase)](https://firebase.google.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](CONTRIBUTING.md)
  
  [Live Demo](https://kubovista.com) · [Documentation](docs/) · [Report Bug](https://github.com/yourusername/kubovista/issues) · [Request Feature](https://github.com/yourusername/kubovista/issues)
</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [📱 PWA Support](#-pwa-support)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

---

## 🌟 Overview

**KUBOVISTA 4.0** is a cutting-edge, full-featured travel and tourism agency platform designed to revolutionize how travelers discover, plan, and book their dream vacations. Built with modern web technologies, it offers an immersive user experience with AI-powered trip planning, real-time booking management, and comprehensive travel solutions.

### 🎯 Core Mission

To provide a seamless, intelligent, and personalized travel booking experience that connects adventurers with unique destinations across India, starting with the hidden gems of North Bengal and Sikkim.

### 🌍 Featured Destinations

| Region | Destinations |
|--------|-------------|
| **Darjeeling Hills** | Lamahatta, Chatakpur, Lepchajagat, Peshok, Sittong |
| **Kalimpong Region** | Lava, Lolegaon, Rishikhola, Kolakham, Ramdhura |
| **Sikkim** | Pelling, Ravangla, Namchi, Ahaldhara |
| **Offbeat Gems** | Bijanbari, Kolbong, Samsu, Pabong |

---

## ✨ Features

### 🎨 **User Experience**
- **Immersive Hero Sections** with video backgrounds and particle effects
- **Dark/Light Mode** with system preference detection
- **Smooth Animations** using Framer Motion and Lottie
- **Parallax Scrolling** and ScrollReveal effects
- **Fully Responsive Design** for all device sizes
- **Skeleton Loaders** for enhanced perceived performance

### 🤖 **AI-Powered Features**
- **AI Trip Planner** - Personalized itinerary generation
- **AI Travel Assistant** - Real-time travel recommendations
- **Smart Budget Planner** - Optimized cost estimation
- **Packing Checklist Generator** - Weather and activity-based suggestions
- **Destination Matchmaker** - Personalized destination discovery

### 🏨 **Core Modules**

#### **Booking System**
- Multi-step booking wizard with progress tracking
- Real-time availability checking
- Dynamic pricing with seasonal adjustments
- Add-on services and special requests
- Group booking capabilities
- QR code e-tickets and WhatsApp sharing

#### **Destination Management**
- Detailed destination pages with comprehensive information
- Interactive maps with points of interest
- Photo galleries and virtual tours
- Best time to visit recommendations
- Local experiences and activities
- Weather forecasts and connectivity info

#### **Package Management**
- Curated travel packages with detailed itineraries
- Customizable package options
- Price comparison tools
- Flash sales and limited-time offers
- Early bird discounts and coupon system

#### **Payment Integration**
- Razorpay payment gateway
- Multiple payment methods (UPI, Cards, NetBanking)
- Crypto payment support (Web3 integration)
- Travel finance options (EMI, Pay Later)
- Invoice generation (PDF)

### 👥 **User Features**
- **User Dashboard** - Booking history, saved items, preferences
- **Wishlist Management** - Save favorite destinations and packages
- **Review System** - Rate and review experiences
- **Gamification** - Earn points, badges, and rewards
- **Rewards Program** - Loyalty points and exclusive benefits
- **Travel Profile** - Preferences and travel history

### 🛡️ **Specialized Travel Categories**
- Honeymoon Packages
- Corporate Travel Solutions
- Student & Educational Tours
- Senior Citizen Tours
- Pet-Friendly Travel
- Accessible Travel
- Sustainable & Eco-Tourism
- Wellness & Yoga Retreats
- Adventure Sports
- Culinary Tours
- Photography Tours
- Volunteer Travel

### 📱 **Mobile & Social Features**
- **PWA Support** - Installable on mobile devices
- **Offline Mode** - Browse content without internet
- **Push Notifications** - Real-time updates and offers
- **Biometric Authentication** - Face ID/Touch ID login
- **Social Sharing** - Share trips on social platforms
- **Community Features** - Travel stories, photo contests

### 🔧 **Admin Dashboard**
- Comprehensive analytics and reporting
- Booking and payment management
- User and vendor management
- Package and destination CMS
- Review moderation
- System settings and configurations

### 🚀 **Advanced Features**
- **Live Travel Data** - Real-time weather, currency rates
- **WebSocket Integration** - Live chat and notifications
- **NFT Travel Memories** - Blockchain-based digital collectibles
- **Virtual Try-On** - AR experiences for travel gear
- **Travel Trivia & Games** - Engaging user interactions
- **Multi-language Support** - Language guide and translations
- **Visa Assistant** - Documentation and requirement checker

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER (React)                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────────┐   │
│  │  Pages  │ │Components│ │  Hooks  │ │    Context      │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                   SERVICE LAYER (TypeScript)                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────────┐   │
│  │   API   │ │   Auth  │ │Payment  │ │      AI         │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                    STATE MANAGEMENT (Zustand)                │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────────┐   │
│  │  Auth   │ │Booking  │ │  Cart   │ │   UI Store      │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                   BACKEND SERVICES (Firebase)                │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────────┐   │
│  │Firestore│ │   Auth  │ │Storage  │ │    Functions    │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Design Patterns
- **Feature-Based Module Structure**
- **Custom Hooks** for reusable logic
- **Context API** for global state
- **Service Layer** for API abstraction
- **Store Pattern** with Zustand
- **Compound Components** for flexibility

---

## 🛠️ Tech Stack

### **Frontend Core**
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2 | UI Framework |
| TypeScript | 5.0 | Type Safety |
| Vite | 4.4 | Build Tool |
| React Router | 6.14 | Routing |

### **State & Data**
| Technology | Version | Purpose |
|------------|---------|---------|
| Zustand | 4.4 | State Management |
| TanStack Query | 5.0 | Data Fetching |
| Firebase | 10.0 | Backend Services |
| WebSockets | - | Real-time Communication |

### **Styling & UI**
| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 3.3 | Utility-first CSS |
| Framer Motion | 10.12 | Animations |
| Lottie | 5.12 | Vector Animations |
| React Icons | 4.10 | Icon Library |

### **Payment & Integration**
| Technology | Purpose |
|------------|---------|
| Razorpay | Payment Gateway |
| Web3.js | Blockchain Integration |
| Google Maps API | Geolocation & Maps |

### **Development Tools**
| Technology | Purpose |
|------------|---------|
| ESLint | Code Linting |
| Prettier | Code Formatting |
| Vitest | Unit Testing |
| Husky | Git Hooks |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher) or **yarn** (v1.22+)
- **Firebase Account** (for backend services)
- **Razorpay Account** (for payments)
- **Git** (v2.x or higher)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/kubovista.git
   cd kubovista
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env.development
   ```
   Edit `.env.development` with your credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   
   VITE_RAZORPAY_KEY_ID=your_razorpay_key
   VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
   VITE_OPENWEATHER_API_KEY=your_weather_api_key
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Visit `http://localhost:5173` to see the application.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run unit tests |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Deploy to Firebase Hosting |
| `npm run backup` | Run database backup script |

---

## 📁 Project Structure

```
KUBOVISTA-4.0/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── auth/           # Authentication components
│   │   ├── booking/        # Booking flow components
│   │   ├── common/         # Shared components
│   │   ├── destinationdetail/ # Destination page components
│   │   ├── home/           # Homepage sections
│   │   ├── layout/         # Layout components
│   │   ├── packages/       # Package-related components
│   │   └── ui/             # Base UI components
│   ├── pages/              # Route pages
│   │   ├── Home.tsx
│   │   ├── Destinations.tsx
│   │   ├── Packages.tsx
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API and service integrations
│   ├── stores/             # Zustand state stores
│   ├── context/            # React Context providers
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── styles/             # Global styles and CSS modules
│   ├── data/               # Static data and configurations
│   └── firebase/           # Firebase configuration
├── public/                 # Static assets
├── docs/                   # Documentation
├── scripts/                # Build and utility scripts
├── docker/                 # Docker configurations
├── .github/                # GitHub workflows and templates
└── ...configuration files
```

---

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password, Google, Phone)
3. Create Firestore Database
4. Enable Storage
5. Deploy Firestore Rules:
   ```bash
   firebase deploy --only firestore:rules
   ```

### Razorpay Integration
1. Create a Razorpay account
2. Get API keys from Dashboard
3. Configure webhook URLs for payment confirmation

### Deployment Environments

| Environment | Purpose | Config File |
|-------------|---------|-------------|
| Development | Local development | `.env.development` |
| Staging | Pre-production testing | `.env.staging` |
| Production | Live deployment | `.env.production` |

---

## 🧪 Testing

### Unit Testing with Vitest
```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Structure
```
src/__tests__/
├── components/     # Component tests
├── hooks/         # Custom hook tests
├── pages/         # Page component tests
├── services/      # Service layer tests
└── utils/         # Utility function tests
```

### E2E Testing (Coming Soon)
- Playwright for end-to-end testing
- Visual regression testing with Percy

---

## 🚢 Deployment

### Firebase Hosting (Recommended)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Docker Deployment

1. **Build Docker Images**
   ```bash
   docker-compose -f docker/docker-compose.prod.yml build
   ```

2. **Run Containers**
   ```bash
   docker-compose -f docker/docker-compose.prod.yml up -d
   ```

### CI/CD Pipeline

GitHub Actions workflows handle:
- **CI** - Linting, Type checking, Unit tests
- **CD** - Automatic deployment to staging
- **Deploy** - Production deployment (manual trigger)

---

## 📱 PWA Support

KUBOVISTA is a Progressive Web App with:
- **Offline Support** - Browse destinations without internet
- **Installable** - Add to home screen on mobile devices
- **Push Notifications** - Real-time booking updates and offers
- **Background Sync** - Sync data when connection restores

### PWA Assets
| Asset | Size | Purpose |
|-------|------|---------|
| icon-192x192.png | 192px | App icon (small) |
| icon-512x512.png | 512px | App icon (large) |
| maskable-icon.png | 512px | Adaptive icon |
| offline.html | - | Offline fallback page |

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow ESLint and Prettier configurations
- Write meaningful commit messages (Conventional Commits)
- Add tests for new features
- Update documentation as needed

### Branch Naming Convention
| Prefix | Purpose |
|--------|---------|
| `feature/` | New features |
| `bugfix/` | Bug fixes |
| `hotfix/` | Critical production fixes |
| `docs/` | Documentation updates |
| `refactor/` | Code refactoring |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

### Official Channels
- **Website**: [kubovista.com](https://kubovista.com)
- **Email**: support@kubovista.com
- **WhatsApp**: +91 XXXXX XXXXX

### Social Media
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white)](https://instagram.com/kubovista)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?logo=facebook&logoColor=white)](https://facebook.com/kubovista)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?logo=twitter&logoColor=white)](https://twitter.com/kubovista)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/company/kubovista)

### Emergency Support
For urgent issues, contact our 24/7 support line: **+91 98765 43210**

---

## 🙏 Acknowledgments

### Special Thanks To
- All our travel partners and local guides
- The amazing communities of North Bengal and Sikkim
- Our dedicated development team
- Early adopters and beta testers

### Open Source Projects
| Project | License | Usage |
|---------|---------|-------|
| React | MIT | Core framework |
| Vite | MIT | Build tool |
| Tailwind CSS | MIT | Styling |
| Firebase | Apache 2.0 | Backend services |
| Framer Motion | MIT | Animations |
| Zustand | MIT | State management |

---

<div align="center">
  <sub>Built with ❤️ by the KUBOVISTA Team | © 2026 All Rights Reserved</sub>
  <br>
  <sub>Explore • Dream • Discover</sub>
</div>
