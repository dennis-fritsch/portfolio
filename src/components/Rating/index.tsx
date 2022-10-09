import styled from 'styled-components'
import { Typography, Rate } from 'antd'
import { COLORS } from 'config/styles'

const { Text } = Typography

type RatingTypes = {
  title: string
  value?: number
  disabled?: boolean
}

const Rating = ({ title, value, disabled }: RatingTypes) => {
  const StyledRow = styled('div')`
    display: flex;
  `
  const StyledTitle = styled(Text)`
    font-size: 1.25rem;
    flex: 1;
  `

  return (
    <StyledRow>
      <StyledTitle>{title}</StyledTitle>
      <Rate
        allowHalf
        value={value}
        disabled={disabled}
        style={{ color: COLORS.secondaryDark }}
      />
    </StyledRow>
  )
}

export default Rating
