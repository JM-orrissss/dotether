import { GraphQLClient, RequestDocument, Variables } from "graphql-request";

const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_ENVIRONMENT = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master";

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("Contentful environment variables are not set.");
}

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

const client = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
    },
});

/**
 * Executes a GraphQL query against the Contentful API.
 * @param query - The GraphQL query string or document.
 * @param variables - Optional variables for the query.
 * @returns The result of the query.
 */
export async function contentfulQuery<T = any>(
    query: RequestDocument,
    variables?: Variables
): Promise<T> {
    try {
        return await client.request<T>(query, variables);
    } catch (error) {
        console.error("Contentful GraphQL query error:", error);
        throw error;
    }
}
