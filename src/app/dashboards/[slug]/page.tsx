import React from 'react';
import RootLayout from '@/app/layout';

export default async function DashboardDetail({ params }: { params: { slug: string } }) {
    //   const data = await getDashboardById(params.id);
    const {slug} = await params;

    //   if (!data) return notFound();

    //   return <CustomDashboard data={data} />;
    return <RootLayout><div>Sample dashboard {slug} page</div></RootLayout>
}