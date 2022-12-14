import styled from 'styled-components'
import { FontSizes } from './font-size'
import { Fonts } from './fonts'

export interface HeaderProps {
  center?: boolean
  styleLight?: boolean
  noMargin?: boolean
}

const BaseHeader = styled.h1<HeaderProps>`
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-family: ${Fonts.secondary};
  font-weight: 700;
  color: ${(props) => props.theme.darkFont};
  user-select: none;
`

export const H1 = styled(BaseHeader.withComponent('h1'))`
  font-size: ${FontSizes.h1};
  letter-spacing: 0.9px;
  ${(props) => props.noMargin && 'margin: 0;'};
`

export const H2 = styled(BaseHeader.withComponent('h2'))`
  font-size: ${FontSizes.h2};
  letter-spacing: 0.9px;
  ${(props) => props.noMargin && 'margin: 0;'};
`

export const Title = styled(BaseHeader)`
  font-size: ${FontSizes.copy};
  ${(props) => props.noMargin && 'margin: 0;'};
  font-family: ${Fonts.secondary};
  letter-spacing: 0.3px;
`
