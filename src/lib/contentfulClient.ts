import { ContentfulComponent } from "@/types/contentful.types";
import { GraphQLClient, Variables } from "graphql-request";

// Environment variables for Contentful configuration
const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_ENVIRONMENT = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master";

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("Contentful environment variables are not set.");
}

// Contentful GraphQL endpoint
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

// Initialize GraphQL client
const client = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
});

// Type for Contentful query results
export interface ContentfulQueryResult<T> {
    data: T;
}

// Type for the component mapper
export type ComponentMapper = {
    [contentType: string]: React.ComponentType<ContentfulComponent>;
};

// Component mapper instance
export const componentMapper: ComponentMapper = {};

/**
 * Registers a component for a specific Contentful content type.
 * @param contentType - The Contentful content type ID.
 * @param component - The React component to render for the content type.
 */
export function registerComponent(contentType: string, component: React.ComponentType<ContentfulComponent>) {
componentMapper[contentType] = component;
}

/**
 * Executes a GraphQL query against the Contentful API.
 * Automatically wraps the query in `query {}` for convenience.
 * @param query - The GraphQL query string (without `query {}` wrapper).
 * @param variables - Optional variables for the query.
 * @returns The result of the query.
 */
export async function contentfulQuery<T>(
    query: string,
    variables?: Variables
): Promise<ContentfulQueryResult<T>> {
    try {
        const wrappedQuery = `query { ${query} }`;
        const data = await client.request<T>(wrappedQuery, variables);
        return { data };
    } catch (error) {
        console.error("Contentful GraphQL query error:", error);
        throw error;
    }
}
