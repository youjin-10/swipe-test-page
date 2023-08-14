import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <section>this is index (/)</section>
      <section>
        <button
          onClick={() => {
            router.push("/first");
          }}
        >
          go to first
        </button>

        <button
          onClick={() => {
            router.push("/second");
          }}
        >
          go to second
        </button>
      </section>
    </main>
  );
}
