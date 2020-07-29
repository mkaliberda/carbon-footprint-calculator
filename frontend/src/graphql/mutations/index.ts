import { gql } from '@apollo/client';

const mutation = {
  CALCULATE_EMISSIONS: gql`
  mutation calculateEmissions(
    $peoples: Int!,
    $category: String!,
    $emission: String!,
    $factorsValues: [FactorsValues!]!) {
      calculateEmissions(
        peoples: $peoples,
        category: $category,
        emission: $emission,
        factorsValues: $factorsValues
      ) { name, label, emission, unit, period }
  }
  `
}
export default mutation;

