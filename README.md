# 🐍 Snake Game — React Native Edition

A modern, cross-platform **Snake game** built with **Expo**, **React 19**, and **TypeScript**. Play the classic game with native touch gestures on iOS, Android, and the Web.

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

## ✨ Features

🎮 **Classic Snake Gameplay** — Guide the snake to eat food and grow longer without hitting walls or yourself

👆 **Native Touch Gestures** — Pan gestures detect swipe direction instantly on mobile devices

🧮 **Game Grid** — 36×64 cell grid for precise movement and collision detection

⚡ **Smooth Animations** — GPU-accelerated animations with React Native Reanimated

📱 **Cross-Platform** — Play on iOS simulator, Android emulator, or web browser

🎨 **TypeScript** — Full type safety with strict mode enabled

## 🚀 Getting Started

**1. Install dependencies**

```bash
pnpm install
```

**2. Start the development server**

```bash
pnpm start
```

**3. Launch the game**

Choose your platform from the Metro output:

- 🍏 **iOS simulator:** Press `i`
- 🤖 **Android emulator:** Press `a`
- 🌐 **Web browser:** Press `w`

Or use a shortcut:

```bash
pnpm ios      # 🍏 iOS simulator
pnpm android  # 🤖 Android emulator
pnpm web      # 🌐 Web browser
```

## 🎮 How to Play

1. **Swipe** in any direction to move the snake
2. **Eat the food** (🔴) to grow longer and score points
3. **Avoid walls** and your own snake body
4. **Game Over** when you hit a wall or yourself

## 🧰 Tech Stack

| Category | Technology |
|---|---|
| 🧭 Framework | Expo SDK 57 · Expo Router |
| ⚛️ UI | React 19 · React Native 0.86 |
| 🔒 Language | TypeScript 6.0 (strict mode) |
| 👆 Gestures | React Native Gesture Handler 2.32 |
| 🎬 Animation | React Native Reanimated 4.5 |
| 📦 Package Manager | pnpm (workspace) |

## 📂 Project Structure

```
src/
├── app/                    🎮 Game screens (file-based routing)
│   ├── _layout.tsx         Root layout & theme setup
│   ├── index.tsx           Home/game screen
│   └── types/              Game types & enums
│
├── components/
│   ├── Game.tsx            Main game logic & gesture handling
│   ├── Snake.tsx           Snake rendering component
│   └── index.ts            Component exports
│
├── constants/              🎨 Colors & theme
└── hooks/                  🪝 Custom React hooks
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm start` | ▶️ Start the Metro bundler |
| `pnpm ios` | 🍏 Run on iOS simulator |
| `pnpm android` | 🤖 Run on Android emulator |
| `pnpm web` | 🌐 Run in the browser |
| `pnpm lint` | 🧹 Lint the project with `expo lint` |
| `pnpm reset-project` | 🔄 Reset to a blank starter app |

## 🎯 Game Architecture

### Game Component (`Game.tsx`)
- Manages game state (snake position, direction, food)
- Handles pan gesture detection with `Gesture.Pan()` + `runOnJS()`
- Game loop with `setInterval()` for snake movement
- Collision detection logic

### Snake Component (`Snake.tsx`)
- Renders each snake segment as a circular view
- Positions segments based on coordinate grid
- Absolute positioning for accurate placement

### Types (`types/index.ts`)
```typescript
enum Direction { Up, Down, Left, Right }
type Coordinate = { x: number, y: number }
type Colors = { primary, background }
```

## 🛠️ Development Notes

- **React Compiler** is enabled in `app.json` for automatic memoization
- **Gesture threading:** Pan gestures run on native thread, state updates wrapped with `runOnJS()` for safety
- **Grid-based movement:** Each cell is approximately 10×10 pixels for consistent collision detection

## 📚 Project Documentation

- 📘 [`CLAUDE.md`](./CLAUDE.md) — React Native + TypeScript + Expo best practices (baseline for all projects)
- 🤖 [`AGENTS.md`](./AGENTS.md) — Guidance for AI agents working on this repository

## 🌍 Learn More

- 📖 [Expo documentation](https://docs.expo.dev/) — fundamentals and advanced [guides](https://docs.expo.dev/guides)
- 🎓 [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/) — build cross-platform apps
- 👆 [Gesture Handler docs](https://docs.swmansion.com/react-native-gesture-handler/)
- 🎬 [Reanimated docs](https://docs.swmansion.com/react-native-reanimated/)

## 🤝 Community

- ⭐ [Expo on GitHub](https://github.com/expo/expo) — explore the open source platform
- 💬 [Discord community](https://chat.expo.dev) — chat with other Expo developers
