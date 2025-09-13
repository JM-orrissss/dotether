export const basePageQuery = `
  pageCollection(limit: 1, where: { slug: $slug }) {
    items {
      pageTitle
      metaData {
        title
        description
        keywords
      }
      componentsCollection {
        items {
          __typename
          ... on ComponentHero {
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
`;
