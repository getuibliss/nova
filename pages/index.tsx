import Head from "next/head";
import Image from "next/image";
import { config } from "@/constants/config";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>{config.name}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex items-center justify-center h-full">
        <div>
          <h1 className="text-center text-6xl md:text-8xl handwriting">
            {config.name}
          </h1>

          <div className="grid grid-cols-3 gap-10 my-14 max-w-xs mx-auto">
            {Object.entries(config.socials).map(([key, value]) => {
              if (value) {
                if (key === "email") {
                  value = `mailto:${value}`;
                }

                return (
                  <span>
                    <Link
                      href={value}
                      key={key}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={`/img/socials/${key}.svg`}
                        alt={key}
                        width={40}
                        height={40}
                        className="mx-auto"
                      />
                    </Link>
                  </span>
                );
              }
            })}
          </div>

          {config.footerText && (
            <footer className="text-center opacity-70">
              {config.footerText}
            </footer>
          )}
        </div>
      </section>
    </>
  );
}
