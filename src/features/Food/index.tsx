import ImageNav from 'components/ImageNav'
import { ROUTES } from 'navigation/routes'
import { useQuery, gql } from '@apollo/client'
import { Typography } from 'antd'

const { Title } = Typography

const PAGES_DATA = gql`
  query PageQuery {
    dishes {
      id
      createdAt
      description {
        raw
      }
      slug
      title
      image {
        url
        height
        width
      }
    }
  }
`

const Food = () => {
  return <ImageNav currentRoute={ROUTES.food} />
}

export default Food
