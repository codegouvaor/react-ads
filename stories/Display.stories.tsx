import * as React from "react";
import { fr } from "../dist";
import { Header } from "../dist/Header";
import { Footer } from "../dist/Footer";
import { headerFooterDisplayItem } from "../dist/Display";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "./getStory";
import astoriaGouvImgUrl from "../src/assets/astoria-gouv.png";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { "Display": Story },
    "description": `
A button that opens a dialog to enable the user to select light or dark mode.  

- [See source code](https://github.com/codegouvaor/react-ads/blob/main/src/Display/Display.tsx)

Optionally, you can also use \`import { useIsDark } from "@codegouvaor/react-ads"\` to manually monitor and controls 
the theme state.

## Usage example 

\`\`\`tsx
import { Header } from "@codegouvaor/react-ads/Header";
import { Footer } from "@codegouvaor/react-ads/Footer";
import { headerFooterDisplayItem } from "@codegouvaor/react-ads/Display";

function App(){

    return (
        <>
            <Header
                // other Header props...
                quickAccessItems={[
                    // other quick access items...
                    headerFooterDisplayItem
                ]}
            >
            {/* ... your app ...*/}
            <Footer
                // other Footer props...
                bottomItems={[
                    // other other bottom items...
                    headerFooterDisplayItem
                ]}
            />
        <>
    );

}
\`\`\`
`,
    "disabledProps": ["darkMode", "containerWidth"]
});

export default meta;

const identity = {
    imgUrl: astoriaGouvImgUrl,
    alt: "République d'Astoria",
    institution: "Gouvernement"
};

const homeLinkProps = {
    "href": "#",
    "title": "Accueil - Gouvernement de la République d'Astoria"
};

function Story() {
    return (
        <>
            <Header
                identity={identity}
                serviceTitle="Nom du site / service"
                homeLinkProps={homeLinkProps}
                quickAccessItems={[headerFooterDisplayItem]}
            />
            <Footer
                className={fr.cx("fr-mt-5v")}
                identity={identity}
                homeLinkProps={homeLinkProps}
                accessibility="fully compliant"
                bottomItems={[headerFooterDisplayItem]}
            />
        </>
    );
}

export const Default = getStory({});
