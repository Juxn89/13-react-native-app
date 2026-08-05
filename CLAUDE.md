# React Native + TypeScript + Expo Best Practices

This document serves as the **source of truth** for React Native development patterns in this monorepo. It consolidates best practices, architecture patterns, and performance optimization strategies for building production-ready mobile applications with Expo and TypeScript.

**Version:** 1.0.0 (Expo 57, React 19, TypeScript 6.0+, React Native 0.86+)

**Target:** All future projects in this monorepo should reference this guide as their baseline. Project-specific CLAUDE.md files may extend or override these patterns with clear justification.

---

## Table of Contents

1. [Project Setup](#project-setup)
2. [TypeScript Configuration](#typescript-configuration)
3. [Project Structure](#project-structure)
4. [Code Patterns](#code-patterns)
5. [Performance Optimization](#performance-optimization)
6. [Navigation](#navigation)
7. [State Management](#state-management)
8. [Testing & Quality](#testing--quality)
9. [Native Integration](#native-integration)
10. [Deployment](#deployment)
11. [Available Skills & References](#available-skills--references)

---

## Project Setup

### Initial Scaffold

```bash
# Create new Expo project with TypeScript
npx create-expo-app@latest <app-name> -t expo-template-blank-typescript

# Install core dependencies (aligned with this branch)
npx expo install expo@^57.0.0
npx expo install expo-router expo-status-bar expo-splash-screen
npx expo install expo-safe-area-context react-native-screens
npx expo install react-native-reanimated react-native-gesture-handler
npx expo install react-native-worklets react-native-web

# Development dependencies
npm install --save-dev typescript@^6.0.0 @types/react@^19.0.0
```

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `expo` | ^57.0.0 | Managed React Native platform |
| `expo-router` | ^57.0.0 | File-based routing (like Next.js) |
| `react-native-reanimated` | ^4.5.0 | GPU-accelerated animations |
| `react-native-gesture-handler` | ^2.32.0 | Touch gesture handling |
| `react-native-worklets` | ^0.10.0 | JS worklets for performance |
| `typescript` | ^6.0.0 | Type safety |

**Rule:** Pin minor versions in package.json. Use `npx expo install` to update Expo SDK packages together to avoid version mismatches.

---

## TypeScript Configuration

### Compiler Settings

**Non-negotiable settings** in `tsconfig.json`:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "lib": ["ES2020"],
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/services/*": ["./src/services/*"],
      "@/stores/*": ["./src/stores/*"],
      "@/types/*": ["./src/types/*"],
      "@/utils/*": ["./src/utils/*"]
    },
    "skipLibCheck": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]
}
```

### Typing Conventions

1. **Always type function parameters and return values:**
   ```typescript
   // ✅ Good
   function fetchUser(id: string): Promise<User> { }
   const handlePress = (id: string): void => { }

   // ❌ Bad
   function fetchUser(id) { }
   const handlePress = (id) => { }
   ```

2. **Use `const` for types and interfaces:**
   ```typescript
   type Props = { ... }
   interface User { ... }
   ```

3. **Avoid `any` type. Use `unknown` if necessary:**
   ```typescript
   // ✅ Better
   const value: unknown = JSON.parse(data);
   if (typeof value === 'string') { ... }

   // ❌ Avoid
   const value: any = JSON.parse(data);
   ```

---

## Project Structure

### Recommended Layout

```
my-app/
├── src/
│   ├── app/                          # Expo Router screens (file-based routing)
│   │   ├── (auth)/                   # Auth group (route grouping, no URL segment)
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── (tabs)/                   # Tab navigation group
│   │   │   ├── _layout.tsx           # Tab navigator setup
│   │   │   ├── home.tsx
│   │   │   ├── explore.tsx
│   │   │   └── profile.tsx
│   │   ├── _layout.tsx               # Root layout (providers, theme)
│   │   ├── index.tsx                 # App entry point
│   │   └── +not-found.tsx            # 404 fallback
│   │
│   ├── components/
│   │   ├── ui/                       # Reusable UI components (buttons, cards, etc.)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── text.tsx
│   │   │   └── input.tsx
│   │   ├── features/                 # Feature-specific components
│   │   │   ├── auth/
│   │   │   ├── home/
│   │   │   └── products/
│   │   └── layout/                   # Layout components (header, footer, etc.)
│   │       ├── header.tsx
│   │       ├── footer.tsx
│   │       └── safe-area-wrapper.tsx
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── use-theme.ts
│   │   ├── use-color-scheme.ts
│   │   ├── use-async.ts
│   │   └── use-keyboard.ts
│   │
│   ├── services/                     # API clients, platform APIs
│   │   ├── api/
│   │   │   ├── client.ts             # HTTP client config
│   │   │   ├── auth.ts
│   │   │   └── products.ts
│   │   ├── native/
│   │   │   ├── storage.ts            # AsyncStorage wrapper
│   │   │   ├── permissions.ts        # Native permissions API
│   │   │   └── notifications.ts
│   │   └── index.ts                  # Service exports
│   │
│   ├── stores/                       # State management (Jotai, Zustand)
│   │   ├── auth.store.ts
│   │   ├── theme.store.ts
│   │   └── index.ts
│   │
│   ├── types/                        # TypeScript types & interfaces
│   │   ├── api.ts                    # API response types
│   │   ├── models.ts                 # Domain models
│   │   ├── index.ts
│   │   └── globals.ts                # Global types
│   │
│   ├── utils/                        # Utility functions
│   │   ├── format.ts                 # Formatting helpers
│   │   ├── validation.ts             # Input validation
│   │   ├── platform.ts               # Platform helpers (iOS/Android)
│   │   ├── constants.ts              # App constants
│   │   └── debug.ts                  # Debug utilities
│   │
│   └── providers/                    # Context providers
│       ├── theme-provider.tsx
│       ├── query-provider.tsx
│       └── index.tsx
│
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── scripts/
│   └── reset-project.js
│
├── app.json                          # Expo config
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

### Key Rules

1. **One component per file** (except related small components)
2. **Export as default only from `/app` and `/screens`** — use named exports elsewhere
3. **Keep components under 300 lines** — split if larger
4. **Group related files** — `product.tsx`, `product.utils.ts`, `product.types.ts`

---

## Code Patterns

### React Components

#### Functional Components with Hooks

```typescript
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  title: string
  onPress: () => void
  disabled?: boolean
}

export function MyComponent({ title, onPress, disabled = false }: Props) {
  const [isLoading, setIsLoading] = React.useState(false)

  const handlePress = async () => {
    setIsLoading(true)
    try {
      await onPress()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  text: { fontSize: 16, fontWeight: '600' }
})
```

#### Memoization Pattern

```typescript
import React from 'react'

type Props = {
  userId: string
  onUserLoad: (user: User) => void
}

function UserCard({ userId, onUserLoad }: Props) {
  const fetchUser = React.useCallback(async () => {
    const user = await api.getUser(userId)
    onUserLoad(user)
  }, [userId, onUserLoad])

  React.useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return <View>...</View>
}

// Memoize to prevent re-renders from parent updates
export const UserCardMemo = React.memo(UserCard, (prev, next) => {
  return prev.userId === next.userId && prev.onUserLoad === next.onUserLoad
})
```

#### Custom Hooks Pattern

```typescript
import React from 'react'
import { useColorScheme as useRNColorScheme } from 'react-native'

export function useColorScheme() {
  const scheme = useRNColorScheme()
  return scheme === 'dark' ? 'dark' : 'light'
}

export function useAsync<T, E = Error>(
  fn: () => Promise<T>,
  deps?: React.DependencyList
) {
  const [state, setState] = React.useState<{
    status: 'idle' | 'pending' | 'success' | 'error'
    data?: T
    error?: E
  }>({ status: 'idle' })

  React.useEffect(() => {
    const run = async () => {
      setState({ status: 'pending' })
      try {
        const result = await fn()
        setState({ status: 'success', data: result })
      } catch (error) {
        setState({ status: 'error', error: error as E })
      }
    }
    run()
  }, deps)

  return state
}
```

### File Naming

| Type | Pattern | Example |
|------|---------|---------|
| Components | `PascalCase.tsx` | `UserCard.tsx` |
| Hooks | `kebab-case.ts` or `camelCase` | `use-theme.ts`, `useTheme.ts` |
| Services | `kebab-case.ts` | `auth-service.ts` |
| Types | `kebab-case.types.ts` or `types.ts` | `user.types.ts` |
| Utils | `kebab-case.ts` | `format-date.ts` |
| Constants | `SCREAMING_SNAKE_CASE` in `constants.ts` | — |

---

## Performance Optimization

### Critical Rules (⚠️ Profile First)

**Before optimizing, measure the problem.** Use React DevTools Profiler or Metro DevTools to identify bottlenecks. Do not apply optimizations speculatively.

Refer to **[React Native Best Practices Skill](#react-native-best-practices)** for detailed profiling commands and measurement workflows.

### List Performance

**Use `FlashList` instead of `FlatList` for long lists (50+ items):**

```typescript
import { FlashList } from '@shopify/flash-list'

export function ProductList({ items }: { items: Product[] }) {
  return (
    <FlashList
      data={items}
      renderItem={({ item }) => <ProductItem product={item} />}
      keyExtractor={(item) => item.id}
      estimatedItemSize={80}  // ~height of item (improves scrolling)
      numColumns={2}          // if grid layout
    />
  )
}

function ProductItem({ product }: { product: Product }) {
  return <View>...</View>
}

export const ProductItemMemo = React.memo(ProductItem)
```

**Reference:** [js-lists-flatlist-flashlist.md](.agents/skills/react-native-best-practices/references/js-lists-flatlist-flashlist.md)

### Bundle Size

**Avoid barrel imports that prevent tree-shaking:**

```typescript
// ❌ Bad: forces entire package into bundle
import { Button, Card, Text } from '@/components/ui'

// ✅ Good: tree-shaking works
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Text from '@/components/ui/text'
```

**Reference:** [bundle-barrel-exports.md](.agents/skills/react-native-best-practices/references/bundle-barrel-exports.md)

### React Compiler

React Compiler is **enabled by default** in this project (see `app.json`). It automatically memoizes components and removes unnecessary re-renders. Do not disable unless there's a verified performance regression.

**Reference:** [js-react-compiler.md](.agents/skills/react-native-best-practices/references/js-react-compiler.md)

### Animations

Use `react-native-reanimated` for 60fps animations on the native thread:

```typescript
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'

export function AnimatedButton({ onPress }: { onPress: () => void }) {
  const scale = useSharedValue(1)

  const handlePressIn = () => {
    scale.value = withSpring(0.95)
  }

  const handlePressOut = () => {
    scale.value = withSpring(1)
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }))

  return (
    <Animated.View style={animatedStyle}>
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Text>Press Me</Text>
      </Pressable>
    </Animated.View>
  )
}
```

**Reference:** [js-animations-reanimated.md](.agents/skills/react-native-best-practices/references/js-animations-reanimated.md)

### Memory Management

**Cleanup subscriptions and timers:**

```typescript
function useLocationTracking() {
  const [location, setLocation] = React.useState<Location | null>(null)

  React.useEffect(() => {
    let subscription: Subscription | null = null

    const startTracking = async () => {
      subscription = Location.watchPositionAsync({}, setLocation)
    }

    startTracking()

    return () => {
      // ✅ Cleanup: unsubscribe
      subscription?.remove()
    }
  }, [])

  return location
}
```

**Reference:** [js-memory-leaks.md](.agents/skills/react-native-best-practices/references/js-memory-leaks.md)

---

## Navigation

### Expo Router Setup

Expo Router provides file-based routing (like Next.js). Define routes by creating files in `src/app/`.

```typescript
// src/app/_layout.tsx (Root Layout)
import { Stack } from 'expo-router'
import { ThemeProvider } from '@/providers/theme-provider'

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animationEnabled: true
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="details/[id]"
          options={{
            presentation: 'modal',
            animationEnabled: true
          }}
        />
      </Stack>
    </ThemeProvider>
  )
}
```

```typescript
// src/app/(tabs)/_layout.tsx (Tab Navigator)
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBarIcon } from '@/components/tab-bar-icon'

const Tab = createBottomTabNavigator()

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0a7ea4',
        tabBarStyle: { backgroundColor: '#fff' }
      }}
    >
      <Tab.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <Tab.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />
        }}
      />
    </Tab.Navigator>
  )
}
```

### Dynamic Routes

```typescript
// src/app/product/[id].tsx
import { useLocalSearchParams } from 'expo-router'

export default function ProductDetails() {
  const { id } = useLocalSearchParams<{ id: string }>()

  return <View>Product {id}</View>
}
```

**Reference:** [React Native Architecture - Navigation Patterns](.agents/skills/react-native-architecture/references/navigation-patterns.md)

---

## State Management

### Recommended: Atomic State (Jotai)

For small to medium apps, use **atomic state management** (e.g., Jotai, Zustand):

```typescript
// src/stores/auth.store.ts
import { atom } from 'jotai'

type User = {
  id: string
  email: string
  name: string
}

export const userAtom = atom<User | null>(null)
export const isAuthenticatedAtom = atom((get) => get(userAtom) != null)

export const authTokenAtom = atom<string | null>(null)
```

```typescript
// Component usage
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

export function LoginScreen() {
  const setUser = useSetAtom(userAtom)
  const setToken = useSetAtom(authTokenAtom)

  const handleLogin = async (email: string, password: string) => {
    const { user, token } = await api.login(email, password)
    setUser(user)
    setToken(token)
  }

  return <View>...</View>
}

export function ProfileScreen() {
  const user = useAtomValue(userAtom)  // read-only
  return <Text>{user?.name}</Text>
}
```

**Advantages:**
- Automatic memoization (no unnecessary re-renders)
- Minimal boilerplate
- Powerful derived atoms (`atom(get => ...)`)
- Works well with React Compiler

**Reference:** [js-atomic-state.md](.agents/skills/react-native-best-practices/references/js-atomic-state.md)

### Context API (Avoid for Global State)

Use Context **only** for:
- Theme provider
- Language/localization provider
- Feature flags provider

**Do NOT** use Context for frequently-updating state (auth, data) — it causes unnecessary re-renders. Use atomic state instead.

```typescript
// ✅ Good: Theme provider
type ThemeContextType = 'light' | 'dark'

const ThemeContext = React.createContext<ThemeContextType>('light')

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<ThemeContextType>('light')
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const theme = React.useContext(ThemeContext)
  if (!theme) throw new Error('useTheme must be within ThemeProvider')
  return theme
}
```

---

## Testing & Quality

### TypeScript Type Checking

```bash
# Check types (CI/pre-commit)
npx tsc --noEmit
```

### Linting (Expo Lint)

```bash
# Run linter
npx expo lint

# Auto-fix issues
npx expo lint --fix
```

### Testing Pattern

```typescript
// Example: useAsync hook test
import { renderHook, waitFor } from '@testing-library/react-native'
import { useAsync } from '@/hooks/use-async'

test('useAsync fetches data', async () => {
  const mockFn = jest.fn().mockResolvedValue({ id: '1', name: 'Test' })

  const { result } = renderHook(() => useAsync(mockFn))

  expect(result.current.status).toBe('pending')

  await waitFor(() => {
    expect(result.current.status).toBe('success')
  })

  expect(result.current.data).toEqual({ id: '1', name: 'Test' })
})
```

### Error Boundaries

```typescript
// src/components/error-boundary.tsx
import React from 'react'
import { View, Text } from 'react-native'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ padding: 20 }}>
          <Text>Something went wrong. Please restart the app.</Text>
          <Text style={{ marginTop: 10, fontSize: 12, color: '#888' }}>
            {this.state.error?.message}
          </Text>
        </View>
      )
    }

    return this.props.children
  }
}
```

---

## Native Integration

### Platform-Specific Files

React Native supports platform-specific files using `.ios.ts` and `.android.ts` extensions:

```typescript
// src/hooks/use-haptics.ts (default)
export function useHaptics() {
  // Dummy implementation for web
  return { trigger: () => {} }
}

// src/hooks/use-haptics.ios.ts
import { triggerAsync } from 'expo-haptics'

export function useHaptics() {
  return { trigger: triggerAsync }
}

// src/hooks/use-haptics.android.ts
import { triggerAsync } from 'expo-haptics'

export function useHaptics() {
  return { trigger: triggerAsync }
}
```

### Native Modules via Config Plugins

For native functionality, use **Expo Config Plugins** (preferred) or **EAS Build** custom scripts:

```typescript
// app.json
{
  "expo": {
    "plugins": [
      [
        "expo-font",
        {
          "fonts": ["./assets/fonts/CustomFont.ttf"]
        }
      ],
      "expo-splash-screen"
    ]
  }
}
```

**Reference:** [React Native Architecture - Native Modules](.agents/skills/react-native-architecture/references/details.md)

---

## Deployment

### Development

```bash
# Start dev server
npm run start

# Or for specific platform
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

### Production Build

Use **EAS Build** (Expo's managed build service):

```bash
# Install EAS CLI
npm install -g eas-cli

# Link project
eas build:configure

# Build for production (iOS)
eas build --platform ios --auto-submit

# Build for production (Android)
eas build --platform android
```

### Environment Variables

Use `eas.json` for environment-specific configs:

```json
{
  "build": {
    "production": {
      "env": {
        "API_URL": "https://api.prod.example.com",
        "ENV": "production"
      }
    },
    "staging": {
      "env": {
        "API_URL": "https://api.staging.example.com",
        "ENV": "staging"
      }
    }
  }
}
```

---

## Available Skills & References

This project includes comprehensive skills and references. **Always refer to these before implementing features or optimizing code.**

### Performance Optimization

**Skill:** `react-native-best-practices`

Comprehensive performance guide covering FPS, TTI, bundle size, memory leaks, and profiling. Use when:
- App feels slow or janky
- Investigating performance regressions
- Building lists or animations
- Optimizing bundle size
- Profiling memory usage

**Key References:**
- [js-measure-fps.md](.agents/skills/react-native-best-practices/references/js-measure-fps.md) — FPS measurement
- [js-profile-react.md](.agents/skills/react-native-best-practices/references/js-profile-react.md) — React profiling
- [js-lists-flatlist-flashlist.md](.agents/skills/react-native-best-practices/references/js-lists-flatlist-flashlist.md) — List optimization
- [js-memory-leaks.md](.agents/skills/react-native-best-practices/references/js-memory-leaks.md) — Memory debugging
- [js-atomic-state.md](.agents/skills/react-native-best-practices/references/js-atomic-state.md) — State management patterns
- [js-react-compiler.md](.agents/skills/react-native-best-practices/references/js-react-compiler.md) — React Compiler usage
- [js-animations-reanimated.md](.agents/skills/react-native-best-practices/references/js-animations-reanimated.md) — Reanimated patterns
- [bundle-barrel-exports.md](.agents/skills/react-native-best-practices/references/bundle-barrel-exports.md) — Bundle optimization
- [bundle-analyze-js.md](.agents/skills/react-native-best-practices/references/bundle-analyze-js.md) — Bundle analysis

### Architecture & Patterns

**Skill:** `react-native-architecture`

Production-ready patterns for navigation, state management, native modules, and CI/CD. Use when:
- Starting a new project
- Implementing complex navigation
- Setting up offline-first apps
- Integrating native modules

**Key References:**
- [details.md](.agents/skills/react-native-architecture/references/details.md) — In-depth patterns
- [navigation-patterns.md](.agents/skills/react-native-architecture/references/navigation-patterns.md) — Navigation strategies

### Design & Styling

**Skill:** `react-native-design`

UI design patterns and styling strategies. Use when:
- Building design systems
- Implementing custom animations
- Styling components

**Key References:**
- [styling-patterns.md](.agents/skills/react-native-design/references/styling-patterns.md) — Styling approaches
- [reanimated-patterns.md](.agents/skills/react-native-design/references/reanimated-patterns.md) — Reanimated patterns

### Vercel React Native Skills

**Skill:** `vercel-react-native-skills`

Detailed rules for performance, architecture, and code quality. Reference-quality documentation for:
- List virtualization and performance
- Design system patterns
- Gesture and animation handling
- Font configuration
- Navigation best practices
- React state management
- UI component patterns
- Memory optimization
- Bundle optimization

**Location:** `.agents/skills/vercel-react-native-skills/rules/`

---

## Quick Decision Trees

### "Should I use memoization?"

1. Is the component re-rendering unnecessarily (verified with React DevTools)?
   - Yes → Use `React.memo()` or let React Compiler handle it (enabled by default)
   - No → Do nothing

### "Which list component should I use?"

1. List has <50 items?
   - Yes → Use `FlatList`
   - No → Goto 2

2. List has 50+ items and smooth scrolling is critical?
   - Yes → Use `FlashList` with `estimatedItemSize`
   - No → Use `FlatList` with `renderToHardwareTextureAndroid` (Android) / `removeClippedSubviews`

### "Should I use Context or atomic state?"

1. Is this global state that rarely changes (theme, language)?
   - Yes → Use Context
   - No → Goto 2

2. Is this frequently-updated state (user data, list items)?
   - Yes → Use atomic state (Jotai/Zustand)
   - No → Local `useState`

---

## Migration Guide: New Projects

When starting a new project on a new branch:

1. **Copy this CLAUDE.md** — Do not delete or rewrite
2. **Reference this guide** in your project-specific CLAUDE.md if you extend patterns
3. **Keep dependency versions in sync** with the baseline (this branch's `package.json`)
4. **Use the same folder structure** unless there's a documented reason to diverge

Example header for a project-specific CLAUDE.md:

```markdown
# Project: [Name]

Extends [root CLAUDE.md](../CLAUDE.md) with project-specific patterns.

## Deviations from Baseline

- **State Management:** Using Redux instead of Jotai because [reason]
- **Navigation:** Custom routing because [reason]

...rest of doc...
```

---

## References

- **Expo Documentation:** https://docs.expo.dev/versions/v57.0.0/
- **React Documentation:** https://react.dev
- **React Native Documentation:** https://reactnative.dev
- **TypeScript Documentation:** https://www.typescriptlang.org/docs/

---

**Last Updated:** 2026-08-05  
**Maintainer:** Juan Gómez
