import { Helmet } from 'react-helmet-async'
import { COLORS } from 'config/styles'

export default () => {
  return (
    <Helmet>
      <style>
        {`
          body { 
            background-color: ${COLORS.primaryDark};
          }
          a,
          .ant-typography a,
          a.ant-typography,
          a.ant-anchor-link-title,
          .ant-btn-text:focus {
            color: ${COLORS.secondary}
          }
          a:hover,
          .ant-typography a:hover,
          a.ant-typography:hover,
          .ant-anchor-link-active > .ant-anchor-link-title {
            color: ${COLORS.secondaryDark};
          }
          .ant-typography,
          h1.ant-typography,
          h2.ant-typography,
          h3.ant-typography,
          h4.ant-typography,
          h5.ant-typography,
          li {
            color: ${COLORS.white}
          }
        `}
      </style>
    </Helmet>
  )
}
