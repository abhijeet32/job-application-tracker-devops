import { Sequelize } from 'sequelize';

const postgresUrl = process.env.POSTGRES_URI as string;

// Initialize Sequelize with Postgres URL
export const sequelize = new Sequelize(postgresUrl, {
  dialect: 'postgres',
  logging: false, // Set to true to see SQL queries in the console
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connected successfully.');
        await sequelize.sync({ alter: true });
        console.log('PostgreSQL models synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};