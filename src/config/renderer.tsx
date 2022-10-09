import { Typography, Row } from 'antd'
import styled from 'styled-components'
import { COLORS } from 'config/styles'
import { ReactNode } from 'react'

const { Title, Text } = Typography

const StyledTable = styled('table')`
  border: 1px solid ${COLORS.secondary};
`

const StyledCell = styled('td')`
  padding: 0.5rem;
`

type Props = {
  children: ReactNode
}

// https://www.npmjs.com/package/@graphcms/rich-text-react-renderer
export const richTextRenderer = {
  h1: ({ children }: Props) => <Title level={1}>{children}</Title>,
  h2: ({ children }: Props) => <Title level={2}>{children}</Title>,
  h3: ({ children }: Props) => <Title level={3}>{children}</Title>,
  h4: ({ children }: Props) => <Title level={4}>{children}</Title>,
  h5: ({ children }: Props) => <Title level={5}>{children}</Title>,
  bold: ({ children }: Props) => <strong>{children}</strong>,
  p: ({ children }: Props) => <Text>{children}</Text>,
  table: ({ children }: Props) => <StyledTable>{children}</StyledTable>,
  table_cell: ({ children }: Props) => <StyledCell>{children}</StyledCell>,
  code: ({ children }: Props) => (
    <Text
      style={{
        color: COLORS.primaryLight,
        background: COLORS.primaryDark,
        padding: '.1rem',
        paddingLeft: '.3rem',
        paddingRight: '.3rem',
        border: `1px solid ${COLORS.primaryLight}`,
      }}
    >
      {children}
    </Text>
  ),
}
