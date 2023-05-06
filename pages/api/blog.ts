import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const blogPostsPath = path.join(process.cwd(), "data", "blog");
    const fileNames = fs.readdirSync(blogPostsPath);
    const blogPosts = fileNames.map((fileName) => {
      const filePath = path.join(blogPostsPath, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContents);
    });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: "Failed to load blog posts" });
  }
}
