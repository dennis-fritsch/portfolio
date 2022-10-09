import styled from 'styled-components'
import { BREAKPOINTS, COLORS, getBreakpointInPixel } from 'config/styles'

export const StyledWrapper = styled('div')`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const sharedTextStyle = `
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`

export const StyledTitle = styled('span')`
  ${sharedTextStyle}
  font-size: 2rem;
  color: ${COLORS.secondary};
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
  @media screen and (min-width: ${getBreakpointInPixel(BREAKPOINTS.sm)}) {
    font-size: 4rem;
    line-height: 3rem;
  }
`

export const StyledSubTitle = styled('span')`
  ${sharedTextStyle}
  font-size: 1rem;
  color: ${COLORS.primaryLight};
  line-height: 1rem;
  text-align: center;
  @media screen and (min-width: ${getBreakpointInPixel(BREAKPOINTS.sm)}) {
    font-size: 2rem;
    line-height: 3rem;
  }
`
