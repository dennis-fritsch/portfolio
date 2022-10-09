import { SIZES } from 'config/enums'
import { useNavigate } from 'react-router-dom'
import {
  StyledBox,
  StyledGradient,
  StyledImage,
  StyledTitle,
} from './styledComponents'

type Props = {
  style?: React.CSSProperties
  navigateTo?: string
  linkTo?: string
  backgroundImage: string
  title?: string
  size?: SIZES.small | SIZES.medium
}

const ContentBox = ({
  style = {},
  navigateTo,
  linkTo,
  backgroundImage,
  title,
  size = SIZES.medium,
}: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo)
    } else if (linkTo) {
      window.location.href = linkTo
    }
  }

  return (
    <StyledBox
      size={size}
      hoverable={!!navigateTo || !!linkTo}
      bodyStyle={{
        padding: 0,
      }}
      style={style || {}}
      onClick={handleClick}
    >
      <StyledGradient />
      {title && (
        <StyledTitle level={size === SIZES.small ? 4 : 3}>{title}</StyledTitle>
      )}
      <StyledImage backgroundImage={backgroundImage} />
    </StyledBox>
  )
}

export default ContentBox
