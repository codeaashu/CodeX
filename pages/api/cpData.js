import { mongooseConnect } from '../../lib/mongoose';
import { CPDATA } from '../../models/CPDATA';

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === 'POST') {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      community,
      designation,
      strength,
      logoLink,
      linkdin,
      twitter,
      instagram,
      github,
      registrations,
      expectations,
    } = req.body;
    const cpDataDoc = await CPDATA.create({
      firstName,
      lastName,
      email,
      contactNumber,
      community,
      designation,
      strength,
      logoLink,
      linkdin,
      twitter,
      instagram,
      github,
      registrations,
      expectations,
    });
    res.json(cpDataDoc);
  }
}
