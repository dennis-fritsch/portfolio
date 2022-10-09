import { Anchor, Typography } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'config/styles'

const { Title } = Typography

export const StyledSection = styled('div')`
  margin-bottom: 2rem;
  background-color: ${COLORS.primaryDark};
  padding: 1rem;
`

export const StyledHeadline = styled(Title)`
  margin-left: 1rem;
`

export const StyledAnchor = styled(Anchor)`
  margin-bottom: 2rem;
  background-color: ${COLORS.primaryDark};
  padding: 0.5rem;
`
