const App = () => (
  <State>
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
