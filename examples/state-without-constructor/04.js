const AppBase = () => (
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

const App = withState(...)(AppBase);
