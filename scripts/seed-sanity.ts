/**
 * Sanity Seed Script
 * 
 * Populate Sanity dataset with portfolio content.
 * Run this script after setting SANITY_API_WRITE_TOKEN in .env.local
 * 
 * Usage:
 *   npx tsx scripts/seed-sanity.ts
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load env from .env.local
dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local");
  process.exit(1);
}

if (!token) {
  console.error("❌ SANITY_API_WRITE_TOKEN is not set in .env.local");
  console.error("   Generate a write token at: https://sanity.io/manage → API → Tokens");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

function loadJSON(filename: string) {
  const path = resolve(process.cwd(), "src/content", filename);
  return JSON.parse(readFileSync(path, "utf-8"));
}

async function seedHero() {
  const data = loadJSON("hero.json");
  const doc = {
    _type: "hero",
    _id: "hero-document",
    name: data.name,
    title: data.title,
    description: data.description,
    location: data.location,
    email: data.email,
    availability: data.availability,
    stats: data.stats,
  };

  await client.createOrReplace(doc);
  console.log("✅ Hero content seeded");
}

async function seedAbout() {
  const data = loadJSON("about.json");
  const doc = {
    _type: "about",
    _id: "about-document",
    bio: data.bio,
    skills: data.skills.map((s: { category: string; icon: string; items: string[] }) => ({
      _type: "object",
      category: s.category,
      icon: s.icon,
      items: s.items,
    })),
    stats: data.stats,
  };

  await client.createOrReplace(doc);
  console.log("✅ About content seeded");
}

async function seedProjects() {
  const data = loadJSON("projects.json");
  const doc = {
    _type: "projects",
    _id: "projects-document",
    viewAllLink: data.viewAllLink,
    projects: data.projects.map(
      (p: { title: string; description: string; tech: string[]; github: string; demo: string }) => ({
        _type: "object",
        title: p.title,
        description: p.description,
        tech: p.tech,
        github: p.github,
        demo: p.demo,
      })
    ),
  };

  await client.createOrReplace(doc);
  console.log("✅ Projects content seeded");
}

async function seedContact() {
  const data = loadJSON("contact.json");
  const doc = {
    _type: "contact",
    _id: "contact-document",
    email: data.email,
    location: data.location,
    formPlaceholder: {
      _type: "object",
      name: data.formPlaceholder.name,
      email: data.formPlaceholder.email,
      message: data.formPlaceholder.message,
    },
    socials: data.socials.map(
      (s: { platform: string; icon: string; url: string }) => ({
        _type: "object",
        platform: s.platform,
        icon: s.icon,
        url: s.url,
      })
    ),
  };

  await client.createOrReplace(doc);
  console.log("✅ Contact content seeded");
}

async function main() {
  console.log(`🌱 Seeding Sanity dataset: ${dataset}`);
  console.log(`   Project ID: ${projectId}\n`);

  try {
    await seedHero();
    await seedAbout();
    await seedProjects();
    await seedContact();
    console.log("\n🎉 All content seeded successfully!");
  } catch (error) {
    console.error("\n❌ Seeding failed:", error);
    process.exit(1);
  }
}

main();
