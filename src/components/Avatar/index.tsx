import { Avatar } from 'antd'
import AvatarImageDennis from 'assets/avatar/dennis.jpg'
import { useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { StyledAvatarWrapper } from './styledComponents'

type Props = {
  navigateTo?: string
  linkTo?: string
  AvatarImage?: ReactNode
}

const AvatarComponent = ({
  navigateTo,
  linkTo,
  AvatarImage = AvatarImageDennis,
}: Props) => {
  const navigate = useNavigate()
  const size = 50

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo)
    } else if (linkTo) {
      window.location.href = linkTo
    }
  }

  return (
    <StyledAvatarWrapper size={size} onClick={handleClick}>
      <Avatar size={size} src={AvatarImage} />
    </StyledAvatarWrapper>
  )
}

export default AvatarComponent
