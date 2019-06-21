// src/components/Messages.js
import { ChatConsumer } from './Chat'

const Messages = () => (
  <ChatConsumer>
    {({ messages }) => (/* render Messages */)}
  </ChatConsumer>
)

// src/components/Input.js
import { ChatConsumer } from './Chat'

const Input = () => (
  <ChatConsumer>
    {({ currentMessage, updateCurrentMessage }) => (/* render Input */)}
  </ChatConsumer>
)

// src/components/Button.js
import { ChatConsumer } from './Chat'

const Button = () => (
  <ChatConsumer>
    {({ add }) => (/* render Button */)}
  </ChatConsumer>
)
