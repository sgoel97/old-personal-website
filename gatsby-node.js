exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/blog`,
    toPath: `https://blog.samarthgoel.com/`,
  })
}
