import { Row, Col } from 'antd'
import ImageNav from 'components/ImageNav'
import { ROUTES } from 'config/routes'
import { richTextRenderer } from 'config/renderer'

import { useQuery, gql } from '@apollo/client'
import { RichText } from '@graphcms/rich-text-react-renderer'
import styled from 'styled-components'
import { COLORS } from 'config/styles'
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

const StyledRow = styled(Row)`
  margin-top: 1rem;
`

const StyledLeftColumnWrapper = styled('div')`
  background-color: ${COLORS.primaryDark};
  padding: 0.5rem;
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

type DishProps = {
  title?: string
  description?: any
  image?: any
}

const Food = () => {
  const response = useQuery(PAGES_DATA)

  const { data, loading } = response

  const dishes = data?.dishes ?? []

  return (
    <>
      {dishes.map(({ description, image, title }: DishProps) => {
        const descr = description?.raw ?? []

        return (
          <StyledRow gutter={20}>
            <Col xs={24} sm={16} lg={16}>
              <StyledLeftColumnWrapper>
                <StyledImageWrapper className="animate blur">
                  <StyledTitle level={2}>{title}</StyledTitle>
                  <StyledImage src={image.url} />
                  <Gradient />
                </StyledImageWrapper>
                <StyledContent className="animate blur">
                  <RichText content={descr} renderers={richTextRenderer} />
                </StyledContent>
              </StyledLeftColumnWrapper>
            </Col>
            <Col xs={24} sm={8} lg={8}>
              <StyledSideBar />
            </Col>
          </StyledRow>
        )
      })}
      <ImageNav currentRoute={ROUTES.food} />
    </>
  )
}

export default Food
