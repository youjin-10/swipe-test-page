import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js")
  const res = await fetch(
    "https://api.github.com/repos/vercel/next.js/branches"
  );

  const branches = await res.json();
  return { props: { branches } };
};

const Index = ({
  branches,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 $`}
    >
      <section>this is index (/second)</section>
      <section>{branches[0].name}</section>
    </main>
  );
};

export default Index;
