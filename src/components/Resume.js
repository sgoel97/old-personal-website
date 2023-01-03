import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

const Resume = ({ title, description, category, pt = 0 }) => {
  return (
    <Flex justify="space-between" w="100%" align="center" pt={pt}>
      <Box textAlign={["center", null, "left"]}>
        {title && <Text fontSize="2xl">{title}</Text>}
        {description.map(item => (
          <Text fontSize="lg" mt={2} textAlign="left">
            {item}
          </Text>
        ))}
      </Box>
      <Text fontSize="4xl" textAlign="right" display={["none", null, "block"]}>
        {category}
      </Text>
    </Flex>
  )
}

export default Resume
