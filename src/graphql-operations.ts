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
    totalEpisodes
    currentEpisode
    rating
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
    totalEpisodes
    currentEpisode
    rating
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
export const SetKDramaStatusDocument = gql`
    mutation SetKDramaStatus($id: ObjectId!, $status: String!) {
  kDrama: updateOneKDrama(query: {_id: $id}, set: {status: $status}) {
    _id
    title
    image
    status
    totalEpisodes
    currentEpisode
    rating
  }
}
    `;
export type SetKDramaStatusMutationFn = ApolloReactCommon.MutationFunction<Types.SetKDramaStatusMutation, Types.SetKDramaStatusMutationVariables>;

/**
 * __useSetKDramaStatusMutation__
 *
 * To run a mutation, you first call `useSetKDramaStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetKDramaStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setKDramaStatusMutation, { data, loading, error }] = useSetKDramaStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useSetKDramaStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.SetKDramaStatusMutation, Types.SetKDramaStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.SetKDramaStatusMutation, Types.SetKDramaStatusMutationVariables>(SetKDramaStatusDocument, baseOptions);
      }
export type SetKDramaStatusMutationHookResult = ReturnType<typeof useSetKDramaStatusMutation>;
export type SetKDramaStatusMutationResult = ApolloReactCommon.MutationResult<Types.SetKDramaStatusMutation>;
export type SetKDramaStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.SetKDramaStatusMutation, Types.SetKDramaStatusMutationVariables>;
export const StartKDramaDocument = gql`
    mutation StartKDrama($id: ObjectId!) {
  kDrama: updateOneKDrama(query: {_id: $id}, set: {status: "watching", currentEpisode: 1}) {
    _id
    title
    image
    status
    totalEpisodes
    currentEpisode
    rating
  }
}
    `;
export type StartKDramaMutationFn = ApolloReactCommon.MutationFunction<Types.StartKDramaMutation, Types.StartKDramaMutationVariables>;

/**
 * __useStartKDramaMutation__
 *
 * To run a mutation, you first call `useStartKDramaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartKDramaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startKDramaMutation, { data, loading, error }] = useStartKDramaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStartKDramaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.StartKDramaMutation, Types.StartKDramaMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.StartKDramaMutation, Types.StartKDramaMutationVariables>(StartKDramaDocument, baseOptions);
      }
export type StartKDramaMutationHookResult = ReturnType<typeof useStartKDramaMutation>;
export type StartKDramaMutationResult = ApolloReactCommon.MutationResult<Types.StartKDramaMutation>;
export type StartKDramaMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.StartKDramaMutation, Types.StartKDramaMutationVariables>;
export const SetEpisodesDocument = gql`
    mutation SetEpisodes($id: ObjectId!, $counter: Float!) {
  kDrama: updateOneKDrama(query: {_id: $id}, set: {currentEpisode: $counter}) {
    _id
    title
    image
    status
    totalEpisodes
    currentEpisode
    rating
  }
}
    `;
export type SetEpisodesMutationFn = ApolloReactCommon.MutationFunction<Types.SetEpisodesMutation, Types.SetEpisodesMutationVariables>;

/**
 * __useSetEpisodesMutation__
 *
 * To run a mutation, you first call `useSetEpisodesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetEpisodesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setEpisodesMutation, { data, loading, error }] = useSetEpisodesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      counter: // value for 'counter'
 *   },
 * });
 */
export function useSetEpisodesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.SetEpisodesMutation, Types.SetEpisodesMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.SetEpisodesMutation, Types.SetEpisodesMutationVariables>(SetEpisodesDocument, baseOptions);
      }
export type SetEpisodesMutationHookResult = ReturnType<typeof useSetEpisodesMutation>;
export type SetEpisodesMutationResult = ApolloReactCommon.MutationResult<Types.SetEpisodesMutation>;
export type SetEpisodesMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.SetEpisodesMutation, Types.SetEpisodesMutationVariables>;