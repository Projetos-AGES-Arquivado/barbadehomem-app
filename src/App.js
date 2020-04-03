import React from "react";
import { firestore } from "./plugins/firebase";
import Routes from "./routes";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.fetchUsers();
  }

  async fetchUsers() {
    const snapshot = await firestore.collection("users").get();
    this.setState({
      users: snapshot.docs.map(doc => doc.data())
    });
  }

  render() {
    return <Routes />;
  }
}
