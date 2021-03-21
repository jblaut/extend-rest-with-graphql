const { RESTDataSource } = require('apollo-datasource-rest');

class TumblrApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:4001/'
  }

  async getBlogInfo() {
    return this.get('tumblrapi')
  }
}

module.exports = TumblrApi
