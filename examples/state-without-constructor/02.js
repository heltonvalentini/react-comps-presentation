const list = ['a', 'b', 'c'];

class App extends Component {
  state = {
    toggle: true,
  };

  onToggleList = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <div>
        <Toggle
          toggle={this.state.toggle}
          onToggleList={this.onToggleList}
        />
        {this.state.toggle && <List list={list} />}
      </div>
    );
  }
}
