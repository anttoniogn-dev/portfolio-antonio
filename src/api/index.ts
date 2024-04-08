import { Repository } from "@/interfaces";

export const fetchGitHubRepos = async () => {
  const url = "https://api.github.com/users/anttoniogn-dev/repos";

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(url, {
    headers: {
      "User-Agent": "portfolio-antonio",
    },
  });

  const data: Repository[] = await res.json();

  const newData: Repository[] = data.map((repo: Repository) => {
    const bucket_url_image = `https://portfolio-antonio-2222.s3.us-east-2.amazonaws.com/${repo.name.toLowerCase()}.png`;
    return {
      ...repo,
      img_url: bucket_url_image,
    };
  });

  return newData;
};