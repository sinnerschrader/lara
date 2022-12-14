import React from 'react'
import { Link, NavLink, NavLinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Flex } from '@rebass/grid'

import { FontSizes } from './font-size'
import { Spacings } from './spacing'

export const StyledNavWrapper = styled(Flex)`
  display: flex;
  align-items: center;
  padding: 0 ${Spacings.l};
  background: ${(props) => props.theme.header};
  color: ${(props) => props.theme.headerFont};
  position: sticky;
  top: 0;
  z-index: 5;
  height: 60px;

  svg {
    fill: ${(props) => props.theme.headerFont};
  }

  /* iPhone X support */
  @supports (padding: max(0px)) {
    padding-left: max(${Spacings.xl}, env(safe-area-inset-left));
    padding-right: max(${Spacings.xl}, env(safe-area-inset-right));
  }
`

export const StyledNavItemsWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding-left: ${Spacings.l};
`

export const StyledMobileNavItemStyle = css`
  justify-content: flex-end;
  margin-right: 0;
  border-top: 0;
  padding-bottom: 0;
  font-size: ${FontSizes.copy};
  opacity: 0.7;
  &.active {
    opacity: 1;
    font-weight: bold;
    letter-spacing: 0.3px;
    border-top: 0;
  }
`

export interface NavItemProps extends NavLinkProps {
  isMobile: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StyledNavItem = styled(({ isMobile, ...rest }: NavItemProps) => <NavLink {...rest} />)`
  height: 60px;
  display: flex;
  align-items: center;
  margin-right: ${Spacings.m};
  text-decoration: none;
  color: ${(props) => props.theme.headerFont};
  font-size: ${FontSizes.copy};
  transition: 0.1s all;
  border-bottom: ${Spacings.xxs} solid transparent;
  padding-top: ${Spacings.xxs};
  ${(props) =>
    !props.isMobile &&
    `
    &:hover {
      border-bottom: ${Spacings.xxs} solid ${props.theme.iconWhite};
    }
  `}
  ${(props) =>
    props.isMobile &&
    `
    color: ${props.theme.darkFont};
  `}
  &.active {
    border-bottom: ${Spacings.xxs} solid ${(props) => props.theme.iconWhite};
  }
  ${(props) => props.isMobile && StyledMobileNavItemStyle}
`

export const StyledLogoutItem = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.headerFont};
  font-size: ${FontSizes.copy};
  transition: 0.1s all;
  opacity: 0.8;
  ${StyledMobileNavItemStyle}

  :hover {
    cursor: pointer;
  }
`

export const StyledLaraLink = styled(Link)`
  svg #left,
  svg #right {
    transition: transform 0.5s;
  }
  &:hover {
    opacity: 0.8;
    svg #left {
      transform: translateX(7px);
    }
    svg #right {
      transform: translateX(-7px);
    }
  }
`
export const StyledAvatarMenuItem = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.buttonPrimaryFont};
`

export const StyledAvatarText = styled.div`
  font-size: ${FontSizes.copy};
  margin-right: ${Spacings.m};
  @media (max-width: 720px) {
    display: none;
  }
`
export const StyledLink = styled.div`
  cursor: pointer;
`

export const StyledMobileNavWrapper = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.buttonPrimaryFont};
  position: fixed;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`
