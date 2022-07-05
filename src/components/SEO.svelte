<script lang="ts">
  import { BASE_URL, THEME_COLOR } from "$lib/Utils"

  import SEOIcon from "@components/SEOIcon.svelte"

  /**
   * Canonical.
   *
   * @type {string}
   */
  export let canonical: string = BASE_URL

  /**
   * Current URL.
   *
   * @type {string}
   */
  export let currentUrl: string = ""

  /**
   * Title.
   *
   * @type {string}
   */
  export let title: string = document.title

  /**
   * Description.
   *
   * @type {string}
   */
  export let description: string = ""

  /**
   * Application name.
   *
   * @type {string}
   */
  export let appName: string = ""

  /**
   * Twitter Handle.
   *
   * @type {string}
   */
  export let twitterHandle: string = ""

  /**
   * AppStore App Id.
   *
   * @type {string}
   */
  export let iosAppStoreId: string = ""

  /**
   * Play Store App Id.
   *
   * @type {string}
   */
  export let androidAppStoreId: string = ""

  /**
   * Google Site Verification.
   *
   * @type {string}
   */
  export let googleSiteVerification: string = ""
</script>

<title>{title}</title>
<meta content={description} name="description" />

<meta
  content="width=device-width, initial-scale=1.0, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
  name="viewport"
/>

<link href="{canonical}/manifest.json" rel="manifest" />

<meta content="dark light" name="color-scheme" />
<meta content={THEME_COLOR} name="theme-color" />

<meta content="" name="keywords" />
<meta content={canonical} name="author" />
<meta content="en" name="language" />
<link href={canonical + '/' + currentUrl} rel="canonical" />

<link href="/favicon.ico" rel="icon" type="image/x-icon" />
<link color={THEME_COLOR} href="{canonical}/icons/spt.svg" rel="mask-icon" />

<SEOIcon {canonical} size="57" />
<SEOIcon {canonical} size="60" />
<SEOIcon {canonical} size="72" />
<SEOIcon {canonical} size="76" />
<SEOIcon {canonical} size="114" />
<SEOIcon {canonical} size="120" />
<SEOIcon {canonical} size="144" />
<SEOIcon {canonical} size="152" />
<SEOIcon {canonical} size="180" />

<SEOIcon {canonical} isNormal prefix="ai" size="192" />

<SEOIcon {canonical} isNormal prefix="f" size="16" />
<SEOIcon {canonical} isNormal prefix="f" size="32" />
<SEOIcon {canonical} isNormal prefix="f" size="96" />

<meta content="telephone=no" name="format-detection" />
<meta content="yes" name="mobile-web-app-capable" />
<meta content={appName} name="application-name" />
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="default" name="apple-mobile-web-app-status-bar-style" />
<meta content={appName} name="apple-mobile-web-app-title" />

<meta content="IE=edge" httpEquiv="X-UA-Compatible" />

<meta content={THEME_COLOR} name="msapplication-TileColor" />
<meta content="{canonical}/icons/t-144.png" name="msapplication-TileImage" />
<meta content="{canonical}/browserconfig.xml" name="msapplication-config" />
<meta content="no" name="msapplication-tap-highlight" />

<meta content="website" property="og:type" />
<meta content="{canonical}/icons/og-image.png" property="og:image" />
<meta content={appName} property="og:site_name" />

<meta content={title} property="og:title" />
<meta content={canonical} property="og:url" />

<meta content={description} property="og:description" />
<meta content="en" property="og:local" />

{#if iosAppStoreId}
  <meta content={`app-id=${iosAppStoreId}`} name="apple-itunes-app" />
  <meta content={iosAppStoreId} property="twitter:app:id:iphone" />
  <meta content={appName} property="twitter:app:name:iphone" />
{/if}
{#if androidAppStoreId}
  <meta content={androidAppStoreId} property="twitter:app:id:googleplay" />
  <meta content={appName} property="twitter:app:name:googleplay" />
{/if}

{#if twitterHandle}
  <meta content="@{twitterHandle}" property="twitter:site" />
  <meta content="@{twitterHandle}" property="twitter:creator" />
  <meta content="@{twitterHandle}" property="twitter:image:alt" />
{/if}

<meta content="summary_large_image" property="twitter:card" />
<meta content="{canonical}/icons/twitter-image.png" property="twitter:image" />

<meta content={canonical} property="twitter:url" />
<meta content={title} property="twitter:title" />
<meta content={description} property="twitter:description" />

{#if googleSiteVerification}
  <meta content={googleSiteVerification} name="google-site-verification" />
{/if}
