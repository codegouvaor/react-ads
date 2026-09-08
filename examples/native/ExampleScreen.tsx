/**
 * Example — ADS Native consumption from an Expo application.
 *
 * This file is a *demonstration of consumption only*. It is not part of the
 * published package and contains no MyGouv business logic.
 *
 * ```tsx
 * import {
 *   ADSProvider,
 *   Button,
 *   Card,
 *   Heading,
 *   Text,
 *   Stack,
 * } from "@codegouvaor/react-ads/native";
 * ```
 *
 * `@codegouvaor/react-ads/native` is the official React Native implementation of
 * the Astoria Design System (ADS Native Foundation, v1.0.7). It uses native
 * primitives (`View`, `Text`, `Pressable`, `TextInput`, …) and shares the ADS
 * tokens and conventions with the web implementation.
 */

import * as React from "react";
import { ScrollView } from "react-native";
import {
    ADSProvider,
    Button,
    Card,
    Heading,
    Stack,
    Text,
    ServiceCard
} from "@codegouvaor/react-ads/native";

export function ExampleScreen() {
    return (
        <ADSProvider colorScheme="system">
            <ScrollView>
                <Stack spacing="lg" style={{ padding: 16 }}>
                    <Heading level={1}>Mon espace MyGouv</Heading>

                    <Text>
                        Retrouvez vos services et démarches administratives.
                    </Text>

                    <Card elevated>
                        <Stack spacing="md">
                            <Heading level={3}>Déclaration de revenus</Heading>
                            <Text variant="bodySmall">
                                Effectuez votre déclaration en ligne en quelques
                                minutes.
                            </Text>
                            <Button onPress={() => undefined} icon="arrowRight">
                                Continuer
                            </Button>
                        </Stack>
                    </Card>

                    <ServiceCard
                        title="Déclarer mes revenus"
                        description="Effectuez votre déclaration en ligne."
                        status="available"
                        onPress={() => undefined}
                    />

                    <ServiceCard
                        title="Demander une carte nationale d'identité"
                        description="Prenez rendez-vous et suivez votre demande."
                        status="inProgress"
                        onPress={() => undefined}
                    />
                </Stack>
            </ScrollView>
        </ADSProvider>
    );
}