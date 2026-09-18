import { queryOptions } from "@tanstack/react-query";

export type Project = {
  title: string;
  category: string;
  discipline: string;
  crop: string;
};

const projects: Project[] = [
  { title: "Cloud Platform Website", category: "Web Development", discipline: "UI/UX", crop: "object-left" },
  { title: "Fitness & Health App", category: "Mobile App", discipline: "UI/UX", crop: "object-center" },
  { title: "Analytics Dashboard", category: "Frontend", discipline: "Backend", crop: "object-right" },
  { title: "Brand Identity & Logo", category: "Branding", discipline: "Logo Design", crop: "object-left" },
  { title: "Social Media Campaign", category: "Social Media", discipline: "Content", crop: "object-right" },
];

export const portfolioQueryOptions = () =>
  queryOptions({
    queryKey: ["portfolio", "featured"],
    queryFn: async () => projects,
    staleTime: Number.POSITIVE_INFINITY,
  });