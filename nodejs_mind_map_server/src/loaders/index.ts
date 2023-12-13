import expressLoader from './express.loader';
import databaseLoader from "./database.loader";
export default async (app) => {
    await databaseLoader();
    expressLoader(app);
}