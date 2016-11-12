import React from 'react';
import './MainView.scss';
import ChildrenView from '../../Children/components/ChildrenView';
import AccountView from '../../Account/components/AccountView';


class MainView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // addChild: this.props.addChild,
    };
  }

  render() {
    return (
      <div style={{ margin: '0 auto' }}>
        <h1>Dashboard</h1>
      </div>
    )
  }
};

export default MainView;
