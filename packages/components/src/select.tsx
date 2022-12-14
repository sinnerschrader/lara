import React from 'react'

import styled from 'styled-components'
import { BorderRadii } from './border-radius'
import { FontSizes } from './font-size'
import { StyledIcon, IconName } from './icons'
import { Spacings } from './spacing'

export interface SelectWithIconProps extends React.HTMLAttributes<HTMLSelectElement> {
  label?: string
  disabled?: boolean
  defaultIcon?: string
  icon?: IconName
  value?: string
}

export interface SelectWithIconContainerProps {
  hasLabel: boolean
  disabled?: boolean
}

export const StyledSelectLabel = styled.label`
  color: ${(props) => props.theme.mediumFont};
  font-size: ${FontSizes.copy};
  font-weight: 600;
  font-variant: all-small-caps;
`

export const StyledSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  border: none;
  background-color: ${(props) => props.theme.background};
  font-size: ${FontSizes.copy};
  padding: ${Spacings.m};
  border-bottom: solid 2px ${(props) => props.theme.inputBorderEmpty};
  border-radius: ${BorderRadii.xxs};
  color: ${(props) => props.theme.mediumFont};
  -webkit-appearance: none;
  -moz-appearance: none;
`
export const StyledSelectWithIconContainer = styled.div<SelectWithIconContainerProps>`
  display: flex;
  align-items: center;
  border-radius: ${BorderRadii.xxs};
  margin-top: ${(props) => (props.hasLabel ? Spacings.s : '0')};
  border: none;
  background-color: ${(props) => props.theme.background};
`

export const StyledInnerSelect = styled.select<SelectWithIconProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  width: auto;
  color: ${(props) => props.theme.mediumFont};
  font-size: ${FontSizes.copy};
  padding-left: 46px;
  padding-right: ${Spacings.s};
  padding-top: ${Spacings.s};
  padding-bottom: ${Spacings.s};
  text-align-last: center;
  background: transparent;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`

export const StyledSelectIcon = styled(StyledIcon)`
  position: absolute;
  transform: translateX(${Spacings.xs});
  pointer-events: none;
`
