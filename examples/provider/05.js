// src/components/Chat.js

// ...

render() {
  const { children } = this.props;
  const { messages, currentMessage } = this.state;
  const { updateCurrentMessage, add } = this;
  const context = {
    messages,
    currentMessage,
    updateCurrentMessage,
    add
  }

  return (
    <ChatContext.Provider value={context}>
      <h1>Chatroom</h1>
      {children}
    </ChatContext.Provider>
  )
}
