import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div style={{ gap: "10px" }}>
        <h1 style={{ fontSize: "30px", textAlign: "center" }}>About</h1>
        {/* <User name={"Pravallika"} /> */}
        <UserClass name={"Kartheeka"} />
      </div>
    );
  }
}

export default About;
