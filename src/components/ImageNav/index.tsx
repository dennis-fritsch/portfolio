import Camera from 'assets/camera.png'
import Pizza from 'assets/pizza.jpg'
import Portfolio from 'assets/portfolio.png'
import { ROUTES } from 'navigation/routes'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import ContentBox from 'components/ContentBox'

type Props = {
  currentRoute?: string
}

const ImageNav = ({ currentRoute = ROUTES.home }: Props) => {
  const StyledRow = styled(Row)`
    margin-top: 1rem;
  `
  const imagesData = {
    portfolio: {
      backgroundImage: Portfolio,
      title: 'Portfolio',
      navigateTo: ROUTES.portfolio,
    },
    photography: {
      backgroundImage: Camera,
      title: 'Photography',
      navigateTo: ROUTES.photography,
    },
    food: {
      backgroundImage: Pizza,
      title: 'Food',
      navigateTo: ROUTES.food,
    },
  }

  let displayImages = []

  switch (currentRoute) {
    case ROUTES.food:
      displayImages = [imagesData.portfolio, imagesData.photography]
      break
    case ROUTES.photography:
      displayImages = [imagesData.portfolio, imagesData.food]
      break
    case ROUTES.portfolio:
      displayImages = [imagesData.photography, imagesData.food]
      break
    default:
      displayImages = [
        imagesData.portfolio,
        imagesData.photography,
        imagesData.food,
      ]
      break
  }

  if (!displayImages?.length) return null

  return (
    <StyledRow gutter={8} className="animate slide delay-2">
      {displayImages.map((imageData) => {
        return (
          <Col xs={24} sm={24 / displayImages.length}>
            <ContentBox
              backgroundImage={imageData.backgroundImage}
              title={imageData.title}
              navigateTo={imageData.navigateTo}
            />
          </Col>
        )
      })}
    </StyledRow>
  )
}

export default ImageNav
