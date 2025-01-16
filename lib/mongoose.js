import mongoose from 'mongoose';

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    console.log('Connection established');
    return mongoose.connection.asPromise();
  }
  const uri = process.env.MONGODB_URI;
  console.log('Connection not established');
  return mongoose.connect(uri);
}
