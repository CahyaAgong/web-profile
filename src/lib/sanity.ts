import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { HeroContent, AboutContent, ProjectsContent, ContactContent } from "../sanity/types";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import heroData from "@/src/content/hero.json";
import aboutData from "@/src/content/about.json";
import projectsData from "@/src/content/projects.json";
import contactData from "@/src/content/contact.json";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const USE_SANITY = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id"
);

async function fetchWithFallback<T>(
  sanityQuery: string,
  fallbackData: T,
  params?: Record<string, string>
): Promise<T> {
  if (!USE_SANITY) {
    return fallbackData;
  }

  try {
    const data = await sanityClient.fetch<T>(sanityQuery, params);
    return data || fallbackData;
  } catch (error) {
    console.warn("Sanity fetch failed, using fallback:", error);
    return fallbackData;
  }
}

export async function getHeroContent(): Promise<HeroContent> {
  const query = `*[_type == "hero"][0]{
    name, title, description, location, email, availability,
    "stats": stats[]{label, value}
  }`;

  return fetchWithFallback(query, heroData);
}

export async function getAboutContent(): Promise<AboutContent> {
  const query = `*[_type == "about"][0]{
    bio,
    "skills": skills[]{category, icon, items},
    "stats": stats[]{value, label}
  }`;

  return fetchWithFallback(query, aboutData);
}

export async function getProjectsContent(): Promise<ProjectsContent> {
  const query = `*[_type == "projects"][0]{
    "projects": projects[]{
      title, description, tech, github, demo
    },
    viewAllLink
  }`;

  return fetchWithFallback(query, projectsData);
}

export async function getContactContent(): Promise<ContactContent> {
  const query = `*[_type == "contact"][0]{
    email, location,
    formPlaceholder, socials
  }`;

  return fetchWithFallback(query, contactData);
}

export { sanityClient };
