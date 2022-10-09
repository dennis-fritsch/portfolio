import { Row, Col } from 'antd'
import styled from 'styled-components'
import ImageNav from 'components/ImageNav'
import { ROUTES } from 'navigation/routes'
import { useQuery, gql } from '@apollo/client'
import { Typography } from 'antd'
import ContentBox, { SIZES } from 'components/ContentBox'

const { Title } = Typography

const PAGES_DATA = gql`
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

const StyledSideBarTitle = styled(Title)`
  &.ant-typography  {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

type DishProps = {
  title?: string
  description?: any
  image?: any
  slug?: string
}

const Food = () => {
  const response = useQuery(PAGES_DATA)

  const { called, data, loading } = response
  const lastDishes = data?.dishes ?? []

  return (
    <>
      <StyledSideBarTitle level={4}>Neue Gerichte:</StyledSideBarTitle>{' '}
      <Row gutter={8}>
        {lastDishes.map((dish: DishProps) => {
          return (
            <Col xs={12} sm={8} key={dish?.slug}>
              <ContentBox
                backgroundImage={dish?.image?.url}
                title={dish?.title}
                navigateTo={`${ROUTES.food}/${dish?.slug}`}
                size={SIZES.small}
              />
            </Col>
          )
        })}
      </Row>
      <ImageNav currentRoute={ROUTES.food} />
    </>
  )
}

export default Food
