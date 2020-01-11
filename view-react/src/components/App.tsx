import * as React from 'react';
import { hot } from 'react-hot-loader';

// import { TEST } from '../../../domain/test';
import { TEST } from '@domain/test';
import { UserModel } from '@domain/features/user';

const reactLogo = require('./../assets/img/react_logo.svg');
import '../assets/scss/App.scss';

class App extends React.Component<{}, undefined> {
  user: UserModel;

  constructor(props: any) {
    super(props);
    this.user = new UserModel();
    this.user.setData({
      firstname: 'React',
      lastname: 'Test'
    });

    setTimeout(() => {
      this.user.updateFirstname('Nathan');
      this.forceUpdate();
    }, 2000);
  }

  public render() {
    return (
      <div className='app'>
        <h1>Hello World!</h1>
        <p>{TEST}</p>
        <p>Foo to the barz</p>
        <p>Firstname: { this.user.state.firstname } </p>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
