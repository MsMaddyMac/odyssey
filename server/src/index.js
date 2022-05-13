const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const TrackAPI = require('./datasources/track-api')

// MOCK DATA EXAMPLE:
// const mocks = {
//   Query: () => ({
//     tracksForHome: () => [...new Array(6)],
//   }),
//   Track: () => ({
//     id: () => 'track_01',
//     title: () => 'Astro Kitty, Space Explorer',
//     author: () => {
//       return {
//         name: 'Grumpy Cat',
//         photo:
//           'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
//       }
//     },
//     thumbnail: () =>
//       'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
//     length: () => 1210,
//     modulesCount: () => 6,
//   }),
// }
// create instance of ApolloServer class and pass it our typeDefs
// mocks: true enables basic mocked data and will instruct Apollo Server
// to populate every queried schema field with a placeholder value
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    }
  },
})

// start up ApolloServer
server.listen({ port: 7001 }).then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 7001
      📭  Query at https://studio.apollographql.com/dev
    `)
})
