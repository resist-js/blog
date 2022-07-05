<script lang="ts">
  import { APP_NAME } from "$lib/Utils"

  import FooterLink from "@components/FooterLink.svelte"
  import FooterTools from "@components/FooterTools.svelte"
  import Logo from "@components/Logo.svelte"
</script>

<FooterTools />

<footer f-1 style="content-visibility:auto">
  <div f-2>
    <Logo height={48} />
    <div f-3>
      <FooterLink title="Terms & Conditions" url="terms" />
      <FooterLink title="Privacy Policy" url="privacy" />
      <FooterLink title="Help" url="faq" />
      <FooterLink title="Contact Us" url="contact" />
      <FooterLink title="Web Integration" url="web-integration" />
      <FooterLink title="Blog" url="blog" />
      {#if APP_NAME === "PDFBEAR"}
        <FooterLink title="LinuxBios" url="linuxbios" />
        <FooterLink title="WhyLinuxIsBetter" url="whylinuxisbetter" />
      {/if}
    </div>
  </div>

  {#if APP_NAME === "PDFBEAR"}
    <div f-4>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</div>
  {:else if APP_NAME === "gogopdf"}
    <div f-4 text-center mb-3
      >© {new Date().getFullYear()}
      {@html APP_NAME.replace("gogo", "<strong>gogo</strong>")}. Go Go Power your PDF.</div
    >
    <div fw-300 text-center style="letter-spacing: 1.5px">A PROJECT BY INCREDIBLE HOLDINGS LIMITED</div>
  {/if}
</footer>
