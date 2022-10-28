const connection = require("./conecction");
const sql = require("mssql");
const querys = require("./querys");

async function getUser(req, res) {
  try {
    let pool = await sql.connect(connection);
    let salida = await pool.request().query(querys.getAllUser);
    res.json(salida.recordsets);
  } catch (error) {
    console.log(error);
  }
}

async function creatUser(req, res) {
  try {
    const { nombre_usuario, constraseña, tipo_usuario } = req.body;
    // let {state} = req.body;
    // state = 1;
    const pool = await sql.connect(connection);
    const result = await pool
      .request()
      .input("nombre_usuario", sql.VarChar, nombre_usuario)
      .input("constraseña", sql.VarChar, constraseña)
      .input("tipo_usuario", sql.VarChar, tipo_usuario)
      .query(
        `INSERT INTO dbo.User_Flotex (nombre_usuario, constraseña,   tipo_usuario) VALUES ('${nombre_usuario}' , '${constraseña}', '${tipo_usuario}' )`
      );
    console.log(result);
    res.json({ nombre_usuario, constraseña, tipo_usuario });
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getUser: getUser,
  creatUser: creatUser,
};
