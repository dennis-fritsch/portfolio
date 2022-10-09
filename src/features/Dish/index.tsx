import { Col } from 'antd'
import ImageNav from 'components/ImageNav'
import { ROUTES } from 'navigation/routes'
import { richTextRenderer } from 'config/renderer'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { isMobile } from 'config/styles'
import ContentBox, { SIZES } from 'components/ContentBox'
import DishNotFound from './components/NotFound'
import IngredientList from './components/IngredientList'
import {
  StyledRow,
  StyledLeftColumnWrapper,
  StyledImageWrapper,
  StyledTitle,
  StyledImage,
  StyledImageSkeleton,
  Gradient,
  StyledContent,
  StyledPlaceholder,
  StyledOtherDishesContainer,
  StyledSideBar,
} from './styledComponents'
import { dishQuery } from './queries'

type DishProps = {
  title?: string
  description?: any
  ingredients?: any
  image?: any
  slug?: string
}

const Dish = () => {
  let { slug } = useParams()

  const response = useQuery(dishQuery, {
    variables: { slug },
  })

  const { called, data, loading } = response

  const dish: DishProps = data?.dish ?? {}
  const { title, description, ingredients, image } = dish
  const ingredientsData = ingredients?.raw ?? []
  const descriptionData = description?.raw ?? []

  const wasNotFound = called && !loading && Object.keys(dish)?.length === 0

  const otherDishes = data?.dishes ?? []

  const OtherDishesComponent = () => {
    if (!otherDishes?.length) return null

    return otherDishes.map((dish: DishProps) => (
      <ContentBox
        backgroundImage={dish?.image?.url}
        title={dish?.title}
        navigateTo={`${ROUTES.food}/${dish?.slug}`}
        size={SIZES.small}
        key={dish?.slug}
      />
    ))
  }

  return (
    <>
      <StyledRow gutter={20}>
        <Col xs={24} lg={16}>
          <StyledLeftColumnWrapper>
            <StyledImageWrapper>
              {title ? <StyledTitle level={2}>{title}</StyledTitle> : null}
              <>
                {image?.url ? (
                  <StyledImage src={image?.url} />
                ) : loading ? (
                  <StyledImageSkeleton />
                ) : null}
                {!wasNotFound ? <Gradient /> : null}
              </>
            </StyledImageWrapper>
            <StyledContent>
              {isMobile ? (
                <IngredientList ingredients={ingredientsData} />
              ) : null}
              {description?.raw ? (
                <RichText
                  content={descriptionData}
                  renderers={richTextRenderer}
                />
              ) : loading ? (
                <StyledPlaceholder />
              ) : wasNotFound ? (
                <DishNotFound />
              ) : null}
              {!isMobile ? (
                <StyledOtherDishesContainer>
                  <OtherDishesComponent />
                </StyledOtherDishesContainer>
              ) : null}
            </StyledContent>
          </StyledLeftColumnWrapper>
        </Col>
        <Col xs={24} lg={8}>
          <StyledSideBar>
            {isMobile ? (
              <OtherDishesComponent />
            ) : (
              <IngredientList ingredients={ingredientsData} />
            )}
          </StyledSideBar>
        </Col>
      </StyledRow>
      <ImageNav currentRoute={ROUTES.food} />
    </>
  )
}

export default Dish
