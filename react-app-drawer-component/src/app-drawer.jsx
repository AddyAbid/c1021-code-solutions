import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      showMenu: true
    };
    this.HandleClickDrawer = this.HandleClickDrawer.bind(this);
  }

  HandleClickDrawer() {
    if (!this.state.drawerOpen) {
      this.setState({
        drawerOpen: true,
        showMenu: false
      });
    } else {
      this.setState({
        drawerOpen: false,
        showMenu: true
      });
    }
  }

  render() {
    return (
      <div>
        <i className="fas fa-bars fa-2x" onClick={this.HandleClickDrawer} id={this.state.showMenu ? 'open' : 'hidden'}></i>
      <div className="row" id={this.state.drawerOpen ? 'open' : 'hidden'}>
        <div className="column-25">
          <h2>Menu</h2>
            <a className="block mb" onClick={this.HandleClickDrawer}>About</a>
            <a className="block mb" onClick={this.HandleClickDrawer}>Get Started</a>
            <a className="block mb" onClick={this.HandleClickDrawer}>Sign In</a>
        </div>
          <div className="column-75 overlay" onClick={this.HandleClickDrawer}>
        </div>
      </div>
      </div>
    );
  }
}

export default AppDrawer;
