import { defineConfig, presetAttributify, presetWind } from "unocss"

import { extractorSvelte, extractorSplit } from "@unocss/core"
import presetIcons from "@unocss/preset-icons"
import { presetScalpel } from "unocss-preset-scalpel"
import transformerDirective from "@unocss/transformer-directives"

import Theme from "./Theme.js"
import Rules from "./Rules.js"

let theme = process.env.VITE_APP_NAME === "PDFBEAR" ? "blue" : "emerald"

/**
 * UnoCSS Config.
 *
 * @exports
 */
export default defineConfig({
  theme: Theme,
  rules: Rules,
  extractors: [extractorSvelte, extractorSplit],
  transformers: [transformerDirective()],
  presets: [
    presetAttributify(),
    presetWind({
      dark: "media",
    }),
    presetIcons(),
    presetScalpel(),
  ],
  shortcuts: {
    "b-1": "fw-600 ellipsis line-clamp-3",
    "b-2": "text-sm ellipsis line-clamp-3",
    "b-3": `min-h-400 min-w-280 padding-1 gap-1 flex flex-direction-column cursor-pointer hover:color-${theme}-300 transition-colors`,
    "b-4": "h-150 flex items-center justify-center",
    "b-5": "fill-black height-70% w-fill stroke-none",
    "b-hc": `flex items-center flex-direction-column pt-30px`,
    "b-h1": `text-30px fw-600 m-0 line-clamp-3`,
    "b-h2": `text-21.5px fw-300 m-0 line-clamp-1`,
    "bix-2": "flex items-center justify-center flex-direction-column min-h-160 p-5 w-fill bg-dark-500",
    "bi-1": "grid mt-20 p-5 w-fill column-gap-80 row-gap-20",
    "bix-1": "grid mt-20 p-5 w-fill column-gap-80 row-gap-20 min-h-410",
    "bi-2": `flex items-center justify-center min-h-160 h-160 w-fill @dark:bg-dark-500 @light:bg-${theme}-100`,
    "bi-3": "max-w-520px line-clamp-3",
    "ft-c": "border-t-solid border-t-color-dark-500 flex items-center justify-start",
    "ft-n":
      "flex flex-direction-row ml-3 mr-3 mt-6 mb-6 column-gap-20 lt-sm:flex-direction-column lt-sm:w-fill lt-sm:items-center lt-sm:row-gap-10",
    "ft-l": `cursor-pointer flex items-center mt-3 border-rounded-1 hover:bg-${theme}-700 hover:color-white transition-all pl-3 pr-3 pt-1 pb-1 lt-sm:pl-0 lt-sm:h-48 lt-sm:w-50vw lt-sm:flex lt-sm:justify-center`,
    "bl-1": `border-solid border-color-${theme}-700`,
    "fl-1": `flex items-center justify-center ml-2 lt-sm:h-48 lt-sm:border-b-solid lt-sm:border-b-color-${theme}`,
    "fl-2": `w-6 h-6 mr-2 bg-${theme}-700 b-rounded-full lt-sm:display-none lt-sm:visibility-hidden`,
    "fl-2g": `w-1 h-fill ml-3 bg-${theme}-700`,
    "fl-3": `color-inherit hover:color-${theme}-300 decoration-none transition-colors`,
    "fl-4": `color-${theme}-200`,
    "f-1": "text-xs mt-10 mb-10 border-t-solid border-t-color-dark-500 w-fill",
    "f-2": "ml-2 mr-2 flex flex-direction-row items-center justify-center",
    "f-3":
      "flex justify-start flex-wrap text-base gap-5 mb-5 mt-3 lt-sm:flex-direction-column lt-sm:min-w-fill lt-sm:max-w-fill",
    "f-4": "ml-2 mr-2 mt-4 lt-sm:text-center",
    "f-5": "lt-sm:display-none lt-sm:visibility-hidden",
    "a-0": "color-inherit decoration-none",
    "b-a": "height-7px width-30px stroke-none rotate-270",
    "b-b": "flex mt-2 gap-1 items-center",
    "ba-3": "mt-2 w-fill flex flex-direction-column items-center justify-center",
    "ba-4": "h-350 w-fill flex items-center justify-center",
    "ba-b": "max-w-570px line-h-30px mt-3",
    "ba-c": `mt-2 h-150 flex items-center justify-start pl-4 max-w-350px w-fill @dark:bg-dark-500 @light:bg-${theme}-100 border-rounded-2`,
    "ba-s": "mt-3 flex w-75vw flex-direction-column items-center",
    "h-1": "h-95 min-h-95 border-b-solid flex items-center justify-center",
    "p-1": "ml-auto mr-3 gap-10 flex",
    "p-0": `border-rounded-1 hover:bg-${theme}-700 transition-all p-5 fw-500`,
    "p-ft": "bg-emerald-700 pl-3 pr-3 pt-1.5 pb-1.5 min-w-111",
    "p-pr": "hover:color-white",
    "flex-c": "flex flex-direction-column lt-sm:w-fill lt-sm:items-center",
    "ft-t": "fw-500 lt-sm:text-xl",
    "ft-svg": "mr-2 fill-none stroke-width-1 w-24 h-24",
  },
})
