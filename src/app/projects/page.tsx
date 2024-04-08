"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { Repository } from "@/interfaces";
import { fetchGitHubRepos } from "@/api";

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    try {
      const fetch = async () => {
        const dta: Repository[] = await fetchGitHubRepos();

        if (!dta) {
          return null;
        }

        setRepos(dta);
      };

      fetch();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main>
      {repos.map((r: Repository) => {
        return (
          <article key={r.id}>
            <span>{r.name}</span>
            <div>
              <img src={r.img_url} alt="" width={320} height={180} />
            </div>
            <span>{r.updated_at.slice(0, -10)}</span>
          </article>
        );
      })}
    </main>
  );
}
