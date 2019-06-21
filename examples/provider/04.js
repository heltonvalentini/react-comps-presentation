// src/components/Chat.js

// ...

render() {
  const { children } = this.props

  return (
    <ChatContext.Provider>
      <h1>Chatroom</h1>
      {children}
    </ChatContext.Provider>
  )
}
