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
  title: Scalars['String'];
};

export type KDramaInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  title: Scalars['String'];
};

export type KDramaQueryInput = {
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  AND?: Maybe<Array<KDramaQueryInput>>;
  title_gte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<KDramaQueryInput>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  title?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_lte?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_ne?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
};

export enum KDramaSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type KDramaUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_unset?: Maybe<Scalars['Boolean']>;
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
  data: UserInsertInput;
  query?: Maybe<UserQueryInput>;
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
  name: Scalars['String'];
  _id?: Maybe<Scalars['String']>;
};

export type UserQueryInput = {
  _id_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<UserQueryInput>>;
  name_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<UserQueryInput>>;
  _id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum UserSortByInput {
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC'
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
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title'>
  )> }
);

export type AddKDramaMutationVariables = Exact<{
  kDrama: KDramaInsertInput;
}>;


export type AddKDramaMutation = (
  { __typename?: 'Mutation' }
  & { kDrama?: Maybe<(
    { __typename?: 'KDrama' }
    & Pick<KDrama, '_id' | 'title'>
  )> }
);
