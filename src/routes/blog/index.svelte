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

<script>
  import Main from "@components/Main.svelte"
</script>

<Main articles={$$props.articles} />
