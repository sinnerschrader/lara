import {
  GqlAdmin,
  GqlComment,
  GqlCommentableInterface,
  GqlDay,
  GqlEntry,
  GqlReport,
  GqlTrainee,
  GqlTrainer,
  GqlUserInterface,
} from './graphql'

export type User = Trainee | Trainer | Admin

/**
 * This values, that are omited from the gql types,
 * aren't stored in the DB and therefor can't be accessed
 * during the runtime in the backend. Only after beeing
 * transformed by GraphQL these fields are available
 */
type ResolvedUserFields = 'avatar' | 'username' | 'alexaSkillLinked'

export type UserInterface = Omit<GqlUserInterface, ResolvedUserFields> & {
  email: string
  token?: string

  oAuthCode?: string
  oAuthState?: string

  amazonAccessToken?: string
  amazonRefreshToken?: string
  amazonRefreshDate?: string
}

export type Trainee = UserInterface &
  Omit<GqlTrainee, ResolvedUserFields | 'trainer' | 'company' | 'reports' | 'openReportsCount'> & {
    trainerId?: string
    companyId?: string
  }

export type Trainer = UserInterface & Omit<GqlTrainer, ResolvedUserFields | 'trainees'>

export type Admin = UserInterface & Omit<GqlAdmin, ResolvedUserFields>

export type Comment = Omit<GqlComment, 'user'> & {
  userId: string
}

export type CommentableInterface = Omit<GqlCommentableInterface, 'comments'> & {
  comments: Comment[]
}

export type Entry = Omit<GqlEntry, 'entries' | 'comments'> & {
  comments: Comment[]
}

export type Day = Omit<GqlDay, 'entries' | 'comments'> & {
  entries: Entry[]
  comments: Comment[]
}

export type Report = Omit<GqlReport, 'days' | 'comments' | 'nextReportLink' | 'previousReportLink'> & {
  days: Day[]
  comments: Comment[]
  traineeId: string
}
