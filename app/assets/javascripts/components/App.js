let React     = require('react');
let Component = React.Component;
let SubComponent = require('./SubComponent');

class App extends Component {
  render() {
    return(
      <div>
        This has a sub component:
        <SubComponent />
      </div>
    )
  }
}

module.exports = App;
