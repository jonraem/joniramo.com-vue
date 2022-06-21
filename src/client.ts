import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "a4ubjr1v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
