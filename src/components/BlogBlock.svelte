<script lang="ts">
  import { BASE_URL } from "$lib/Utils"

  import ArticlePlaceholderIcon from "@components/ArticlePlaceholderIcon.svelte"

  /**
   * The title of the blog post.
   *
   * @type {!string}
   */
  export let title: string

  /**
   * The description of the blog post.
   *
   * @type {!string}
   */
  export let description: string

  /**
   * The relative url of the blog post.
   *
   * @type {!string}
   */
  export let url: string

  /**
   * The background color of the placeholder header
   * image.
   *
   * @type {!string}
   */
  export let bgColor: string
</script>

<article b-3 style="content-visibility:auto">
  <div b-4 style="background-color: {bgColor}">
    <ArticlePlaceholderIcon />
  </div>

  <a href={BASE_URL + "/" + url} a-0><h3 b-1 whitespace-initial>{title}</h3></a>
  <a href={BASE_URL + "/" + url} a-0><div b-2 whitespace-initial>{description}</div></a>
</article>
