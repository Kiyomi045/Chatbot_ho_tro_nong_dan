import Message from "./Message";

function MessageList({ messages }) {
  return (
    <div className="p-10">
      {messages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </div>
  );
}

export default MessageList;
