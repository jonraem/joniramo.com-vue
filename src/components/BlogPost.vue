<template>
  <div class="blog-post">
    <router-link to="/blog" style="align-self: flex-start">{{
      "<< go back"
    }}</router-link>
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h1>{{ post.title }}</h1>
      <img v-if="post.image" :src="imageUrlFor(post.image).width(480).url()" />

      <h6>Published at {{ getDateStringFromPublishedAt(post.publishedAt) }}</h6>
      <SanityBlocks :blocks="blocks" :serializers="serializers" />
    </div>
  </div>
</template>

<script setup lang="ts">
import imageUrlBuilder from "@sanity/image-url";
import { SanityBlocks } from "sanity-blocks-vue-component";
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import { defineComponent, h, ref } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";

import sanity from "../client";
import type { Post } from "../types";
import { fadeIn } from "../utils/animations";
import { getDateStringFromPublishedAt } from "../utils/dates";

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

const imageBuilder = imageUrlBuilder(sanity);
function imageUrlFor(source: any) {
  return imageBuilder.image(source);
}

const serializers = {
  types: {
    code: defineComponent({
      props: ["code"],
      setup(props) {
        return () => h(SshPre, { dark: true }, () => [props.code]);
      },
    }),
    image: defineComponent({
      props: ["asset"],
      setup(props) {
        return () =>
          h("img", {
            src: imageUrlFor(props.asset).width(480).url(),
          });
      },
    }),
  },
} as any;

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
.blog-post {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 45em;
  margin-bottom: 10em;
}

h6 {
  color: #aaa;
}
</style>
