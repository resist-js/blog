<script context="module" lang="ts">
  import { BlogAPI } from "$lib/Utils"

  /**
   * Fetch list of `all` type Blog Articles from the API
   * at build time.
   *
   * @returns {!object}
   */
  export async function load(): object {
    return await BlogAPI("how-to")
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
    currentUrl="how-to"
    title="How-To Guides | The {APP_NAME} Blog"
    description="Tutorials on how to use {APP_NAME}'s tools. Convert, modify, edit, or even eSign files in any way you'd like."
  />
</svelte:head>

<BlogIndex
  h1="How-To Guides"
  h2="Step-by-step tutorials on using {APP_NAME} tools"
  footer="Tutorials on how to use {APP_NAME}'s tools. Convert, modify, edit, or even eSign files in any way you'd like."
  articles={$$props.articles}
/>
