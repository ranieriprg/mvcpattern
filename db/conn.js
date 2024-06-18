require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: true,
  }
);


try {
    sequelize.authenticate()
    console.log(`Banco conectado com sucesso!!!`);
} catch (error) {
    console.log(`Não foi possivel conectar com o banco. ${error}`);
}

module.exports = sequelize;