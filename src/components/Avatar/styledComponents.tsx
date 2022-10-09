import styled from 'styled-components'

type StyledAvatarWrapperProps = {
  size: number
}

export const StyledAvatarWrapper = styled('a')<StyledAvatarWrapperProps>`
  width: ${(props) => props.size}px;
`
