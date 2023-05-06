import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await fs.promises.readdir("public/Blog");
    console.log(data);
    const allBlogs = [];
    for (const item of data) {
      const myfile = await fs.promises.readFile(`public/Blog/${item}`, "utf-8");
      const blog = JSON.parse(myfile);
      allBlogs.push(blog);
    }
    res.status(200).json(allBlogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
