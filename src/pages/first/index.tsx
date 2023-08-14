import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

const Index = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 $`}
    >
      <section>this is index (/first)</section>
      <section>{repo.stargazers_count}</section>
    </main>
  );
};

export default Index;
