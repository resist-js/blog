<script lang="ts">
  import { APP_NAME, BASE_URL } from "$lib/Utils"

  /**
   * The label for the link.
   *
   * @type {!string}
   */
  export let title: string

  /**
   * The relative url for the link.
   *
   * @type {!string}
   */
  export let url: string
</script>

<div fl-1>
  {#if APP_NAME === "PDFBEAR"}
    <div fl-2 />
  {/if}
  <a href={BASE_URL + "/" + url} fl-3>{title}</a>
  {#if APP_NAME === "gogopdf" && url !== "blog"}
    <div fl-2g />
  {/if}
</div>
