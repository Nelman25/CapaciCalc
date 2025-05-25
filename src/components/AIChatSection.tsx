import { MessageCircle, Send } from "lucide-react";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";
import { Input } from "./ui/input";
import { useState } from "react";

type Message = {
  sender: "AI" | "User";
  text: string;
  createdAt: Date;
};

const MESSAGES: Message[] = [
  {
    sender: "AI",
    text: "Hello! I'm here to help explain your capacitor calculations. Once you run a calculation, I'll provide detailed explanations about the results, formulas used, and practical applications.",
    createdAt: new Date(),
  },
];

export default function AIChatSection() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(MESSAGES);

  const handleSendMessage = () => {
    setMessages(
      messages.concat({ sender: "User", text: message, createdAt: new Date() })
    );
    setMessage("");
  };
  return (
    <div className="flex flex-col col-span-3 max-h-[800px] p-4 rounded shadow bg-softBlue-100">
      <div className="flex items-center gap-2 pb-4 mb-4 border-b">
        <MessageCircle className="w-5 h-5 text-[#0D99FF]" />
        <h3 className="text-lg font-semibold text-gray-800">AI Assistant</h3>
      </div>

      {/* Chat area */}
      <div className="flex-1 min-h-0 gap-4 p-3 overflow-y-auto thin-scrollbar">
        {messages.map((message) =>
          message.sender === "AI" ? (
            <AIMessage message={message.text} createdAt={message.createdAt} />
          ) : (
            <UserMessage message={message.text} createdAt={message.createdAt} />
          )
        )}
      </div>

      {/* User input area */}
      <div className="flex pt-4 mt-4 space-x-3 border-t">
        <Input
          type="text"
          placeholder="Ask me about the calculation..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <button
          onClick={handleSendMessage}
          className="flex items-center justify-center px-3 bg-blue-400 rounded shadow-sm hover:bg-blue-500"
        >
          <Send className="text-white size-5" />
        </button>
      </div>
    </div>
  );
}
