import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const blogPostPath = path.join(
    process.cwd(),
    "data",
    "blog",
    `${req.query.slug}.json`
  );
  fs.readFile(blogPostPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "No such blog" });
    }
    return res.status(200).json(JSON.parse(data));
  });
}
