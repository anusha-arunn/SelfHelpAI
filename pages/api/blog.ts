import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = await fs.promises.readdir("components/Blog");
  console.log(data);
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("components/Blog/" + item, "utf-8");
    try {
      allBlogs.push(JSON.parse(myfile));
    } catch (error) {
      console.error(`Error parsing JSON data for file ${item}: ${error}`);
    }
  }
  res.status(200).json(allBlogs);
}
