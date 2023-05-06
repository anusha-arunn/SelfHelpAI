import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fs.readFile(`Blog/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "No such blog" });
    }
    console.log(req.query.slug);
    return res.status(200).json(JSON.parse(data));
  });
}
