import * as Types from "../../../types.generated";

import { gql } from "@apollo/client";
import { RocketItemFragmentDoc } from "../../molecules/RocketItem/RocketItem.generated";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetRocketsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetRocketsQuery = {
  __typename?: "Query";
  rockets?: Array<{
    __typename?: "Rocket";
    id?: string | null;
    description?: string | null;
    name?: string | null;
  } | null> | null;
};

export const GetRocketsDocument = gql`
  query getRockets {
    rockets {
      ...RocketItem
    }
  }
  ${RocketItemFragmentDoc}
`;

/**
 * __useGetRocketsQuery__
 *
 * To run a query within a React component, call `useGetRocketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRocketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRocketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRocketsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRocketsQuery,
    GetRocketsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRocketsQuery, GetRocketsQueryVariables>(
    GetRocketsDocument,
    options
  );
}
export function useGetRocketsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRocketsQuery,
    GetRocketsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRocketsQuery, GetRocketsQueryVariables>(
    GetRocketsDocument,
    options
  );
}
export function useGetRocketsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetRocketsQuery,
    GetRocketsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRocketsQuery, GetRocketsQueryVariables>(
    GetRocketsDocument,
    options
  );
}
export type GetRocketsQueryHookResult = ReturnType<typeof useGetRocketsQuery>;
export type GetRocketsLazyQueryHookResult = ReturnType<
  typeof useGetRocketsLazyQuery
>;
export type GetRocketsSuspenseQueryHookResult = ReturnType<
  typeof useGetRocketsSuspenseQuery
>;
export type GetRocketsQueryResult = Apollo.QueryResult<
  GetRocketsQuery,
  GetRocketsQueryVariables
>;
