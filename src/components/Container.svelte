<script lang="ts">
  import Header from "@components/Header.svelte"
  import Footer from "@components/Footer.svelte"
</script>

<main font-body>
  <Header />

  <section m-10>
    <slot />
  </section>

  <Footer />
</main>
