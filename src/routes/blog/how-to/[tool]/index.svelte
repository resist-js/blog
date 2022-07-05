<script lang="ts">
  import { page } from "$app/stores"

  import { BASE_URL } from "$lib/Utils"

  const { tool } = $page.params
</script>

<meta http-equiv="refresh" content="0;url={BASE_URL}/{tool}" />
