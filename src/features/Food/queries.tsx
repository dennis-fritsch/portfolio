import { gql } from '@apollo/client'

export const dishesQuery = gql`
  query PageQuery {
    dishes(first: 12, orderBy: publishedAt_ASC) {
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
