export type Category = {
  _id: string;
  title: string;
};

export type Post = {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  categories: Category[];
  publishedAt: string;
  body: any;
  image: any;
};
