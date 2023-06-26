import { useAnimationFrame } from "framer-motion";
import type { NextApiRequest, NextApiResponse } from "next";
import { userAgent } from "next/server";

type Data = {
  name: string;
};
var baseURL = " http://ws.audioscrobbler.com/2.0/";
var apikey = process.env.API_KEY;
var getInfo = `/2.0/?method=user.getinfo&user=Sprintman210&api_key=${apikey}&format=json`;
const url = `${baseURL}${getInfo}`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    fetch(url)
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  } catch (error) {
    console.log("API ERROR!", error);

    // 1. get username from user
    // 2. get req with user.getInfo
    // 3. return the response
    // 4. display the data
    // API key 	3eb4ebadfd21bc056b8cf5d209f2c7f8
  }
  console.log(req.body);
  res.status(200).json({ name: req.body.name });
}
