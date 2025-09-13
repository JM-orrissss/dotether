export interface GenericPageProps {
    pageCollection: {
        items: Array<{
            pageTitle: string;
            metaData?: {
                title: string;
                description: string;
                keywords?: string[];
            };
            componentsCollection: {
                items: Array<any>;
            };
        }>;
    }
}