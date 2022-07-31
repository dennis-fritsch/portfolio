import { Typography } from 'antd'

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
}
