import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://api.github.com/repos/vercel/next.js/branches"
  );

  const branches = await res.json();
  return { props: { branches } };
};

const Index = ({
  branches,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 $`}
    >
      <section>this is index (/second)</section>
      <section>{branches[0].name}</section>
      <section className="flex flex-col space-y-2">
        <button
          className="p-2 rounded border border-blue-400 text-blue-400"
          onClick={() => {
            router.push("/");
          }}
        >
          go to main
        </button>

        <button
          className="p-2 rounded border border-black"
          onClick={() => {
            router.push("/first");
          }}
        >
          go to first
        </button>
      </section>
    </main>
  );
};

export default Index;
