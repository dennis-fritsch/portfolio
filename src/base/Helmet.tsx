import { Helmet } from 'react-helmet-async'
import { COLORS } from 'config/styles'
import { capitalizeFirstLetter } from 'config/helper'
import { useLocation } from 'react-router-dom'

const HelmetComponent = () => {
  const location = useLocation()
  const pathSplitted =
    typeof location?.pathname === 'string' ? location.pathname.split('/') : []
  const path = pathSplitted?.length > 1 ? pathSplitted[1] : null

  return (
    <Helmet>
      <title>
        {path ? capitalizeFirstLetter({ string: path }) : 'Portfolio'} - Dennis
        Fritsch
      </title>
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

export default HelmetComponent
