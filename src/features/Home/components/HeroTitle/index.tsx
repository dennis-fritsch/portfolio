import { StyledWrapper, StyledTitle, StyledSubTitle } from './styledComponents'

const HeroTitle = () => {
  return (
    <StyledWrapper>
      <StyledTitle className="animate slide">Dennis Fritsch</StyledTitle>
      <StyledSubTitle className="animate slide delay-10">
        Software developer
      </StyledSubTitle>
    </StyledWrapper>
  )
}

export default HeroTitle
