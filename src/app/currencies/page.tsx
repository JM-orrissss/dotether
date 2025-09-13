import { contentfulQuery, componentMapper, ContentfulQueryResult } from "@/lib/contentfulClient";
import { basePageQuery } from "@/lib/queries/basePageQuery";
import { Hero } from "@/components/Hero";
import Head from "next/head";
import { GenericPageProps } from "@/types/page.types";
import { ContentfulComponent } from "@/types/contentful.types";

componentMapper["ComponentHero"] = Hero;

export default async function CurrenciesPage() {
    const { data }: ContentfulQueryResult<GenericPageProps> = await contentfulQuery(basePageQuery, { slug: "currencies" });

    console.log(data);
    if (!data.pageLandingPageCollection.items.length) {
        return { notFound: true };
    }

    const page = data.pageLandingPageCollection.items[0];
    const { pageTitle, metaData, componentsCollection } = page;

    return (
        <>
            <Head>
                <title>{metaData?.metaTitle || pageTitle}</title>
                <meta name="description" content={metaData?.metaDescription} />
            </Head>
            <div>
                {componentsCollection.items.map((component: ContentfulComponent) => {
                    const Component = componentMapper[component.__typename];
                    if (!Component) {
                        console.warn(`No component registered for: ${component.__typename}`);
                        return null;
                    }
                    return <Component key={component.sys.id} {...component} />;
                })}
            </div>
        </>
    );
}
