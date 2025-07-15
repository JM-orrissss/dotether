import React from "react";
import RootLayout from '@/app/layout';

export default async function CurrenciesPage() {
    // const currencies = await getTopCurrencies();
    return (
        <RootLayout><div>Sample currencies page</div></RootLayout>
        // <CurrencyList currencies={currencies} />
    );
}