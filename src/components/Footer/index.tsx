import { FaGithub, FaXing } from 'react-icons/fa'
import { ReactNode } from 'react'
import {
  StyledTextButton,
  StyledLinkText,
  StyledFooterWrapper,
  StyledFooter,
  StyledFooterNavBar,
} from './styledComponents'

type Props = {
  text: string
  link: string
  Icon: ReactNode
}

const Footer = () => {
  const FooterLink = ({ text, link, Icon }: Props) => {
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
            link="https://github.com/dennis-fritsch"
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
