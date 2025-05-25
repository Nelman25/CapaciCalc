import { getRelativeTimeAgo } from "@/helpers";

export default function UserMessage({
  message,
  createdAt,
}: {
  message: string;
  createdAt: Date;
}) {
  return (
    <div className="flex flex-col items-end pl-12 my-3">
      <div className="flex items-start justify-end w-auto p-3 space-x-2 border border-gray-300 rounded bg-gray-50">
        <p className="text-sm">{message}</p>
        <div className="flex items-center justify-center p-2 bg-gray-500 rounded-full size-10">
          <span className="text-lg font-medium text-white">You</span>
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
