/**
 * `IArticles` matching to Blog API.
 *
 * @exports
 */
export interface IArticles {
  /**
   * The title of the blog article.
   *
   * @type {!string}
   */
  title: string

  /**
   * The type of the blog article.
   *
   * @type {!string}
   */
  type: string

  /**
   * The description of the blog article.
   *
   * @type {!string}
   */
  meta_description: string

  /**
   * The relative blog article url.
   *
   * @type {!string}
   */
  slug: string

  /**
   * The background color of the placeholder header
   * image.
   *
   * @type {!string}
   */
  header_image_bgcolor: string
}
