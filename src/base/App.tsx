import 'antd/dist/antd.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from 'navigation'
import { Layout } from 'antd'
import { Row, Col } from 'antd'
import { COLORS } from 'config/styles'
import { ROUTES } from 'navigation/routes'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Footer from 'components/Footer'
import Avatar from 'components/Avatar'
import './animate.css'

const { Content } = Layout

const StyledLayout = styled(Layout)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${COLORS.primary};
`

const StyledHeader = styled('div')`
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

const StyledAppWrapper = styled('div')`
  position: relative;
  min-height: 100vh;
  background-color: ${COLORS.primary};
`

const StyledMainContent = styled('div')`
  padding-top: 2rem;
`

export default function App() {
  return (
    <StyledAppWrapper>
      <Helmet>
        <style>
          {`
          body { 
            background-color: ${COLORS.primaryDark};
          }
          a,
          .ant-typography a,
          a.ant-typography,
          a.ant-anchor-link-title {
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
          h5.ant-typography {
            color: ${COLORS.white}
          }
        `}
        </style>
      </Helmet>
      <StyledHeader />
      <Router>
        <StyledLayout>
          <Content>
            <Row>
              <Col span={18} offset={3}>
                <Avatar navigateTo={ROUTES.home} />
                <StyledMainContent>
                  <Navigation />
                </StyledMainContent>
              </Col>
            </Row>
          </Content>
        </StyledLayout>
      </Router>
      <Footer />
    </StyledAppWrapper>
  )
}
