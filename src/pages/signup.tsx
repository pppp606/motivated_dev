import type { NextPage } from "next";
import React from "react";
import { Header } from "../containers/header";
import { useAuth } from "../containers/authContextProvider";

const Home: NextPage = () => {
  const { signInWithGithub } = useAuth();

  const continueWithGitHub = () => {
    signInWithGithub();
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow pt-12">
          <div className="max-w-4xl mx-auto pt-12 px-4">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
              <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
                <div className="bg-white px-6 py-8 rounded w-full">
                  <h1 className="text-2xl font-bold leading-normal mb-8">
                    🎉 <span className="text-red">Sign</span> up
                  </h1>
                  <button
                    onClick={continueWithGitHub}
                    className="inline-block text-sm px-4 py-4 leading-none border rounded bg-[#24292e] border-[#24292e] text-white mt-4 lg:mt-0 w-full"
                  >
                    Continue with GitHub
                  </button>
                  <div className="text-sm text-grey-dark mt-8">
                    By signing up, you agree to the
                    <a
                      className="no-underline border-b border-grey-dark text-grey-dark"
                      href="#"
                    >
                      Terms of Service
                    </a>{" "}
                    and
                    <a
                      className="no-underline border-b border-grey-dark text-grey-dark"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
                <div className="text-grey-dark mt-6">
                  Already have an account?{" "}
                  <a className="underline text-red" href="../login/">
                    Log in
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
