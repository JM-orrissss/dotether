import React from 'react';
import RootLayout from '@/app/layout';

export default async function CurrencyDetail({ params }: { params: { slug: string } }) {
    //   const coinData = await getCurrencyBySlug(params.slug);
    const {slug} = await params;

    //   if (!coinData) return notFound();

    //   return <CurrencyPage coin={coinData} />;
    return <div>Sample currency {slug} page</div>

}