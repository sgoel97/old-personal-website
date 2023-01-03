import React from "react"
import { Link } from "gatsby"
import { Box, Flex, Text } from "@chakra-ui/react"

const Navbar = ({ active }) => {
  const routes = [
    { path: "/about", title: "About Me" },
    { path: "/projects", title: "Projects" },
    { path: "/blog", title: "Blog" },
  ]

  return (
    <Flex mx={[4, 8]} my={5} justify={["space-between", null, "flex-start"]}>
      <Link to="/">
        <Text fontWeight="bold" fontSize="xl" mr={4}>
          Samarth
        </Text>
      </Link>
      {routes.map(({ path, title }) => (
        <Box ml={[5, 8]}>
          <Link
            to={path}
            className={`nav-link ${active === title ? "active" : ""}`}
          >
            <Text as="p" fontSize="md">
              {title}
            </Text>
          </Link>
        </Box>
      ))}
    </Flex>
  )
}

export default Navbar
