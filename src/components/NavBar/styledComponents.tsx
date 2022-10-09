import { Button } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'config/styles'

type StyledTextButtonProps = {
  isActive: boolean
}

export const StyledWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledTextButton = styled(Button)<StyledTextButtonProps>`
  color: ${(props) => (props.isActive ? COLORS.secondary : '#fff')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  &:hover {
    color: ${COLORS.secondary};
  }
`
export const StyledLinkText = styled('div')`
  padding-left: 0.5rem;
  font-weight: 500;
  font-style: italic;
`
