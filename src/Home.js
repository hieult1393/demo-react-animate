import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [
        { id: 1, name: 'first' },
        { id: 2, name: 'second' },
        { id: 3, name: 'third' },

      ],
      name: ''
    };
  }
  add() {
    var arr = this.state.data.slice();
    arr.push({ 'id': (new Date()).getTime(), 'name': this.state.name })
    this.setState({ data: arr })
  }
  remove(id) {
    var arr = this.state.data.filter(itm => itm.id !== id);
    this.setState({ data: arr });
    console.log('remove');
  }

  handleChange(e) {
    this.setState({ name: e.target.value })
  }
  render() {
    return (
      <div>
        Enter Name
        <input onChange={this.handleChange} type="text" />
        <input onClick={this.add} type="button" value="Add" />

        <ul>
          <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionEnter={true}
            transitionLeaveTimeout={500}
            transitionLeave={true}>
            {
              this.state.data.map((player) => {
                return <li style={{ padding: '10px' }} key={player.id}>{player.name}<a style={{ marginLeft: '10px', color: 'red' }} onClick={() => this.remove(player.id)}>Click here to remove</a></li>
              })
            }
          </ReactCSSTransitionGroup>
        </ul>

      </div>
    )
  }
};
export default Home;