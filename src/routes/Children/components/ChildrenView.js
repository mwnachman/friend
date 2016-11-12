import React from 'react';
import './ChildrenView.scss';


class ChildrenView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
    };
  }

  addChild(e) {
    console.log(this.state.name);
    console.log(this.state.phone);
    this.props.addChild(this.state.name, this.state.phone);
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }


  render() {
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Add a Child</h2>
          <form>
    		    <input type='text' name='name' value={this.state.name} placeholder='Name' onChange={this.handleInputChange.bind(this)}></input>
				    {' '}
				    <input type='text' name='phone' value={this.state.phone} placeholder='Phone Number' onChange={this.handleInputChange.bind(this)}></input>
				    {' '}
				    <button className='btn btn-default' onClick={this.addChild.bind(this)}>
				      Add Child
				    </button>
				  </form>
		  </div>
    );
  }
};

ChildrenView.propTypes = {
  addChild: React.PropTypes.func.isRequired
  // doubleAsync: React.PropTypes.func.isRequired,
  // increment: React.PropTypes.func.isRequired
};

export default ChildrenView;
