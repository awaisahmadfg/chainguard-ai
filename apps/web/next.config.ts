import type { NextConfig } from "next";
import { resolve } from "node:path";

const noStoreHeaders = [
  {
    key: "Cache-Control",
    value: "no-store, no-cache, must-revalidate, proxy-revalidate",
  },
  {
    key: "Pragma",
    value: "no-cache",
  },
  {
    key: "Expires",
    value: "0",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: resolve(process.cwd(), "../.."),
  },
  async headers() {
    return [
      {
        source: "/",
        headers: noStoreHeaders,
      },
      {
        source: "/signup",
        headers: noStoreHeaders,
      },
      {
        source: "/login",
        headers: noStoreHeaders,
      },
      {
        source: "/forgot-password",
        headers: noStoreHeaders,
      },
      {
        source: "/connect-wallet",
        headers: noStoreHeaders,
      },
    ];
  },
};

export default nextConfig;
