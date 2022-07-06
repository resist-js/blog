<script lang="ts">
  import { APP_NAME, BASE_URL, THEME_COLOR } from "$lib/Utils"

  import Logo from "@components/Logo.svelte"
</script>

{#if APP_NAME === "gogopdf"}
  <div
    w-fill
    style="height: 6px; background: -webkit-gradient(linear,left top,right top,from(#7966ee),color-stop(8%, #7966ee),color-stop(8%, #996cfb),color-stop(14%, #996cfb),color-stop(14%, #b26cfc),color-stop(20%, #b26cfc),color-stop(20%, #e26be2),color-stop(26%, #e26be2),color-stop(26%, #fb5cab),color-stop(32%, #fb5cab),color-stop(32%, #f1464b),color-stop(38%, #f1464b),color-stop(38%, #fc4d30),color-stop(44%, #fc4d30),color-stop(44%, #fd792d),color-stop(50%, #fd792d),color-stop(50%, #fd9e31),color-stop(56%, #fd9e31),color-stop(56%, #eac52f),color-stop(62%, #eac52f),color-stop(62%, #77d74d),color-stop(68%, #77d74d),color-stop(68%, #1fca4d),color-stop(74%, #1fca4d),color-stop(74%, #05c7ca),color-stop(80%, #05c7ca),color-stop(80%, #28b3e0),color-stop(86%, #28b3e0),color-stop(86%, #5885ea),color-stop(92%, #5885ea),color-stop(92%, #2995ff),to(#2995ff))"
  />
{/if}

<header h-1 style="box-shadow:0 2px 3px rgb(0 0 0 / 10%);border-color:{THEME_COLOR}">
  <Logo />

  <div p-1>
    {#if APP_NAME === "PDFBEAR"}
      <a a-0 p-0 p-pr href="{BASE_URL}/pricing">Pricing</a>
      <a a-0 p-0 p-ft color-white href="{BASE_URL}/pro">FREE TRIAL</a>
    {/if}
  </div>
</header>
