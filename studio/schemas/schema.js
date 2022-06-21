// Import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
// Import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";

// Give the schema to the builder and provide the result to Sanity
export default createSchema({
  // Name the schema
  name: "default",
  // Concatenate our document type to the ones provided by any plugins that are installed
  types: schemaTypes.concat([blockContent, category, post]),
});
