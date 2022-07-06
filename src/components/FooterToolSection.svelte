<script lang="ts">
  /**
   * The section name.
   *
   * @type {!string}
   */
  export let section: string
</script>

<div flex-c>
  <div ft-t>{section}</div>
  <div flex-c>
    <slot />
  </div></div
>
