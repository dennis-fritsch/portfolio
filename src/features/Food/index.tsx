import ImageNav from 'components/ImageNav'
import { ROUTES } from 'config/routes'
import { useQuery, gql } from '@apollo/client'
import { RichText } from '@graphcms/rich-text-react-renderer'

const PAGES_DATA = gql`
  query PageQuery {
    dishes {
      id
      createdAt
      description
      slug
      title
      descr {
        raw
      }
    }
  }
`

type DishProps = {
  title?: string
  descr?: any
}

const Food = () => {
  const { data, loading } = useQuery(PAGES_DATA)

  const dishes = data?.dishes ?? []

  return (
    <>
      {dishes.map((dish: DishProps) => {
        return <RichText content={dish?.descr?.raw} /> // TODO: see renderer attr https://www.npmjs.com/package/@graphcms/rich-text-react-renderer
      })}
      <ImageNav currentRoute={ROUTES.food} />
    </>
  )
}

export default Food
