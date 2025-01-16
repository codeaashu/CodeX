import { ContactData } from '../../models/ContactData';
import { mongooseConnect } from '../../lib/mongoose';

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === 'POST') {
    const { firstName, lastName, email, contactNumber, query } = req.body;
    const contactDataDoc = await ContactData.create({
      firstName,
      lastName,
      email,
      contactNumber,
      query,
    });
    res.json(contactDataDoc);
  }
}
