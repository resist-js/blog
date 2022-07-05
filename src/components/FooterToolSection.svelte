<script lang="ts">
  /**
   * The section name.
   *
   * @type {!string}
   */
  export let section: string
</script>

<div flex-c>
  <div fw-500>{section}</div>
  <div flex-c>
    <slot />
  </div></div
>
