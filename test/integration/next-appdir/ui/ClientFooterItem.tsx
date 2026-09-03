"use client";
import { FooterBottomItem } from "@codegouvaor/react-ads/Footer";

export function ClientFooterItem() {
    return (
        <FooterBottomItem
            bottomItem={{
                iconId: "fr-icon-arrow-down-line",
                buttonProps: {
                    onClick: ()=> {

                        alert("Click on client item");

                    }
                },
                text: "A client side bottom item",

            }}
        />
    );
}