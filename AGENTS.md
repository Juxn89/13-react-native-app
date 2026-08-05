# Agent Instructions for React Native Development

**Source of Truth:** [CLAUDE.md](./CLAUDE.md)

This document provides instructions for AI agents. All development guidelines, patterns, and best practices are documented in **CLAUDE.md**. Agents should always reference CLAUDE.md as the authoritative source for:

- TypeScript configuration and typing conventions
- Project structure and file organization
- Code patterns and component architecture
- Performance optimization strategies
- Navigation patterns and state management
- Native integration approaches
- Testing and quality standards

---

## Key Rules

### When Coding

1. **Always follow CLAUDE.md patterns** — refer to the "Code Patterns", "Project Structure", and "Performance Optimization" sections
2. **Use path aliases** defined in `tsconfig.json`: `@/`, `@/components/`, `@/hooks/`, etc.
3. **TypeScript strict mode enabled** — no `any` types. See "TypeScript Configuration" in CLAUDE.md
4. **Profile before optimizing** — do not apply memoization or performance fixes speculatively. Reference the "Performance Optimization" section
5. **Leverage React Compiler** — it's enabled by default (`app.json`). Do not disable without justification
6. **Use FlashList for long lists** — see "List Performance" in CLAUDE.md
7. **Avoid barrel imports** — import directly from source files for tree-shaking. Reference [bundle-barrel-exports.md](.agents/skills/react-native-best-practices/references/bundle-barrel-exports.md)

### When Optimizing Performance

1. **Measure first** — Use React DevTools Profiler or Metro DevTools to identify bottlenecks
2. **Refer to react-native-best-practices skill** — It contains priority-ordered guidelines and references
3. **Follow the workflow:** Measure → Optimize → Re-measure → Validate
4. **Check skill references before coding** — they document verified patterns with examples

### When Implementing Features

1. **Use Expo Router for navigation** — file-based routing (see "Navigation" in CLAUDE.md)
2. **Use atomic state (Jotai)** for global state — not Context (see "State Management" in CLAUDE.md)
3. **Use platform-specific files** for OS differences (`.ios.ts`, `.android.ts`)
4. **Use config plugins** for native functionality (prefer over bare React Native)

### When Debugging

1. **Check the Decision Trees** section in CLAUDE.md for common questions
2. **Error boundaries are mandatory** for production apps — see example in "Testing & Quality"
3. **Cleanup subscriptions** in useEffect return callbacks — see "Memory Management"

---

## Skills to Reference (Ranked by Priority)

| Priority | Skill | When to Use |
|----------|-------|------------|
| 1 | **react-native-best-practices** | Performance issues, profiling, optimization, FPS/jank, memory leaks, bundle size |
| 2 | **react-native-architecture** | New projects, navigation, state management, native modules, CI/CD |
| 3 | **react-native-design** | Design systems, styling, animations, UI patterns |
| 4 | **vercel-react-native-skills** | Detailed rules for specific scenarios (lists, gestures, fonts, design patterns) |

---

## Project Dependencies (Current)

Version alignment (as of 2026-08-05):

```
expo: ^57.0.0              (managed React Native platform)
expo-router: ^57.0.0       (file-based routing)
react: ^19.2.0             (React core)
react-native: ^0.86.0      (React Native core)
typescript: ^6.0.0         (type safety)
react-native-reanimated: ^4.5.0 (animations)
react-native-gesture-handler: ^2.32.0 (gestures)
react-native-worklets: ^0.10.0 (JS worklets)
```

**Rule:** Use `npx expo install` to update Expo SDK packages together. Pin minor versions to avoid mismatches.

---

## TypeScript Baseline

- **Target:** ES2020
- **Module:** ES2020
- **strict:** true (required)
- **Path aliases:** `@/*` → `src/*`, plus category aliases (`@/components/*`, `@/hooks/*`, etc.)

Reference: "TypeScript Configuration" in CLAUDE.md

---

## File Structure to Follow

```
src/
├── app/                  # Expo Router screens (file-based)
├── components/ui         # Reusable UI components
├── components/features   # Feature-specific components
├── components/layout     # Layout components
├── hooks/                # Custom React hooks
├── services/             # API clients, platform APIs
├── stores/               # State management (Jotai atoms)
├── types/                # TypeScript interfaces & types
├── utils/                # Utility functions
└── providers/            # Context providers
```

Reference: "Project Structure" in CLAUDE.md

---

## Code Review Checklist

- [ ] TypeScript types are explicit (no `any`)
- [ ] Components follow single-responsibility principle (≤300 lines)
- [ ] Imports use path aliases and are not barrel imports
- [ ] Performance-critical code has been profiled (not assumed)
- [ ] Error boundaries wrap risky subtrees
- [ ] Subscriptions/timers are cleaned up in useEffect
- [ ] Memoization is only applied when profiling showed re-renders
- [ ] Lists use FlashList (for 50+ items) with `estimatedItemSize`
- [ ] React Compiler is not disabled unnecessarily
- [ ] No Context for global frequently-updated state

---

## Common Questions

### Q: Which state management should I use?

**A:** Refer to "State Management" section in CLAUDE.md. TL;DR:
- Global rarely-changing state (theme, language) → Context
- Global frequently-updated state (auth, data) → Atomic state (Jotai)
- Local component state → `useState`

### Q: How do I optimize a slow list?

**A:** Refer to "List Performance" in CLAUDE.md and [js-lists-flatlist-flashlist.md](.agents/skills/react-native-best-practices/references/js-lists-flatlist-flashlist.md). TL;DR:
1. Profile with React DevTools to confirm it's the list
2. Switch to FlashList with `estimatedItemSize`
3. Memoize list items if profiling shows unnecessary re-renders

### Q: Should I memoize this component?

**A:** Refer to "Performance Optimization" in CLAUDE.md. TL;DR:
1. Profile with React DevTools Profiler
2. If the component re-renders unnecessarily → use `React.memo()`
3. If no unnecessary re-renders → do nothing (React Compiler will handle it)

### Q: Can I use Redux/MobX instead of Jotai?

**A:** Refer to [CLAUDE.md](./CLAUDE.md) "State Management" section. The baseline is Jotai because it's simpler and works well with React Compiler. If you need Redux/MobX, document the reason in your project-specific CLAUDE.md with justification.

---

## When to Update AGENTS.md vs. CLAUDE.md

- **Update CLAUDE.md** if the change affects all current and future projects
- **Update AGENTS.md** if it's agent-specific guidance (e.g., new instructions for code generation)
- **Keep AGENTS.md minimal** — it's a pointer to CLAUDE.md, not a duplicate

---

**Last Updated:** 2026-08-05  
**Responsible:** Juan Gómez
