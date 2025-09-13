export const basePageQuery = `
  query basePageQuery($slug: String!) {
    pageLandingPageCollection(limit: 1, where: { slug: $slug }) {
      items {
        pageTitle
        metadata {
          metaTitle
          metaDescription
        }
        componentsCollection {
          items {
            __typename
            ... on ComponentHeader {
              sys {
                id
              }
              title
              subtitle
              description
              heroImage {
                url
                title
                description
              }
              variant
              horizontalAlignment
              verticalAlignment
              textColour
              backgroundColour
            }
          }
        }
      }
    }
  }
`;
