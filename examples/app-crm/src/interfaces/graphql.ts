export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends " $fragmentName" | "__typename"
              ? T[P]
              : never;
      };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    ConnectionCursor: { input: any; output: any };
    DateTime: { input: any; output: any };
};

export type Audit = {
    action: AuditAction;
    changes: Array<AuditChange>;
    createdAt: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    targetEntity: Scalars["String"]["output"];
    targetId: Scalars["Float"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    user?: Maybe<User>;
};

/** Audit action */
export type AuditAction = "CREATE" | "DELETE" | "UPDATE";

export type AuditActionFilterComparison = {
    eq?: InputMaybe<AuditAction>;
    gt?: InputMaybe<AuditAction>;
    gte?: InputMaybe<AuditAction>;
    iLike?: InputMaybe<AuditAction>;
    in?: InputMaybe<Array<AuditAction>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    like?: InputMaybe<AuditAction>;
    lt?: InputMaybe<AuditAction>;
    lte?: InputMaybe<AuditAction>;
    neq?: InputMaybe<AuditAction>;
    notILike?: InputMaybe<AuditAction>;
    notIn?: InputMaybe<Array<AuditAction>>;
    notLike?: InputMaybe<AuditAction>;
};

export type AuditChange = {
    field: Scalars["String"]["output"];
    from?: Maybe<Scalars["String"]["output"]>;
    to?: Maybe<Scalars["String"]["output"]>;
};

export type AuditConnection = {
    /** Array of edges. */
    edges: Array<AuditEdge>;
    /** Paging information */
    pageInfo: PageInfo;
};

export type AuditDeleteResponse = {
    action?: Maybe<AuditAction>;
    changes?: Maybe<Array<AuditChange>>;
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    targetEntity?: Maybe<Scalars["String"]["output"]>;
    targetId?: Maybe<Scalars["Float"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AuditEdge = {
    /** Cursor for this node. */
    cursor: Scalars["ConnectionCursor"]["output"];
    /** The node containing the Audit */
    node: Audit;
};

export type AuditFilter = {
    action?: InputMaybe<AuditActionFilterComparison>;
    and?: InputMaybe<Array<AuditFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<AuditFilter>>;
    targetEntity?: InputMaybe<StringFieldComparison>;
    user?: InputMaybe<AuditFilterUserFilter>;
};

export type AuditFilterUserFilter = {
    and?: InputMaybe<Array<AuditFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<AuditFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type AuditSort = {
    direction: SortDirection;
    field: AuditSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type AuditSortFields = "action" | "id" | "targetEntity";

export type AuditSubscriptionFilter = {
    action?: InputMaybe<AuditActionFilterComparison>;
    and?: InputMaybe<Array<AuditSubscriptionFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<AuditSubscriptionFilter>>;
    targetEntity?: InputMaybe<StringFieldComparison>;
};

export type AuthResponse = {
    accessToken: Scalars["String"]["output"];
    refreshToken: Scalars["String"]["output"];
    user: User;
};

/** Business type */
export type BusinessType = "B2B" | "B2C" | "B2G";

export type CheckListItem = {
    checked: Scalars["Boolean"]["output"];
    title: Scalars["String"]["output"];
};

export type ChecklistItemInput = {
    checked: Scalars["Boolean"]["input"];
    title: Scalars["String"]["input"];
};

export type Company = {
    businessType: BusinessType;
    companySize: CompanySize;
    contacts: CompanyContactsConnection;
    contactsAggregate: Array<CompanyContactsAggregateResponse>;
    country: Scalars["String"]["output"];
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    deals: CompanyDealsConnection;
    dealsAggregate: Array<CompanyDealsAggregateResponse>;
    id: Scalars["ID"]["output"];
    industry: Industry;
    name: Scalars["String"]["output"];
    notes: CompanyNotesConnection;
    notesAggregate: Array<CompanyNotesAggregateResponse>;
    salesOwner: User;
    totalRevenue: Scalars["Int"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
    website: Scalars["String"]["output"];
};

export type CompanyContactsArgs = {
    filter?: ContactFilter;
    paging?: OffsetPaging;
    sorting?: Array<ContactSort>;
};

export type CompanyContactsAggregateArgs = {
    filter?: InputMaybe<ContactAggregateFilter>;
};

export type CompanyDealsArgs = {
    filter?: DealFilter;
    paging?: OffsetPaging;
    sorting?: Array<DealSort>;
};

export type CompanyDealsAggregateArgs = {
    filter?: InputMaybe<DealAggregateFilter>;
};

export type CompanyNotesArgs = {
    filter?: CompanyNoteFilter;
    paging?: OffsetPaging;
    sorting?: Array<CompanyNoteSort>;
};

export type CompanyNotesAggregateArgs = {
    filter?: InputMaybe<CompanyNoteAggregateFilter>;
};

export type CompanyAggregateFilter = {
    and?: InputMaybe<Array<CompanyAggregateFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanyAggregateFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type CompanyAggregateGroupBy = {
    businessType?: Maybe<BusinessType>;
    companySize?: Maybe<CompanySize>;
    country?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    industry?: Maybe<Industry>;
    name?: Maybe<Scalars["String"]["output"]>;
    totalRevenue?: Maybe<Scalars["Int"]["output"]>;
    website?: Maybe<Scalars["String"]["output"]>;
};

export type CompanyAggregateResponse = {
    avg?: Maybe<CompanyAvgAggregate>;
    count?: Maybe<CompanyCountAggregate>;
    groupBy?: Maybe<CompanyAggregateGroupBy>;
    max?: Maybe<CompanyMaxAggregate>;
    min?: Maybe<CompanyMinAggregate>;
    sum?: Maybe<CompanySumAggregate>;
};

export type CompanyAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
    totalRevenue?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyBusinessTypeFilterComparison = {
    eq?: InputMaybe<BusinessType>;
    in?: InputMaybe<Array<BusinessType>>;
    neq?: InputMaybe<BusinessType>;
    notIn?: InputMaybe<Array<BusinessType>>;
};

export type CompanyCompanySizeFilterComparison = {
    eq?: InputMaybe<CompanySize>;
    in?: InputMaybe<Array<CompanySize>>;
    neq?: InputMaybe<CompanySize>;
    notIn?: InputMaybe<Array<CompanySize>>;
};

export type CompanyConnection = {
    /** Array of nodes. */
    nodes: Array<Company>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type CompanyContactsAggregateGroupBy = {
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    score?: Maybe<Scalars["Int"]["output"]>;
    stage?: Maybe<ContactStage>;
    status?: Maybe<ContactStatus>;
};

export type CompanyContactsAggregateResponse = {
    avg?: Maybe<CompanyContactsAvgAggregate>;
    count?: Maybe<CompanyContactsCountAggregate>;
    groupBy?: Maybe<CompanyContactsAggregateGroupBy>;
    max?: Maybe<CompanyContactsMaxAggregate>;
    min?: Maybe<CompanyContactsMinAggregate>;
    sum?: Maybe<CompanyContactsSumAggregate>;
};

export type CompanyContactsAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
    score?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyContactsConnection = {
    /** Array of nodes. */
    nodes: Array<Contact>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type CompanyContactsCountAggregate = {
    email?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    name?: Maybe<Scalars["Int"]["output"]>;
    phone?: Maybe<Scalars["Int"]["output"]>;
    score?: Maybe<Scalars["Int"]["output"]>;
    stage?: Maybe<Scalars["Int"]["output"]>;
    status?: Maybe<Scalars["Int"]["output"]>;
};

export type CompanyContactsMaxAggregate = {
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    score?: Maybe<Scalars["Int"]["output"]>;
    stage?: Maybe<ContactStage>;
    status?: Maybe<ContactStatus>;
};

export type CompanyContactsMinAggregate = {
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    score?: Maybe<Scalars["Int"]["output"]>;
    stage?: Maybe<ContactStage>;
    status?: Maybe<ContactStatus>;
};

export type CompanyContactsSumAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
    score?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyCountAggregate = {
    businessType?: Maybe<Scalars["Int"]["output"]>;
    companySize?: Maybe<Scalars["Int"]["output"]>;
    country?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    industry?: Maybe<Scalars["Int"]["output"]>;
    name?: Maybe<Scalars["Int"]["output"]>;
    totalRevenue?: Maybe<Scalars["Int"]["output"]>;
    website?: Maybe<Scalars["Int"]["output"]>;
};

export type CompanyCreateInput = {
    businessType?: InputMaybe<BusinessType>;
    companySize?: InputMaybe<CompanySize>;
    contactId?: InputMaybe<Scalars["ID"]["input"]>;
    country?: InputMaybe<Scalars["String"]["input"]>;
    industry?: InputMaybe<Industry>;
    name: Scalars["String"]["input"];
    salesOwnerId: Scalars["ID"]["input"];
    totalRevenue?: InputMaybe<Scalars["Int"]["input"]>;
    website?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompanyDealsAggregateGroupBy = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyDealsAggregateResponse = {
    avg?: Maybe<CompanyDealsAvgAggregate>;
    count?: Maybe<CompanyDealsCountAggregate>;
    groupBy?: Maybe<CompanyDealsAggregateGroupBy>;
    max?: Maybe<CompanyDealsMaxAggregate>;
    min?: Maybe<CompanyDealsMinAggregate>;
    sum?: Maybe<CompanyDealsSumAggregate>;
};

export type CompanyDealsAvgAggregate = {
    closeDateDay?: Maybe<Scalars["Float"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Float"]["output"]>;
    closeDateYear?: Maybe<Scalars["Float"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Float"]["output"]>;
    stageId?: Maybe<Scalars["Float"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyDealsConnection = {
    /** Array of nodes. */
    nodes: Array<Deal>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type CompanyDealsCountAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    stageId?: Maybe<Scalars["Int"]["output"]>;
    value?: Maybe<Scalars["Int"]["output"]>;
};

export type CompanyDealsMaxAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyDealsMinAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyDealsSumAggregate = {
    closeDateDay?: Maybe<Scalars["Float"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Float"]["output"]>;
    closeDateYear?: Maybe<Scalars["Float"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Float"]["output"]>;
    stageId?: Maybe<Scalars["Float"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyDeleteFilter = {
    and?: InputMaybe<Array<CompanyDeleteFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanyDeleteFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type CompanyDeleteResponse = {
    businessType?: Maybe<BusinessType>;
    companySize?: Maybe<CompanySize>;
    country?: Maybe<Scalars["String"]["output"]>;
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    industry?: Maybe<Industry>;
    name?: Maybe<Scalars["String"]["output"]>;
    totalRevenue?: Maybe<Scalars["Int"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
    website?: Maybe<Scalars["String"]["output"]>;
};

export type CompanyFilter = {
    and?: InputMaybe<Array<CompanyFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    contacts?: InputMaybe<CompanyFilterContactFilter>;
    country?: InputMaybe<StringFieldComparison>;
    createdBy?: InputMaybe<CompanyFilterUserFilter>;
    deals?: InputMaybe<CompanyFilterDealFilter>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    notes?: InputMaybe<CompanyFilterCompanyNoteFilter>;
    or?: InputMaybe<Array<CompanyFilter>>;
    salesOwner?: InputMaybe<CompanyFilterUserFilter>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    updatedBy?: InputMaybe<CompanyFilterUserFilter>;
    website?: InputMaybe<StringFieldComparison>;
};

export type CompanyFilterCompanyNoteFilter = {
    and?: InputMaybe<Array<CompanyFilterCompanyNoteFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<CompanyFilterCompanyNoteFilter>>;
};

export type CompanyFilterContactFilter = {
    and?: InputMaybe<Array<CompanyFilterContactFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanyFilterContactFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type CompanyFilterDealFilter = {
    and?: InputMaybe<Array<CompanyFilterDealFilter>>;
    closeDateDay?: InputMaybe<IntFieldComparison>;
    closeDateMonth?: InputMaybe<IntFieldComparison>;
    closeDateYear?: InputMaybe<IntFieldComparison>;
    dealOwnerId?: InputMaybe<IdFilterComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<CompanyFilterDealFilter>>;
    stageId?: InputMaybe<IdFilterComparison>;
    value?: InputMaybe<FloatFieldComparison>;
};

export type CompanyFilterUserFilter = {
    and?: InputMaybe<Array<CompanyFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanyFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type CompanyIndustryFilterComparison = {
    eq?: InputMaybe<Industry>;
    in?: InputMaybe<Array<Industry>>;
    neq?: InputMaybe<Industry>;
    notIn?: InputMaybe<Array<Industry>>;
};

export type CompanyMaxAggregate = {
    businessType?: Maybe<BusinessType>;
    companySize?: Maybe<CompanySize>;
    country?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    industry?: Maybe<Industry>;
    name?: Maybe<Scalars["String"]["output"]>;
    totalRevenue?: Maybe<Scalars["Int"]["output"]>;
    website?: Maybe<Scalars["String"]["output"]>;
};

export type CompanyMinAggregate = {
    businessType?: Maybe<BusinessType>;
    companySize?: Maybe<CompanySize>;
    country?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    industry?: Maybe<Industry>;
    name?: Maybe<Scalars["String"]["output"]>;
    totalRevenue?: Maybe<Scalars["Int"]["output"]>;
    website?: Maybe<Scalars["String"]["output"]>;
};

export type CompanyNote = {
    company: Company;
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    id: Scalars["ID"]["output"];
    note: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type CompanyNoteAggregateFilter = {
    and?: InputMaybe<Array<CompanyNoteAggregateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<CompanyNoteAggregateFilter>>;
};

export type CompanyNoteConnection = {
    /** Array of nodes. */
    nodes: Array<CompanyNote>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type CompanyNoteCreateInput = {
    companyId: Scalars["ID"]["input"];
    note: Scalars["String"]["input"];
};

export type CompanyNoteDeleteFilter = {
    and?: InputMaybe<Array<CompanyNoteDeleteFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<CompanyNoteDeleteFilter>>;
};

export type CompanyNoteDeleteResponse = {
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    note?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type CompanyNoteFilter = {
    and?: InputMaybe<Array<CompanyNoteFilter>>;
    company?: InputMaybe<CompanyNoteFilterCompanyFilter>;
    createdBy?: InputMaybe<CompanyNoteFilterUserFilter>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<CompanyNoteFilter>>;
    updatedBy?: InputMaybe<CompanyNoteFilterUserFilter>;
};

export type CompanyNoteFilterCompanyFilter = {
    and?: InputMaybe<Array<CompanyNoteFilterCompanyFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanyNoteFilterCompanyFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type CompanyNoteFilterUserFilter = {
    and?: InputMaybe<Array<CompanyNoteFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanyNoteFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type CompanyNoteSort = {
    direction: SortDirection;
    field: CompanyNoteSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type CompanyNoteSortFields = "id";

export type CompanyNoteSubscriptionFilter = {
    and?: InputMaybe<Array<CompanyNoteSubscriptionFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<CompanyNoteSubscriptionFilter>>;
};

export type CompanyNoteUpdateFilter = {
    and?: InputMaybe<Array<CompanyNoteUpdateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<CompanyNoteUpdateFilter>>;
};

export type CompanyNoteUpdateInput = {
    note: Scalars["String"]["input"];
};

export type CompanyNotesAggregateGroupBy = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type CompanyNotesAggregateResponse = {
    avg?: Maybe<CompanyNotesAvgAggregate>;
    count?: Maybe<CompanyNotesCountAggregate>;
    groupBy?: Maybe<CompanyNotesAggregateGroupBy>;
    max?: Maybe<CompanyNotesMaxAggregate>;
    min?: Maybe<CompanyNotesMinAggregate>;
    sum?: Maybe<CompanyNotesSumAggregate>;
};

export type CompanyNotesAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyNotesConnection = {
    /** Array of nodes. */
    nodes: Array<CompanyNote>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type CompanyNotesCountAggregate = {
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type CompanyNotesMaxAggregate = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type CompanyNotesMinAggregate = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type CompanyNotesSumAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

/** Company size */
export type CompanySize = "ENTERPRISE" | "LARGE" | "MEDIUM" | "SMALL";

export type CompanySort = {
    direction: SortDirection;
    field: CompanySortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type CompanySortFields =
    | "businessType"
    | "companySize"
    | "country"
    | "id"
    | "industry"
    | "name"
    | "totalRevenue"
    | "website";

export type CompanySubscriptionFilter = {
    and?: InputMaybe<Array<CompanySubscriptionFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanySubscriptionFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type CompanySumAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
    totalRevenue?: Maybe<Scalars["Float"]["output"]>;
};

export type CompanyUpdateFilter = {
    and?: InputMaybe<Array<CompanyUpdateFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<CompanyUpdateFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type CompanyUpdateInput = {
    businessType?: InputMaybe<BusinessType>;
    companySize?: InputMaybe<CompanySize>;
    country?: InputMaybe<Scalars["String"]["input"]>;
    industry?: InputMaybe<Industry>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    salesOwnerId?: InputMaybe<Scalars["ID"]["input"]>;
    totalRevenue?: InputMaybe<Scalars["Int"]["input"]>;
    website?: InputMaybe<Scalars["String"]["input"]>;
};

export type Contact = {
    company: Company;
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    deals: ContactDealsConnection;
    email: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    jobTitle: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
    notes: ContactNotesConnection;
    phone: Scalars["String"]["output"];
    salesOwner: User;
    score: Scalars["Int"]["output"];
    stage: ContactStage;
    status: ContactStatus;
    timezone: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type ContactDealsArgs = {
    filter?: DealFilter;
    paging?: OffsetPaging;
    sorting?: Array<DealSort>;
};

export type ContactNotesArgs = {
    filter?: ContactNoteFilter;
    paging?: OffsetPaging;
    sorting?: Array<ContactNoteSort>;
};

export type ContactAggregateFilter = {
    and?: InputMaybe<Array<ContactAggregateFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<ContactAggregateFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type ContactConnection = {
    /** Array of nodes. */
    nodes: Array<Contact>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type ContactCreateInput = {
    companyId: Scalars["ID"]["input"];
    email: Scalars["String"]["input"];
    jobTitle?: InputMaybe<Scalars["String"]["input"]>;
    name: Scalars["String"]["input"];
    phone?: InputMaybe<Scalars["String"]["input"]>;
    salesOwnerId: Scalars["ID"]["input"];
    score?: InputMaybe<Scalars["Int"]["input"]>;
    stage?: InputMaybe<ContactStage>;
    status?: InputMaybe<ContactStatus>;
    timezone?: InputMaybe<Scalars["String"]["input"]>;
};

export type ContactDealsConnection = {
    /** Array of nodes. */
    nodes: Array<Deal>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type ContactDeleteFilter = {
    and?: InputMaybe<Array<ContactDeleteFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<ContactDeleteFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type ContactDeleteResponse = {
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    jobTitle?: Maybe<Scalars["String"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    score?: Maybe<Scalars["Int"]["output"]>;
    stage?: Maybe<ContactStage>;
    status?: Maybe<ContactStatus>;
    timezone?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ContactFilter = {
    and?: InputMaybe<Array<ContactFilter>>;
    company?: InputMaybe<ContactFilterCompanyFilter>;
    createdBy?: InputMaybe<ContactFilterUserFilter>;
    deals?: InputMaybe<ContactFilterDealFilter>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    notes?: InputMaybe<ContactFilterContactNoteFilter>;
    or?: InputMaybe<Array<ContactFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    salesOwner?: InputMaybe<ContactFilterUserFilter>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
    updatedBy?: InputMaybe<ContactFilterUserFilter>;
};

export type ContactFilterCompanyFilter = {
    and?: InputMaybe<Array<ContactFilterCompanyFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<ContactFilterCompanyFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type ContactFilterContactNoteFilter = {
    and?: InputMaybe<Array<ContactFilterContactNoteFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<ContactFilterContactNoteFilter>>;
};

export type ContactFilterDealFilter = {
    and?: InputMaybe<Array<ContactFilterDealFilter>>;
    closeDateDay?: InputMaybe<IntFieldComparison>;
    closeDateMonth?: InputMaybe<IntFieldComparison>;
    closeDateYear?: InputMaybe<IntFieldComparison>;
    dealOwnerId?: InputMaybe<IdFilterComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<ContactFilterDealFilter>>;
    stageId?: InputMaybe<IdFilterComparison>;
    value?: InputMaybe<FloatFieldComparison>;
};

export type ContactFilterUserFilter = {
    and?: InputMaybe<Array<ContactFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<ContactFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type ContactNote = {
    contact: Contact;
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    id: Scalars["ID"]["output"];
    note: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type ContactNoteConnection = {
    /** Array of nodes. */
    nodes: Array<ContactNote>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type ContactNoteCreateInput = {
    contactId: Scalars["ID"]["input"];
    note: Scalars["String"]["input"];
};

export type ContactNoteDeleteFilter = {
    and?: InputMaybe<Array<ContactNoteDeleteFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<ContactNoteDeleteFilter>>;
};

export type ContactNoteDeleteResponse = {
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    note?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ContactNoteFilter = {
    and?: InputMaybe<Array<ContactNoteFilter>>;
    contact?: InputMaybe<ContactNoteFilterContactFilter>;
    createdBy?: InputMaybe<ContactNoteFilterUserFilter>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<ContactNoteFilter>>;
    updatedBy?: InputMaybe<ContactNoteFilterUserFilter>;
};

export type ContactNoteFilterContactFilter = {
    and?: InputMaybe<Array<ContactNoteFilterContactFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<ContactNoteFilterContactFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type ContactNoteFilterUserFilter = {
    and?: InputMaybe<Array<ContactNoteFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<ContactNoteFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type ContactNoteSort = {
    direction: SortDirection;
    field: ContactNoteSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type ContactNoteSortFields = "id";

export type ContactNoteSubscriptionFilter = {
    and?: InputMaybe<Array<ContactNoteSubscriptionFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<ContactNoteSubscriptionFilter>>;
};

export type ContactNoteUpdateFilter = {
    and?: InputMaybe<Array<ContactNoteUpdateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<ContactNoteUpdateFilter>>;
};

export type ContactNoteUpdateInput = {
    note: Scalars["String"]["input"];
};

export type ContactNotesConnection = {
    /** Array of nodes. */
    nodes: Array<ContactNote>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type ContactSort = {
    direction: SortDirection;
    field: ContactSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type ContactSortFields =
    | "email"
    | "id"
    | "name"
    | "phone"
    | "score"
    | "stage"
    | "status";

/** Contact stage */
export type ContactStage = "CUSTOMER" | "LEAD" | "SALES_QUALIFIED_LEAD";

export type ContactStageFilterComparison = {
    eq?: InputMaybe<ContactStage>;
    gt?: InputMaybe<ContactStage>;
    gte?: InputMaybe<ContactStage>;
    iLike?: InputMaybe<ContactStage>;
    in?: InputMaybe<Array<ContactStage>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    like?: InputMaybe<ContactStage>;
    lt?: InputMaybe<ContactStage>;
    lte?: InputMaybe<ContactStage>;
    neq?: InputMaybe<ContactStage>;
    notILike?: InputMaybe<ContactStage>;
    notIn?: InputMaybe<Array<ContactStage>>;
    notLike?: InputMaybe<ContactStage>;
};

/** Contact status */
export type ContactStatus =
    | "CHURNED"
    | "CONTACTED"
    | "INTERESTED"
    | "LOST"
    | "NEGOTIATION"
    | "NEW"
    | "QUALIFIED"
    | "UNQUALIFIED"
    | "WON";

export type ContactStatusFilterComparison = {
    eq?: InputMaybe<ContactStatus>;
    gt?: InputMaybe<ContactStatus>;
    gte?: InputMaybe<ContactStatus>;
    iLike?: InputMaybe<ContactStatus>;
    in?: InputMaybe<Array<ContactStatus>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    like?: InputMaybe<ContactStatus>;
    lt?: InputMaybe<ContactStatus>;
    lte?: InputMaybe<ContactStatus>;
    neq?: InputMaybe<ContactStatus>;
    notILike?: InputMaybe<ContactStatus>;
    notIn?: InputMaybe<Array<ContactStatus>>;
    notLike?: InputMaybe<ContactStatus>;
};

export type ContactSubscriptionFilter = {
    and?: InputMaybe<Array<ContactSubscriptionFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<ContactSubscriptionFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type ContactUpdateFilter = {
    and?: InputMaybe<Array<ContactUpdateFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<ContactUpdateFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type ContactUpdateInput = {
    companyId?: InputMaybe<Scalars["String"]["input"]>;
    email?: InputMaybe<Scalars["String"]["input"]>;
    jobTitle?: InputMaybe<Scalars["String"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    phone?: InputMaybe<Scalars["String"]["input"]>;
    salesOwnerId?: InputMaybe<Scalars["ID"]["input"]>;
    score?: InputMaybe<Scalars["Int"]["input"]>;
    stage?: InputMaybe<ContactStage>;
    status?: InputMaybe<ContactStatus>;
    timezone?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateAuditSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: AuditSubscriptionFilter;
};

export type CreateCompanyNoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: CompanyNoteSubscriptionFilter;
};

export type CreateCompanySubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: CompanySubscriptionFilter;
};

export type CreateContactNoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: ContactNoteSubscriptionFilter;
};

export type CreateContactSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: ContactSubscriptionFilter;
};

export type CreateDealStageSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: DealStageSubscriptionFilter;
};

export type CreateDealSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: DealSubscriptionFilter;
};

export type CreateEventCategorySubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: EventCategorySubscriptionFilter;
};

export type CreateEventSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: EventSubscriptionFilter;
};

export type CreateManyCompaniesInput = {
    /** Array of records to create */
    companies: Array<CompanyCreateInput>;
};

export type CreateManyCompanyNotesInput = {
    /** Array of records to create */
    companyNotes: Array<CompanyNoteCreateInput>;
};

export type CreateManyContactNotesInput = {
    /** Array of records to create */
    contactNotes: Array<ContactNoteCreateInput>;
};

export type CreateManyContactsInput = {
    /** Array of records to create */
    contacts: Array<ContactCreateInput>;
};

export type CreateManyDealStagesInput = {
    /** Array of records to create */
    dealStages: Array<DealStageCreateInput>;
};

export type CreateManyDealsInput = {
    /** Array of records to create */
    deals: Array<DealCreateInput>;
};

export type CreateManyEventCategoriesInput = {
    /** Array of records to create */
    eventCategories: Array<EventCategoryCreateInput>;
};

export type CreateManyEventsInput = {
    /** Array of records to create */
    events: Array<EventCreateInput>;
};

export type CreateManyQuotesInput = {
    /** Array of records to create */
    quotes: Array<QuoteCreateInput>;
};

export type CreateManyTaskCommentsInput = {
    /** Array of records to create */
    taskComments: Array<TaskCommentCreateInput>;
};

export type CreateManyTaskStagesInput = {
    /** Array of records to create */
    taskStages: Array<TaskStageCreateInput>;
};

export type CreateManyTasksInput = {
    /** Array of records to create */
    tasks: Array<TaskCreateInput>;
};

export type CreateManyUsersInput = {
    /** Array of records to create */
    users: Array<UserCreateInput>;
};

export type CreateOneCompanyInput = {
    /** The record to create */
    company: CompanyCreateInput;
};

export type CreateOneCompanyNoteInput = {
    /** The record to create */
    companyNote: CompanyNoteCreateInput;
};

export type CreateOneContactInput = {
    /** The record to create */
    contact: ContactCreateInput;
};

export type CreateOneContactNoteInput = {
    /** The record to create */
    contactNote: ContactNoteCreateInput;
};

export type CreateOneDealInput = {
    /** The record to create */
    deal: DealCreateInput;
};

export type CreateOneDealStageInput = {
    /** The record to create */
    dealStage: DealStageCreateInput;
};

export type CreateOneEventCategoryInput = {
    /** The record to create */
    eventCategory: EventCategoryCreateInput;
};

export type CreateOneEventInput = {
    /** The record to create */
    event: EventCreateInput;
};

export type CreateOneQuoteInput = {
    /** The record to create */
    quote: QuoteCreateInput;
};

export type CreateOneTaskCommentInput = {
    /** The record to create */
    taskComment: TaskCommentCreateInput;
};

export type CreateOneTaskInput = {
    /** The record to create */
    task: TaskCreateInput;
};

export type CreateOneTaskStageInput = {
    /** The record to create */
    taskStage: TaskStageCreateInput;
};

export type CreateOneUserInput = {
    /** The record to create */
    user: UserCreateInput;
};

export type CreateQuoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: QuoteSubscriptionFilter;
};

export type CreateTaskCommentSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskCommentSubscriptionFilter;
};

export type CreateTaskStageSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskStageSubscriptionFilter;
};

export type CreateTaskSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskSubscriptionFilter;
};

export type CreateUserSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: UserSubscriptionFilter;
};

export type CursorPaging = {
    /** Paginate after opaque cursor */
    after?: InputMaybe<Scalars["ConnectionCursor"]["input"]>;
    /** Paginate before opaque cursor */
    before?: InputMaybe<Scalars["ConnectionCursor"]["input"]>;
    /** Paginate first */
    first?: InputMaybe<Scalars["Int"]["input"]>;
    /** Paginate last */
    last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DateFieldComparison = {
    between?: InputMaybe<DateFieldComparisonBetween>;
    eq?: InputMaybe<Scalars["DateTime"]["input"]>;
    gt?: InputMaybe<Scalars["DateTime"]["input"]>;
    gte?: InputMaybe<Scalars["DateTime"]["input"]>;
    in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    lt?: InputMaybe<Scalars["DateTime"]["input"]>;
    lte?: InputMaybe<Scalars["DateTime"]["input"]>;
    neq?: InputMaybe<Scalars["DateTime"]["input"]>;
    notBetween?: InputMaybe<DateFieldComparisonBetween>;
    notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type DateFieldComparisonBetween = {
    lower: Scalars["DateTime"]["input"];
    upper: Scalars["DateTime"]["input"];
};

export type Deal = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    company: Company;
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    dealContact: Contact;
    dealOwner: User;
    dealOwnerId: Scalars["ID"]["output"];
    id: Scalars["ID"]["output"];
    notes: Scalars["String"]["output"];
    stage: DealStage;
    stageId: Scalars["ID"]["output"];
    title: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
    value: Scalars["Float"]["output"];
};

export type DealAggregateFilter = {
    and?: InputMaybe<Array<DealAggregateFilter>>;
    closeDateDay?: InputMaybe<IntFieldComparison>;
    closeDateMonth?: InputMaybe<IntFieldComparison>;
    closeDateYear?: InputMaybe<IntFieldComparison>;
    dealOwnerId?: InputMaybe<IdFilterComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealAggregateFilter>>;
    stageId?: InputMaybe<IdFilterComparison>;
    value?: InputMaybe<FloatFieldComparison>;
};

export type DealAggregateGroupBy = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealAggregateResponse = {
    avg?: Maybe<DealAvgAggregate>;
    count?: Maybe<DealCountAggregate>;
    groupBy?: Maybe<DealAggregateGroupBy>;
    max?: Maybe<DealMaxAggregate>;
    min?: Maybe<DealMinAggregate>;
    sum?: Maybe<DealSumAggregate>;
};

export type DealAvgAggregate = {
    closeDateDay?: Maybe<Scalars["Float"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Float"]["output"]>;
    closeDateYear?: Maybe<Scalars["Float"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Float"]["output"]>;
    stageId?: Maybe<Scalars["Float"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealConnection = {
    /** Array of nodes. */
    nodes: Array<Deal>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type DealCountAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    stageId?: Maybe<Scalars["Int"]["output"]>;
    value?: Maybe<Scalars["Int"]["output"]>;
};

export type DealCreateInput = {
    companyId: Scalars["ID"]["input"];
    dealContactId: Scalars["ID"]["input"];
    dealOwnerId: Scalars["ID"]["input"];
    stageId: Scalars["ID"]["input"];
    title: Scalars["String"]["input"];
    value: Scalars["Float"]["input"];
};

export type DealDeleteFilter = {
    and?: InputMaybe<Array<DealDeleteFilter>>;
    closeDateDay?: InputMaybe<IntFieldComparison>;
    closeDateMonth?: InputMaybe<IntFieldComparison>;
    closeDateYear?: InputMaybe<IntFieldComparison>;
    dealOwnerId?: InputMaybe<IdFilterComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealDeleteFilter>>;
    stageId?: InputMaybe<IdFilterComparison>;
    value?: InputMaybe<FloatFieldComparison>;
};

export type DealDeleteResponse = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    notes?: Maybe<Scalars["String"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealFilter = {
    and?: InputMaybe<Array<DealFilter>>;
    closeDateDay?: InputMaybe<IntFieldComparison>;
    closeDateMonth?: InputMaybe<IntFieldComparison>;
    closeDateYear?: InputMaybe<IntFieldComparison>;
    company?: InputMaybe<DealFilterCompanyFilter>;
    createdBy?: InputMaybe<DealFilterUserFilter>;
    dealContact?: InputMaybe<DealFilterContactFilter>;
    dealOwner?: InputMaybe<DealFilterUserFilter>;
    dealOwnerId?: InputMaybe<IdFilterComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealFilter>>;
    stage?: InputMaybe<DealFilterDealStageFilter>;
    stageId?: InputMaybe<IdFilterComparison>;
    updatedBy?: InputMaybe<DealFilterUserFilter>;
    value?: InputMaybe<FloatFieldComparison>;
};

export type DealFilterCompanyFilter = {
    and?: InputMaybe<Array<DealFilterCompanyFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<DealFilterCompanyFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type DealFilterContactFilter = {
    and?: InputMaybe<Array<DealFilterContactFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<DealFilterContactFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type DealFilterDealStageFilter = {
    and?: InputMaybe<Array<DealFilterDealStageFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealFilterDealStageFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type DealFilterUserFilter = {
    and?: InputMaybe<Array<DealFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<DealFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type DealMaxAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealMinAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealSort = {
    direction: SortDirection;
    field: DealSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type DealSortFields =
    | "closeDateDay"
    | "closeDateMonth"
    | "closeDateYear"
    | "dealOwnerId"
    | "id"
    | "stageId"
    | "value";

export type DealStage = {
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    deals: Array<Deal>;
    dealsAggregate: Array<DealStageDealsAggregateResponse>;
    id: Scalars["ID"]["output"];
    title: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type DealStageDealsArgs = {
    filter?: DealFilter;
    sorting?: Array<DealSort>;
};

export type DealStageDealsAggregateArgs = {
    filter?: InputMaybe<DealAggregateFilter>;
};

export type DealStageCreateInput = {
    title: Scalars["String"]["input"];
};

export type DealStageDealsAggregateGroupBy = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealStageDealsAggregateResponse = {
    avg?: Maybe<DealStageDealsAvgAggregate>;
    count?: Maybe<DealStageDealsCountAggregate>;
    groupBy?: Maybe<DealStageDealsAggregateGroupBy>;
    max?: Maybe<DealStageDealsMaxAggregate>;
    min?: Maybe<DealStageDealsMinAggregate>;
    sum?: Maybe<DealStageDealsSumAggregate>;
};

export type DealStageDealsAvgAggregate = {
    closeDateDay?: Maybe<Scalars["Float"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Float"]["output"]>;
    closeDateYear?: Maybe<Scalars["Float"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Float"]["output"]>;
    stageId?: Maybe<Scalars["Float"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealStageDealsCountAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    stageId?: Maybe<Scalars["Int"]["output"]>;
    value?: Maybe<Scalars["Int"]["output"]>;
};

export type DealStageDealsMaxAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealStageDealsMinAggregate = {
    closeDateDay?: Maybe<Scalars["Int"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Int"]["output"]>;
    closeDateYear?: Maybe<Scalars["Int"]["output"]>;
    dealOwnerId?: Maybe<Scalars["ID"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    stageId?: Maybe<Scalars["ID"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealStageDealsSumAggregate = {
    closeDateDay?: Maybe<Scalars["Float"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Float"]["output"]>;
    closeDateYear?: Maybe<Scalars["Float"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Float"]["output"]>;
    stageId?: Maybe<Scalars["Float"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealStageDeleteFilter = {
    and?: InputMaybe<Array<DealStageDeleteFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealStageDeleteFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type DealStageDeleteResponse = {
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DealStageFilter = {
    and?: InputMaybe<Array<DealStageFilter>>;
    createdBy?: InputMaybe<DealStageFilterUserFilter>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealStageFilter>>;
    title?: InputMaybe<StringFieldComparison>;
    updatedBy?: InputMaybe<DealStageFilterUserFilter>;
};

export type DealStageFilterUserFilter = {
    and?: InputMaybe<Array<DealStageFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<DealStageFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type DealStageSort = {
    direction: SortDirection;
    field: DealStageSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type DealStageSortFields = "id" | "title";

export type DealStageSubscriptionFilter = {
    and?: InputMaybe<Array<DealStageSubscriptionFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealStageSubscriptionFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type DealStageUpdateFilter = {
    and?: InputMaybe<Array<DealStageUpdateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealStageUpdateFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type DealStageUpdateInput = {
    title: Scalars["String"]["input"];
};

export type DealSubscriptionFilter = {
    and?: InputMaybe<Array<DealSubscriptionFilter>>;
    closeDateDay?: InputMaybe<IntFieldComparison>;
    closeDateMonth?: InputMaybe<IntFieldComparison>;
    closeDateYear?: InputMaybe<IntFieldComparison>;
    dealOwnerId?: InputMaybe<IdFilterComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealSubscriptionFilter>>;
    stageId?: InputMaybe<IdFilterComparison>;
    value?: InputMaybe<FloatFieldComparison>;
};

export type DealSumAggregate = {
    closeDateDay?: Maybe<Scalars["Float"]["output"]>;
    closeDateMonth?: Maybe<Scalars["Float"]["output"]>;
    closeDateYear?: Maybe<Scalars["Float"]["output"]>;
    dealOwnerId?: Maybe<Scalars["Float"]["output"]>;
    id?: Maybe<Scalars["Float"]["output"]>;
    stageId?: Maybe<Scalars["Float"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};

export type DealUpdateFilter = {
    and?: InputMaybe<Array<DealUpdateFilter>>;
    closeDateDay?: InputMaybe<IntFieldComparison>;
    closeDateMonth?: InputMaybe<IntFieldComparison>;
    closeDateYear?: InputMaybe<IntFieldComparison>;
    dealOwnerId?: InputMaybe<IdFilterComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<DealUpdateFilter>>;
    stageId?: InputMaybe<IdFilterComparison>;
    value?: InputMaybe<FloatFieldComparison>;
};

export type DeleteManyCompaniesInput = {
    /** Filter to find records to delete */
    filter: CompanyDeleteFilter;
};

export type DeleteManyCompanyNotesInput = {
    /** Filter to find records to delete */
    filter: CompanyNoteDeleteFilter;
};

export type DeleteManyContactNotesInput = {
    /** Filter to find records to delete */
    filter: ContactNoteDeleteFilter;
};

export type DeleteManyContactsInput = {
    /** Filter to find records to delete */
    filter: ContactDeleteFilter;
};

export type DeleteManyDealStagesInput = {
    /** Filter to find records to delete */
    filter: DealStageDeleteFilter;
};

export type DeleteManyDealsInput = {
    /** Filter to find records to delete */
    filter: DealDeleteFilter;
};

export type DeleteManyEventCategoriesInput = {
    /** Filter to find records to delete */
    filter: EventCategoryDeleteFilter;
};

export type DeleteManyEventsInput = {
    /** Filter to find records to delete */
    filter: EventDeleteFilter;
};

export type DeleteManyQuotesInput = {
    /** Filter to find records to delete */
    filter: QuoteDeleteFilter;
};

export type DeleteManyResponse = {
    /** The number of records deleted. */
    deletedCount: Scalars["Int"]["output"];
};

export type DeleteManyTaskCommentsInput = {
    /** Filter to find records to delete */
    filter: TaskCommentDeleteFilter;
};

export type DeleteManyTaskStagesInput = {
    /** Filter to find records to delete */
    filter: TaskStageDeleteFilter;
};

export type DeleteManyTasksInput = {
    /** Filter to find records to delete */
    filter: TaskDeleteFilter;
};

export type DeleteManyUsersInput = {
    /** Filter to find records to delete */
    filter: UserDeleteFilter;
};

export type DeleteOneAuditSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: AuditSubscriptionFilter;
};

export type DeleteOneCompanyInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneCompanyNoteInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneCompanyNoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: CompanyNoteSubscriptionFilter;
};

export type DeleteOneCompanySubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: CompanySubscriptionFilter;
};

export type DeleteOneContactInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneContactNoteInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneContactNoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: ContactNoteSubscriptionFilter;
};

export type DeleteOneContactSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: ContactSubscriptionFilter;
};

export type DeleteOneDealInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneDealStageInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneDealStageSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: DealStageSubscriptionFilter;
};

export type DeleteOneDealSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: DealSubscriptionFilter;
};

export type DeleteOneEventCategoryInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneEventCategorySubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: EventCategorySubscriptionFilter;
};

export type DeleteOneEventInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneEventSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: EventSubscriptionFilter;
};

export type DeleteOneQuoteInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneQuoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: QuoteSubscriptionFilter;
};

export type DeleteOneTaskCommentInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneTaskCommentSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskCommentSubscriptionFilter;
};

export type DeleteOneTaskInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneTaskStageInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneTaskStageSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskStageSubscriptionFilter;
};

export type DeleteOneTaskSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskSubscriptionFilter;
};

export type DeleteOneUserInput = {
    /** The id of the record to delete. */
    id: Scalars["ID"]["input"];
};

export type DeleteOneUserSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: UserSubscriptionFilter;
};

export type Event = {
    category: EventCategory;
    color: Scalars["String"]["output"];
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    description: Scalars["String"]["output"];
    endDate: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    participants: Array<User>;
    startDate: Scalars["DateTime"]["output"];
    title: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type EventParticipantsArgs = {
    filter?: UserFilter;
    sorting?: Array<UserSort>;
};

export type EventCategory = {
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    events: Array<EventCategory>;
    id: Scalars["ID"]["output"];
    title: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type EventCategoryEventsArgs = {
    filter?: EventCategoryFilter;
    sorting?: Array<EventCategorySort>;
};

export type EventCategoryConnection = {
    /** Array of nodes. */
    nodes: Array<EventCategory>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type EventCategoryCreateInput = {
    title: Scalars["String"]["input"];
};

export type EventCategoryDeleteFilter = {
    and?: InputMaybe<Array<EventCategoryDeleteFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventCategoryDeleteFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type EventCategoryDeleteResponse = {
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type EventCategoryFilter = {
    and?: InputMaybe<Array<EventCategoryFilter>>;
    createdBy?: InputMaybe<EventCategoryFilterUserFilter>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventCategoryFilter>>;
    title?: InputMaybe<StringFieldComparison>;
    updatedBy?: InputMaybe<EventCategoryFilterUserFilter>;
};

export type EventCategoryFilterUserFilter = {
    and?: InputMaybe<Array<EventCategoryFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<EventCategoryFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type EventCategorySort = {
    direction: SortDirection;
    field: EventCategorySortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type EventCategorySortFields = "id" | "title";

export type EventCategorySubscriptionFilter = {
    and?: InputMaybe<Array<EventCategorySubscriptionFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventCategorySubscriptionFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type EventCategoryUpdateFilter = {
    and?: InputMaybe<Array<EventCategoryUpdateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventCategoryUpdateFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type EventCategoryUpdateInput = {
    title: Scalars["String"]["input"];
};

export type EventConnection = {
    /** Array of nodes. */
    nodes: Array<Event>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type EventCreateInput = {
    categoryId: Scalars["ID"]["input"];
    color: Scalars["String"]["input"];
    description: Scalars["String"]["input"];
    endDate: Scalars["DateTime"]["input"];
    participantIds: Array<Scalars["ID"]["input"]>;
    startDate: Scalars["DateTime"]["input"];
    title: Scalars["String"]["input"];
};

export type EventDeleteFilter = {
    and?: InputMaybe<Array<EventDeleteFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    endDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventDeleteFilter>>;
    startDate?: InputMaybe<DateFieldComparison>;
    title?: InputMaybe<StringFieldComparison>;
};

export type EventDeleteResponse = {
    color?: Maybe<Scalars["String"]["output"]>;
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    endDate?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    startDate?: Maybe<Scalars["DateTime"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type EventFilter = {
    and?: InputMaybe<Array<EventFilter>>;
    category?: InputMaybe<EventFilterEventCategoryFilter>;
    createdBy?: InputMaybe<EventFilterUserFilter>;
    description?: InputMaybe<StringFieldComparison>;
    endDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventFilter>>;
    startDate?: InputMaybe<DateFieldComparison>;
    title?: InputMaybe<StringFieldComparison>;
    updatedBy?: InputMaybe<EventFilterUserFilter>;
};

export type EventFilterEventCategoryFilter = {
    and?: InputMaybe<Array<EventFilterEventCategoryFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventFilterEventCategoryFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type EventFilterUserFilter = {
    and?: InputMaybe<Array<EventFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<EventFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type EventSort = {
    direction: SortDirection;
    field: EventSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type EventSortFields =
    | "description"
    | "endDate"
    | "id"
    | "startDate"
    | "title";

export type EventSubscriptionFilter = {
    and?: InputMaybe<Array<EventSubscriptionFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    endDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventSubscriptionFilter>>;
    startDate?: InputMaybe<DateFieldComparison>;
    title?: InputMaybe<StringFieldComparison>;
};

export type EventUpdateFilter = {
    and?: InputMaybe<Array<EventUpdateFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    endDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<EventUpdateFilter>>;
    startDate?: InputMaybe<DateFieldComparison>;
    title?: InputMaybe<StringFieldComparison>;
};

export type EventUpdateInput = {
    categoryId?: InputMaybe<Scalars["ID"]["input"]>;
    color?: InputMaybe<Scalars["String"]["input"]>;
    description?: InputMaybe<Scalars["String"]["input"]>;
    endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
    participantIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
    title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FloatFieldComparison = {
    between?: InputMaybe<FloatFieldComparisonBetween>;
    eq?: InputMaybe<Scalars["Float"]["input"]>;
    gt?: InputMaybe<Scalars["Float"]["input"]>;
    gte?: InputMaybe<Scalars["Float"]["input"]>;
    in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    lt?: InputMaybe<Scalars["Float"]["input"]>;
    lte?: InputMaybe<Scalars["Float"]["input"]>;
    neq?: InputMaybe<Scalars["Float"]["input"]>;
    notBetween?: InputMaybe<FloatFieldComparisonBetween>;
    notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type FloatFieldComparisonBetween = {
    lower: Scalars["Float"]["input"];
    upper: Scalars["Float"]["input"];
};

/** Group by */
export type GroupBy = "DAY" | "MONTH" | "WEEK" | "YEAR";

export type IdFilterComparison = {
    eq?: InputMaybe<Scalars["ID"]["input"]>;
    gt?: InputMaybe<Scalars["ID"]["input"]>;
    gte?: InputMaybe<Scalars["ID"]["input"]>;
    iLike?: InputMaybe<Scalars["ID"]["input"]>;
    in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    like?: InputMaybe<Scalars["ID"]["input"]>;
    lt?: InputMaybe<Scalars["ID"]["input"]>;
    lte?: InputMaybe<Scalars["ID"]["input"]>;
    neq?: InputMaybe<Scalars["ID"]["input"]>;
    notILike?: InputMaybe<Scalars["ID"]["input"]>;
    notIn?: InputMaybe<Array<Scalars["ID"]["input"]>>;
    notLike?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Industry */
export type Industry =
    | "AEROSPACE"
    | "AGRICULTURE"
    | "AUTOMOTIVE"
    | "CHEMICALS"
    | "CONSTRUCTION"
    | "DEFENSE"
    | "EDUCATION"
    | "ENERGY"
    | "FINANCIAL_SERVICES"
    | "FOOD_AND_BEVERAGE"
    | "GOVERNMENT"
    | "HEALTHCARE"
    | "HOSPITALITY"
    | "INDUSTRIAL_MANUFACTURING"
    | "INSURANCE"
    | "LIFE_SCIENCES"
    | "LOGISTICS"
    | "MEDIA"
    | "MINING"
    | "NONPROFIT"
    | "OTHER"
    | "PHARMACEUTICALS"
    | "PROFESSIONAL_SERVICES"
    | "REAL_ESTATE"
    | "RETAIL"
    | "TECHNOLOGY"
    | "TELECOMMUNICATIONS"
    | "TRANSPORTATION"
    | "UTILITIES";

export type IntFieldComparison = {
    between?: InputMaybe<IntFieldComparisonBetween>;
    eq?: InputMaybe<Scalars["Int"]["input"]>;
    gt?: InputMaybe<Scalars["Int"]["input"]>;
    gte?: InputMaybe<Scalars["Int"]["input"]>;
    in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    lt?: InputMaybe<Scalars["Int"]["input"]>;
    lte?: InputMaybe<Scalars["Int"]["input"]>;
    neq?: InputMaybe<Scalars["Int"]["input"]>;
    notBetween?: InputMaybe<IntFieldComparisonBetween>;
    notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type IntFieldComparisonBetween = {
    lower: Scalars["Int"]["input"];
    upper: Scalars["Int"]["input"];
};

export type LoginInput = {
    email: Scalars["String"]["input"];
};

export type Mutation = {
    createManyCompanies: Array<Company>;
    createManyCompanyNotes: Array<CompanyNote>;
    createManyContactNotes: Array<ContactNote>;
    createManyContacts: Array<Contact>;
    createManyDealStages: Array<DealStage>;
    createManyDeals: Array<Deal>;
    createManyEventCategories: Array<EventCategory>;
    createManyEvents: Array<Event>;
    createManyQuotes: Array<Quote>;
    createManyTaskComments: Array<TaskComment>;
    createManyTaskStages: Array<TaskStage>;
    createManyTasks: Array<Task>;
    createManyUsers: Array<User>;
    createOneCompany: Company;
    createOneCompanyNote: CompanyNote;
    createOneContact: Contact;
    createOneContactNote: ContactNote;
    createOneDeal: Deal;
    createOneDealStage: DealStage;
    createOneEvent: Event;
    createOneEventCategory: EventCategory;
    createOneQuote: Quote;
    createOneTask: Task;
    createOneTaskComment: TaskComment;
    createOneTaskStage: TaskStage;
    createOneUser: User;
    deleteManyCompanies: DeleteManyResponse;
    deleteManyCompanyNotes: DeleteManyResponse;
    deleteManyContactNotes: DeleteManyResponse;
    deleteManyContacts: DeleteManyResponse;
    deleteManyDealStages: DeleteManyResponse;
    deleteManyDeals: DeleteManyResponse;
    deleteManyEventCategories: DeleteManyResponse;
    deleteManyEvents: DeleteManyResponse;
    deleteManyQuotes: DeleteManyResponse;
    deleteManyTaskComments: DeleteManyResponse;
    deleteManyTaskStages: DeleteManyResponse;
    deleteManyTasks: DeleteManyResponse;
    deleteManyUsers: DeleteManyResponse;
    deleteOneCompany: CompanyDeleteResponse;
    deleteOneCompanyNote: CompanyNoteDeleteResponse;
    deleteOneContact: ContactDeleteResponse;
    deleteOneContactNote: ContactNoteDeleteResponse;
    deleteOneDeal: DealDeleteResponse;
    deleteOneDealStage: DealStageDeleteResponse;
    deleteOneEvent: EventDeleteResponse;
    deleteOneEventCategory: EventCategoryDeleteResponse;
    deleteOneQuote: QuoteDeleteResponse;
    deleteOneTask: TaskDeleteResponse;
    deleteOneTaskComment: TaskCommentDeleteResponse;
    deleteOneTaskStage: TaskStageDeleteResponse;
    deleteOneUser: UserDeleteResponse;
    login: AuthResponse;
    refreshToken: AuthResponse;
    updateManyCompanies: UpdateManyResponse;
    updateManyCompanyNotes: UpdateManyResponse;
    updateManyContactNotes: UpdateManyResponse;
    updateManyContacts: UpdateManyResponse;
    updateManyDealStages: UpdateManyResponse;
    updateManyDeals: UpdateManyResponse;
    updateManyEventCategories: UpdateManyResponse;
    updateManyEvents: UpdateManyResponse;
    updateManyQuotes: UpdateManyResponse;
    updateManyTaskComments: UpdateManyResponse;
    updateManyTaskStages: UpdateManyResponse;
    updateManyTasks: UpdateManyResponse;
    updateManyUsers: UpdateManyResponse;
    updateOneCompany: Company;
    updateOneCompanyNote: CompanyNote;
    updateOneContact: Contact;
    updateOneContactNote: ContactNote;
    updateOneDeal: Deal;
    updateOneDealStage: DealStage;
    updateOneEvent: Event;
    updateOneEventCategory: EventCategory;
    updateOneQuote: Quote;
    updateOneTask: Task;
    updateOneTaskComment: TaskComment;
    updateOneTaskStage: TaskStage;
    updateOneUser: User;
};

export type MutationCreateManyCompaniesArgs = {
    input: CreateManyCompaniesInput;
};

export type MutationCreateManyCompanyNotesArgs = {
    input: CreateManyCompanyNotesInput;
};

export type MutationCreateManyContactNotesArgs = {
    input: CreateManyContactNotesInput;
};

export type MutationCreateManyContactsArgs = {
    input: CreateManyContactsInput;
};

export type MutationCreateManyDealStagesArgs = {
    input: CreateManyDealStagesInput;
};

export type MutationCreateManyDealsArgs = {
    input: CreateManyDealsInput;
};

export type MutationCreateManyEventCategoriesArgs = {
    input: CreateManyEventCategoriesInput;
};

export type MutationCreateManyEventsArgs = {
    input: CreateManyEventsInput;
};

export type MutationCreateManyQuotesArgs = {
    input: CreateManyQuotesInput;
};

export type MutationCreateManyTaskCommentsArgs = {
    input: CreateManyTaskCommentsInput;
};

export type MutationCreateManyTaskStagesArgs = {
    input: CreateManyTaskStagesInput;
};

export type MutationCreateManyTasksArgs = {
    input: CreateManyTasksInput;
};

export type MutationCreateManyUsersArgs = {
    input: CreateManyUsersInput;
};

export type MutationCreateOneCompanyArgs = {
    input: CreateOneCompanyInput;
};

export type MutationCreateOneCompanyNoteArgs = {
    input: CreateOneCompanyNoteInput;
};

export type MutationCreateOneContactArgs = {
    input: CreateOneContactInput;
};

export type MutationCreateOneContactNoteArgs = {
    input: CreateOneContactNoteInput;
};

export type MutationCreateOneDealArgs = {
    input: CreateOneDealInput;
};

export type MutationCreateOneDealStageArgs = {
    input: CreateOneDealStageInput;
};

export type MutationCreateOneEventArgs = {
    input: CreateOneEventInput;
};

export type MutationCreateOneEventCategoryArgs = {
    input: CreateOneEventCategoryInput;
};

export type MutationCreateOneQuoteArgs = {
    input: CreateOneQuoteInput;
};

export type MutationCreateOneTaskArgs = {
    input: CreateOneTaskInput;
};

export type MutationCreateOneTaskCommentArgs = {
    input: CreateOneTaskCommentInput;
};

export type MutationCreateOneTaskStageArgs = {
    input: CreateOneTaskStageInput;
};

export type MutationCreateOneUserArgs = {
    input: CreateOneUserInput;
};

export type MutationDeleteManyCompaniesArgs = {
    input: DeleteManyCompaniesInput;
};

export type MutationDeleteManyCompanyNotesArgs = {
    input: DeleteManyCompanyNotesInput;
};

export type MutationDeleteManyContactNotesArgs = {
    input: DeleteManyContactNotesInput;
};

export type MutationDeleteManyContactsArgs = {
    input: DeleteManyContactsInput;
};

export type MutationDeleteManyDealStagesArgs = {
    input: DeleteManyDealStagesInput;
};

export type MutationDeleteManyDealsArgs = {
    input: DeleteManyDealsInput;
};

export type MutationDeleteManyEventCategoriesArgs = {
    input: DeleteManyEventCategoriesInput;
};

export type MutationDeleteManyEventsArgs = {
    input: DeleteManyEventsInput;
};

export type MutationDeleteManyQuotesArgs = {
    input: DeleteManyQuotesInput;
};

export type MutationDeleteManyTaskCommentsArgs = {
    input: DeleteManyTaskCommentsInput;
};

export type MutationDeleteManyTaskStagesArgs = {
    input: DeleteManyTaskStagesInput;
};

export type MutationDeleteManyTasksArgs = {
    input: DeleteManyTasksInput;
};

export type MutationDeleteManyUsersArgs = {
    input: DeleteManyUsersInput;
};

export type MutationDeleteOneCompanyArgs = {
    input: DeleteOneCompanyInput;
};

export type MutationDeleteOneCompanyNoteArgs = {
    input: DeleteOneCompanyNoteInput;
};

export type MutationDeleteOneContactArgs = {
    input: DeleteOneContactInput;
};

export type MutationDeleteOneContactNoteArgs = {
    input: DeleteOneContactNoteInput;
};

export type MutationDeleteOneDealArgs = {
    input: DeleteOneDealInput;
};

export type MutationDeleteOneDealStageArgs = {
    input: DeleteOneDealStageInput;
};

export type MutationDeleteOneEventArgs = {
    input: DeleteOneEventInput;
};

export type MutationDeleteOneEventCategoryArgs = {
    input: DeleteOneEventCategoryInput;
};

export type MutationDeleteOneQuoteArgs = {
    input: DeleteOneQuoteInput;
};

export type MutationDeleteOneTaskArgs = {
    input: DeleteOneTaskInput;
};

export type MutationDeleteOneTaskCommentArgs = {
    input: DeleteOneTaskCommentInput;
};

export type MutationDeleteOneTaskStageArgs = {
    input: DeleteOneTaskStageInput;
};

export type MutationDeleteOneUserArgs = {
    input: DeleteOneUserInput;
};

export type MutationLoginArgs = {
    loginInput: LoginInput;
};

export type MutationRefreshTokenArgs = {
    refreshToken: Scalars["String"]["input"];
};

export type MutationUpdateManyCompaniesArgs = {
    input: UpdateManyCompaniesInput;
};

export type MutationUpdateManyCompanyNotesArgs = {
    input: UpdateManyCompanyNotesInput;
};

export type MutationUpdateManyContactNotesArgs = {
    input: UpdateManyContactNotesInput;
};

export type MutationUpdateManyContactsArgs = {
    input: UpdateManyContactsInput;
};

export type MutationUpdateManyDealStagesArgs = {
    input: UpdateManyDealStagesInput;
};

export type MutationUpdateManyDealsArgs = {
    input: UpdateManyDealsInput;
};

export type MutationUpdateManyEventCategoriesArgs = {
    input: UpdateManyEventCategoriesInput;
};

export type MutationUpdateManyEventsArgs = {
    input: UpdateManyEventsInput;
};

export type MutationUpdateManyQuotesArgs = {
    input: UpdateManyQuotesInput;
};

export type MutationUpdateManyTaskCommentsArgs = {
    input: UpdateManyTaskCommentsInput;
};

export type MutationUpdateManyTaskStagesArgs = {
    input: UpdateManyTaskStagesInput;
};

export type MutationUpdateManyTasksArgs = {
    input: UpdateManyTasksInput;
};

export type MutationUpdateManyUsersArgs = {
    input: UpdateManyUsersInput;
};

export type MutationUpdateOneCompanyArgs = {
    input: UpdateOneCompanyInput;
};

export type MutationUpdateOneCompanyNoteArgs = {
    input: UpdateOneCompanyNoteInput;
};

export type MutationUpdateOneContactArgs = {
    input: UpdateOneContactInput;
};

export type MutationUpdateOneContactNoteArgs = {
    input: UpdateOneContactNoteInput;
};

export type MutationUpdateOneDealArgs = {
    input: UpdateOneDealInput;
};

export type MutationUpdateOneDealStageArgs = {
    input: UpdateOneDealStageInput;
};

export type MutationUpdateOneEventArgs = {
    input: UpdateOneEventInput;
};

export type MutationUpdateOneEventCategoryArgs = {
    input: UpdateOneEventCategoryInput;
};

export type MutationUpdateOneQuoteArgs = {
    input: UpdateOneQuoteInput;
};

export type MutationUpdateOneTaskArgs = {
    input: UpdateOneTaskInput;
};

export type MutationUpdateOneTaskCommentArgs = {
    input: UpdateOneTaskCommentInput;
};

export type MutationUpdateOneTaskStageArgs = {
    input: UpdateOneTaskStageInput;
};

export type MutationUpdateOneUserArgs = {
    input: UpdateOneUserInput;
};

export type OffsetPageInfo = {
    /** true if paging forward and there are more records. */
    hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
    /** true if paging backwards and there are more records. */
    hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
};

export type OffsetPaging = {
    /** Limit the number of records returned */
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    /** Offset to start returning records from */
    offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PageInfo = {
    /** The cursor of the last returned record. */
    endCursor?: Maybe<Scalars["ConnectionCursor"]["output"]>;
    /** true if paging forward and there are more records. */
    hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
    /** true if paging backwards and there are more records. */
    hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
    /** The cursor of the first returned record. */
    startCursor?: Maybe<Scalars["ConnectionCursor"]["output"]>;
};

export type Query = {
    audit: Audit;
    audits: AuditConnection;
    companies: CompanyConnection;
    company: Company;
    companyAggregate: Array<CompanyAggregateResponse>;
    companyNote: CompanyNote;
    companyNotes: CompanyNoteConnection;
    contact: Contact;
    contactNote: ContactNote;
    contactNotes: ContactNoteConnection;
    contacts: ContactConnection;
    deal: Deal;
    dealAggregate: Array<DealAggregateResponse>;
    dealStage: DealStage;
    dealStages: Array<DealStage>;
    deals: DealConnection;
    event: Event;
    eventCategories: EventCategoryConnection;
    eventCategory: EventCategory;
    events: EventConnection;
    me: User;
    quote: Quote;
    quotes: QuoteConnection;
    task: Task;
    taskAggregate: Array<TaskAggregateResponse>;
    taskComment: TaskComment;
    taskComments: TaskCommentConnection;
    taskStage: TaskStage;
    taskStageAggregate: Array<TaskStageAggregateResponse>;
    taskStages: Array<TaskStage>;
    tasks: TaskConnection;
    user: User;
    users: UserConnection;
};

export type QueryAuditArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryAuditsArgs = {
    filter?: AuditFilter;
    paging?: CursorPaging;
    sorting?: Array<AuditSort>;
};

export type QueryCompaniesArgs = {
    filter?: CompanyFilter;
    paging?: OffsetPaging;
    sorting?: Array<CompanySort>;
};

export type QueryCompanyArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryCompanyAggregateArgs = {
    filter?: InputMaybe<CompanyAggregateFilter>;
};

export type QueryCompanyNoteArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryCompanyNotesArgs = {
    filter?: CompanyNoteFilter;
    paging?: OffsetPaging;
    sorting?: Array<CompanyNoteSort>;
};

export type QueryContactArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryContactNoteArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryContactNotesArgs = {
    filter?: ContactNoteFilter;
    paging?: OffsetPaging;
    sorting?: Array<ContactNoteSort>;
};

export type QueryContactsArgs = {
    filter?: ContactFilter;
    paging?: OffsetPaging;
    sorting?: Array<ContactSort>;
};

export type QueryDealArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryDealAggregateArgs = {
    filter?: InputMaybe<DealAggregateFilter>;
};

export type QueryDealStageArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryDealStagesArgs = {
    filter?: DealStageFilter;
    sorting?: Array<DealStageSort>;
};

export type QueryDealsArgs = {
    filter?: DealFilter;
    paging?: OffsetPaging;
    sorting?: Array<DealSort>;
};

export type QueryEventArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryEventCategoriesArgs = {
    filter?: EventCategoryFilter;
    paging?: OffsetPaging;
    sorting?: Array<EventCategorySort>;
};

export type QueryEventCategoryArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryEventsArgs = {
    filter?: EventFilter;
    paging?: OffsetPaging;
    sorting?: Array<EventSort>;
};

export type QueryQuoteArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryQuotesArgs = {
    filter?: QuoteFilter;
    paging?: OffsetPaging;
    sorting?: Array<QuoteSort>;
};

export type QueryTaskArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryTaskAggregateArgs = {
    filter?: InputMaybe<TaskAggregateFilter>;
};

export type QueryTaskCommentArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryTaskCommentsArgs = {
    filter?: TaskCommentFilter;
    paging?: OffsetPaging;
    sorting?: Array<TaskCommentSort>;
};

export type QueryTaskStageArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryTaskStageAggregateArgs = {
    filter?: InputMaybe<TaskStageAggregateFilter>;
};

export type QueryTaskStagesArgs = {
    filter?: TaskStageFilter;
    sorting?: Array<TaskStageSort>;
};

export type QueryTasksArgs = {
    filter?: TaskFilter;
    paging?: OffsetPaging;
    sorting?: Array<TaskSort>;
};

export type QueryUserArgs = {
    id: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
    filter?: UserFilter;
    paging?: OffsetPaging;
    sorting?: Array<UserSort>;
};

export type Quote = {
    company: Company;
    contact: Contact;
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    description: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
    items: Array<QuoteItem>;
    salesOwner: User;
    status: QuoteStatus;
    subTotal: Scalars["Float"]["output"];
    tax: Scalars["Int"]["output"];
    title: Scalars["String"]["output"];
    total: Scalars["Float"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type QuoteConnection = {
    /** Array of nodes. */
    nodes: Array<Quote>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type QuoteCreateInput = {
    companyId: Scalars["ID"]["input"];
    contactId: Scalars["ID"]["input"];
    salesOwnerId: Scalars["ID"]["input"];
    title: Scalars["String"]["input"];
};

export type QuoteDeleteFilter = {
    and?: InputMaybe<Array<QuoteDeleteFilter>>;
    createdAt?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<QuoteDeleteFilter>>;
    status?: InputMaybe<QuoteStatusFilterComparison>;
    title?: InputMaybe<StringFieldComparison>;
    updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuoteDeleteResponse = {
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    items?: Maybe<Array<QuoteItem>>;
    status?: Maybe<QuoteStatus>;
    subTotal?: Maybe<Scalars["Float"]["output"]>;
    tax?: Maybe<Scalars["Int"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    total?: Maybe<Scalars["Float"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type QuoteFilter = {
    and?: InputMaybe<Array<QuoteFilter>>;
    company?: InputMaybe<QuoteFilterCompanyFilter>;
    contact?: InputMaybe<QuoteFilterContactFilter>;
    createdAt?: InputMaybe<DateFieldComparison>;
    createdBy?: InputMaybe<QuoteFilterUserFilter>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<QuoteFilter>>;
    salesOwner?: InputMaybe<QuoteFilterUserFilter>;
    status?: InputMaybe<QuoteStatusFilterComparison>;
    title?: InputMaybe<StringFieldComparison>;
    updatedAt?: InputMaybe<DateFieldComparison>;
    updatedBy?: InputMaybe<QuoteFilterUserFilter>;
};

export type QuoteFilterCompanyFilter = {
    and?: InputMaybe<Array<QuoteFilterCompanyFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<QuoteFilterCompanyFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type QuoteFilterContactFilter = {
    and?: InputMaybe<Array<QuoteFilterContactFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<QuoteFilterContactFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type QuoteFilterUserFilter = {
    and?: InputMaybe<Array<QuoteFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<QuoteFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type QuoteItem = {
    discount: Scalars["Int"]["output"];
    quantity: Scalars["Int"]["output"];
    title: Scalars["String"]["output"];
    totalPrice: Scalars["Float"]["output"];
    unitPrice: Scalars["Float"]["output"];
};

export type QuoteItemInput = {
    discount: Scalars["Int"]["input"];
    quantity: Scalars["Int"]["input"];
    title: Scalars["String"]["input"];
    unitPrice: Scalars["Float"]["input"];
};

export type QuoteSort = {
    direction: SortDirection;
    field: QuoteSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type QuoteSortFields =
    | "createdAt"
    | "id"
    | "status"
    | "title"
    | "updatedAt";

/** Quote status */
export type QuoteStatus = "ACCEPTED" | "DRAFT" | "SENT";

export type QuoteStatusFilterComparison = {
    eq?: InputMaybe<QuoteStatus>;
    gt?: InputMaybe<QuoteStatus>;
    gte?: InputMaybe<QuoteStatus>;
    iLike?: InputMaybe<QuoteStatus>;
    in?: InputMaybe<Array<QuoteStatus>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    like?: InputMaybe<QuoteStatus>;
    lt?: InputMaybe<QuoteStatus>;
    lte?: InputMaybe<QuoteStatus>;
    neq?: InputMaybe<QuoteStatus>;
    notILike?: InputMaybe<QuoteStatus>;
    notIn?: InputMaybe<Array<QuoteStatus>>;
    notLike?: InputMaybe<QuoteStatus>;
};

export type QuoteSubscriptionFilter = {
    and?: InputMaybe<Array<QuoteSubscriptionFilter>>;
    createdAt?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<QuoteSubscriptionFilter>>;
    status?: InputMaybe<QuoteStatusFilterComparison>;
    title?: InputMaybe<StringFieldComparison>;
    updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuoteUpdateFilter = {
    and?: InputMaybe<Array<QuoteUpdateFilter>>;
    createdAt?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<QuoteUpdateFilter>>;
    status?: InputMaybe<QuoteStatusFilterComparison>;
    title?: InputMaybe<StringFieldComparison>;
    updatedAt?: InputMaybe<DateFieldComparison>;
};

export type QuoteUpdateInput = {
    companyId?: InputMaybe<Scalars["ID"]["input"]>;
    contactId?: InputMaybe<Scalars["ID"]["input"]>;
    description?: InputMaybe<Scalars["String"]["input"]>;
    items?: InputMaybe<Array<QuoteItemInput>>;
    salesOwnerId?: InputMaybe<Scalars["ID"]["input"]>;
    status?: InputMaybe<QuoteStatus>;
    tax?: InputMaybe<Scalars["Int"]["input"]>;
    title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Role */
export type Role = "ADMIN" | "SALES_INTERN" | "SALES_MANAGER" | "SALES_PERSON";

/** Sort Directions */
export type SortDirection = "ASC" | "DESC";

/** Sort Nulls Options */
export type SortNulls = "NULLS_FIRST" | "NULLS_LAST";

export type StringFieldComparison = {
    eq?: InputMaybe<Scalars["String"]["input"]>;
    gt?: InputMaybe<Scalars["String"]["input"]>;
    gte?: InputMaybe<Scalars["String"]["input"]>;
    iLike?: InputMaybe<Scalars["String"]["input"]>;
    in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    is?: InputMaybe<Scalars["Boolean"]["input"]>;
    isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
    like?: InputMaybe<Scalars["String"]["input"]>;
    lt?: InputMaybe<Scalars["String"]["input"]>;
    lte?: InputMaybe<Scalars["String"]["input"]>;
    neq?: InputMaybe<Scalars["String"]["input"]>;
    notILike?: InputMaybe<Scalars["String"]["input"]>;
    notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
    notLike?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
    createdAudit: Audit;
    createdCompany: Company;
    createdCompanyNote: CompanyNote;
    createdContact: Contact;
    createdContactNote: ContactNote;
    createdDeal: Deal;
    createdDealStage: DealStage;
    createdEvent: Event;
    createdEventCategory: EventCategory;
    createdQuote: Quote;
    createdTask: Task;
    createdTaskComment: TaskComment;
    createdTaskStage: TaskStage;
    createdUser: User;
    deletedManyAudits: DeleteManyResponse;
    deletedManyCompanies: DeleteManyResponse;
    deletedManyCompanyNotes: DeleteManyResponse;
    deletedManyContactNotes: DeleteManyResponse;
    deletedManyContacts: DeleteManyResponse;
    deletedManyDealStages: DeleteManyResponse;
    deletedManyDeals: DeleteManyResponse;
    deletedManyEventCategories: DeleteManyResponse;
    deletedManyEvents: DeleteManyResponse;
    deletedManyQuotes: DeleteManyResponse;
    deletedManyTaskComments: DeleteManyResponse;
    deletedManyTaskStages: DeleteManyResponse;
    deletedManyTasks: DeleteManyResponse;
    deletedManyUsers: DeleteManyResponse;
    deletedOneAudit: AuditDeleteResponse;
    deletedOneCompany: CompanyDeleteResponse;
    deletedOneCompanyNote: CompanyNoteDeleteResponse;
    deletedOneContact: ContactDeleteResponse;
    deletedOneContactNote: ContactNoteDeleteResponse;
    deletedOneDeal: DealDeleteResponse;
    deletedOneDealStage: DealStageDeleteResponse;
    deletedOneEvent: EventDeleteResponse;
    deletedOneEventCategory: EventCategoryDeleteResponse;
    deletedOneQuote: QuoteDeleteResponse;
    deletedOneTask: TaskDeleteResponse;
    deletedOneTaskComment: TaskCommentDeleteResponse;
    deletedOneTaskStage: TaskStageDeleteResponse;
    deletedOneUser: UserDeleteResponse;
    updatedManyAudits: UpdateManyResponse;
    updatedManyCompanies: UpdateManyResponse;
    updatedManyCompanyNotes: UpdateManyResponse;
    updatedManyContactNotes: UpdateManyResponse;
    updatedManyContacts: UpdateManyResponse;
    updatedManyDealStages: UpdateManyResponse;
    updatedManyDeals: UpdateManyResponse;
    updatedManyEventCategories: UpdateManyResponse;
    updatedManyEvents: UpdateManyResponse;
    updatedManyQuotes: UpdateManyResponse;
    updatedManyTaskComments: UpdateManyResponse;
    updatedManyTaskStages: UpdateManyResponse;
    updatedManyTasks: UpdateManyResponse;
    updatedManyUsers: UpdateManyResponse;
    updatedOneAudit: Audit;
    updatedOneCompany: Company;
    updatedOneCompanyNote: CompanyNote;
    updatedOneContact: Contact;
    updatedOneContactNote: ContactNote;
    updatedOneDeal: Deal;
    updatedOneDealStage: DealStage;
    updatedOneEvent: Event;
    updatedOneEventCategory: EventCategory;
    updatedOneQuote: Quote;
    updatedOneTask: Task;
    updatedOneTaskComment: TaskComment;
    updatedOneTaskStage: TaskStage;
    updatedOneUser: User;
};

export type SubscriptionCreatedAuditArgs = {
    input?: InputMaybe<CreateAuditSubscriptionFilterInput>;
};

export type SubscriptionCreatedCompanyArgs = {
    input?: InputMaybe<CreateCompanySubscriptionFilterInput>;
};

export type SubscriptionCreatedCompanyNoteArgs = {
    input?: InputMaybe<CreateCompanyNoteSubscriptionFilterInput>;
};

export type SubscriptionCreatedContactArgs = {
    input?: InputMaybe<CreateContactSubscriptionFilterInput>;
};

export type SubscriptionCreatedContactNoteArgs = {
    input?: InputMaybe<CreateContactNoteSubscriptionFilterInput>;
};

export type SubscriptionCreatedDealArgs = {
    input?: InputMaybe<CreateDealSubscriptionFilterInput>;
};

export type SubscriptionCreatedDealStageArgs = {
    input?: InputMaybe<CreateDealStageSubscriptionFilterInput>;
};

export type SubscriptionCreatedEventArgs = {
    input?: InputMaybe<CreateEventSubscriptionFilterInput>;
};

export type SubscriptionCreatedEventCategoryArgs = {
    input?: InputMaybe<CreateEventCategorySubscriptionFilterInput>;
};

export type SubscriptionCreatedQuoteArgs = {
    input?: InputMaybe<CreateQuoteSubscriptionFilterInput>;
};

export type SubscriptionCreatedTaskArgs = {
    input?: InputMaybe<CreateTaskSubscriptionFilterInput>;
};

export type SubscriptionCreatedTaskCommentArgs = {
    input?: InputMaybe<CreateTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionCreatedTaskStageArgs = {
    input?: InputMaybe<CreateTaskStageSubscriptionFilterInput>;
};

export type SubscriptionCreatedUserArgs = {
    input?: InputMaybe<CreateUserSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneAuditArgs = {
    input?: InputMaybe<DeleteOneAuditSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneCompanyArgs = {
    input?: InputMaybe<DeleteOneCompanySubscriptionFilterInput>;
};

export type SubscriptionDeletedOneCompanyNoteArgs = {
    input?: InputMaybe<DeleteOneCompanyNoteSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneContactArgs = {
    input?: InputMaybe<DeleteOneContactSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneContactNoteArgs = {
    input?: InputMaybe<DeleteOneContactNoteSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneDealArgs = {
    input?: InputMaybe<DeleteOneDealSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneDealStageArgs = {
    input?: InputMaybe<DeleteOneDealStageSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneEventArgs = {
    input?: InputMaybe<DeleteOneEventSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneEventCategoryArgs = {
    input?: InputMaybe<DeleteOneEventCategorySubscriptionFilterInput>;
};

export type SubscriptionDeletedOneQuoteArgs = {
    input?: InputMaybe<DeleteOneQuoteSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneTaskArgs = {
    input?: InputMaybe<DeleteOneTaskSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneTaskCommentArgs = {
    input?: InputMaybe<DeleteOneTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneTaskStageArgs = {
    input?: InputMaybe<DeleteOneTaskStageSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneUserArgs = {
    input?: InputMaybe<DeleteOneUserSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneAuditArgs = {
    input?: InputMaybe<UpdateOneAuditSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneCompanyArgs = {
    input?: InputMaybe<UpdateOneCompanySubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneCompanyNoteArgs = {
    input?: InputMaybe<UpdateOneCompanyNoteSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneContactArgs = {
    input?: InputMaybe<UpdateOneContactSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneContactNoteArgs = {
    input?: InputMaybe<UpdateOneContactNoteSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneDealArgs = {
    input?: InputMaybe<UpdateOneDealSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneDealStageArgs = {
    input?: InputMaybe<UpdateOneDealStageSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneEventArgs = {
    input?: InputMaybe<UpdateOneEventSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneEventCategoryArgs = {
    input?: InputMaybe<UpdateOneEventCategorySubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneQuoteArgs = {
    input?: InputMaybe<UpdateOneQuoteSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneTaskArgs = {
    input?: InputMaybe<UpdateOneTaskSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneTaskCommentArgs = {
    input?: InputMaybe<UpdateOneTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneTaskStageArgs = {
    input?: InputMaybe<UpdateOneTaskStageSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneUserArgs = {
    input?: InputMaybe<UpdateOneUserSubscriptionFilterInput>;
};

export type Task = {
    checklist: Array<CheckListItem>;
    comments: TaskCommentsConnection;
    commentsAggregate: Array<TaskCommentsAggregateResponse>;
    completed: Scalars["Boolean"]["output"];
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    description: Scalars["String"]["output"];
    dueDate: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    stage?: Maybe<TaskStage>;
    title: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
    users: Array<User>;
    usersAggregate: Array<TaskUsersAggregateResponse>;
};

export type TaskCommentsArgs = {
    filter?: TaskCommentFilter;
    paging?: OffsetPaging;
    sorting?: Array<TaskCommentSort>;
};

export type TaskCommentsAggregateArgs = {
    filter?: InputMaybe<TaskCommentAggregateFilter>;
};

export type TaskUsersArgs = {
    filter?: UserFilter;
    sorting?: Array<UserSort>;
};

export type TaskUsersAggregateArgs = {
    filter?: InputMaybe<UserAggregateFilter>;
};

export type TaskAggregateFilter = {
    and?: InputMaybe<Array<TaskAggregateFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    dueDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskAggregateFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type TaskAggregateGroupBy = {
    description?: Maybe<Scalars["String"]["output"]>;
    dueDate?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
};

export type TaskAggregateGroupByDueDateArgs = {
    by?: GroupBy;
};

export type TaskAggregateResponse = {
    avg?: Maybe<TaskAvgAggregate>;
    count?: Maybe<TaskCountAggregate>;
    groupBy?: Maybe<TaskAggregateGroupBy>;
    max?: Maybe<TaskMaxAggregate>;
    min?: Maybe<TaskMinAggregate>;
    sum?: Maybe<TaskSumAggregate>;
};

export type TaskAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskComment = {
    comment: Scalars["String"]["output"];
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    id: Scalars["ID"]["output"];
    task: Task;
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type TaskCommentAggregateFilter = {
    and?: InputMaybe<Array<TaskCommentAggregateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskCommentAggregateFilter>>;
};

export type TaskCommentConnection = {
    /** Array of nodes. */
    nodes: Array<TaskComment>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type TaskCommentCreateInput = {
    comment: Scalars["String"]["input"];
    taskId: Scalars["ID"]["input"];
};

export type TaskCommentDeleteFilter = {
    and?: InputMaybe<Array<TaskCommentDeleteFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskCommentDeleteFilter>>;
};

export type TaskCommentDeleteResponse = {
    comment?: Maybe<Scalars["String"]["output"]>;
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskCommentFilter = {
    and?: InputMaybe<Array<TaskCommentFilter>>;
    createdBy?: InputMaybe<TaskCommentFilterUserFilter>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskCommentFilter>>;
    task?: InputMaybe<TaskCommentFilterTaskFilter>;
    updatedBy?: InputMaybe<TaskCommentFilterUserFilter>;
};

export type TaskCommentFilterTaskFilter = {
    and?: InputMaybe<Array<TaskCommentFilterTaskFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    dueDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskCommentFilterTaskFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type TaskCommentFilterUserFilter = {
    and?: InputMaybe<Array<TaskCommentFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<TaskCommentFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type TaskCommentSort = {
    direction: SortDirection;
    field: TaskCommentSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type TaskCommentSortFields = "id";

export type TaskCommentSubscriptionFilter = {
    and?: InputMaybe<Array<TaskCommentSubscriptionFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskCommentSubscriptionFilter>>;
};

export type TaskCommentUpdateFilter = {
    and?: InputMaybe<Array<TaskCommentUpdateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskCommentUpdateFilter>>;
};

export type TaskCommentUpdateInput = {
    comment: Scalars["String"]["input"];
};

export type TaskCommentsAggregateGroupBy = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type TaskCommentsAggregateResponse = {
    avg?: Maybe<TaskCommentsAvgAggregate>;
    count?: Maybe<TaskCommentsCountAggregate>;
    groupBy?: Maybe<TaskCommentsAggregateGroupBy>;
    max?: Maybe<TaskCommentsMaxAggregate>;
    min?: Maybe<TaskCommentsMinAggregate>;
    sum?: Maybe<TaskCommentsSumAggregate>;
};

export type TaskCommentsAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskCommentsConnection = {
    /** Array of nodes. */
    nodes: Array<TaskComment>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type TaskCommentsCountAggregate = {
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskCommentsMaxAggregate = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type TaskCommentsMinAggregate = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type TaskCommentsSumAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskConnection = {
    /** Array of nodes. */
    nodes: Array<Task>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type TaskCountAggregate = {
    description?: Maybe<Scalars["Int"]["output"]>;
    dueDate?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    title?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskCreateInput = {
    checklist?: InputMaybe<Array<ChecklistItemInput>>;
    description?: InputMaybe<Scalars["String"]["input"]>;
    dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
    stageId: Scalars["Float"]["input"];
    title: Scalars["String"]["input"];
    userIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type TaskDeleteFilter = {
    and?: InputMaybe<Array<TaskDeleteFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    dueDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskDeleteFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type TaskDeleteResponse = {
    checklist?: Maybe<Array<CheckListItem>>;
    completed?: Maybe<Scalars["Boolean"]["output"]>;
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    dueDate?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskFilter = {
    and?: InputMaybe<Array<TaskFilter>>;
    comments?: InputMaybe<TaskFilterTaskCommentFilter>;
    createdBy?: InputMaybe<TaskFilterUserFilter>;
    description?: InputMaybe<StringFieldComparison>;
    dueDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskFilter>>;
    stage?: InputMaybe<TaskFilterTaskStageFilter>;
    title?: InputMaybe<StringFieldComparison>;
    updatedBy?: InputMaybe<TaskFilterUserFilter>;
};

export type TaskFilterTaskCommentFilter = {
    and?: InputMaybe<Array<TaskFilterTaskCommentFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskFilterTaskCommentFilter>>;
};

export type TaskFilterTaskStageFilter = {
    and?: InputMaybe<Array<TaskFilterTaskStageFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskFilterTaskStageFilter>>;
};

export type TaskFilterUserFilter = {
    and?: InputMaybe<Array<TaskFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<TaskFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type TaskMaxAggregate = {
    description?: Maybe<Scalars["String"]["output"]>;
    dueDate?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
};

export type TaskMinAggregate = {
    description?: Maybe<Scalars["String"]["output"]>;
    dueDate?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
};

export type TaskSort = {
    direction: SortDirection;
    field: TaskSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type TaskSortFields = "description" | "dueDate" | "id" | "title";

export type TaskStage = {
    createdAt: Scalars["DateTime"]["output"];
    createdBy: User;
    id: Scalars["ID"]["output"];
    tasks: Array<Task>;
    tasksAggregate: Array<TaskStageTasksAggregateResponse>;
    title: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type TaskStageTasksArgs = {
    filter?: TaskFilter;
    sorting?: Array<TaskSort>;
};

export type TaskStageTasksAggregateArgs = {
    filter?: InputMaybe<TaskAggregateFilter>;
};

export type TaskStageAggregateFilter = {
    and?: InputMaybe<Array<TaskStageAggregateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskStageAggregateFilter>>;
};

export type TaskStageAggregateGroupBy = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type TaskStageAggregateResponse = {
    avg?: Maybe<TaskStageAvgAggregate>;
    count?: Maybe<TaskStageCountAggregate>;
    groupBy?: Maybe<TaskStageAggregateGroupBy>;
    max?: Maybe<TaskStageMaxAggregate>;
    min?: Maybe<TaskStageMinAggregate>;
    sum?: Maybe<TaskStageSumAggregate>;
};

export type TaskStageAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskStageCountAggregate = {
    id?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskStageCreateInput = {
    title: Scalars["String"]["input"];
};

export type TaskStageDeleteFilter = {
    and?: InputMaybe<Array<TaskStageDeleteFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskStageDeleteFilter>>;
};

export type TaskStageDeleteResponse = {
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskStageFilter = {
    and?: InputMaybe<Array<TaskStageFilter>>;
    createdBy?: InputMaybe<TaskStageFilterUserFilter>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskStageFilter>>;
    updatedBy?: InputMaybe<TaskStageFilterUserFilter>;
};

export type TaskStageFilterUserFilter = {
    and?: InputMaybe<Array<TaskStageFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<TaskStageFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type TaskStageMaxAggregate = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type TaskStageMinAggregate = {
    id?: Maybe<Scalars["ID"]["output"]>;
};

export type TaskStageSort = {
    direction: SortDirection;
    field: TaskStageSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type TaskStageSortFields = "id";

export type TaskStageSubscriptionFilter = {
    and?: InputMaybe<Array<TaskStageSubscriptionFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskStageSubscriptionFilter>>;
};

export type TaskStageSumAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskStageTasksAggregateGroupBy = {
    description?: Maybe<Scalars["String"]["output"]>;
    dueDate?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
};

export type TaskStageTasksAggregateResponse = {
    avg?: Maybe<TaskStageTasksAvgAggregate>;
    count?: Maybe<TaskStageTasksCountAggregate>;
    groupBy?: Maybe<TaskStageTasksAggregateGroupBy>;
    max?: Maybe<TaskStageTasksMaxAggregate>;
    min?: Maybe<TaskStageTasksMinAggregate>;
    sum?: Maybe<TaskStageTasksSumAggregate>;
};

export type TaskStageTasksAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskStageTasksCountAggregate = {
    description?: Maybe<Scalars["Int"]["output"]>;
    dueDate?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    title?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskStageTasksMaxAggregate = {
    description?: Maybe<Scalars["String"]["output"]>;
    dueDate?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
};

export type TaskStageTasksMinAggregate = {
    description?: Maybe<Scalars["String"]["output"]>;
    dueDate?: Maybe<Scalars["DateTime"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
};

export type TaskStageTasksSumAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskStageUpdateFilter = {
    and?: InputMaybe<Array<TaskStageUpdateFilter>>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskStageUpdateFilter>>;
};

export type TaskStageUpdateInput = {
    title: Scalars["String"]["input"];
};

export type TaskSubscriptionFilter = {
    and?: InputMaybe<Array<TaskSubscriptionFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    dueDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskSubscriptionFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type TaskSumAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskUpdateFilter = {
    and?: InputMaybe<Array<TaskUpdateFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    dueDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<TaskUpdateFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type TaskUpdateInput = {
    checklist?: InputMaybe<Array<ChecklistItemInput>>;
    completed?: InputMaybe<Scalars["Boolean"]["input"]>;
    description?: InputMaybe<Scalars["String"]["input"]>;
    dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
    stageId?: InputMaybe<Scalars["ID"]["input"]>;
    title?: InputMaybe<Scalars["String"]["input"]>;
    userIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type TaskUsersAggregateGroupBy = {
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    role?: Maybe<Role>;
};

export type TaskUsersAggregateResponse = {
    avg?: Maybe<TaskUsersAvgAggregate>;
    count?: Maybe<TaskUsersCountAggregate>;
    groupBy?: Maybe<TaskUsersAggregateGroupBy>;
    max?: Maybe<TaskUsersMaxAggregate>;
    min?: Maybe<TaskUsersMinAggregate>;
    sum?: Maybe<TaskUsersSumAggregate>;
};

export type TaskUsersAvgAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskUsersCountAggregate = {
    email?: Maybe<Scalars["Int"]["output"]>;
    id?: Maybe<Scalars["Int"]["output"]>;
    name?: Maybe<Scalars["Int"]["output"]>;
    phone?: Maybe<Scalars["Int"]["output"]>;
    role?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskUsersMaxAggregate = {
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    role?: Maybe<Role>;
};

export type TaskUsersMinAggregate = {
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    role?: Maybe<Role>;
};

export type TaskUsersSumAggregate = {
    id?: Maybe<Scalars["Float"]["output"]>;
};

export type UpdateManyCompaniesInput = {
    /** Filter used to find fields to update */
    filter: CompanyUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: CompanyUpdateInput;
};

export type UpdateManyCompanyNotesInput = {
    /** Filter used to find fields to update */
    filter: CompanyNoteUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: CompanyNoteUpdateInput;
};

export type UpdateManyContactNotesInput = {
    /** Filter used to find fields to update */
    filter: ContactNoteUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: ContactNoteUpdateInput;
};

export type UpdateManyContactsInput = {
    /** Filter used to find fields to update */
    filter: ContactUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: ContactUpdateInput;
};

export type UpdateManyDealStagesInput = {
    /** Filter used to find fields to update */
    filter: DealStageUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: DealStageUpdateInput;
};

export type UpdateManyDealsInput = {
    /** Filter used to find fields to update */
    filter: DealUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: DealStageUpdateInput;
};

export type UpdateManyEventCategoriesInput = {
    /** Filter used to find fields to update */
    filter: EventCategoryUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: EventCategoryUpdateInput;
};

export type UpdateManyEventsInput = {
    /** Filter used to find fields to update */
    filter: EventUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: EventUpdateInput;
};

export type UpdateManyQuotesInput = {
    /** Filter used to find fields to update */
    filter: QuoteUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: QuoteUpdateInput;
};

export type UpdateManyResponse = {
    /** The number of records updated. */
    updatedCount: Scalars["Int"]["output"];
};

export type UpdateManyTaskCommentsInput = {
    /** Filter used to find fields to update */
    filter: TaskCommentUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: TaskCommentUpdateInput;
};

export type UpdateManyTaskStagesInput = {
    /** Filter used to find fields to update */
    filter: TaskStageUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: TaskStageUpdateInput;
};

export type UpdateManyTasksInput = {
    /** Filter used to find fields to update */
    filter: TaskUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: TaskUpdateInput;
};

export type UpdateManyUsersInput = {
    /** Filter used to find fields to update */
    filter: UserUpdateFilter;
    /** The update to apply to all records found using the filter */
    update: UserUpdateInput;
};

export type UpdateOneAuditSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: AuditSubscriptionFilter;
};

export type UpdateOneCompanyInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: CompanyUpdateInput;
};

export type UpdateOneCompanyNoteInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: CompanyNoteUpdateInput;
};

export type UpdateOneCompanyNoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: CompanyNoteSubscriptionFilter;
};

export type UpdateOneCompanySubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: CompanySubscriptionFilter;
};

export type UpdateOneContactInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: ContactUpdateInput;
};

export type UpdateOneContactNoteInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: ContactNoteUpdateInput;
};

export type UpdateOneContactNoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: ContactNoteSubscriptionFilter;
};

export type UpdateOneContactSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: ContactSubscriptionFilter;
};

export type UpdateOneDealInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: DealStageUpdateInput;
};

export type UpdateOneDealStageInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: DealStageUpdateInput;
};

export type UpdateOneDealStageSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: DealStageSubscriptionFilter;
};

export type UpdateOneDealSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: DealSubscriptionFilter;
};

export type UpdateOneEventCategoryInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: EventCategoryUpdateInput;
};

export type UpdateOneEventCategorySubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: EventCategorySubscriptionFilter;
};

export type UpdateOneEventInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: EventUpdateInput;
};

export type UpdateOneEventSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: EventSubscriptionFilter;
};

export type UpdateOneQuoteInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: QuoteUpdateInput;
};

export type UpdateOneQuoteSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: QuoteSubscriptionFilter;
};

export type UpdateOneTaskCommentInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: TaskCommentUpdateInput;
};

export type UpdateOneTaskCommentSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskCommentSubscriptionFilter;
};

export type UpdateOneTaskInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: TaskUpdateInput;
};

export type UpdateOneTaskStageInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: TaskStageUpdateInput;
};

export type UpdateOneTaskStageSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskStageSubscriptionFilter;
};

export type UpdateOneTaskSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: TaskSubscriptionFilter;
};

export type UpdateOneUserInput = {
    /** The id of the record to update */
    id: Scalars["ID"]["input"];
    /** The update to apply. */
    update: UserUpdateInput;
};

export type UpdateOneUserSubscriptionFilterInput = {
    /** Specify to filter the records returned. */
    filter: UserSubscriptionFilter;
};

export type User = {
    companies: UserCompaniesConnection;
    contacts: UserContactsConnection;
    createdAt: Scalars["DateTime"]["output"];
    createdBy?: Maybe<User>;
    deals: UserDealsConnection;
    email: Scalars["String"]["output"];
    events: UserEventsConnection;
    id: Scalars["ID"]["output"];
    jobTitle: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
    phone: Scalars["String"]["output"];
    role: Role;
    tasks: UserTasksConnection;
    timezone: Scalars["String"]["output"];
    updatedAt: Scalars["DateTime"]["output"];
    updatedBy?: Maybe<User>;
};

export type UserCompaniesArgs = {
    filter?: CompanyFilter;
    paging?: OffsetPaging;
    sorting?: Array<CompanySort>;
};

export type UserContactsArgs = {
    filter?: ContactFilter;
    paging?: OffsetPaging;
    sorting?: Array<ContactSort>;
};

export type UserDealsArgs = {
    filter?: DealFilter;
    paging?: OffsetPaging;
    sorting?: Array<DealSort>;
};

export type UserEventsArgs = {
    filter?: EventFilter;
    paging?: OffsetPaging;
    sorting?: Array<EventSort>;
};

export type UserTasksArgs = {
    filter?: TaskFilter;
    paging?: OffsetPaging;
    sorting?: Array<TaskSort>;
};

export type UserAggregateFilter = {
    and?: InputMaybe<Array<UserAggregateFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<UserAggregateFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type UserCompaniesConnection = {
    /** Array of nodes. */
    nodes: Array<Company>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type UserConnection = {
    /** Array of nodes. */
    nodes: Array<User>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type UserContactsConnection = {
    /** Array of nodes. */
    nodes: Array<Contact>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type UserCreateInput = {
    email: Scalars["String"]["input"];
    jobTitle: Scalars["String"]["input"];
    name: Scalars["String"]["input"];
    phone: Scalars["String"]["input"];
    role: Role;
    timezone: Scalars["String"]["input"];
};

export type UserDealsConnection = {
    /** Array of nodes. */
    nodes: Array<Deal>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type UserDeleteFilter = {
    and?: InputMaybe<Array<UserDeleteFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<UserDeleteFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type UserDeleteResponse = {
    createdAt?: Maybe<Scalars["DateTime"]["output"]>;
    email?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["ID"]["output"]>;
    jobTitle?: Maybe<Scalars["String"]["output"]>;
    name?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    role?: Maybe<Role>;
    timezone?: Maybe<Scalars["String"]["output"]>;
    updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UserEventsConnection = {
    /** Array of nodes. */
    nodes: Array<Event>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type UserFilter = {
    and?: InputMaybe<Array<UserFilter>>;
    companies?: InputMaybe<UserFilterCompanyFilter>;
    contacts?: InputMaybe<UserFilterContactFilter>;
    createdBy?: InputMaybe<UserFilterUserFilter>;
    deals?: InputMaybe<UserFilterDealFilter>;
    email?: InputMaybe<StringFieldComparison>;
    events?: InputMaybe<UserFilterEventFilter>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<UserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
    tasks?: InputMaybe<UserFilterTaskFilter>;
    updatedBy?: InputMaybe<UserFilterUserFilter>;
};

export type UserFilterCompanyFilter = {
    and?: InputMaybe<Array<UserFilterCompanyFilter>>;
    businessType?: InputMaybe<CompanyBusinessTypeFilterComparison>;
    companySize?: InputMaybe<CompanyCompanySizeFilterComparison>;
    country?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    industry?: InputMaybe<CompanyIndustryFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<UserFilterCompanyFilter>>;
    totalRevenue?: InputMaybe<IntFieldComparison>;
    website?: InputMaybe<StringFieldComparison>;
};

export type UserFilterContactFilter = {
    and?: InputMaybe<Array<UserFilterContactFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<UserFilterContactFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    score?: InputMaybe<IntFieldComparison>;
    stage?: InputMaybe<ContactStageFilterComparison>;
    status?: InputMaybe<ContactStatusFilterComparison>;
};

export type UserFilterDealFilter = {
    and?: InputMaybe<Array<UserFilterDealFilter>>;
    closeDateDay?: InputMaybe<IntFieldComparison>;
    closeDateMonth?: InputMaybe<IntFieldComparison>;
    closeDateYear?: InputMaybe<IntFieldComparison>;
    dealOwnerId?: InputMaybe<IdFilterComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<UserFilterDealFilter>>;
    stageId?: InputMaybe<IdFilterComparison>;
    value?: InputMaybe<FloatFieldComparison>;
};

export type UserFilterEventFilter = {
    and?: InputMaybe<Array<UserFilterEventFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    endDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<UserFilterEventFilter>>;
    startDate?: InputMaybe<DateFieldComparison>;
    title?: InputMaybe<StringFieldComparison>;
};

export type UserFilterTaskFilter = {
    and?: InputMaybe<Array<UserFilterTaskFilter>>;
    description?: InputMaybe<StringFieldComparison>;
    dueDate?: InputMaybe<DateFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    or?: InputMaybe<Array<UserFilterTaskFilter>>;
    title?: InputMaybe<StringFieldComparison>;
};

export type UserFilterUserFilter = {
    and?: InputMaybe<Array<UserFilterUserFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<UserFilterUserFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type UserRoleFilterComparison = {
    eq?: InputMaybe<Role>;
    in?: InputMaybe<Array<Role>>;
    neq?: InputMaybe<Role>;
    notIn?: InputMaybe<Array<Role>>;
};

export type UserSort = {
    direction: SortDirection;
    field: UserSortFields;
    nulls?: InputMaybe<SortNulls>;
};

export type UserSortFields = "email" | "id" | "name" | "phone" | "role";

export type UserSubscriptionFilter = {
    and?: InputMaybe<Array<UserSubscriptionFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<UserSubscriptionFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type UserTasksConnection = {
    /** Array of nodes. */
    nodes: Array<Task>;
    /** Paging information */
    pageInfo: OffsetPageInfo;
    /** Fetch total count of records */
    totalCount: Scalars["Int"]["output"];
};

export type UserUpdateFilter = {
    and?: InputMaybe<Array<UserUpdateFilter>>;
    email?: InputMaybe<StringFieldComparison>;
    id?: InputMaybe<IdFilterComparison>;
    name?: InputMaybe<StringFieldComparison>;
    or?: InputMaybe<Array<UserUpdateFilter>>;
    phone?: InputMaybe<StringFieldComparison>;
    role?: InputMaybe<UserRoleFilterComparison>;
};

export type UserUpdateInput = {
    email?: InputMaybe<Scalars["String"]["input"]>;
    jobTitle?: InputMaybe<Scalars["String"]["input"]>;
    name?: InputMaybe<Scalars["String"]["input"]>;
    phone?: InputMaybe<Scalars["String"]["input"]>;
    role?: InputMaybe<Role>;
    timezone?: InputMaybe<Scalars["String"]["input"]>;
};
