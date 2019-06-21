const AppBase = ({ toggle, onToggleList }) => (
  <div>
    <Toggle
      toggle={toggle}
      onToggleList={() => onToggleList(!toggle)}
    />
    {toggle && <List list={list} />}
  </div>
);

const App = withState('toggle', 'onToggleList', true)(AppBase);
