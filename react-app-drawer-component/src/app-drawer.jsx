import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      showMenu: true
    };
    this.handleClickDrawer = this.handleClickDrawer.bind(this);
  }

  handleClickDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return (
      <div>
        <i className="fas fa-bars fa-2x" onClick={this.handleClickDrawer} id={this.state.showMenu ? 'open' : 'hidden'}></i>
      <div className="row" id={this.state.drawerOpen ? 'open' : 'hidden'}>
        <div className="column-25">
          <h2>Menu</h2>
            <a className="block mb" onClick={this.handleClickDrawer}>About</a>
            <a className="block mb" onClick={this.handleClickDrawer}>Get Started</a>
            <a className="block mb" onClick={this.handleClickDrawer}>Sign In</a>
        </div>
          <div className="column-75 overlay" onClick={this.handleClickDrawer}>
        </div>
      </div>
      </div>
    );
  }
}

export default AppDrawer;
