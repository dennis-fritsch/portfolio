import { Rate } from 'antd'
import { COLORS } from 'config/styles'
import { StyledRow, StyledTitle } from './styledComponents'

type RatingTypes = {
  title: string
  value?: number
  disabled?: boolean
}

const Rating = ({ title, value, disabled }: RatingTypes) => {
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
