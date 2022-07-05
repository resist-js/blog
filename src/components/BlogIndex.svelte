<script lang="ts">
  import type { IArticles } from "@components/interfaces/IArticles"

  import Container from "@components/Container.svelte"
  import BlogBlock from "@components/BlogBlock.svelte"
  import Breadcrumb from "@components/Breadcrumb.svelte"

  /**
   * A collection of Blog Articles.
   *
   * @type {!IArticles[]}
   */
  export let articles: IArticles[] = []

  /**
   * The contents of `<h1>`.
   *
   * @type {!string}
   */
  export let h1: string

  /**
   * The contents of `<h1>` for `<Breadcrumb>`.
   *
   * @type {!string}
   */
  export let h1Alt: string

  /**
   * The contents of `<h2>`.
   *
   * @type {!string}
   */
  export let h2: string

  /**
   * The contents of the footer.
   *
   * @type {!string}
   */
  export let footer: string
</script>

<Container>
  <Breadcrumb first="Blog" second={h1Alt ?? h1} />

  <div b-hc>
    <h1 b-h1 whitespace-initial>{h1}</h1>
    <h2 b-h2 whitespace-initial>{h2}</h2>

    <div
      bi-1
      style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); grid-auto-rows:1fr;content-visibility:auto"
    >
      {#each articles as article}
        <BlogBlock
          title={article.title ?? "No title."}
          description={article.meta_description ?? "No description."}
          url={article.slug}
          bgColor={article.header_image_bgcolor ?? "#dde2ef"}
        />
      {/each}
    </div>

    <div bi-2><p bi-3 whitespace-initial>{footer}</p></div>
  </div>
</Container>
