export interface Posts {
  id: string
  created_at: Date
  birdtweets: string
  user_id: string
  users: Users
  likes: Likes
  birdretweets: Birdretweets
}

export interface Birdretweets {
  user_has_repost_post?: UserHasPost
  amount_repost: number
}

export interface UserHasPost {
  id: string
  created_at: Date
  user_id: string
  birdtweets_id: string
}

export interface Likes {
  user_has_liked_post?: UserHasPost
  amount_likes: number
}

export interface Users {
  id: string
  created_at: Date
  name: string
  username: string
  avatar_url: string
}
