"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { Repository } from "@/interfaces";
import { fetchGitHubRepos } from "@/api";
import "@/styles/pages/projects.css";
import Link from "next/link";

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    try {
      const fetch = async () => {
        const dta: Repository[] = await fetchGitHubRepos();

        if (!dta) {
          throw new Error();
        }

        setRepos(dta);
      };

      fetch();
    } catch (error) {
      console.error(error);
    }
  }, []);

  function formatString(str: string) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  return (
    <main className="p-main">
      <div className="p-main-div">
        {repos
          .sort((a: Repository, b: Repository) => {
            const A = new Date(a.updated_at).getTime();
            const B = new Date(b.updated_at).getTime();
            return B - A;
          })
          .filter((r: Repository) => r.name !== "asagone")
          .map((r: Repository) => {
            const formatstr = formatString(r.name.replace(/-/g, " "));
            return (
              <article className="main-div--atcl" key={r.id}>
                <Link href={r.clone_url} target="_blank">
                  <h3>{formatstr}</h3>
                </Link>
                <div>
                  <Link href={r.clone_url}>
                    <img src={r.img_url} alt="" width={320} height={180} />
                  </Link>
                </div>
                <span>Last update: {r.updated_at.slice(0, -10)}</span>
              </article>
            );
          })}
      </div>
    </main>
  );
}
