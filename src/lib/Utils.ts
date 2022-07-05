import { apiGet } from "$lib/API"

/**
 * App Name.
 *
 * @exports
 * @type {!string}
 */
export const APP_NAME = __APPNAME__

/**
 * Theme color.
 *
 * @exports
 * @type {!string}
 */
export const THEME_COLOR = APP_NAME === "PDFBEAR" ? "#4d73c0" : "#20ca4c"

/**
 * Canonical.
 *
 * @exports
 * @type {!string}
 */
export const BASE_URL = "/"
/*export const BASE_URL =
  import.meta.env.VITE_ENV === "development"
    ? `https://dev.${APP_NAME.toLowerCase()}.com`
    : `https://${APP_NAME.toLowerCase()}.com`*/

/**
 * Fetch list of `type` type Blog Articles from the API
 * at build time. Or fetch a specific blog article using `id`.
 *
 * @param {"news" | "all" | "how-to" | "article"} type The type.
 * @param {"en"} lang The locale.
 * @param {string} id The article slug.
 *
 * @returns {!object}
 */
export async function BlogAPI(
  type: "news" | "all" | "how-to" | "article",
  lang: "en" = "en",
  id?: string,
): Promise<object> {
  let url = type === "all" ? `/api/v1/blogs?lang=${lang}` : `/api/v1/blogs?lang=${lang}&type=${type}`
  if (type === "article") {
    url = `/api/v1/blogs/${id}?lang=en`
  }
  let articles = await apiGet(url)

  if (articles?.length > 0) {
    articles = articles.filter(article => article.tool_used !== 1)
  }

  return {
    status: 200,
    props: {
      articles: articles,
    },
  }
}
