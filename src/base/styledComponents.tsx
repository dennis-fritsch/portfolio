import styled from 'styled-components'
import { COLORS } from 'config/styles'
import { Layout } from 'antd'

export const StyledLayout = styled(Layout)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${COLORS.primary};
`

export const StyledHeader = styled('div')`
  width: 100%;
  height: 12.25rem;
  position: absolute;
  top: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`

export const StyledAppWrapper = styled('div')`
  position: relative;
  min-height: 100vh;
  background-color: ${COLORS.primary};
`

export const StyledMainContent = styled('div')`
  padding-top: 2rem;
`
