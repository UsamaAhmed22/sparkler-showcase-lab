import { createFileRoute } from "@tanstack/react-router";
import { portfolioQueryOptions } from "@/lib/portfolio";
import { PortfolioPage } from "@/components/bynova/PortfolioPage";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(portfolioQueryOptions());
  },
  head: () => ({
    meta: [
      { title: "BYNOVA — Digital Products, Built for What’s Next" },
      { name: "description", content: "BYNOVA designs and develops modern websites, mobile apps, digital products and scalable technology solutions." },
      { property: "og:title", content: "BYNOVA — Your Vision. Our Tech." },
      { property: "og:description", content: "Modern websites, powerful apps and real results from a digital agency built for what’s next." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
