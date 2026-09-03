import { fr } from "@codegouvaor/react-ads";

import * as Pictogrammes from '@codegouvaor/react-ads/picto';

export function Picto() {
    return (
        <div className={fr.cx("fr-my-4w")}>
            {
                Object.entries(Pictogrammes).map(([name, Component]) => (
                    <Component
                    key={name}
                    fontSize="10em"
                    />
                ))
            }
        </div>
    )
}