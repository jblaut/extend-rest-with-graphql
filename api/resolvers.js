const resolvers = {
  Query: {
    info: async(_source, _args, { dataSources }) => {
      return dataSources.tumblrApi.getBlogInfo()
    }
  }
}

module.exports = resolvers
