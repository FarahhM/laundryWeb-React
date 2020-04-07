import React from "react";
import { Message } from "semantic-ui-react";
const MessageExampleWarning = () => (
  <div>
    <Message warning>
      <Message.Header>You must register before you can do that!</Message.Header>
      <p>Visit our registration page, then try again.</p>
    </Message>
  </div>
);

export default MessageExampleWarning;
