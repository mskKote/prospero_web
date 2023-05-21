import { NextApiRequest } from "next";

type Override<T1, T2> = Omit<T1, keyof T2> & T2;
export type NextApiRequestWithBody<Body> = Override<NextApiRequest, { body: Body }>
