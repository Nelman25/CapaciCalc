import { useState } from "react";
import Header from "./components/Header";
import OperationMode from "./components/OperationMode";
import InputForm from "./components/InputForm";
import { ChartSpline, MessageCircle, Send } from "lucide-react";
import Visualization from "./components/Visualization";
import { Input } from "./components/ui/input";
import AIMessage from "./components/AIMessage";
import UserMessage from "./components/UserMessage";

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

export default function App() {
  const [operation, setOperation] = useState<string>("charge");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(MESSAGES);

  const handleSendMessage = () => {
    setMessages(
      messages.concat({ sender: "User", text: message, createdAt: new Date() })
    );
    setMessage("");
  };

  return (
    <div className="max-w-[1920px] w-full mx-auto p-8">
      <Header />
      <main className="max-w-[1440px] mx-auto grid grid-cols-7 gap-4">
        <div className="flex flex-col col-span-4 gap-4">
          <OperationMode operation={operation} setOperation={setOperation} />
          <InputForm />
          <div className="flex flex-col p-4 rounded shadow bg-softBlue-100">
            <div className="flex items-center gap-2 mb-4">
              <ChartSpline className="w-5 h-5 text-[#0D99FF]" />
              <h3 className="text-lg font-semibold text-gray-800">
                Visualization
              </h3>
            </div>
            <Visualization />
            <div className="grid w-full grid-cols-2 gap-2 mt-4">
              <div className="p-4 bg-white rounded shadow">
                <span className="block text-sm text-gray-700">
                  Time Constant (τ)
                </span>
                <span className="block text-lg font-medium text-black">
                  1.0
                </span>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <span className="block text-sm text-gray-700">
                  Final Voltage
                </span>
                <span className="block text-lg font-medium text-black">
                  3.16V
                </span>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <span className="block text-sm text-gray-700">Current</span>
                <span className="block text-lg font-medium text-black">
                  1.84 mA
                </span>
              </div>

              <div className="p-4 bg-white rounded shadow">
                <span className="block text-sm text-gray-700">Energy</span>
                <span className="block text-lg font-medium text-black">
                  4.99 μJ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="flex flex-col col-span-3 max-h-[800px] p-4 rounded shadow bg-softBlue-100">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b">
            <MessageCircle className="w-5 h-5 text-[#0D99FF]" />
            <h3 className="text-lg font-semibold text-gray-800">
              AI Assistant
            </h3>
          </div>

          {/* Chat area */}
          <div className="flex-1 min-h-0 gap-4 p-3 overflow-y-auto thin-scrollbar">
            {messages.map((message) =>
              message.sender === "AI" ? (
                <AIMessage
                  message={message.text}
                  createdAt={message.createdAt}
                />
              ) : (
                <UserMessage
                  message={message.text}
                  createdAt={message.createdAt}
                />
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
      </main>
    </div>
  );
}
