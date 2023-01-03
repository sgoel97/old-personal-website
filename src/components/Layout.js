import * as React from "react"
import { Box, Flex } from "@chakra-ui/react"
import Frame from "../components/Frame"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Layout.css"

const Layout = ({
  children,
  page,
  align = "default",
  textAlign = "default",
}) => {
  const pageStyle = page === "Home" ? "home" : "content"

  return (
    <Box
      as="main"
      backgroundColor="background"
      minH="100vh"
      h="fit-content"
      w="100vw"
      position="relative"
    >
      <Frame pageStyle={pageStyle} />

      <Flex minH="100vh" direction="column">
        {pageStyle === "home" ? (
          children
        ) : (
          <>
            <Navbar active={page} />
            <Flex
              direction="column"
              px={[4, 8, 16, 32]}
              pb={[36, null, 40, 48]}
              align={align}
              textAlign={textAlign}
            >
              {children}
            </Flex>
          </>
        )}
      </Flex>

      <Footer />
    </Box>
  )
}

export default Layout
