export const userPublicationsQuery = `
  query GetUserPublications($username: String!, $first: Int!) {
    user(username: $username) {
      publications(first: $first) {
        edges {
          node {
            posts(first: $first) {
              edges {
                node {
                  author {
                    username
                    id
                    name
                  }
                  url
                  title
                  subtitle
                  slug
                  canonicalUrl
                  readTimeInMinutes
                  publishedAt
                  coverImage {
                    url
                    attribution
                    photographer
                  }
                  author {
                    id
                  }
                }
              }
              totalDocuments
            }
          }
        }
      }
    }
  }
`;