<script context="module" lang="ts">
  import { BlogAPI } from "$lib/Utils"

  /**
   * Fetch list of `all` type Blog Articles from the API
   * at build time.
   *
   * @returns {!object}
   */
  export async function load(): object {
    return await BlogAPI("all")
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
    currentUrl="all"
    title="All Articles | The {APP_NAME} Blog"
    description="The best tips and tricks on managing digital documents."
  />
</svelte:head>

<BlogIndex
  h1="The {APP_NAME} Blog"
  h1Alt="All Articles"
  h2="The best tips and tricks on managing digital documents"
  footer="We are the first PDF software you will actually like. With the {APP_NAME} Blog, you'll find various how-to tutorials and productivity guides to help make PDF handling easy, just for you."
  articles={$$props.articles}
/>
