import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432, // Se DB_PORT não estiver definido, use a porta padrão 5432
  database: process.env.DB_DATABASE || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || ''
});


export const connect = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados PostgreSQL');
  } catch (err: any) {
    console.error('Erro ao conectar ao banco de dados PostgreSQL:', err);
  }
};
export default sequelize;