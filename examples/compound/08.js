// src/components/Chat.js

// ...

render() {
  const { messages, currentMessage } = this.state
  const { children } = this.props
  const { updateCurrentMessage, add } = this

  return (
    <div>
      <h1>Chatroom</h1>
      {React.Children.map(children, child => {
        if (child.type.displayName === 'Messages') {
          return React.cloneElement(child, { messages })
        }

        if (child.type.displayName === 'Input') {
          return React.cloneElement(child, {
            value: currentMessage,
            onChange: updateCurrentMessage
          })
        }

        if (child.type.displayName === 'Button') {
          return React.cloneElement(child, {
            onClick: add
          })
        }

        return child
      })}
    </div>
  )
}
