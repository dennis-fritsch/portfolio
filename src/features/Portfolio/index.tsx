import { Anchor, Row, Col, Typography } from 'antd'
import styled from 'styled-components'
import ImageNav from 'components/ImageNav'
import { ROUTES } from 'navigation/routes'
import { COLORS } from 'config/styles'
import Rating from 'components/Rating'
import Avatar from 'components/Avatar'
import AvatarImageEhoi from 'assets/avatar/e-hoi.png'
import AvatarImageApicodo from 'assets/avatar/apicodo.png'
import { useWindowDimensions } from 'config/hooks'
import { BREAKPOINT_VALUES } from 'config/styles'

const { Title, Text } = Typography

const { Link } = Anchor

// TODO: Skill dots look weird on mobile

const StyledSection = styled('div')`
  margin-bottom: 2rem;
  background-color: ${COLORS.primaryDark};
  padding: 1rem;
`

const StyledHeadline = styled(Title)`
  margin-left: 1rem;
`

const StyledAnchor = styled(Anchor)`
  margin-bottom: 2rem;
  background-color: ${COLORS.primaryDark};
  padding: 0.5rem;
`

const Portfolio = () => {
  const { width } = useWindowDimensions()

  const isMobile = width < BREAKPOINT_VALUES.sm

  return (
    <>
      <Row gutter={20}>
        <Col xs={24} sm={6} lg={4}>
          <StyledAnchor affix={!isMobile}>
            <Link href="#skills" title="skills" />
            <Link href="#apicodo" title="apicodo">
              <Link href="#apicodo-2022" title="2022" />
              <Link href="#apicodo-2020" title="2020" />
            </Link>
            <Link href="#ehoi" title="e-hoi">
              <Link href="#ehoi-2019" title="2019" />
              <Link href="#ehoi-2016" title="2016" />
            </Link>
          </StyledAnchor>
        </Col>
        <Col xs={24} sm={18} lg={20}>
          <StyledSection>
            <Title id="skills">Skills</Title>
            <Row gutter={60}>
              <Col xs={24} lg={12}>
                <Rating title="React Native" value={4} disabled />
                <Rating title="React" value={4} disabled />
                <Rating title="CSS" value={4.5} disabled />
              </Col>
              <Col xs={24} lg={12}>
                <Rating title="ColdFusion" value={3.5} disabled />
                <Rating title="jQuery" value={4} disabled />
                <Rating title="SQL" value={3} disabled />
              </Col>
            </Row>
          </StyledSection>
          <StyledSection id="apicodo">
            <Row>
              <Avatar
                AvatarImage={AvatarImageApicodo}
                linkTo="https://apicodo.de/"
              />
              <StyledHeadline>Apicodo</StyledHeadline>
            </Row>
            <Title level={3} id="apicodo-2022">
              2022 - Lead App Developer
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
            <Title level={3} id="apicodo-2020">
              2020 - App Developer
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
          </StyledSection>
          <StyledSection id="ehoi">
            <Row>
              <Avatar
                AvatarImage={AvatarImageEhoi}
                linkTo="https://www.e-hoi.de/"
              />
              <StyledHeadline>e-hoi</StyledHeadline>
            </Row>
            <Title level={3} id="ehoi-2019">
              2019 - Web Developer
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
            <Title level={3} id="ehoi-2016">
              2016 - Ausbildung Fachinformatiker
            </Title>
            <Text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Text>
          </StyledSection>
        </Col>
      </Row>

      <ImageNav currentRoute={ROUTES.portfolio} />
    </>
  )
}

export default Portfolio
