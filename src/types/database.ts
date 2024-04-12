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
            isOneToOne: false
            referencedRelation: "birdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "birdretweets_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "commentbirdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "birdretweets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
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
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      chat: {
        Row: {
          created_at: string
          id: string
          message: string
          usuario1: string
          usuario2: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          usuario1?: string
          usuario2?: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          usuario1?: string
          usuario2?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_chat_usuario1_fkey"
            columns: ["usuario1"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_chat_usuario2_fkey"
            columns: ["usuario2"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      commentbirdtweets: {
        Row: {
          comment: string
          comment_id: string | null
          created_at: string
          id: string
          id_birdtweets: string | null
          responsepost: string
          user_id: string
        }
        Insert: {
          comment: string
          comment_id?: string | null
          created_at?: string
          id?: string
          id_birdtweets?: string | null
          responsepost: string
          user_id: string
        }
        Update: {
          comment?: string
          comment_id?: string | null
          created_at?: string
          id?: string
          id_birdtweets?: string | null
          responsepost?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "commentbirdtweets_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "commentbirdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commentbirdtweets_id_birdtweets_fkey"
            columns: ["id_birdtweets"]
            isOneToOne: false
            referencedRelation: "birdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commentbirdtweets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
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
          user_id?: string
        }
        Update: {
          created_at?: string
          follow_user_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follow_follow_user_id_fkey"
            columns: ["follow_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      likes: {
        Row: {
          birdtweets_id: string | null
          comment_id: string | null
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          birdtweets_id?: string | null
          comment_id?: string | null
          created_at?: string
          id?: number
          user_id: string
        }
        Update: {
          birdtweets_id?: string | null
          comment_id?: string | null
          created_at?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_birdtweets_id_fkey"
            columns: ["birdtweets_id"]
            isOneToOne: false
            referencedRelation: "birdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "commentbirdtweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
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
          id?: string
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
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      getconversation: {
        Args: {
          num: number
        }
        Returns: Array<{
          id: string
          created_at: string
          idp: string
          idp2: string
          content: string
          uid: string
          user_id: string
          id_conversation: string
          name: string
          username: string
          avatar_url: string
        }>
      }
      getconversationuser: {
        Args: {
          u_id: string
        }
        Returns: Array<Database["public"]["CompositeTypes"]["conversation_result2"]>
      }
      hello_world: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      obtener_chats_privados: {
        Args: {
          idusuario1: string
          idusuario2: string
        }
        Returns: Array<{
          id_usuario: string
          nombre_usuario: string
          id_chat: string
          ultimo_mensaje: string
          fecha_ultimo_mensaje: string
        }>
      }
      obtenerdatoscomoarray: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
    }
    Enums: {
      array: "[{}]"
    }
    CompositeTypes: {
      conversation_result2: {
        id: string | null
        created_at: string | null
        usuario1: string | null
        usuario2: string | null
        message: string | null
        username: string | null
        name: string | null
        avatar_url: string | null
        id_user: string | null
      }
      params: {
        u_id: string | null
        limiting: number | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
      ? R
      : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
  PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
        ? R
        : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
