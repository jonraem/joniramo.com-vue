export const getDateStringFromPublishedAt = (
  publishedAt: string | undefined
) => {
  if (!publishedAt) return "some point in time";
  const publishedAtDate = new Date(publishedAt);
  return `${publishedAtDate.toLocaleDateString()}, ${publishedAtDate.toLocaleTimeString()}`;
};
