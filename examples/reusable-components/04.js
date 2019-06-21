const App = () => {
  return (
    <div>
      <Button
        label={'Click Button One!'}
        handleClick={() => console.log('Clicked button One!')}
      />
      <Button
        label={'Click Button Two!'}
        handleClick={() => console.log('Clicked button Two!')}
      />
    </div>
  );
};

const Button = ({ label, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      {label}
    </button>
  );
};
