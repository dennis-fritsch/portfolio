import styled from 'styled-components'
import { Row } from 'antd'
import { COLORS } from 'config/styles'
import { Typography } from 'antd'

const { Title, Text } = Typography

export const StyledRow = styled(Row)`
  margin-top: 1rem;
`

export const StyledLeftColumnWrapper = styled('div')`
  background-color: ${COLORS.primaryDark};
  padding: 0.5rem;
`

export const StyledSideBar = styled('div')`
  background-color: ${COLORS.primaryDark};
  padding: 0.5rem;
  height: 100%;
`

export const StyledContent = styled('div')`
  padding: 1rem;
`

export const StyledImageWrapper = styled('div')`
  width: 100%;
  position: relative;
`

export const StyledImage = styled('img')`
  width: 100%;
  z-index: 1;
  border: 1px solid ${COLORS.secondary};
`

export const StyledImageSkeleton = styled('div')`
  height: 18rem;
  width: 100%;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.secondary};
`

export const StyledPlaceholder = styled('div')`
  height: 20rem;
`

export const StyledTitle = styled(Title)`
  z-index: 3;
  position: absolute;
  top: -2rem;
  left: 1rem;
  right: 1rem;
  padding: 1rem;
  background: ${COLORS.primaryTransparent};
  border: 1px solid ${COLORS.secondary};
  border-radius: 30px;
  text-align: center;
`

export const Gradient = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 8rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    ${COLORS.primaryDark},
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 2;
`

export const StyledOtherDishesContainer = styled('div')`
  margin-top: 4rem;
`
