import React from 'react';
import Header from '../../components/Header';
import './CoreLayout.scss';
import '../../styles/core.scss';
import $ from 'jquery';


class CoreLayout extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  addChild(name, phone) {
    console.log('in addChild CoreLayout');
  }

  render() {
    return (
      <div className='container text-center'>
        <Header />
        <div className='core-layout__viewport'
          addChild={this.addChild}
          children={this.props.children}
        />
      </div>
    ); 
  } 
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
