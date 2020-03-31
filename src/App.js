import React from 'react';
import { firestore } from './plugins/firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.fetchUsers();
  }

  async fetchUsers() {
    const snapshot = await firestore.collection('users').get();
    this.setState({
      users: snapshot.docs.map(doc => doc.data())
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <span>Usuários: </span>
          <ul>
            {this.state.users.map(user => (
              <li key={user.name}>{user.name}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
