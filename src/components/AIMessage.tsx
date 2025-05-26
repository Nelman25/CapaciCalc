import { getRelativeTimeAgo } from "@/helpers";
import ReactMarkdown from "react-markdown";

export default function AIMessage({
  message,
  createdAt,
}: {
  message: string;
  createdAt: Date;
}) {
  return (
    <div className="flex flex-col max-w-[90%] my-3">
      <div className="flex p-3 space-x-2 bg-blue-100 border border-blue-200 rounded">
        <div className="flex items-center justify-center p-2 bg-blue-600 rounded-full size-10">
          <span className="text-lg font-medium text-white">AI</span>
        </div>
        <div className="flex-1 text-sm leading-relaxed">
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
      </div>
      <div className="flex justify-end py-2">
        <span className="text-xs text-gray-500">
          {getRelativeTimeAgo(createdAt)}
        </span>
      </div>
    </div>
  );
}
