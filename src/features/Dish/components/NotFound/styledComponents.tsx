import styled from 'styled-components'
import { MdNoFood } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { COLORS } from 'config/styles'

export const StyledNoFood = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const StyledNoFoodIcon = styled(MdNoFood)`
  color: ${COLORS.white};
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const StyledLink = styled(Link)`
  margin-left: 0.25rem;
  font-weight: bold;
`
