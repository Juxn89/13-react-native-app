# 📱 13 React Native App

A modern, cross-platform mobile app built with **Expo Router**, **React 19**, and **TypeScript**, running natively on iOS, Android, and the Web.

<p>
  <img alt="Expo" src="https://img.shields.io/badge/Expo-57-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-0.86-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>
<p>
  <img alt="Expo Router" src="https://img.shields.io/badge/Expo_Router-57-4630EB?style=for-the-badge&logo=expo&logoColor=white" />
  <img alt="Reanimated" src="https://img.shields.io/badge/Reanimated-4.5-FF6363?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Gesture Handler" src="https://img.shields.io/badge/Gesture_Handler-2.32-0EA5E9?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-workspace-F69220?style=for-the-badge&logo=pnpm&logoColor=white" />
</p>
<p>
  <img alt="iOS" src="https://img.shields.io/badge/iOS-ready-000000?style=for-the-badge&logo=apple&logoColor=white" />
  <img alt="Android" src="https://img.shields.io/badge/Android-ready-3DDC84?style=for-the-badge&logo=android&logoColor=white" />
  <img alt="Web" src="https://img.shields.io/badge/Web-ready-1a73e8?style=for-the-badge&logo=googlechrome&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-Private-8A2BE2?style=for-the-badge" />
</p>

## ✨ Overview

This project uses **file-based routing** with Expo Router, **React Compiler** for automatic memoization, and **Reanimated** for buttery-smooth, GPU-accelerated animations. It ships with a curated set of agent skills (`.agents/`, `.claude/`) that encode React Native performance and architecture best practices — see [`CLAUDE.md`](./CLAUDE.md) for the full guide.

## 🚀 Getting Started

**1. Install dependencies**

```bash
pnpm install
```

**2. Start the development server**

```bash
pnpm start
```

**3. Open the app**

From the Metro output, choose where to run it:

- 📦 [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- 🤖 [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- 🍏 [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- 🧪 [Expo Go](https://expo.dev/go) — quick sandbox for trying things out

You can also target a platform directly:

```bash
pnpm ios      # 🍏 iOS simulator
pnpm android  # 🤖 Android emulator
pnpm web      # 🌐 Web browser
```

Start editing inside the **`src/app`** directory — routes are created automatically from the files you add there, thanks to [file-based routing](https://docs.expo.dev/router/introduction).

## 🧰 Tech Stack

| Category | Technology |
|---|---|
| 🧭 Framework | Expo SDK 57 · Expo Router |
| ⚛️ UI | React 19 · React Native 0.86 |
| 🔒 Language | TypeScript 6.0 (strict mode) |
| 🎬 Animation | React Native Reanimated 4 · Worklets |
| 👆 Gestures | React Native Gesture Handler |
| 📦 Package Manager | pnpm (workspace) |
| 🖼️ Assets | `expo-image` · `expo-symbols` · `expo-glass-effect` |

## 📂 Project Structure

```
src/
├── app/          🧭 Screens & layouts (file-based routing)
├── components/   🧩 UI & feature components
├── constants/    🎨 Theme & design tokens
└── hooks/        🪝 Custom React hooks
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

## 🧼 Fresh Project

Whenever you're ready for a clean slate:

```bash
pnpm reset-project
```

This moves the current starter code into **`app-example`** and creates a blank **`app`** directory so you can start from scratch.

## 🛠️ Additional Setup

- 🧹 **Linting** — run `pnpm lint`, or follow the [ESLint & Prettier guide](https://docs.expo.dev/guides/using-eslint/)
- ✅ **Unit testing** — see the [Jest testing guide](https://docs.expo.dev/develop/unit-testing/)
- 🔷 **TypeScript** — see the [TypeScript guide](https://docs.expo.dev/guides/typescript/)

## 📚 Project Documentation

- 📘 [`CLAUDE.md`](./CLAUDE.md) — React Native + TypeScript + Expo best practices (source of truth)
- 🤖 [`AGENTS.md`](./AGENTS.md) — Guidance for AI coding agents working in this repo

## 🌍 Learn More

- 📖 [Expo documentation](https://docs.expo.dev/) — fundamentals and advanced [guides](https://docs.expo.dev/guides)
- 🎓 [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/) — build a project that runs on Android, iOS, and web

## 🤝 Join the Community

- ⭐ [Expo on GitHub](https://github.com/expo/expo) — explore the open source platform
- 💬 [Discord community](https://chat.expo.dev) — chat with other Expo developers
