import styled from 'styled-components'
import { Button } from 'antd'
import { COLORS } from 'config/styles'

const footerHeight = '4rem'

export const StyledFooterWrapper = styled('div')`
  height: ${footerHeight};
`

export const StyledFooter = styled('div')`
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

export const StyledFooterNavBar = styled('div')`
  display: flex;
  flex-direction: row;
`

export const StyledTextButton = styled(Button)`
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
export const StyledLinkText = styled('div')`
  padding-left: 0.5rem;
`
