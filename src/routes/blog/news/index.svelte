<script context="module" lang="ts">
  import { BlogAPI } from "$lib/Utils"

  /**
   * Fetch list of `news` type Blog Articles from the API
   * at build time.
   *
   * @returns {!object}
   */
  export async function load(): object {
    return await BlogAPI("news")
  }

  export const prerender = true
</script>

<script lang="ts">
  import { APP_NAME } from "$lib/Utils"

  import Seo from "@components/SEO.svelte"
  import BlogIndex from "@components/BlogIndex.svelte"
</script>

<svelte:head>
  <Seo
    currentUrl="news"
    title="News | The {APP_NAME} Blog"
    description="Get the latest news and updates about {APP_NAME}, including improvements and new feature alerts."
  />
</svelte:head>

<BlogIndex
  h1="News"
  h2="Wonderful announcements and product updates, just for you"
  footer="Get the latest news and updates about {APP_NAME}, including improvements and new feature alerts."
  articles={$$props.articles}
/>
