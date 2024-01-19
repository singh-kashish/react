import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://api.github.com/users/singh-kashish",
      userInfo: { name: "NULL" },
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Profile</h1>
        <img
          src={this.state?.userInfo?.avatar_url}
          alt="profilePicture"
          style={{ borderRadius: "200px" }}
        />
        <h2>{this.state?.userInfo?.name}</h2>
        <h3>{this.state?.userInfo?.bio}</h3>
        <h4>
          <a href={"http://" + this.state?.userInfo?.blog} target="blank">
            LinkedIn
          </a>
        </h4>
        <h4>
          <a href={"" + this.state?.userInfo?.html_url} target="blank">
            Github
          </a>
        </h4>
      </div>
    );
  }
  async componentDidMount() {
    let profileData = await fetch(this.state.url);
    let usableData = await profileData.json();
    console.log(usableData);
    this.setState({ userInfo: usableData }); // This would only replace userInfo, and keep other state as it is.
  }
}

export default Profile;
