import { Typography } from 'antd'
import { COLORS } from 'config/styles'

const { Title, Text } = Typography

// https://www.npmjs.com/package/@graphcms/rich-text-react-renderer
export const richTextRenderer = {
  h1: ({ children }) => <Title level={1}>{children}</Title>,
  h2: ({ children }) => <Title level={2}>{children}</Title>,
  h3: ({ children }) => <Title level={3}>{children}</Title>,
  h4: ({ children }) => <Title level={4}>{children}</Title>,
  h5: ({ children }) => <Title level={5}>{children}</Title>,
  bold: ({ children }) => <strong>{children}</strong>,
  p: ({ children }) => <Text>{children}</Text>,
  code: ({ children }) => (
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
