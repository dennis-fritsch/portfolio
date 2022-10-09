import styled from 'styled-components'
import { Card, Typography } from 'antd'
import { COLORS } from 'config/styles'
import { SIZES } from 'config/enums'

const { Title } = Typography

type StyledBoxProps = {
  size: any // TODO: Why does 'SIZES.small | SIZES.medium' not work?
}

type StyledImageProps = {
  backgroundImage: string
}

export const StyledBox = styled(Card)<StyledBoxProps>`
  background-color: ${COLORS.primaryLight};
  border-radius: 0.5rem;
  overflow: hidden;
  border-color: ${COLORS.primary};
  height: ${(props) => (props.size === SIZES.small ? '8' : '12')}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`

export const StyledGradient = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 2;
`

export const StyledImage = styled('div')<StyledImageProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`
export const StyledTitle = styled(Title)`
  color: ${COLORS.white};
  text-align: center;
  z-index: 3;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
