// src/components/Chat.js

class Chat extends Component {

  // ...

  render() {
    const { children } = this.props

    return (
      <div>
        <h1>Chatroom</h1>
        {children}
      </div>
    )
  }
}
