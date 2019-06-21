class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialState,
    };
  }

  onUpdateState = value => {
    this.setState({ value });
  };

  render() {
    return this.props.children(this.state.value, this.onUpdateState);
  }
}

const App = () => (
  <State initialState={true}>
    {(toggle, onToggleList) => (
      <div>
        <Toggle
          toggle={toggle}
          onToggleList={() => onToggleList(!toggle)}
        />
        {toggle && <List list={list} />}
      </div>
    )}
  </State>
);
