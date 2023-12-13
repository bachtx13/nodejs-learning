import { config } from 'dotenv';
config();

//NOTE: If you are running the project in an instance, you should store these secret keys in its configuration settings.
// This type of storing secret information is only experimental and for the purpose of local running.

const { DB_URI, PORT} = process.env

export const port = PORT || 3000;
export const dbUri = DB_URI;
export const prefix = '/api/v1';
export const jwtSecretKey = 'yeubanha'