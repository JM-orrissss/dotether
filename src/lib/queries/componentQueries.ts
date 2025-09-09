export const componentHeader: string =
  `query {
    componentHeaderCollection(limit: 1, where: {sys:{ id: "3MwzCUQlP9BCqsKVTN6iCU"}}) {
      items {
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
  }`