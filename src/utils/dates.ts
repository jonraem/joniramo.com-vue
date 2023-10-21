import { Post } from "../types";

export const getDateStringFromPublishedAt = (
  publishedAt: string | undefined
) => {
  if (!publishedAt) return "some point in time";
  const publishedAtDate = new Date(publishedAt);
  return `${publishedAtDate.toLocaleDateString()}, ${publishedAtDate.toLocaleTimeString()}`;
};

export const sortAscendingByPublishedAt = (a: Post, b: Post) =>
  a.publishedAt > b.publishedAt ? -1 : b.publishedAt > a.publishedAt ? 1 : 0;
