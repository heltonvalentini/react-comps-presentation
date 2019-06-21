const App = () => {
  return (
    <div>
      <Button handleClick={() => console.log('Clicked button One!')}>
        Click Button One!
      </Button>
      <Button handleClick={() => console.log('Clicked button Two!')}>
        Click Button Two!
      </Button>
    </div>
  );
};

const Button = ({ handleClick, children }) => {
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};
