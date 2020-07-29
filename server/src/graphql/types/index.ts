import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getFactorsParams(category: String!, emission: String!): [FactorsParams!]!
  }
  type Mutation {
    calculateEmissions(peoples: Int, category: String!,
      emission: String!, factorsValues: [FactorsValues!]!): [FactorsCalculatedValues!]!
  }
  type FactorsParams {
    name: String!
    label: String!
    units: [String!]!
    periods: [String!]!
  }
  type FactorsCalculatedValues {
    name: String!
    label: String!
    emission: Float!
    unit: String!
    period: String!
  }
  input FactorsValues {
    name: String!
    value: Int!
    unit: String!
    period: String!
  }
`;

export default typeDefs;
