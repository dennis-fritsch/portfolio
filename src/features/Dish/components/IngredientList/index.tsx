import { Typography } from 'antd'
import { RichText } from '@graphcms/rich-text-react-renderer'
import type { RichTextContent } from '@graphcms/rich-text-types'
import { StyledIngredientsList } from './styledComponents'
import { richTextRenderer } from 'config/renderer'

const { Title } = Typography

type Props = {
  ingredients: RichTextContent
}

export default ({ ingredients }: Props) => {
  return (
    <StyledIngredientsList>
      <Title level={1}>Zutaten:</Title>
      <RichText content={ingredients} renderers={richTextRenderer} />
    </StyledIngredientsList>
  )
}
