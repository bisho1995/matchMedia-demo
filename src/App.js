import React from "react";
import "./app.css";
import "antd/dist/antd.css";
import { Typography } from "antd";

const { Title } = Typography;

export default class App extends React.PureComponent {
  state = {
    matchMediaSupported: "UNKNOWN",
    theme: "UNKNOWN",
    layoutSize: "UNKNOWN",
  };

  componentDidMount() {
    if (!window.matchMedia) {
      return this.setState({ matchMediaSupported: "UNSUPPORTED" });
    }

    if (window.matchMedia("(max-width: 600px)").matches) {
      this.setState({ layoutSize: "MOBILE" });
    } else {
      this.setState({ layoutSize: "DESKTOP" });
    }
    window.matchMedia("(max-width: 600px)").addEventListener("change", (e) => {
      if (e.matches) {
        this.setState({ layoutSize: "MOBILE" });
      } else {
        this.setState({ layoutSize: "DESKTOP" });
      }
    });

    this.setState({ matchMediaSupported: "SUPPORTED" });
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.setState({ theme: "DARK" });
    } else {
      this.setState({ theme: "LIGHT" });
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "DARK" : "LIGHT";
        this.setState({ theme: newColorScheme });
      });
  }

  render() {
    const { matchMediaSupported, theme, layoutSize } = this.state;

    if (matchMediaSupported === "UNKNOWN") {
      return "Loading...";
    }
    if (matchMediaSupported === "UNSUPPORTED") {
      return "Oops, seems like you cannot run this app in your current browser";
    }
    const isDarkTheme = theme === "DARK";
    const isMobile = layoutSize === "MOBILE";
    return (
      <div
        style={{
          background: isDarkTheme ? "#000" : "#fff",
          color: isDarkTheme ? "#fff" : "#000",
          width: "100vw",
          height: "100vh",
          minHeight: "100vh",
          padding: isMobile ? 20 : 100,
        }}
      >
        <Title style={{ color: isDarkTheme ? "#fff" : "#000" }}>
          {isDarkTheme ? "Dark Theme" : "Light Theme"}
        </Title>
        <br />
        {isMobile ? "You are on a mobile" : "You are on a desktop"}
      </div>
    );
  }
}
