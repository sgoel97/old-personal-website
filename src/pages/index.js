import * as React from "react"
import { Link } from "gatsby"
import { Flex, Text } from "@chakra-ui/react"
import Layout from "../components/Layout"
// import Seo from "../components/seo"

const Home = () => {
  const routes = [
    { path: "/projects", title: "Projects" },
    { path: "/about", title: "About Me" },
    { path: "/blog", title: "Blog" },
  ]

  return (
    <Layout page="Home">
      <Flex h="100vh" align="center" justify="center" direction="column" px={6}>
        <Flex direction="column" align="center" mb={[10, null, 20]}>
          <Text as="p" fontSize="2xl" textAlign="center" mb={[1, null, 0]}>
            Hi! My name is
          </Text>
          <Text
            as="h1"
            fontSize="7xl"
            fontWeight="bold"
            textAlign="center"
            lineHeight={[1.3, null, "auto"]}
          >
            Samarth Goel
          </Text>
          <Text as="h5" fontSize="md" textAlign="center" mt={[4, null, 0]}>
            Engineer, Startup Enthusiast, Drummer, and Amateur Gymnast
          </Text>
        </Flex>
        <Flex
          justify="space-between"
          zIndex={1}
          align="center"
          gap={[4, 5, 40, 56]}
          direction={["column", null, "row"]}
        >
          {routes.map(({ path, title }) => (
            <Link to={path} className="nav-link">
              <Text as="p" fontSize={["xl", "lg"]}>
                {title}
              </Text>
            </Link>
          ))}
        </Flex>
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

export default Home
