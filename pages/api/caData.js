import { mongooseConnect } from '../../lib/mongoose';
import { CADATA } from '../../models/CADATA';

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === 'POST') {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      college,
      collegeCity,
      branch,
      graduationYear,
      linkdin,
      instagram,
      github,
      twitter,
      whyPart,
    } = req.body;
    const caDataDoc = await CADATA.create({
      firstName,
      lastName,
      email,
      contactNumber,
      college,
      collegeCity,
      branch,
      graduationYear,
      linkdin,
      instagram,
      github,
      twitter,
      whyPart,
    });
    res.json(caDataDoc);
  }
}
