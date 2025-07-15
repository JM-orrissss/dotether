import React from "react";
import RootLayout from '@/app/layout';

export default async function DashboardPage() {
    // const [marketData, trendingCoins, heatmapData] = await Promise.all([
    //   getMarketData(),
    //   getTrendingCoins(),
    //   getHeatmapData()
    // ]);

    return (
        <RootLayout><div>Sample dashboard page</div></RootLayout>

        //   <Dashboard
        //     marketData={marketData}
        //     trendingCoins={trendingCoins}
        //     heatmapData={heatmapData}
        //   />
    );
}