import React from 'react';
import {AppBar} from '@elements'
import HeaderDesktop from './desktop/header.desktop'
import HeaderResponsive from "./responsive/header.responsive";
import Media from "@components/elements/media";

const Header = () => {

  return (
    <header>
      <AppBar color={"control"}>
        <Media lessThan={"md"}>
          <HeaderResponsive/>
        </Media>
        <Media greaterThanOrEqual={"md"}>
          <HeaderDesktop/>
        </Media>
      </AppBar>
    </header>
  )
}

export default Header


