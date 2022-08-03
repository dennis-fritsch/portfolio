import { Row, Col } from 'antd'
import ImageNav from 'components/ImageNav'
import { ROUTES } from 'navigation/routes'
import { richTextRenderer } from 'config/renderer'
import { useParams } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client'
import { RichText } from '@graphcms/rich-text-react-renderer'
import styled from 'styled-components'
import { COLORS } from 'config/styles'
import { Typography } from 'antd'
import { MdNoFood } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ContentBox, { SIZES } from 'components/ContentBox'

const { Title, Text } = Typography

// TODO: Can we use apollo cache?

const PAGES_DATA = gql`
  query PageQuery($slug: String!) {
    dish(where: { slug: $slug }) {
      id
      createdAt
      description {
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

const StyledRow = styled(Row)`
  margin-top: 1rem;
`

const StyledLeftColumnWrapper = styled('div')`
  background-color: ${COLORS.primaryDark};
  padding: 0.5rem;
  padding-bottom: 5rem;
`

const StyledSideBar = styled('div')`
  background-color: ${COLORS.primaryDark};
  padding: 0.5rem;
  height: 100%;
`

const StyledContent = styled('div')`
  padding: 1rem;
`

const StyledImageWrapper = styled('div')`
  width: 100%;
  position: relative;
`

const StyledImage = styled('img')`
  width: 100%;
  z-index: 1;
  border: 1px solid ${COLORS.secondary};
`

const StyledImageSkeleton = styled('div')`
  height: 18rem;
  width: 100%;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.secondary};
`

const StyledPlaceholder = styled('div')`
  height: 20rem;
`

const StyledTitle = styled(Title)`
  z-index: 3;
  position: absolute;
  top: -2rem;
  left: 1rem;
  right: 1rem;
  padding: 1rem;
  background: ${COLORS.primaryTransparent};
  border: 1px solid ${COLORS.secondary};
  border-radius: 30px;
  text-align: center;
`

const Gradient = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 8rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    ${COLORS.primaryDark},
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 2;
`

const StyledNoFood = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

const StyledNoFoodIcon = styled(MdNoFood)`
  color: ${COLORS.white};
  font-size: 3rem;
  margin-bottom: 1rem;
`

const StyledLink = styled(Link)`
  margin-left: 0.25rem;
  font-weight: bold;
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

const Dish = () => {
  let { slug } = useParams()

  const response = useQuery(PAGES_DATA, {
    variables: { slug },
  })

  const { called, data, loading } = response

  const dish: DishProps = data?.dish ?? {}
  const { title, description, image } = dish

  const wasNotFound = called && !loading && Object.keys(dish)?.length === 0

  const otherDishes = data?.dishes ?? []

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
              {description?.raw ? (
                <RichText
                  content={description?.raw ?? []}
                  renderers={richTextRenderer}
                />
              ) : loading ? (
                <StyledPlaceholder />
              ) : wasNotFound ? (
                <StyledNoFood>
                  <StyledNoFoodIcon />
                  <Title level={4}>
                    Leider haben wir dieses Gericht nicht gefunden.
                  </Title>
                  <Text>
                    Vielleicht findest du etwas passendes auf der
                    <StyledLink to={ROUTES.food}>Übersichtsseite</StyledLink>.
                  </Text>
                </StyledNoFood>
              ) : null}
            </StyledContent>
          </StyledLeftColumnWrapper>
        </Col>
        <Col xs={24} lg={8}>
          <StyledSideBar>
            {otherDishes?.length ? (
              <StyledSideBarTitle level={4}>Neue Gerichte:</StyledSideBarTitle>
            ) : null}
            {otherDishes.map((dish: DishProps) => (
              <ContentBox
                backgroundImage={dish?.image?.url}
                title={dish?.title}
                navigateTo={`${ROUTES.food}/${dish?.slug}`}
                size={SIZES.small}
              />
            ))}
          </StyledSideBar>
        </Col>
      </StyledRow>
      <ImageNav currentRoute={ROUTES.food} />
    </>
  )
}

export default Dish
