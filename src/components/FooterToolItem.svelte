<script lang="ts">
  import { BASE_URL } from "$lib/Utils"

  /**
   * The Tool.
   *
   * @type {!string}
   */
  export let title: string

  /**
   * The Tool URL.
   *
   * @type {!string}
   */
  export let url: string
</script>

<div ft-l>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    ft-svg
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <line x1="9" y1="9" x2="10" y2="9" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
  <a a-0 href={BASE_URL + "/" + url}>{title}</a>
</div>
