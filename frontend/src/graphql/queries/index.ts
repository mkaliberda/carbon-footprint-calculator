import { gql } from '@apollo/client';

const queries = {
  GET_FACTORS_PARAMS: gql`
    query getFactorsParams($category: String!, $emission: String!) {
      getFactorsParams(category: $category, emission: $emission) {
        name,
        label,
        units,
        periods,
      }
    }
  `,
}
export default queries;
