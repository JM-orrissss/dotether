import React from "react";
import RootLayout from '@/app/layout';

export default async function HomePage() {
  // const globalData = await getGlobalMarketData(); // Server function
  return (
    <RootLayout><div>Sample homepage</div></RootLayout>
    // <Home globalData={globalData} />
  );
}
