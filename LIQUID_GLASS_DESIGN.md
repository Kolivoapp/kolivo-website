# KOLIVO™ Liquid Glass Design System

## Design Inspiration
- Apple iOS 26 Liquid Glass
- Reflect.app dark mode with glassmorphism
- Adobe Creative Cloud dark UI
- Stripe/Linear premium feel

## Core Visual Elements

### Glass Effect CSS
```css
/* Liquid Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Glass with glow */
.glass-glow {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  box-shadow:
    0 0 40px rgba(16, 185, 129, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}
```

### Color Palette (Dark Mode Primary)
- Background: #0a0f1a (deep navy-black)
- Background Secondary: #111827
- Glass Surface: rgba(255, 255, 255, 0.05)
- Glass Border: rgba(255, 255, 255, 0.1)
- Text Primary: #ffffff
- Text Secondary: rgba(255, 255, 255, 0.7)
- Text Muted: rgba(255, 255, 255, 0.5)
- Accent (Hub Green): #10B981
- Accent Glow: rgba(16, 185, 129, 0.3)

### Typography
- Font: KOLIVO Neo Sans from CDN
- Headline: 700 weight, large sizes
- Body: 400 weight
- Clean, minimal, high contrast on dark

### Key Components
1. Glass Navigation Bar (sticky, blur background)
2. Glass Cards for products/features
3. Glass Buttons with subtle glow
4. Gradient orbs/blobs in background
5. Subtle light reflections on edges

### Animation Principles
- Smooth transitions (0.3s ease)
- Subtle hover glow effects
- Parallax background elements
- No bouncy/playful animations
