import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDir = path.join(process.cwd(), "content/projects");

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  date: string;
  github?: string;
  link?: string;
}

export interface Project extends ProjectMeta {
  contentHtml: string;
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(projectsDir)) return [];

  const slugs = fs.readdirSync(projectsDir).filter((entry) => {
    const full = path.join(projectsDir, entry);
    return fs.statSync(full).isDirectory();
  });

  return slugs
    .map((slug) => {
      const mdPath = path.join(projectsDir, slug, "index.md");
      if (!fs.existsSync(mdPath)) return null;
      const { data } = matter(fs.readFileSync(mdPath, "utf8"));
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        tags: data.tags ?? [],
        status: data.status ?? "",
        date: data.date ?? "",
        github: data.github,
        link: data.link,
      } satisfies ProjectMeta;
    })
    .filter(Boolean) as ProjectMeta[];
}

export async function getProject(slug: string): Promise<Project | null> {
  const mdPath = path.join(projectsDir, slug, "index.md");
  if (!fs.existsSync(mdPath)) return null;

  const file = fs.readFileSync(mdPath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    tags: data.tags ?? [],
    status: data.status ?? "",
    date: data.date ?? "",
    github: data.github,
    link: data.link,
    contentHtml: processed.toString(),
  };
}
