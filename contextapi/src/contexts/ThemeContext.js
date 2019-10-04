import React, { createContext, Component } from "react";

// This will create a context for us.
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  };
  render() {
    // This below will provide the ContextProvider, this is ultimately what will wrap our data to be used. Value will be what data we want to provide.
    return (
      <ThemeContext.Provider value={{ ...this.state }}>{this.props.children}</ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
