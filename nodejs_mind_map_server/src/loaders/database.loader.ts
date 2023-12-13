import {dataSource} from "../data-source";

export default async () => {
    await dataSource.initialize()
        .then(() => {
            console.log('Mongodb Connection');
        })
        .catch(err => {
            console.log(err);
        });
};