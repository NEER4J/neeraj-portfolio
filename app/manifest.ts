import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Neeraj Sharma · Full-Stack Engineer & Technical Lead",
    short_name: "Neeraj Sharma",
    description:
      "Full-stack engineer and technical lead building production AI and SaaS products.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#fafafa",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
