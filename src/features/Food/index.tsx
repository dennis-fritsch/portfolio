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

const StyledWrapper = styled('div')`
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
`

const StyledTitle = styled(Title)`
  z-index: 3;
  position: absolute;
  bottom: 0;
  padding: 1rem;
`

const Gradient = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 12rem;
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
          <Row gutter={20}>
            <Col xs={24} sm={16} lg={16}>
              <StyledWrapper>
                <StyledImageWrapper className="animate blur">
                  <Gradient />
                  <StyledTitle level={1}>{title}</StyledTitle>
                  <StyledImage src={image.url} />
                </StyledImageWrapper>
                <StyledContent className="animate blur">
                  <RichText content={descr} renderers={richTextRenderer} />
                </StyledContent>
              </StyledWrapper>
            </Col>
            <Col xs={24} sm={8} lg={8}>
              <StyledSideBar />
            </Col>
          </Row>
        )
      })}
      <ImageNav currentRoute={ROUTES.food} />
    </>
  )
}

export default Food
