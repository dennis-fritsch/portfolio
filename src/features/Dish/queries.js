import { useQuery, gql } from '@apollo/client'

// TODO: Can we use apollo cache?

export const dishQuery = gql`
  query PageQuery($slug: String!) {
    dish(where: { slug: $slug }) {
      id
      createdAt
      description {
        raw
      }
      ingredients {
        raw
      }
      slug
      title
      image {
        url
      }
    }
    dishes(where: { slug_not: $slug }, first: 5, orderBy: publishedAt_DESC) {
      slug
      title
      description {
        raw
      }
      createdAt
      image {
        url
      }
    }
  }
`
