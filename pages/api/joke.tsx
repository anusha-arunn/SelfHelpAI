import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

//https://www.youtube.com/watch?v=T_aH6sRlj6A&t=216s
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const results = await axios({
      headers: {
        "X-Api-Key": "TMI6WhtbO/LuEEaMKRRmHA==VzoEUxykuEGeHTBP",
      },
      url: `https://api.api-ninjas.com/v1/dadjokes?limit=1`,
      data: req.body,
    });
    res.status(results.status).json(results.data);
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
};

export default handler;
