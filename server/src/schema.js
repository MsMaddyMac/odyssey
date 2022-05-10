const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    spaceCats: [SpaceCat]
  }

  "A Track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The tracks title"
    title: String!
    "The tracks main author"
    author: Author!
    "the tracks main illustration to display in track card of track page details"
    thumbnail: String
    "the tracks approximate length to completion, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int 
  }

  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String

  }

  type SpaceCat {
    id: ID!
    "SpaceCat's name"
    name: String!
    "the age of the spacecat"
    age: Int
    "a list of missions a spacecat has been on"
    missions: [Mission]
  }

  type Mission {
    id: ID!
    "the name of a mission"
    name: String!
    "the description of what a mission is about"
    description: String!
  }
`

module.exports = typeDefs