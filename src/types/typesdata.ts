import type { ReactPortal } from "react"
import type { Database } from "./database"

export type PostDatabase = Database["public"]["Tables"]["birdtweets"]["Row"]
export type UsersDB = Database["public"]["Tables"]["users"]["Row"]
export type PostLikesDatabase = Database["public"]["Tables"]["likes"]["Row"]
export type PostRespotDatabase =
  Database["public"]["Tables"]["birdretweets"]["Row"]
export type PostCommentDatabase =
  Database["public"]["Tables"]["commentbirdtweets"]["Row"]
export type followDatabase = Database["public"]["Tables"]["follow"]["Row"]

export type RelationPost = PostDatabase & { users: UsersDB } & {
  birdretweets:
  | { user_has_repost_post: PostRespotDatabase, amount_repost: number }
  | any
} & {
  likes: { user_has_liked_post: PostLikesDatabase, amount_likes: number } | any
} & { commentbirdtweets: PostCommentDatabase[] }
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

export interface InteractionPost {
  likes: { user_has_liked_post: PostLikesDatabase, amount_likes: number }
  id: string
  birdretweets: {
    user_has_repost_post: PostRespotDatabase
    amount_repost: number
  }
  commentbirdtweets: PostCommentDatabase[]
}
export type RelationPostComment = PostCommentDatabase & { users: UsersDB } & {
  birdretweets?: {
    user_has_repost_post: PostRespotDatabase
    amount_repost: number
  }
} & { likes: { user_has_liked_post: PostLikesDatabase, amount_likes: number } }

export type RelationPostPrincipal = PostDatabase & { users: UsersDB } & {
  birdretweets?: {
    user_has_repost_post: PostRespotDatabase
    amount_repost: number
  }
} & {
  likes: { user_has_liked_post: PostLikesDatabase, amount_likes: number }
} & { commentbirdtweets: PostCommentDatabase }

export type TypeComment = PostCommentDatabase & { users: UsersDB } & {
  birdretweets: {
    user_has_repost_post: PostRespotDatabase
    amount_repost: number
  }
} & {
  likes: { user_has_liked_post: PostLikesDatabase, amount_likes: number }
} & { nestedComments: RelationPostPrincipal[] }

export interface InteractionCommenttype {
  likes: [{ user_has_liked_post: PostLikesDatabase, amount_likes: number }]
  id: string
  birdretweets: [
    { user_has_repost_post: PostRespotDatabase, amount_repost: number }
  ]
  commentbirdtweets: PostCommentDatabase[]
}

export interface childrenprops {
  children: ReactPortal
}

export type userfollow = UsersDB & { follow: followDatabase[] } & {
  followuser: followDatabase | undefined
}
export interface Group {
  id: string
  created_at: Date
  usuario1: string
  usuario2: string
  message: string
  name: string
  username: string
  avatar_url: string
  id_user: string
  userid: string
}

export interface privatemessage {
  id_usuario: string
  nombre_usuario: string
  id_chat: string
  ultimo_mensaje: string
  fecha_ultimo_mensaje: string
}
