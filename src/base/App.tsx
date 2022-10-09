import 'antd/dist/antd.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from 'navigation'
import { Layout } from 'antd'
import { Row, Col } from 'antd'
import {
  StyledAppWrapper,
  StyledHeader,
  StyledLayout,
  StyledMainContent,
} from './styledComponents'
import { HelmetProvider } from 'react-helmet-async'
import Helmet from './Helmet'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import './animate.css'

const { Content } = Layout

export default function App() {
  return (
    <HelmetProvider>
      <StyledAppWrapper>
        <Helmet />
        <StyledHeader />
        <Router>
          <StyledLayout>
            <Content>
              <Row>
                <Col
                  xs={{ span: 22, offset: 1 }}
                  sm={{ span: 20, offset: 2 }}
                  lg={{ span: 18, offset: 3 }}
                  xxl={{ span: 16, offset: 4 }}
                >
                  <NavBar />
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
    </HelmetProvider>
  )
}
