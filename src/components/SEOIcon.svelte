<script lang="ts">
  /**
   * The icon size in `width`x`height`.
   *
   * @type {!string}
   */
  export let size: string

  /**
   * If `false`, will add `rel="apple-touch-icon".
   *
   * @type {boolean}
   */
  export let isNormal: boolean = undefined

  /**
   * Filename prefix.
   *
   * @type {string}
   */
  export let prefix: string = undefined

  /**
   * Canonical.
   *
   * @type {!string}
   */
  export let canonical: string = ""
</script>

{#if isNormal}
  <link href={`${canonical}/icons/${prefix}-${size}.png`} rel="icon" sizes={`${size}x${size}`} type="image/png" />
{:else}
  <link href={`${canonical}/icons/ati-${size}.png`} rel="apple-touch-icon" sizes={`${size}x${size}`} />
{/if}
