import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = githubPages ? "/low-temperature-transport-radar" : "";

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export",
        basePath: githubBasePath,
        assetPrefix: githubBasePath,
        trailingSlash: true,
        images: { unoptimized: true },
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
