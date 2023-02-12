import React, { ReactNode, useContext, useEffect, useState } from "react";

import { supabase } from "../lib/supabase-client";
import { Session } from "@supabase/supabase-js";
import type { Database } from "../repositories/schema";
import type { definitions } from "../repositories/types/supabase";

type User = definitions["users"];

type AuthContextState = {
  user: User | null;
  signInWithGithub: () => void;
  signOut: () => void;
};

const initialState: AuthContextState = {
  user: null,
  signInWithGithub: () => { },
  signOut: () => { }
};

const AuthContext = React.createContext<AuthContextState>(initialState);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface Props {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
    };
    getSession();

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    const setupUser = async () => {
      if (session?.user.id) {
        const { data: user } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();
        setUser(user!);
      }
    };
    setupUser();
  }, [session]);

  function signInWithGithub() {
    supabase.auth.signInWithOAuth({ provider: "github" });
  }

  function signOut() {
    supabase.auth.signOut();
  }

  const value = {
    user,
    signInWithGithub,
    signOut,
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};