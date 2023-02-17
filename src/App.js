import React from "react"

export default class App extends React.Component {

    state = {
        auth: "IsAuthenticated()",
      };

    render() {
        return (
            <div className="container">
                Running App! foo is hi
                co : {this.state.auth}
            </div>
        )
    }
}
