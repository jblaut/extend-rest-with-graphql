const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express')
const TumblrApi = require('./api/TumblrApi')
const typeDefs = require('./api/typeDefs.js')
const resolvers = require('./api/resolvers')
const response = require('./response.json')

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    tumblrApi: new TumblrApi()
  })
})

server.applyMiddleware({ app })

app
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => {
    res.sendFile('index.html', { roots: 'public' })
  })
  .get('/', (req, res) => {
    res.sendFile('script.js', { roots: 'public' })
  })
  .get('/', (req, res) => {
    res.sendFile('styles.css', { roots: 'public' })
  })

app.get('/tumblrapi', (req, res) => {
  res.sendFile(`${__dirname}/response.json`)
})

app.listen({ port: process.env.PORT || 4001}, () => {
  console.log(`Server running at port ${process.env.PORT || 4001}`)
})
