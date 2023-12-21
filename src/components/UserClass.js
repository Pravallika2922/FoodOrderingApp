import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const result = await fetch("https://api.github.com/users/pravallika2922");
    const data = await result.json();
    this.setState({ userInfo: data });
  }
  render() {
    const { name, location, url } = this.state.userInfo;
    return (
      <div className="user-card">
        <div className="user-img-top">
          <img
            src="https://plus.unsplash.com/premium_photo-1682093244743-29d7a6aee65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="team"
          />
        </div>
        <div className="user-details-bottom">
          <h2>Name:{name}</h2>
          <h3>Location:{location}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
