export const getRelativeTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const past = new Date(date);

  const diffsInMilliseconds = now.getTime() - past.getTime();

  const diffInMinutes = Math.floor(diffsInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffsInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffsInMilliseconds / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 1) return "just now";
  else if (diffInHours < 1)
    return `${diffInMinutes}min${diffInMinutes > 1 ? "s" : ""} ago`;
  else if (diffInDays < 1)
    return `${diffInHours}hr${diffInHours > 1 ? "s" : ""} ago`;
  else return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
};
