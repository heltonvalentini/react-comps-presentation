import React from 'react';
import { withState } from 'recompose';

...

const App = withState(...)(() => (
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
));
