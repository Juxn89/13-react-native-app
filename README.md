# 🔴 Pokédex — React Native Edition

A modern, interactive **Pokédex app** built with **Expo**, **React 19**, and **TypeScript**. Browse Pokémon, view details, and explore types — all with beautiful type-based color schemes on iOS, Android, and the Web.

<p>
  <img alt="Expo" src="https://img.shields.io/badge/Expo-57-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-0.86-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>
<p>
  <img alt="Expo Router" src="https://img.shields.io/badge/Expo_Router-57-4630EB?style=for-the-badge&logo=expo&logoColor=white" />
  <img alt="API" src="https://img.shields.io/badge/PokéAPI-REST-1DA1F2?style=for-the-badge&logo=api&logoColor=white" />
  <img alt="State" src="https://img.shields.io/badge/State-useState-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-workspace-F69220?style=for-the-badge&logo=pnpm&logoColor=white" />
</p>
<p>
  <img alt="iOS" src="https://img.shields.io/badge/iOS-ready-000000?style=for-the-badge&logo=apple&logoColor=white" />
  <img alt="Android" src="https://img.shields.io/badge/Android-ready-3DDC84?style=for-the-badge&logo=android&logoColor=white" />
  <img alt="Web" src="https://img.shields.io/badge/Web-ready-1a73e8?style=for-the-badge&logo=googlechrome&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-Private-8A2BE2?style=for-the-badge" />
</p>

## ✨ Features

🔍 **Browse Pokémon** — View the first 20 Pokémon from the PokéAPI with front and back sprites

🎨 **Type-Based Colors** — Each Pokémon card is color-coded by its primary type (fire → red, water → blue, etc.)

🔗 **Navigation** — Tap any Pokémon to view detailed information on a dedicated screen

📱 **Responsive Design** — Optimized for mobile screens with scrollable lists and proper spacing

🔄 **Live Data** — Fetches real-time data from the [PokéAPI](https://pokeapi.co/) REST API

💪 **TypeScript** — Fully typed interfaces for Pokémon data structures

## 🚀 Getting Started

**1. Install dependencies**

```bash
pnpm install
```

**2. Start the development server**

```bash
pnpm start
```

**3. Launch on your device**

```bash
pnpm ios      # 🍏 iOS simulator
pnpm android  # 🤖 Android emulator
pnpm web      # 🌐 Web browser
```

## 🎮 How to Use

1. **Home screen** — Displays a scrollable list of 20 Pokémon
2. **Pokémon card** — Shows the name, type, and front/back sprites
3. **Tap a card** — Navigate to the details screen for more information
4. **Details screen** — View individual Pokémon data (currently in development)

## 🧰 Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| 🧭 Framework | Expo Router | File-based routing |
| ⚛️ UI | React 19 + React Native 0.86 | Native UI components |
| 🔒 Language | TypeScript 6.0 | Type safety |
| 🌐 API | PokéAPI (REST) | Pokémon data source |
| 📦 State | `useState` | Local component state |
| 🎨 Styling | `StyleSheet.create()` | Optimized styling |

## 📂 Project Structure

```
src/
├── app/
│   ├── _layout.tsx        Root layout & navigation setup
│   ├── index.tsx          🏠 Home screen (Pokémon list)
│   └── details.tsx        🔍 Details screen (in development)
│
├── components/            (empty — ready for UI components)
├── constants/             🎨 Colors & design tokens
└── hooks/                 🪝 Custom React hooks (empty)
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm start` | ▶️ Start Metro bundler |
| `pnpm ios` | 🍏 Run on iOS simulator |
| `pnpm android` | 🤖 Run on Android emulator |
| `pnpm web` | 🌐 Run in web browser |
| `pnpm lint` | 🧹 Lint with `expo lint` |

## 🔴 Type Color Map

Each Pokémon type has a distinct color:

```
Normal    → #A8A77A    Fire      → #EE5155
Fighting  → #C22E28    Water     → #6390F0
Flying    → #A98FF3    Grass     → #7AC74C
Poison    → #A33EA1    Electric  → #F7D02C
Ground    → #E2BF65    Ice       → #96D9D6
Rock      → #B6A136    Dragon    → #6F35FC
Bug       → #A6B91A    Dark      → #705746
Ghost     → #735797    Fairy     → #D685AD
Steel     → #B7B7CE    Psychic   → #F95587
```

## 🛠️ Development Notes

### Fetching Data

The app fetches Pokémon in two steps:

1. **List fetch** — Get the first 20 Pokémon from `/pokemon?limit=20`
2. **Detail fetch** — For each Pokémon, fetch its details from the individual endpoint

```typescript
const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
const detailedData = await fetch(pokemon.url)
```

### Card Styling

Pokémon cards use semi-transparent type colors (20% opacity):

```typescript
backgroundColor: colorByType[pokemon.types[0].type.name] + '50'  // Hex opacity
```

### Details Screen (In Progress)

The `details.tsx` screen is partially implemented:
- ✅ Receives Pokémon name via route params
- ✅ Displays name in header
- ⏳ Needs: API fetch logic, detailed stats display, more sprites/info

## 📚 Resources

- 🔴 [PokéAPI Documentation](https://pokeapi.co/docs/v2) — REST API reference
- 📖 [Expo Router Guide](https://docs.expo.dev/router/introduction/) — Navigation patterns
- ⚛️ [React 19 Docs](https://react.dev/) — React patterns
- 📱 [React Native Docs](https://reactnative.dev/) — Native components

## 🌍 Learn More

- 📘 [`CLAUDE.md`](../CLAUDE.md) — React Native best practices baseline (from main branch)
- 🤖 [`AGENTS.md`](../AGENTS.md) — Agent guidelines

## 🤝 Community

- ⭐ [Expo on GitHub](https://github.com/expo/expo)
- 💬 [Discord community](https://chat.expo.dev)
- 🔴 [Pokémon Database](https://www.pokemon.com/)

## 📝 License

Private — internal use only
