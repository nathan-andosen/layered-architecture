import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserModel, IUserData } from './services/user';
// import { UserModel } from '../../domain/features/user/user.model';
import { TEST } from '../../domain/test';
// import { TEST } from './test';
// import { TEST } from '@domain/test';

interface IProps {
  title?: string;
}

export default class App extends React.Component<IProps> {
  user: UserModel;

  constructor(props: any) {
    super(props);
    this.user = new UserModel();
    this.user.setData({
      firstname: TEST,
      // firstname: 'React',
      lastname: 'Test'
    });

    setTimeout(() => {
      this.user.updateFirstname('Nathan');
      this.forceUpdate();
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.props.title }</h1>
        <p>My react app</p>
        <p>Firstname: { this.user.state.firstname } </p>
      </div>
    );
  }
}