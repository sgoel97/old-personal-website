import * as React from "react"
// import { Link } from "gatsby"
import { Flex, SimpleGrid, Text } from "@chakra-ui/react"
import Layout from "../components/Layout"
import ProjectPreview from "../components/ProjectPreview"
// import Seo from "../components/seo"
import projects from "../data/projects"

const Projects = () => {
  const years = [2022, 2021, 2020, 2019]

  return (
    <Layout page="Projects">
      <Flex direction="column" align="center" mt={2} mb={8}>
        <Text variant="pageTitle">Projects</Text>
        <Text variant="subtitle">Software, Data, and Startups</Text>
      </Flex>

      {years.map(year => (
        <>
          <Text as="h3" fontWeight="bold" fontSize="4xl" mb={6}>
            {year}
          </Text>
          <SimpleGrid
            columns={[1, 2, 3]}
            spacingX={[0, 8, null, 16]}
            spacingY={8}
            mb={year === year[0] ? 0 : 16}
          >
            {projects
              .filter(project => project.year === year)
              .map(({ name, description, preview }) => (
                <ProjectPreview
                  name={name}
                  description={description}
                  image={preview}
                />
              ))}
          </SimpleGrid>
        </>
      ))}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default Projects
