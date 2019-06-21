// src/components/Chat.js

// ...

render() {
    const { children } = this.props;
    return (
      <div>
        <h1>Chatroom</h1>
        {React.Children.map(children, child => {
          return child;
        })}
      </div>
    );
  }
