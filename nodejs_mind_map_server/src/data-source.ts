import "reflect-metadata"
import { DataSource } from "typeorm"
import {MindMapEntity, MindMapFileEntity, UserEntity} from "./entities"

export const dataSource = new DataSource({
    type: "postgres",
    host: "postgresdb-dbforlearn.a.aivencloud.com",
    port: 17672,
    username: "avnadmin",
    password: "AVNS_YK9C86aLwCb_XZF1nbu",
    database: "defaultdb",
    synchronize: true,
    logging: false,
    entities: [UserEntity, MindMapFileEntity, MindMapEntity],
    migrations: [],
    subscribers: [],
    ssl: {
        rejectUnauthorized: false
    }
})
