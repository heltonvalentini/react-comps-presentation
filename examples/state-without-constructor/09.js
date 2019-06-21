class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  onUpdateState = value => {
    this.setState({ value });
  };

  render() {
    return this.props.children(this.state.value, this.onUpdateState);
  }
}
