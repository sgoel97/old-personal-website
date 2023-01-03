import * as React from "react"
import { Link } from "gatsby"
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Resume from "../components/Resume"
// import Seo from "../components/seo"

import _1 from "../img/about/1.png"
import _2 from "../img/about/2.png"
import _3 from "../img/about/3.png"
import _4 from "../img/about/4.png"

const About = () => {
  const images = [_1, _2, _3, _4]

  return (
    <Layout page="About Me" align="center" textAlign="center">
      <Flex direction="column" align="center" mt={2} mb={8}>
        <Text variant="pageTitle">About Me</Text>
        <Text variant="subtitle">Nice to meet you!</Text>
      </Flex>

      <Text fontSize="2xl" mb={[8, null, 6, 10]}>
        Hey there! My name’s Samarth, and I like building things.
      </Text>
      <SimpleGrid
        columns={[1, null, 2, 4]}
        spacingX={[0, null, 10]}
        spacingY={[6, null, 8, 0]}
      >
        {images.map(img => (
          <Box h={28} w={44}>
            <img src={img} height="100%" alt="Project" />
          </Box>
        ))}
      </SimpleGrid>
      <Text fontSize="xl" mt={[8, null, 10]}>
        My personal definition of building is extremely broad.
      </Text>
      <Text fontSize="lg" mt={5}>
        Building to me means the act of creation; whether it be creating a
        Machine Learning model, building a startup, coding up a nonprofit,
        designing a logo, or building a Lego set (my personal favorite).
      </Text>
      <Text fontSize="xl" mt={10}>
        To that end, I’ve built a lot of cool stuff - but that’s enough about a
        motif I enjoy: let’s get to the more formal stuff!
      </Text>

      <Flex direction="column" align="center" mt={[8, 12]} pt={2} mb={8}>
        <Text fontSize="5xl" fontWeight="bold">
          About Me
        </Text>
        <Text fontSize="lg">Pt. 2</Text>
      </Flex>

      <Resume
        title="Senior at UC Berkeley"
        description={[
          "Majoring in Computer Science, Business Administration, and Statistics",
        ]}
        category="Go Bears"
      />

      <Resume
        title="Involvements"
        description={[
          "Web Development at Berkeley - Founder and 3x President",
          "Blockchain at Berkeley - Consulting and Development Branch Member",
          "Cloud at California - Founder and President",
          "Cal Band Drumline - Tenor Drums",
          "Traders at Berkeley - Development Head -> External VP -> Lead",
          "Poker at Berkeley - Founder and President",
        ]}
        category="Clubs"
        pt={10}
      />

      <Resume
        description={[
          "CS 198, Intro to Full-Stack Development - Founder and 2x Facilitator",
          "Stat 135, Concepts of Statistics - Course Staff",
          "Data 140, Probability for Data Science - Course Staff",
          "CS 198, Algorithmic Thinking - Teaching Assistant",
        ]}
        category="Course Staff"
        pt={10}
      />

      <Resume
        title="Professional Experience"
        description={[
          "Incoming Algorithm Development Intern @ HRT",
          "Quantitative Trading Intern @ IMC Trading",
          "Quantitative Strategies Intern @ Goldman Sachs",
        ]}
        category="Quant Finance"
        pt={10}
      />

      <Resume
        description={[
          "DeFi Engineer @ Anon. Avalanche Based Startup",
          "Software Engineer @ Playground",
          "Lead Engineer @ Carepath",
          "Technical Product Manager @ Launchparty",
          "Software Engineer @ Netic Health",
          "Lead Engineer @ Resource 19",
          "Software Engineering Intern @ Hyperspec.ai",
        ]}
        category="Software Engineering"
        pt={10}
      />

      <Text fontSize="xl" mt={20}>
        Long list! You can find more detail on my{" "}
        <Link to="/projects" className="nav-link">
          projects page
        </Link>
        .
      </Text>
      <Text fontSize="xl" mt={6}>
        If you’re interested in working with me, message me on{" "}
        <a
          href="https://www.linkedin.com/in/samarth-goel-1047b8187/"
          className="nav-link"
        >
          Linkedin
        </a>
        .
      </Text>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default About
