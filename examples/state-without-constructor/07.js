const list = ['a', 'b', 'c'];

class App extends Component {
  state = {
    toggle: true,
  };

  render() {
    return (
      <div>
        <Toggle
          toggle={this.state.toggle}
          onToggleList={() =>
            this.setState(prevState => ({
              toggle: !prevState.toggle,
            }))
          }
        />
        {this.state.toggle && <List list={list} />}
      </div>
    );
  }
}
