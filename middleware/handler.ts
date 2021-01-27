import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

import morgan from "morgan";
import helmet from "helmet";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(morgan("combined"));
handler.use(helmet());

export default handler;
