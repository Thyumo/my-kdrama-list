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
  status: Scalars['String'];
  title: Scalars['String'];
  totalEpisodes: Scalars['Float'];
};

export type KDramaInsertInput = {
  status: Scalars['String'];
  totalEpisodes: Scalars['Float'];
  currentEpisode?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['ObjectId']>;
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type KDramaQueryInput = {
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_ne?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  totalEpisodes_ne?: Maybe<Scalars['Float']>;
  status_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  image_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  currentEpisode?: Maybe<Scalars['Float']>;
  currentEpisode_lte?: Maybe<Scalars['Float']>;
  status_lte?: Maybe<Scalars['String']>;
  totalEpisodes_nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  image_lt?: Maybe<Scalars['String']>;
  image_gt?: Maybe<Scalars['String']>;
  status_gt?: Maybe<Scalars['String']>;
  currentEpisode_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  title_gt?: Maybe<Scalars['String']>;
  status_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  title?: Maybe<Scalars['String']>;
  status_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_gte?: Maybe<Scalars['String']>;
  image_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<KDramaQueryInput>>;
  title_exists?: Maybe<Scalars['Boolean']>;
  status_ne?: Maybe<Scalars['String']>;
  totalEpisodes?: Maybe<Scalars['Float']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  title_lte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  currentEpisode_ne?: Maybe<Scalars['Float']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalEpisodes_lte?: Maybe<Scalars['Float']>;
  totalEpisodes_gt?: Maybe<Scalars['Float']>;
  totalEpisodes_gte?: Maybe<Scalars['Float']>;
  currentEpisode_gt?: Maybe<Scalars['Float']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  currentEpisode_gte?: Maybe<Scalars['Float']>;
  OR?: Maybe<Array<KDramaQueryInput>>;
  title_gte?: Maybe<Scalars['String']>;
  title_lt?: Maybe<Scalars['String']>;
  totalEpisodes_exists?: Maybe<Scalars['Boolean']>;
  image_lte?: Maybe<Scalars['String']>;
  currentEpisode_exists?: Maybe<Scalars['Boolean']>;
  title_ne?: Maybe<Scalars['String']>;
  currentEpisode_lt?: Maybe<Scalars['Float']>;
  totalEpisodes_lt?: Maybe<Scalars['Float']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['String']>;
  totalEpisodes_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  currentEpisode_nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum KDramaSortByInput {
  TotalepisodesDesc = 'TOTALEPISODES_DESC',
  IdAsc = '_ID_ASC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  StatusAsc = 'STATUS_ASC',
  TitleDesc = 'TITLE_DESC',
  StatusDesc = 'STATUS_DESC',
  TotalepisodesAsc = 'TOTALEPISODES_ASC',
  CurrentepisodeAsc = 'CURRENTEPISODE_ASC',
  CurrentepisodeDesc = 'CURRENTEPISODE_DESC',
  IdDesc = '_ID_DESC',
  TitleAsc = 'TITLE_ASC'
}

export type KDramaUpdateInput = {
  title_unset?: Maybe<Scalars['Boolean']>;
  image_unset?: Maybe<Scalars['Boolean']>;
  currentEpisode_inc?: Maybe<Scalars['Float']>;
  currentEpisode?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  totalEpisodes_inc?: Maybe<Scalars['Float']>;
  totalEpisodes_unset?: Maybe<Scalars['Boolean']>;
  status_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  totalEpisodes?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  currentEpisode_unset?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
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
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneKDramaArgs = {
  set: KDramaUpdateInput;
  query?: Maybe<KDramaQueryInput>;
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
  _id_exists?: Maybe<Scalars['Boolean']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserQueryInput>>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<UserQueryInput>>;
  _id?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
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
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode'>
  )>> }
);

export type AddKDramaMutationVariables = Exact<{
  kDrama: KDramaInsertInput;
}>;


export type AddKDramaMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode'>
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
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode'>
  )> }
);

export type StartKDramaMutationVariables = Exact<{
  id: Scalars['ObjectId'];
}>;


export type StartKDramaMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode'>
  )> }
);

export type IncreaseEpisodesMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  counter: Scalars['Float'];
}>;


export type IncreaseEpisodesMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title' | 'image' | 'status' | 'totalEpisodes' | 'currentEpisode'>
  )> }
);
