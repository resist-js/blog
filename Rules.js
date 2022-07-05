/**
 * UnoCSS Rules.
 *
 * @exports
 * @type {!Rule[]}
 */
const Rules = [
  [
    /^(?:stroke-variant)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (theme.variants[c]) return { stroke: theme.variants[c] }
    },
  ],
  [
    /^(?:fill-variant)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (theme.variants[c]) return { fill: theme.variants[c] }
    },
  ],
  [
    /^(?:variant)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (theme.variants[c]) return { color: theme.variants[c] }
    },
  ],
  [
    /^(?:dot)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (theme.variants[c]) return { "background-color": theme.variants[c] }
    },
  ],
  [
    /^(?:weight|fw)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (theme.fontWeight[c]) return { "font-weight": theme.fontWeight[c] }
    },
  ],
  ["bold", { "font-weight": "700" }],
  ["linethrough", { "text-decoration-line": "line-through" }],
  ["notselectable", { "user-select": "none" }],
  [
    "truncate",
    {
      "text-overflow": "ellipsis",
      overflow: "hidden",
      "white-space": "nowrap",
    },
  ],
  [
    /^(?:selectable)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (c === "false") return { "user-select": "none" }
    },
  ],
  [
    /^(?:layer)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (theme.layer[c]) return { "z-index": theme.layer[c] }
    },
  ],
  [
    /^(?:decorationcolor)-?([^-]+)$/,
    ([, c], { theme }) => {
      return { "text-decoration-color": theme.decorationColors[c] ?? c }
    },
  ],
  [
    /^(?:decorationthickness)-?([^-]+)$/,
    ([, c], { theme }) => {
      return { "text-decoration-thickness": `${c}px` }
    },
  ],
  [
    /^(?:casing)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (c === "uppercase" || c === "lowercase" || c === "capitalize") return { "text-transform": c }
    },
  ],
  [
    /^(?:breaking)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (c === "normal") return { "overflow-wrap": "normal", "word-break": "normal" }
      else if (c === "words") return { "overflow-wrap": "break-word" }
      else if (c === "all") return { "word-break": "break-all" }
    },
  ],
  [
    /^(?:orientation)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (c === "mixed" || c === "sideways" || c === "upright" || c === "inherit") return { "text-orientation": c }
    },
  ],
  [
    /^(?:rotation)-?([^-]+)$/,
    ([, c], { theme }) => {
      return { "transform-origin": "0 0", transform: `rotate(${c}deg)` }
    },
  ],
  [
    /^(?:writingmode)-?([^-]+)$/,
    ([, c], { theme }) => {
      if (c === "verticalright") return { "writing-mode": "vertical-rl" }
      else if (c === "verticalleft") return { "writing-mode": "vertical-lr" }
      else if (c === "normal" || c === "none") return { "writing-mode": "horizontal-tb" }
    },
  ],
  [
    /^(?:lines)-?([^-]+)$/,
    ([, c], { theme }) => {
      return {
        "-webkit-line-clamp": c,
        display: "-webkit-box",
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "-webkit-box-orient": "vertical",
      }
    },
  ],
  [
    /^(?:lineheight)-(.+)$/,
    ([, s], { theme }) => ({
      "line-height": theme.lineHeight?.[s] || s,
    }),
  ],
  [
    /^(?:letterspacing)-(.+)$/,
    ([, s], { theme }) => ({
      "letter-spacing": theme.letterSpacing?.[s] || s,
    }),
  ],
  [
    /^(?:wordspacing)-(.+)$/,
    ([, s], { theme }) => ({
      "word-spacing": theme.wordSpacing?.[s] || s,
    }),
  ],
  [
    /^(?:size)-(.+)$/,
    ([, s], { theme }) => ({
      width: theme.iconSize?.[s] || s,
      height: theme.iconSize?.[s] || s,
    }),
  ],
  [
    /^tabsize(?:-(.+))?$/,
    ([, s]) => {
      const v = `${s || "4"}px`
      if (v != null) {
        return {
          "-moz-tab-size": v,
          "-o-tab-size": v,
          "tab-size": v,
        }
      }
    },
  ],
  [
    /^stop-color(?:-(.+))?$/,
    ([, c], { theme }) => {
      if (c && theme.colors.skeleton[c.replace("skeleton.", "")] && c.startsWith("skeleton."))
        return {
          "stop-color": theme.colors.skeleton[c.replace("skeleton.", "")],
        }
    },
  ],
  [
    /^stroke(?:-(.+))?$/,
    ([, c], { theme }) => {
      if (c && theme.colors.skeleton[c.replace("skeleton.", "")] && c.startsWith("skeleton."))
        return {
          stroke: theme.colors.skeleton[c.replace("skeleton.", "")],
        }
    },
  ],
]

export default Rules
