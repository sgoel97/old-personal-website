import * as React from "react"
import { Box, Flex } from "@chakra-ui/react"
import socials from "../data/socials"

const Footer = () => {
  return (
    <Flex
      justify={["center", null, "flex-end"]}
      w="100vw"
      pr={[0, null, 24, 32]}
      position="absolute"
      bottom=".75rem"
    >
      {socials.map(({ link, img, title }) => (
        <Box h={9} ml={3} mr={3}>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt={title} style={{ height: "100%" }} />
          </a>
        </Box>
      ))}
    </Flex>
  )
}

export default Footer
