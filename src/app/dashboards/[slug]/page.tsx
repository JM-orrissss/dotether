import React from 'react';

export default async function DashboardDetail({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    return (
        <div className="text-white p-4">
            Sample dashboard {slug} page
        </div>
    );
}