export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type KDrama = {
  __typename?: 'KDrama';
  _id: Scalars['ObjectId'];
  currentEpisode?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  status: Scalars['String'];
  title: Scalars['String'];
  totalEpisodes: Scalars['Float'];
};

export type KDramaInsertInput = {
  status: Scalars['String'];
  totalEpisodes: Scalars['Float'];
  currentEpisode?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['ObjectId']>;
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type KDramaQueryInput = {
  currentEpisode_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  totalEpisodes_lt?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['String']>;
  image_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_lte?: Maybe<Scalars['String']>;
  image_ne?: Maybe<Scalars['String']>;
  totalEpisodes_gt?: Maybe<Scalars['Float']>;
  AND?: Maybe<Array<KDramaQueryInput>>;
  currentEpisode_ne?: Maybe<Scalars['Float']>;
  image_lt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  status_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_gt?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  currentEpisode_gte?: Maybe<Scalars['Float']>;
  totalEpisodes_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  title_lte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  totalEpisodes_gte?: Maybe<Scalars['Float']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  totalEpisodes_lte?: Maybe<Scalars['Float']>;
  status_ne?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  currentEpisode_gt?: Maybe<Scalars['Float']>;
  status_lt?: Maybe<Scalars['String']>;
  rating_gt?: Maybe<Scalars['Float']>;
  title_gte?: Maybe<Scalars['String']>;
  rating_lte?: Maybe<Scalars['Float']>;
  status_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  status_gt?: Maybe<Scalars['String']>;
  rating_ne?: Maybe<Scalars['Float']>;
  rating_lt?: Maybe<Scalars['Float']>;
  currentEpisode_lte?: Maybe<Scalars['Float']>;
  title_ne?: Maybe<Scalars['String']>;
  status_lte?: Maybe<Scalars['String']>;
  currentEpisode?: Maybe<Scalars['Float']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<KDramaQueryInput>>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalEpisodes_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalEpisodes_nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  totalEpisodes?: Maybe<Scalars['Float']>;
  rating_nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  title_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  rating_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  totalEpisodes_ne?: Maybe<Scalars['Float']>;
  image_gt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  status_gte?: Maybe<Scalars['String']>;
  rating_gte?: Maybe<Scalars['Float']>;
  image_gte?: Maybe<Scalars['String']>;
  currentEpisode_nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  currentEpisode_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  title_lt?: Maybe<Scalars['String']>;
  currentEpisode_lt?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  rating_exists?: Maybe<Scalars['Boolean']>;
};

export enum KDramaSortByInput {
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  CurrentepisodeAsc = 'CURRENTEPISODE_ASC',
  CurrentepisodeDesc = 'CURRENTEPISODE_DESC',
  IdAsc = '_ID_ASC',
  TitleDesc = 'TITLE_DESC',
  TitleAsc = 'TITLE_ASC',
  TotalepisodesAsc = 'TOTALEPISODES_ASC',
  TotalepisodesDesc = 'TOTALEPISODES_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  IdDesc = '_ID_DESC'
}

export type KDramaUpdateInput = {
  totalEpisodes_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  currentEpisode_inc?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  currentEpisode?: Maybe<Scalars['Float']>;
  currentEpisode_unset?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  rating_unset?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  image_unset?: Maybe<Scalars['Boolean']>;
  rating_inc?: Maybe<Scalars['Float']>;
  title_unset?: Maybe<Scalars['Boolean']>;
  status_unset?: Maybe<Scalars['Boolean']>;
  totalEpisodes?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  totalEpisodes_inc?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyKDramas?: Maybe<DeleteManyPayload>;
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteOneKDrama?: Maybe<KDrama>;
  deleteOneUser?: Maybe<User>;
  insertManyKDramas?: Maybe<InsertManyPayload>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertOneKDrama?: Maybe<KDrama>;
  insertOneUser?: Maybe<User>;
  replaceOneKDrama?: Maybe<KDrama>;
  replaceOneUser?: Maybe<User>;
  updateManyKDramas?: Maybe<UpdateManyPayload>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateOneKDrama?: Maybe<KDrama>;
  updateOneUser?: Maybe<User>;
  upsertOneKDrama?: Maybe<KDrama>;
  upsertOneUser?: Maybe<User>;
};


export type MutationDeleteManyKDramasArgs = {
  query?: Maybe<KDramaQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
};


export type MutationDeleteOneKDramaArgs = {
  query: KDramaQueryInput;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationInsertManyKDramasArgs = {
  data: Array<KDramaInsertInput>;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertOneKDramaArgs = {
  data: KDramaInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationReplaceOneKDramaArgs = {
  query?: Maybe<KDramaQueryInput>;
  data: KDramaInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationUpdateManyKDramasArgs = {
  query?: Maybe<KDramaQueryInput>;
  set: KDramaUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  set: UserUpdateInput;
  query?: Maybe<UserQueryInput>;
};


export type MutationUpdateOneKDramaArgs = {
  query?: Maybe<KDramaQueryInput>;
  set: KDramaUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpsertOneKDramaArgs = {
  query?: Maybe<KDramaQueryInput>;
  data: KDramaInsertInput;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type Query = {
  __typename?: 'Query';
  kDrama?: Maybe<KDrama>;
  kDramas: Array<Maybe<KDrama>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryKDramaArgs = {
  query?: Maybe<KDramaQueryInput>;
};


export type QueryKDramasArgs = {
  query?: Maybe<KDramaQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<KDramaSortByInput>;
};


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type UserInsertInput = {
  _id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserQueryInput = {
  _id?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<UserQueryInput>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  name_lte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_ne?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<UserQueryInput>>;
  _id_lte?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['String']>;
};

export enum UserSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type UserUpdateInput = {
  _id?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
};

export type GetAllKDramasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllKDramasQuery = (
  { __typename?: 'Query' }
  & { kDramas: Array<Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode' | 'rating'>
  )>> }
);

export type AddKDramaMutationVariables = Exact<{
  kDrama: KDramaInsertInput;
}>;


export type AddKDramaMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode' | 'rating'>
  )> }
);

export type DeleteKDramaMutationVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type DeleteKDramaMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id'>
  )> }
);

export type SetKDramaStatusMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  status: Scalars['String'];
}>;


export type SetKDramaStatusMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode' | 'rating'>
  )> }
);

export type StartKDramaMutationVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type StartKDramaMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode' | 'rating'>
  )> }
);

export type SetEpisodesMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  counter: Scalars['Float'];
}>;


export type SetEpisodesMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode' | 'rating'>
  )> }
);

export type SetRatingMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  rating: Scalars['Float'];
}>;


export type SetRatingMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode' | 'rating'>
  )> }
);

export type UpdateKDramaMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  kDrama: KDramaUpdateInput;
}>;


export type UpdateKDramaMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode' | 'rating'>
  )> }
);
