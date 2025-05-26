import { GoogleGenAI } from "@google/genai";
import { MessageCircle, Send } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";
import { useInputStore } from "@/stores/useInputStore";
import ChatLoadingDots from "./ChatLoadingDots";

type Message = {
  sender: "AI" | "User";
  text: string;
  createdAt: Date;
};

const DEFAULT_MESSAGE: Message[] = [
  {
    sender: "AI",
    text: "Hello! I'm here to help explain your capacitor calculations. Once you run a calculation, I'll provide detailed explanations about the results, formulas used, and practical applications.",
    createdAt: new Date(),
  },
];

export default function AIChatSection() {
  const genAI = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>(DEFAULT_MESSAGE);
  const [loading, setLoading] = useState(false);
  const { mode, capacitance, resistance, voltage, time } = useInputStore();

  const handleSendQuery = () => {
    if (!query) {
      return;
    }
    setMessages((prev) => [
      ...prev,
      { sender: "User", text: query, createdAt: new Date() },
    ]);
    handleAskAI();
  };

  const handleAskAI = async () => {
    try {
      setQuery("");
      setLoading(true);

      const prompt = `
        You're a Physics 2 teaching assistant. Answer in markdown with **bold** for key terms.
        Current circuit: 
        - Mode: ${mode}
        - C: ${capacitance}μF
        - R: ${resistance}kΩ
        - V₀: ${voltage}V
        - t: ${time}s
        - τ (tau): ${resistance * capacitance}ms

        Student Question: ${query}

        Keep response under 100 words. Explain like I'm a beginner.
        If the student question is not related to the topic, do not answer the question and just prompt them that the message they sent is not related to the topic.
        `;

      const response = await genAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      const text = await response.text;

      if (text) {
        const newAIMessage: Message = {
          sender: "AI",
          text,
          createdAt: new Date(),
        };
        setMessages((prev) => [...prev, newAIMessage]);
      }
    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage: Message = {
        sender: "AI",
        text: "Sorry, I encountered an error. Please try again.",
        createdAt: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col col-span-2 max-h-[800px] p-4 rounded shadow bg-softBlue-100">
      <div className="flex items-center gap-2 pb-4 mb-4 border-b">
        <MessageCircle className="w-5 h-5 text-[#0D99FF]" />
        <h3 className="text-lg font-semibold text-gray-800">AI Assistant</h3>
      </div>

      {/* Chat area */}
      <div className="flex-1 min-h-0 gap-4 p-3 overflow-y-auto thin-scrollbar">
        {messages.map((message) =>
          message.sender === "AI" ? (
            <AIMessage
              key={message.text}
              message={message.text}
              createdAt={message.createdAt}
            />
          ) : (
            <UserMessage
              key={message.text}
              message={message.text}
              createdAt={message.createdAt}
            />
          )
        )}
        {loading && <ChatLoadingDots />}
      </div>

      {/* User input area */}
      <div className="flex pt-4 mt-4 space-x-3 border-t">
        <Input
          type="text"
          placeholder="Ask me about the calculation..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendQuery();
            }
          }}
        />
        <button
          onClick={handleSendQuery}
          className="flex items-center justify-center px-3 bg-blue-400 rounded shadow-sm hover:bg-blue-500"
        >
          <Send className="text-white size-5" />
        </button>
      </div>
    </div>
  );
}
