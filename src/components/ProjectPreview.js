import * as React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

const ProjectPreview = ({ name, description, image }) => {
  return (
    <Flex direction="column">
      <Box minH={[48, 32, 40, 56]} maxW="100%" borderRadius="2xl">
        <img src={image} alt={name} />
      </Box>
      <Text mt={4} fontWeight="bold" fontSize="xl">
        {name}
      </Text>
      <Text mt={2} fontSize="md">
        {description}
      </Text>
    </Flex>
  )
}

export default ProjectPreview
