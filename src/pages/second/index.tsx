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
      <section>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          go to main
        </button>

        <button
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
