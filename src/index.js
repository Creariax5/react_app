import React from "react"
import { render } from "react-dom"

import App from "./App"

class root extends React.Component {
  render() {
    return (
      <App/>
    )
  }
}

render(<App/>, document.getElementById('root'))
