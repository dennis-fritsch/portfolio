import styled from 'styled-components'
import { Card, Typography } from 'antd'
import { COLORS } from 'config/styles'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

export enum SIZES {
  small = 'small',
  medium = 'medium',
}

type Props = {
  style?: React.CSSProperties
  navigateTo?: string
  linkTo?: string
  backgroundImage: string
  title?: string
  size?: SIZES.small | SIZES.medium
}

const ContentBox = ({
  style = {},
  navigateTo,
  linkTo,
  backgroundImage,
  title,
  size = SIZES.medium,
}: Props) => {
  const navigate = useNavigate()

  const StyledBox = styled(Card)`
    background-color: ${COLORS.primaryLight};
    border-radius: 0.5rem;
    overflow: hidden;
    border-color: ${COLORS.primary};
    height: ${size === SIZES.small ? '8' : '12'}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  `

  const Gradient = styled('div')`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5rem;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
  `

  const StyledImage = styled('div')`
    background-image: url(${backgroundImage});
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  `

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo)
    } else if (linkTo) {
      window.location.href = linkTo
    }
  }

  return (
    <StyledBox
      hoverable={!!navigateTo || !!linkTo}
      bodyStyle={{
        padding: 0,
      }}
      style={style || {}}
      onClick={handleClick}
    >
      <Gradient />
      {title && (
        <Title
          level={size === SIZES.small ? 4 : 3}
          style={{
            color: '#fff',
            textAlign: 'center',
            zIndex: 3,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          {title}
        </Title>
      )}
      <StyledImage />
    </StyledBox>
  )
}

export default ContentBox
