<script context="module" lang="ts">
  import { BlogAPI } from "$lib/Utils"

  /**
   * Fetch Blog Article from the API
   * at build time.
   *
   * @returns {!object}
   */
  export async function load({ params }): object {
    const { article } = params

    return await BlogAPI("article", "en", article)
  }

  export const prerender = true
</script>

<script lang="ts">
  import { APP_NAME, BASE_URL } from "$lib/Utils"

  import Seo from "@components/SEO.svelte"
  import Container from "@components/Container.svelte"
  import Breadcrumb from "@components/Breadcrumb.svelte"
  import AuthorIcon from "@components/AuthorIcon.svelte"
  import ArticlePlaceholderIcon from "@components/ArticlePlaceholderIcon.svelte"

  /**
   * `IArticle` describes the API structure of Blog Articles.
   */
  interface IArticle {
    title: string
    content: string
    meta_description: string
    slug: string
    header_image_bgcolor: string
    created_at: string
    type: string
    tool: string
    tool_name: string
  }

  /**
   * The data for the Blog Article.
   *
   * @type {!Article}
   */
  export let articles: IArticle

  let {
    title,
    content,
    meta_description,
    slug,
    header_image_bgcolor,
    created_at,

    type,
    tool,
    tool_name,
  } = articles

  let bgColor = header_image_bgcolor ?? "#dde2ef"

  /**
   * Type mapping for API.
   */
  const types = {
    news: "News",
    "how-to": "How-To Guides",
  }
</script>

<svelte:head>
  <Seo currentUrl={slug} title="{title} | The {APP_NAME} Blog" description={meta_description} />
</svelte:head>

<Container>
  <Breadcrumb
    first={tool_name ?? "Blog"}
    firstUrl={tool ? `${BASE_URL}/${tool}` : undefined}
    second={types[type]}
    secondUrl={type ? `/blog/${type}` : null}
    third={title}
  />

  <article ba-3>
    <div ba-4 style="background-color: {bgColor}">
      <ArticlePlaceholderIcon />
    </div>

    <section ba-s>
      <h1 b-h1 max-w-10ch whitespace-initial text-center>{title}</h1>
      <time datetime={created_at} b-2 whitespace-initial>{new Date(created_at).toDateString()} by {APP_NAME}</time>

      <div ba-b>{@html content}</div>

      <footer ba-c>
        <AuthorIcon />
        <div ml-3>{APP_NAME}</div>
      </footer>
    </section>
  </article>
</Container>
