<script lang="ts">
  import { BASE_URL } from "$lib/Utils"

  import BreadcrumbIcon from "@components/BreadcrumbIcon.svelte"

  /**
   *
   *
   * @type {!string}
   */
  export let first: string = "Blog"

  /**
   *
   * @type {string}
   */
  export let firstUrl: string = BASE_URL + "/blog"

  /**
   *
   * @type {!string}
   */
  export let second: string

  /**
   *
   * @type {string}
   */
  export let secondUrl: string = undefined

  /**
   *
   * @type {string}
   */
  export let third: string = undefined
</script>

<nav b-b>
  <a href={firstUrl} fl-3 fl-4>{first}</a>
  <BreadcrumbIcon />
  {#if third}
    <a href={`${BASE_URL}${secondUrl}`} fl-3 fl-4>{second}</a>

    <BreadcrumbIcon />

    <div>{third}</div>
  {:else}
    <div>{second}</div>
  {/if}
</nav>
