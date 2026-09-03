"use client";

import { startReactDsfr } from "@codegouvaor/react-ads/next-appdir";
import { defaultColorScheme } from "./defaultColorScheme";
import { addAlertTranslations } from "@codegouvaor/react-ads/Alert";
import Link from "next/link";

declare module "@codegouvaor/react-ads/next-appdir" {
    interface RegisterLink { 
        Link: typeof Link;
    }
}

startReactDsfr({ 
	defaultColorScheme, 
	Link,
    "doCheckNonce": true
});

export function StartDsfr(){
	return null;
}

addAlertTranslations({
    "lang": "fr",
    "messages": {
        "hide message": "Masquer le message (modifié)",
    }
});
