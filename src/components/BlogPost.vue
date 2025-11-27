<template>
  <div class="blog-post">
    <router-link to="/blog" style="align-self: flex-start">
      {{ "<< go back" }}
    </router-link>

    <p class="loading" v-if="loading">Loading...</p>

    <p v-if="error" class="error">
      <!-- {{ error }} -->
      There doesn't seem to be anything here 🤔
    </p>

    <div v-if="post" class="content">
      <h1>{{ post.title }}</h1>
      <img
        alt="Irrelevant header image for blog post"
        v-if="post.image"
        :src="getImageUrl(post.image).width(1080).url()"
      />

      <p class="tagline">
        Published at {{ getDateStringFromPublishedAt(post.publishedAt) }}
      </p>
      <PortableText :value="blocks" :components="components" />
    </div>
  </div>
</template>

<script setup lang="ts">
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, PortableTextComponents } from "@portabletext/vue";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { h, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";

import sanity from "../client";
import { fadeIn } from "../utils/animations";
import { getDateStringFromPublishedAt } from "../utils/dates";
import type { Post } from "../types";

const loading = ref(false);
const error: Ref<string | null> = ref(null);
const post: Ref<Post | null> = ref(null);
const blocks = ref([]);

const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  publishedAt,
  body,
 "image": mainImage{
    asset->{
      _id,
      url
    }
  }
}[0]
`;

function getImageUrl(source: any) {
  return imageUrlBuilder(sanity).image(source);
}

interface CodeNode {
  code: string;
  language?: string;
}

interface ImageNode {
  asset: { _ref: string; _type: string };
  alt?: string;
}

const components: PortableTextComponents = {
  types: {
    code: ({ value }: { value: CodeNode }) => {
      const highlightedCode = hljs.highlightAuto(value.code).value;

      return h("pre", { class: "hljs", style: "padding: 1rem;" }, [
        h("code", { innerHTML: highlightedCode }),
      ]);
    },
    image: ({ value }: { value: ImageNode }) =>
      h("img", {
        src: value.asset ? getImageUrl(value.asset).width(1080).url() : "",
        alt: value.alt || "Somewhat relevant blog post image",
        style: "width: 100%;",
      }),
  },
};

function fetchData() {
  const route = useRoute();
  loading.value = true;
  sanity.fetch(query, { slug: route.params.slug }).then(
    (data) => {
      loading.value = false;
      post.value = data;
      blocks.value = data.body;
    },
    (err) => {
      console.log(err);
      error.value = `${err.name}: ${err.message}`;
      loading.value = false;
    }
  );
}

fetchData();
fadeIn();
</script>

<style scoped>
.loading {
  margin-top: 2rem;
}

.blog-post {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0 auto 10rem;
  max-width: 45em;
  word-break: break-word;
}

.tagline {
  font-size: 0.8rem;
  color: var(--meta-light);
  margin: 0 0 1rem;
}
</style>
