import { Row, Col } from 'antd'
import ImageNav from 'components/ImageNav'
import { ROUTES } from 'navigation/routes'
import { useQuery } from '@apollo/client'
import ContentBox from 'components/ContentBox'
import { SIZES } from 'config/enums'
import { StyledSideBarTitle } from './styledComponents'
import { dishesQuery } from './queries'

type DishProps = {
  title?: string
  description?: any
  image?: any
  slug?: string
}

const Food = () => {
  const response = useQuery(dishesQuery)

  const { data } = response
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
