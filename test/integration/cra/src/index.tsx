import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { startReactDsfr } from "@codegouvaor/react-ads/spa";
import { Home } from "./Home";
import { Mui } from "./Mui";
import { Picto } from "./Picto";
import { useRoute, RouteProvider } from "./router";
import { Header } from "@codegouvaor/react-ads/Header";
import { fr } from "@codegouvaor/react-ads";
import { routes } from "./router";
import { headerFooterDisplayItem } from "@codegouvaor/react-ads/Display";


startReactDsfr({
    "defaultColorScheme": "system"
});


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouteProvider>
            <Root />
        </RouteProvider>
    </StrictMode>
);

function Root() {

    const route = useRoute();

    return (
        <div style={{
            "minHeight": "100vh",
            "display": "flex",
            "flexDirection": "column",
        }}>
            <Header
                brandTop={<>INTITULE<br />OFFICIEL</>}
                serviceTitle="Nom du site / service"
                quickAccessItems={[
                    headerFooterDisplayItem,
                    {
                        iconId: "ri-mail-line",
                        linkProps: {
                            href: `mailto:${"joseph.garrone@code.gouv.fr"}`,
                        },
                        text: "Nous contacter",
                    }
                ]}
                homeLinkProps={{ ...routes.home().link, "title": "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" }}
                navigation={[
                    {
                        "text": "Home",
                        "linkProps": routes.home().link,
                        "isActive": route.name === "home"
                    },
                    {
                        "text": "Mui playground",
                        "linkProps": routes.mui().link,
                        "isActive": route.name === "mui"
                    },
                    {
                        "text": "Picto playground",
                        "linkProps": routes.picto().link,
                        "isActive": route.name === "picto"
                    }
                ]}
            />
            <div style={{
                "flex": 1,
                "margin": "auto",
                "maxWidth": 1000,
                ...fr.spacing("padding", { "topBottom": "10v" })
            }}>
                {(() => {
                    switch (route.name) {
                        case "mui": return <Mui />;
                        case "home": return <Home />;
                        case "picto": return <Picto />;
                        case false: return <h1>404</h1>
                    }
                })()}
            </div>
        </div>
    );

}