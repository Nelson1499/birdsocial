import type { Database } from "./database"

export type PostDatabase = Database["public"]["Tables"]["birdtweets"]["Row"]
export type PostRelationDatabase = Database["public"]["Tables"]["users"]["Row"]
export type RelationPost = PostDatabase & { users: PostRelationDatabase }

export interface ObjectUser {
  avatar_url: string
  email: string
  email_verified: boolean
  full_name: string
  iss: string
  name: string
  picture: string
  provider_id: string
  sub: string
}
