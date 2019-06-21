import React from 'react';
import { compose, withState } from 'recompose';

const AppBase = ({ list, toggle, onToggleList }) => (
  <div>
    <Toggle
      toggle={toggle}
      onToggleList={() => onToggleList(!toggle)}
    />
    {toggle && <List list={list} />}
  </div>
);

const App = compose(
  withState('toggle', 'onToggleList', true),
  withState('list', null, ['a', 'b', 'c']),
)(AppBase);
