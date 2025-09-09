import { contentfulQuery } from "@/lib/contentfulClient";
import { componentHeader } from "@/lib/queries/componentQueries";
import React from "react";

export default async function CurrenciesPage() {
    const data = await contentfulQuery(componentHeader)
    const entries = data.componentHeaderCollection.items;

    return (
        <div>Sample currencies page</div>
    );
}