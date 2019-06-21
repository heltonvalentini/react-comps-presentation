const Button = ({ handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      Click me!
    </button>
  );
};

const App = () => {
  return (
    <div>
      <Button
        handleClick={() => console.log('Clicked button One!')}
      />
      <Button
        handleClick={() => console.log('Clicked button Two!')}
      />
    </div>
  );
};
