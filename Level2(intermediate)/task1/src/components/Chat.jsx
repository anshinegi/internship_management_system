import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

const socket = io(SOCKET_URL, {
    auth: {
        userId: "intern-user"
    }
});

function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("chatMessage", (newMessage) => {
            setMessages((previousMessages) => [
                ...previousMessages,
                newMessage
            ]);
        });

        return () => {
            socket.off("chatMessage");
        };
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (!message.trim()) {
            return;
        }

        socket.emit("chatMessage", message);

        setMessage("");
    };

    return (
        <section className="chat-section">
            <div className="chat-card">
                <h2>Real-Time Chat</h2>

                <div className="chat-messages">
                    {messages.length === 0 ? (
                        <p>No messages yet. Start a conversation!</p>
                    ) : (
                        messages.map((msg, index) => (
                            <div className="chat-message" key={index}>
                                {msg}
                            </div>
                        ))
                    )}
                </div>

                <form onSubmit={sendMessage} className="chat-form">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(event) =>
                            setMessage(event.target.value)
                        }
                    />

                    <button type="submit">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Chat;