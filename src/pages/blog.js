import * as React from "react"
import { Flex, Text } from "@chakra-ui/react"
import Layout from "../components/Layout"
// import Seo from "../components/seo"

const Blog = () => {
  React.useEffect(() => {
    if (typeof window === "object") {
      window.location.href = "https://blog.samarthgoel.com/"
    }
  }, [])

  return (
    <Layout page="Blog">
      <Flex direction="column" align="center" mt={2} mb={8}>
        <Text variant="pageTitle">Samarth's Blog</Text>
        <Text variant="subtitle">Musings of Magnitudes</Text>
      </Flex>
      <Flex
        position="absolute"
        top="50%"
        bottom="50%"
        left="50%"
        right="50%"
        justify="center"
      >
        <Text fontSize="2xl">Redirecting...</Text>
      </Flex>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default Blog
