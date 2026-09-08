# ADS Native — Example (Expo)

This directory demonstrates how an Expo application consumes the official native
layer of the Astoria Design System:

```
Expo app
    │
    ▼
@codegouvaor/react-ads/native
    │
    ▼
ADS Native
```

`ExampleScreen.tsx` shows the consumption API:

```tsx
import {
  ADSProvider,
  Button,
  Card,
  Heading,
  Text,
  Stack,
} from "@codegouvaor/react-ads/native";

export function ExampleScreen() {
  return (
    <ADSProvider colorScheme="system">
      <Stack spacing="lg" style={{ padding: 16 }}>
        <Heading>Mon espace MyGouv</Heading>
        <Card elevated>
          <Text>Retrouvez vos services et démarches administratives.</Text>
          <Button>Continuer</Button>
        </Card>
      </Stack>
    </ADSProvider>
  );
}
```

This is a demonstration of consumption only — it ships no MyGouv logic and is
not part of the published package.

## Setup in an Expo application

1. `npm install @codegouvaor/react-ads react-native`
   (`react-native` is a peer dependency of the native layer).
2. Metro resolves `@codegouvaor/react-ads/native` to the package's compiled
   `native/` entry; no Web/DOM code is loaded.
3. Optional: provide an icon renderer via `<ADSProvider renderIcon={...} />`
   (e.g. backed by `@expo/vector-icons`) to use a real icon font.