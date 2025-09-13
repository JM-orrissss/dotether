import { ContentfulComponent } from "./contentful.types";

export interface GenericPageProps {
    pageLandingPageCollection: {
        items: Array<{
            pageTitle: string;
            metaData?: {
                metaTitle: string;
                metaDescription: string;
            };
            componentsCollection: {
                items: Array<ContentfulComponent>;
            };
        }>;
    }
}