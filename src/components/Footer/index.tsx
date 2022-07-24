import styled from 'styled-components'
import { Button } from 'antd'
import { COLORS } from 'config/styles'

import { FaGithub, FaXing } from 'react-icons/fa'
import { ReactNode } from 'react'

type Props = {
  text: string
  link: string
  Icon: ReactNode
}

const Footer = () => {
  const footerHeight = '4rem'

  const StyledFooterWrapper = styled('div')`
    height: ${footerHeight};
  `

  const StyledFooter = styled('div')`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${footerHeight};
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    display: flex;
    align-items: center;
    padding: 1rem;
  `

  const StyledFooterNavBar = styled('div')`
    display: flex;
    flex-direction: row;
  `

  const FooterLink = ({ text, link, Icon }: Props) => {
    const StyledTextButton = styled(Button)`
      color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      &:hover {
        color: ${COLORS.secondary};
      }
    `
    const StyledLinkText = styled('div')`
      padding-left: 0.5rem;
    `

    return (
      <StyledTextButton type="text" href={link}>
        {Icon}
        <StyledLinkText>{text}</StyledLinkText>
      </StyledTextButton>
    )
  }

  return (
    <StyledFooterWrapper>
      <StyledFooter>
        <StyledFooterNavBar>
          <FooterLink
            text="GitHub"
            Icon={<FaGithub />}
            link="https://github.com/Fridge-o"
          />
          <FooterLink
            text="Xing"
            Icon={<FaXing />}
            link="https://www.xing.com/profile/Dennis_Fritsch4/cv"
          />
        </StyledFooterNavBar>
      </StyledFooter>
    </StyledFooterWrapper>
  )
}

export default Footer
