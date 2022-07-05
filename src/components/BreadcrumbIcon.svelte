<script lang="ts">
  import { APP_NAME, THEME_COLOR } from "$lib/Utils"
</script>

{#if APP_NAME === "PDFBEAR"}
  <svg fill={THEME_COLOR} viewBox="0 0 17 11" b-a
    ><path d="M2.005.188L8.5 6.683 14.995.188 17 2.193l-8.5 8.499L0 2.193 2.005.188z" /></svg
  >
{:else}
  <svg viewBox="0 0 16 16" b-a
    ><path fill="#f1464b" d="M8,9l2-2V9L8,13,2,6.143,4.037,4Z" /><path fill="#5885ea" d="M12,4l2,2L8,13V9Z" /></svg
  >
{/if}
