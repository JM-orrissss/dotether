export const componentHeader: string = `
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
`