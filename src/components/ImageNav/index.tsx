import Camera from 'assets/camera.png'
import Pizza from 'assets/pizza.jpg'
import Portfolio from 'assets/portfolio.png'
import { ROUTES } from 'navigation/routes'
import { Col } from 'antd'
import ContentBox from 'components/ContentBox'
import { SIZES } from 'config/enums'
import { StyledRow } from './styledComponents'

type Props = {
  currentRoute?: string
}

const ImageNav = ({ currentRoute = ROUTES.home }: Props) => {
  const imagesData = {
    portfolio: {
      key: 0,
      backgroundImage: Portfolio,
      title: 'Portfolio',
      navigateTo: ROUTES.portfolio,
    },
    photography: {
      key: 1,
      backgroundImage: Camera,
      title: 'Photography',
      navigateTo: ROUTES.photography,
    },
    food: {
      key: 2,
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
      {displayImages.map((imageData) => (
        <Col xs={24} sm={24 / displayImages.length} key={imageData?.key}>
          <ContentBox
            backgroundImage={imageData.backgroundImage}
            title={imageData.title}
            navigateTo={imageData.navigateTo}
            size={SIZES.small}
            key={imageData?.key}
          />
        </Col>
      ))}
    </StyledRow>
  )
}

export default ImageNav
