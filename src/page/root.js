import React, {Fragment} from 'react';
import { Nav } from "./nav";
import { Content } from "./content";
export class Root extends React.Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <Content></Content>
      </>
    )
  }
}