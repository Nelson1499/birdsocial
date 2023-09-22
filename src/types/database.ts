export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      birdretweets: {
        Row: {
          birdtweets_id: string | null
          comment_id: string | null
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          birdtweets_id?: string | null
          comment_id?: string | null
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          birdtweets_id?: string | null
          comment_id?: string | null
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "birdretweets_birdtweets_id_fkey"
            columns: ["birdtweets_id"]
            referencedRelation: "birdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "birdretweets_comment_id_fkey"
            columns: ["comment_id"]
            referencedRelation: "commentbirdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "birdretweets_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      birdtweets: {
        Row: {
          birdtweets: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          birdtweets: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          birdtweets?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "birdtweets_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      commentbirdtweets: {
        Row: {
          comment: string
          comment_id: string | null
          created_at: string
          id: string
          id_birdtweets: string | null
          responsepost: string | null
          user_id: string
        }
        Insert: {
          comment: string
          comment_id?: string | null
          created_at?: string
          id?: string
          id_birdtweets?: string | null
          responsepost?: string | null
          user_id: string
        }
        Update: {
          comment?: string
          comment_id?: string | null
          created_at?: string
          id?: string
          id_birdtweets?: string | null
          responsepost?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "commentbirdtweets_comment_id_fkey"
            columns: ["comment_id"]
            referencedRelation: "commentbirdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commentbirdtweets_id_birdtweets_fkey"
            columns: ["id_birdtweets"]
            referencedRelation: "birdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commentbirdtweets_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      follow: {
        Row: {
          created_at: string
          follow_user_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          follow_user_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          follow_user_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follow_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      likes: {
        Row: {
          birdtweets_id: string | null
          comment_id: string | null
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          birdtweets_id?: string | null
          comment_id?: string | null
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          birdtweets_id?: string | null
          comment_id?: string | null
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_birdtweets_id_fkey"
            columns: ["birdtweets_id"]
            referencedRelation: "birdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_comment_id_fkey"
            columns: ["comment_id"]
            referencedRelation: "commentbirdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string
          created_at: string
          id: string
          name: string
          username: string
        }
        Insert: {
          avatar_url: string
          created_at?: string
          id: string
          name: string
          username: string
        }
        Update: {
          avatar_url?: string
          created_at?: string
          id?: string
          name?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
