<script lang="ts">
  import type { IArticles } from "@components/interfaces/IArticles"

  import { APP_NAME, BASE_URL } from "$lib/Utils"

  import Container from "@components/Container.svelte"
  import BlogBlock from "@components/BlogBlock.svelte"
  import Seo from "@components/SEO.svelte"

  /**
   * The contents of `<h1>`.
   *
   * @type {!string}
   */
  export let h1: string = `The ${APP_NAME} Blog`

  /**
   * The contents of `<h2>`.
   *
   * @type {!string}
   */
  export let h2: string = "The Top Tips on organizing your PDF documents"

  /**
   * The contents of the footer.
   *
   * @type {!string}
   */
  export let footer: string = `We are the first PDF software you will actually like. With the ${APP_NAME} Blog, you'll find various how-to tutorials and productivity guides to help make PDF handling easy, just for you.`

  /**
   * A collection of Blog Articles.
   *
   * @type {!IArticles[]}
   */
  export let articles: IArticles[] = []

  /**
   * Shuffle array.
   *
   * @param {!IArticles[]} array The array.
   */
  function shuffle(array: IArticles[]): any {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }

    return array
  }

  const popularArticles = shuffle(articles).slice(0, 4)
  const howToArticles = articles.filter(article => article.type === "how-to").slice(0, 4)
  const newsArticles = articles.filter(article => article.type === "news").slice(0, 4)
</script>

<svelte:head>
  <Seo
    currentUrl=""
    title="The {APP_NAME} Blog - The best tips and tricks on managing digital documents"
    description={footer}
  />
</svelte:head>

<Container>
  <div b-hc>
    <h1 b-h1 whitespace-initial>{h1}</h1>
    <h2 b-h2 whitespace-initial>{h2}</h2>

    <div bix-2 mt-10>
      <p bi-3 whitespace-initial text-xl>Most Popular</p>
      <div
        mt-3
        mb-3
        bix-1
        style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); grid-auto-rows:1fr;content-visibility:auto"
      >
        {#each popularArticles as article}
          <BlogBlock
            title={article.title ?? "No title."}
            description={article.meta_description ?? "No description."}
            url={article.slug}
            bgColor={article.header_image_bgcolor ?? "#dde2ef"}
          />
        {/each}
      </div>
    </div>

    <div bix-2 mt-2 style="content-visibility:auto">
      <p bi-3 whitespace-initial text-xl>News</p>
      <div
        mt-3
        mb-3
        bix-1
        style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); grid-auto-rows:1fr;content-visibility:auto"
      >
        {#each newsArticles as article}
          <BlogBlock
            title={article.title ?? "No title."}
            description={article.meta_description ?? "No description."}
            url={article.slug}
            bgColor={article.header_image_bgcolor ?? "#dde2ef"}
          />
        {/each}
      </div>
      <a a-0 ft-l href={BASE_URL + "/blog/news"}>Show more</a>
    </div>

    <div bix-2 mt-2 style="content-visibility:auto">
      <p bi-3 whitespace-initial text-xl>How-To</p>
      <div
        mt-3
        mb-3
        bix-1
        style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); grid-auto-rows:1fr;content-visibility:auto"
      >
        {#each howToArticles as article}
          <BlogBlock
            title={article.title ?? "No title."}
            description={article.meta_description ?? "No description."}
            url={article.slug}
            bgColor={article.header_image_bgcolor ?? "#dde2ef"}
          />
        {/each}
      </div>
      <a a-0 ft-l href={BASE_URL + "/blog/how-to"}>Show more</a>
    </div>

    <div bix-2 mt-2 mb-3 style="content-visibility:auto">
      <p bi-3 whitespace-initial text-xl>All Articles</p>
      <div
        mt-3
        mb-3
        bix-1
        style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); grid-auto-rows:1fr;content-visibility:auto"
      >
        {#each articles.slice(0, 6) as article}
          <BlogBlock
            title={article.title ?? "No title."}
            description={article.meta_description ?? "No description."}
            url={article.slug}
            bgColor={article.header_image_bgcolor ?? "#dde2ef"}
          />
        {/each}
      </div>
      <a a-0 ft-l href={BASE_URL + "/blog/all"}>Show more</a>
    </div>

    <div bi-2 style="content-visibility:auto"><p bi-3 whitespace-initial>{footer}</p></div>
  </div></Container
>
