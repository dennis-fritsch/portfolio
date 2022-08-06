import { Button, Row } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'config/styles'

import Avatar from 'components/Avatar'
import { ROUTES } from 'navigation/routes'
import { ReactNode } from 'react'
import { MdOutlinePersonPin, MdPhotoLibrary, MdFastfood } from 'react-icons/md'

import { useNavigate, useLocation } from 'react-router-dom'

const StyledWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

type Props = {
  text: string
  navigateTo: string
  Icon: ReactNode
}

const HeaderLink = ({ text, navigateTo, Icon }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const splittedPath = location?.pathname?.split?.('/') ?? []
  const currentLocation = splittedPath?.length >= 2 ? splittedPath[1] : '/'

  const isActive = location?.pathname === navigateTo

  const StyledTextButton = styled(Button)`
    color: ${isActive ? COLORS.secondary : '#fff'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    &:hover {
      color: ${COLORS.secondary};
    }
  `
  const StyledLinkText = styled('div')`
    padding-left: 0.5rem;
    font-weight: 500;
    font-style: italic;
  `

  const handleOnClick = () => {
    if (navigateTo && !isActive) {
      navigate(navigateTo)
    }
  }

  // navigateTo
  return (
    <StyledTextButton type="text" onClick={handleOnClick}>
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
