export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      goals: {
        Row: {
          goal_id: number;
          is_active: boolean;
          name: string;
          point: number;
          service_value_id: number;
          term_id: number;
          user_id: string;
          value: number;
        };
        Insert: {
          goal_id?: number;
          is_active?: boolean;
          name: string;
          point?: number;
          service_value_id: number;
          term_id: number;
          user_id?: string;
          value: number;
        };
        Update: {
          goal_id?: number;
          is_active?: boolean;
          name?: string;
          point?: number;
          service_value_id?: number;
          term_id?: number;
          user_id?: string;
          value?: number;
        };
      };
      service_values: {
        Row: {
          name: string;
          service_id: number;
          service_value_id: number;
        };
        Insert: {
          name: string;
          service_id: number;
          service_value_id?: number;
        };
        Update: {
          name?: string;
          service_id?: number;
          service_value_id?: number;
        };
      };
      services: {
        Row: {
          name: string;
          service_id: number;
        };
        Insert: {
          name: string;
          service_id?: number;
        };
        Update: {
          name?: string;
          service_id?: number;
        };
      };
      terms: {
        Row: {
          name: string;
          term_id: number;
        };
        Insert: {
          name: string;
          term_id?: number;
        };
        Update: {
          name?: string;
          term_id?: number;
        };
      };
      users: {
        Row: {
          avatarurl: string | null;
          fullname: string | null;
          id: string;
          nickname: string | null;
        };
        Insert: {
          avatarurl?: string | null;
          fullname?: string | null;
          id: string;
          nickname?: string | null;
        };
        Update: {
          avatarurl?: string | null;
          fullname?: string | null;
          id?: string;
          nickname?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          owner: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          name: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
