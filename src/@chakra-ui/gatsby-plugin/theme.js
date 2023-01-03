import { extendTheme } from "@chakra-ui/react"

const theme = {
  colors: {
    white: "#ffffff",
    background: "#323031",
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily: "Inter",
        color: "white",
        zIndex: 1,
      },
      variants: {
        pageTitle: {
          as: "h1",
          fontSize: "6xl",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 1.3,
          mb: [2, 1, 0],
        },
        subtitle: {
          as: "h5",
          fontSize: "md",
          fontWeight: "md",
          textAlign: "center",
        },
      },
    },
  },
}

export default extendTheme(theme)
