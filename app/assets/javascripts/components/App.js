const React        = require('react');
const Component    = React.Component;
const SubComponent = require('./SubComponent');
const Link         = require('react-router').Link;

class App extends Component {
  render() {
    return(
      <div>
        This has a sub component:
        <SubComponent />
        
        <hr/>

        <Link to="about">About Us</Link> | <Link to="contact">Contact Us</Link>

        <hr/>

        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
