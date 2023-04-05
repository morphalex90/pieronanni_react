// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).send(
    "You are definitely a curious one! Go back to the site!\n" +
    " - homepage: https://www.pieronanni.me\n" +
    " - about: https://www.pieronanni.me/about\n" +
    " - projects: https://www.pieronanni.me/projects\n" +
    " - contact: https://www.pieronanni.me/contact\n"
  )
}
