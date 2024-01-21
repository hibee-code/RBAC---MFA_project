
import dotenv from 'dotenv'
import { pathFromSrc } from '../../helpers/general.js'
import { DataSource } from 'typeorm';
// import { DataSource } from "typeorm";
// import { databaseConfig } from "./database_connect";
dotenv.config();

export const databaseConfig = new DataSource ({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "ibrahim" ,
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || "role_mfa_db",
  synchronize: true, // Set to false in production
  logging: true, // Set to false in production
  entities: ['src/entities/**/*.entity.js'],  
  migrations: [pathFromSrc('config/migration/**/*.{js,ts}')],
  // seeds: [pathFromSrc('config/database/seeds/**/*.{js,ts}')],
  // factories: [pathFromSrc('config/database/factories/**/*.{js,ts}')],
  // subscribers: [pathFromSrc('config/database/subscribers/**/*.{js,ts}')],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  subscribers: [], // Specify your subscriber files
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/config/database/migration',
    subscribersDir: 'src/subscriber',
  },
});


// export const AppDataSource = new DataSource(databaseConfig);

// AppDataSource.initialize()
// .then(() => {
//   console.log("Data Source has been initialized!")
// })
// .catch((err) => {
//   console.error("Error during Data Source initialization", err)
// })

