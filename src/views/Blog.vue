<template>
  <div class="blog">
    <router-link to="/">{{ "<< go back" }}</router-link>
    <h1>Blog</h1>
    <div class="posts">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="post-container">
        <div v-for="post in posts" class="post-item" :key="post._id">
          <h2>
            <router-link :to="`/blog/${post.slug.current}`">
              {{ post.title }}
            </router-link>
          </h2>
          <h6>
            Published at {{ getDateStringFromPublishedAt(post.publishedAt) }}
          </h6>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import sanity from "../client";
import type { Post } from "../types";
import { fadeIn } from "../utils/animations";
import { getDateStringFromPublishedAt } from "../utils/dates";

const loading = ref(false);
const error: Ref<string | null> = ref(null);
const posts: Ref<Post[]> = ref([]);

const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt
}[0...25]`;

function fetchData() {
  loading.value = true;
  sanity.fetch(query).then(
    (data) => {
      loading.value = false;
      posts.value = data;
    },
    (err) => {
      error.value = JSON.stringify(err);
      loading.value = false;
    }
  );
}

fetchData();
fadeIn();
</script>

<style scoped>
.blog {
  width: 500px;
  margin: 0 auto;
  text-align: left;
}

.posts {
  margin: 0 auto;
  max-width: 45em;
  width: 100%;
}

.post-item {
  box-sizing: border-box;
}

h6 {
  color: #aaa;
}

@media only screen and (max-width: 768px) {
  .blog {
    width: unset;
  }
}
</style>
