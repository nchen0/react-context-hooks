import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  // This looks up the component tree and find the first time it finds a themecontextprovider and it will have access to the data that the contextprovider is providing.
  static contextType = ThemeContext;
  render() {
    // This.context is now the data that we are passing through in that provider.
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
