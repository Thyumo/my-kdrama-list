import * as Types from './types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const GetAllKDramasDocument = gql`
    query GetAllKDramas {
  kDramas {
    _id
    title
    image
    status
  }
}
    `;

/**
 * __useGetAllKDramasQuery__
 *
 * To run a query within a React component, call `useGetAllKDramasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllKDramasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllKDramasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllKDramasQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetAllKDramasQuery, Types.GetAllKDramasQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetAllKDramasQuery, Types.GetAllKDramasQueryVariables>(GetAllKDramasDocument, baseOptions);
      }
export function useGetAllKDramasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAllKDramasQuery, Types.GetAllKDramasQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetAllKDramasQuery, Types.GetAllKDramasQueryVariables>(GetAllKDramasDocument, baseOptions);
        }
export type GetAllKDramasQueryHookResult = ReturnType<typeof useGetAllKDramasQuery>;
export type GetAllKDramasLazyQueryHookResult = ReturnType<typeof useGetAllKDramasLazyQuery>;
export type GetAllKDramasQueryResult = ApolloReactCommon.QueryResult<Types.GetAllKDramasQuery, Types.GetAllKDramasQueryVariables>;
export const AddKDramaDocument = gql`
    mutation AddKDrama($kDrama: KDramaInsertInput!) {
  kDrama: insertOneKDrama(data: $kDrama) {
    _id
    title
    image
    status
  }
}
    `;
export type AddKDramaMutationFn = ApolloReactCommon.MutationFunction<Types.AddKDramaMutation, Types.AddKDramaMutationVariables>;

/**
 * __useAddKDramaMutation__
 *
 * To run a mutation, you first call `useAddKDramaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddKDramaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addKDramaMutation, { data, loading, error }] = useAddKDramaMutation({
 *   variables: {
 *      kDrama: // value for 'kDrama'
 *   },
 * });
 */
export function useAddKDramaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.AddKDramaMutation, Types.AddKDramaMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.AddKDramaMutation, Types.AddKDramaMutationVariables>(AddKDramaDocument, baseOptions);
      }
export type AddKDramaMutationHookResult = ReturnType<typeof useAddKDramaMutation>;
export type AddKDramaMutationResult = ApolloReactCommon.MutationResult<Types.AddKDramaMutation>;
export type AddKDramaMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.AddKDramaMutation, Types.AddKDramaMutationVariables>;