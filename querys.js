// let username, password,   typeuser ;
const queries = {
  // user
  getAllUser: "SELECT * FROM dbo.User_Flotex",
  createUser:
    "INSERT INTO dbo.User_Flotex (nombre_usuario, constraseña,   tipo_usuario) VALUES (nombre_usuario , constraseña, tipo_usuario)",
  getUserById: "SELECT * FROM dbo.User_Flotex where idUsuario = @Id",
  deleteUserById: "DELETE FROM dbo.User_Flotex where idUsuario = @Id",
  updateProductById:
    "UPDATE dbo.User_Flotex SET nombre_usuario = @username, constraseña = @password , tipo_usuario = @typeuser   WHERE idUsuario = @Id ",
};

module.exports = queries;
