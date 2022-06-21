export type Post = {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  publishedAt: string;
  body: any;
  image: any;
};
