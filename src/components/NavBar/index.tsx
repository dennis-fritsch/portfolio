import { Row } from 'antd'
import Avatar from 'components/Avatar'
import { ROUTES } from 'navigation/routes'
import { ReactNode } from 'react'
import { MdOutlinePersonPin, MdPhotoLibrary, MdFastfood } from 'react-icons/md'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  StyledTextButton,
  StyledLinkText,
  StyledWrapper,
} from './styledComponents'

type Props = {
  text: string
  navigateTo: string
  Icon: ReactNode
}

const HeaderLink = ({ text, navigateTo, Icon }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = location?.pathname === navigateTo

  const handleOnClick = () => {
    if (navigateTo && !isActive) {
      navigate(navigateTo)
    }
  }

  return (
    <StyledTextButton isActive={isActive} type="text" onClick={handleOnClick}>
      {Icon}
      <StyledLinkText>{text}</StyledLinkText>
    </StyledTextButton>
  )
}

const NavBar = () => {
  return (
    <StyledWrapper>
      <Avatar navigateTo={ROUTES.home} />
      <Row>
        <HeaderLink
          text="Portfolio"
          Icon={<MdOutlinePersonPin />}
          navigateTo={ROUTES.portfolio}
        />
        <HeaderLink
          text="Photography"
          Icon={<MdPhotoLibrary />}
          navigateTo={ROUTES.photography}
        />
        <HeaderLink
          text="Food"
          Icon={<MdFastfood />}
          navigateTo={ROUTES.food}
        />
      </Row>
    </StyledWrapper>
  )
}

export default NavBar
