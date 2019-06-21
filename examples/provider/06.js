// src/components/Chat.js

class Chat extends Component {

  // ...

  updateCurrentMessage = event => {/* */};

  add = () => {/* */};

  state = {
    currentMessage: "",
    messages: [],
    updateCurrentMessage: this.updateCurrentMessage,
    add: this.add
  };

  render() {
    const { children } = this.props

    <ChatContext.Provider value={this.state}>
      {children}
    </ChatContext.Provider>
  }
}
