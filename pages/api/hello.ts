// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).send(
    "You are definitely a curious one! Go back to the site!\n" +
    " - homepage: https://www.pieronanni.com\n" +
    " - about: https://www.pieronanni.com/about\n" +
    " - projects: https://www.pieronanni.com/projects\n" +
    " - contact: https://www.pieronanni.com/contact\n"
  )
}
