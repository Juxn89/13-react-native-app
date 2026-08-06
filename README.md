# 📱 React Native + TypeScript + Expo Monorepo

A **production-ready baseline** for cross-platform mobile apps built with **Expo**, **React 19**, and **TypeScript**. This main branch serves as the source of truth for architecture patterns and best practices — all project branches extend or reference these guidelines.

<p>
  <img alt="Expo" src="https://img.shields.io/badge/Expo-57-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-0.86-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>
<p>
  <img alt="Expo Router" src="https://img.shields.io/badge/Expo_Router-57-4630EB?style=for-the-badge&logo=expo&logoColor=white" />
  <img alt="Gesture Handler" src="https://img.shields.io/badge/Gesture_Handler-2.32-0EA5E9?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Reanimated" src="https://img.shields.io/badge/Reanimated-4.5-FF6363?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-workspace-F69220?style=for-the-badge&logo=pnpm&logoColor=white" />
</p>
<p>
  <img alt="iOS" src="https://img.shields.io/badge/iOS-ready-000000?style=for-the-badge&logo=apple&logoColor=white" />
  <img alt="Android" src="https://img.shields.io/badge/Android-ready-3DDC84?style=for-the-badge&logo=android&logoColor=white" />
  <img alt="Web" src="https://img.shields.io/badge/Web-ready-1a73e8?style=for-the-badge&logo=googlechrome&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-Private-8A2BE2?style=for-the-badge" />
</p>

## ✨ What This Is

This is a **baseline monorepo** with opinionated configurations and patterns for React Native development:

- 📘 **CLAUDE.md** — Complete best practices guide (source of truth for all projects)
- 🤖 **AGENTS.md** — Agent guidelines that reference CLAUDE.md
- ⚡ **Skills** — `.agents/skills/` contains verified performance and architecture patterns
- 🎯 **Type-safe** — TypeScript strict mode, path aliases, no `any` types
- 🚀 **Optimized** — React Compiler enabled, Reanimated for animations, Gesture Handler for touch

## 🎯 Project Branches

Each branch represents a complete, standalone project built on this baseline:

### 🔴 **01-pokedex** — Pokédex App
Interactive Pokémon browser with live PokéAPI integration

**Features:**
- Browse Pokémon with front/back sprites
- Type-based color scheme (fire→red, water→blue, etc.)
- Tap to view detailed information
- Responsive scrollable list

**Tech focus:** REST API integration, navigation routing, dynamic styling

**Get started:**
```bash
git checkout 01-pokedex
pnpm install && pnpm start
```

### 🐍 **02-snake-game** — Classic Snake Game
Touch-gesture controlled snake game with grid-based movement

**Features:**
- Pan gesture detection for direction control
- Real-time collision detection
- Scoring system with food mechanics
- Smooth animations with Reanimated

**Tech focus:** Gesture Handler, game loop architecture, native threading (`runOnJS`)

**Get started:**
```bash
git checkout 02-snake-game
pnpm install && pnpm start
```

## 🚀 Quick Start (Main Baseline)

**1. Install dependencies**

```bash
pnpm install
```

**2. Start development**

```bash
pnpm start
```

**3. Choose your platform**

```bash
pnpm ios      # 🍏 iOS simulator
pnpm android  # 🤖 Android emulator
pnpm web      # 🌐 Web browser
```

## 📚 Documentation

**Read these in order:**

| Document | Purpose |
|---|---|
| 📘 [`CLAUDE.md`](./CLAUDE.md) | **START HERE** — Best practices, architecture, patterns, performance |
| 🤖 [`AGENTS.md`](./AGENTS.md) | Agent guidelines (references CLAUDE.md as source of truth) |
| 🎯 `.agents/skills/` | Verified rules & patterns for performance, design, state management |

## 🧰 Tech Stack Baseline

| Category | Technology | Notes |
|---|---|---|
| 🧭 Framework | Expo SDK 57, Expo Router | File-based routing, managed builds |
| ⚛️ React | React 19, React Native 0.86 | Latest stable versions |
| 🔒 Language | TypeScript 6.0 | Strict mode required |
| 👆 Gestures | React Native Gesture Handler 2.32 | Native gesture detection |
| 🎬 Animation | React Native Reanimated 4.5 | GPU-accelerated on native thread |
| 🧬 Memoization | React Compiler | Enabled by default in `app.json` |
| 📦 Package Manager | pnpm | Workspace-ready |

All projects inherit these versions. Override only with documented justification in project-specific CLAUDE.md.

## 📂 Repository Structure

```
.
├── CLAUDE.md              📘 Best practices baseline (source of truth)
├── AGENTS.md              🤖 Agent guidelines
├── README.md              This file
├── app.json               Expo configuration
├── tsconfig.json          TypeScript baseline
├── package.json           Dependencies (main branch baseline)
├── pnpm-lock.yaml         Lock file
│
├── .agents/               Skills & agent definitions
│   └── skills/
│       ├── react-native-best-practices/    Performance & optimization
│       ├── react-native-architecture/      Navigation & state management
│       ├── react-native-design/            Styling & animations
│       └── vercel-react-native-skills/     Detailed rules
│
├── src/
│   ├── app/               Expo Router screens (file-based routing)
│   ├── components/        Reusable UI components
│   ├── constants/         Theme, design tokens
│   └── hooks/             Custom React hooks
│
└── assets/                Images, fonts, icons
```

## 🆕 Creating a New Project

1. **Create a feature branch:**
   ```bash
   git checkout -b 03-my-project
   ```

2. **Reference CLAUDE.md:**
   - If your project follows the baseline exactly: no changes needed
   - If deviating: create a project-specific `CLAUDE.md` documenting differences

3. **Start building:**
   ```bash
   pnpm install
   pnpm start
   ```

4. **Example project structure:**
   ```markdown
   # Project: My App (03-my-project)
   
   Extends [CLAUDE.md](../CLAUDE.md) with project-specific patterns.
   
   ## Features
   - Feature 1
   - Feature 2
   
   ## Deviations
   - Using Redux instead of Jotai because [reason]
   ```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm start` | ▶️ Start Metro bundler |
| `pnpm ios` | 🍏 Run on iOS simulator |
| `pnpm android` | 🤖 Run on Android emulator |
| `pnpm web` | 🌐 Run in web browser |
| `pnpm lint` | 🧹 Lint with `expo lint` |
| `pnpm reset-project` | 🔄 Reset to blank starter |

## 🛠️ Development Workflow

### Before Writing Code

1. **Read CLAUDE.md** — Understand baseline patterns for your feature
2. **Check relevant skills** — `.agents/skills/react-native-best-practices/`, etc.
3. **Type everything** — TypeScript strict mode required, no `any`
4. **Use path aliases** — `@/components`, `@/hooks`, etc. (see `tsconfig.json`)

### Performance First

- **Measure before optimizing** — use React DevTools Profiler
- **Profile lists** — FlashList for 50+ items, FlatList otherwise
- **Memoization** — let React Compiler handle it, or use `React.memo()` after profiling
- **Bundle size** — avoid barrel imports, use direct imports

### Styling & Layout

- **Use `StyleSheet.create()`** — not inline styles
- **Safe area** — wrap screens with `SafeAreaView` from `react-native-safe-area-context`
- **Flexbox** — standard React Native layout
- **Platform-specific files** — `.ios.ts`, `.android.ts` for platform differences

## 🌍 Learn More

- 📖 [Expo docs v57](https://docs.expo.dev/versions/v57.0.0/) — official baseline
- 🎓 [React documentation](https://react.dev) — React 19 patterns
- 👆 [Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- 🎬 [Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## 🤝 Community & Support

- ⭐ [Expo on GitHub](https://github.com/expo/expo)
- 💬 [Discord community](https://chat.expo.dev)

## 📝 License

Private — internal use only
