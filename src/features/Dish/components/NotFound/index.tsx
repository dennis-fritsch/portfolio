import { Typography } from 'antd'
import { StyledNoFood, StyledNoFoodIcon, StyledLink } from './styledComponents'
import { ROUTES } from 'navigation/routes'

const { Title, Text } = Typography

export default () => {
  return (
    <StyledNoFood>
      <StyledNoFoodIcon />
      <Title level={4}>Leider haben wir dieses Gericht nicht gefunden.</Title>
      <Text>
        Vielleicht findest du etwas passendes auf der
        <StyledLink to={ROUTES.food}>Übersichtsseite</StyledLink>.
      </Text>
    </StyledNoFood>
  )
}
