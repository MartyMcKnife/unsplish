import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

import morgan from "morgan";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(morgan("combined"));

export default handler;
