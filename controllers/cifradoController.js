const bcrypt = require("bcryptjs");

// Método para modificar un usuario
const updateUser = (userId, newPassword) => {
  // Obtiene el usuario de la base de datos usando el ID
  const user = getUserById(userId);

  // Verifica si el usuario existe
  if (!user) {
    console.log('Usuario no encontrado');
    return;
  }

  // Cifra la nueva contraseña
  const saltRounds = 10;

  bcrypt.hash(newPassword, saltRounds, function(err, hash) {
    if (err) {
      console.error(err);
      return;
    }

    // Actualiza la contraseña del usuario con el hash cifrado
    user.password = hash;
    saveUser(user);

    console.log('Contraseña modificada correctamente');
  });
};

// Función para obtener un usuario por su ID
const getUserById = (userId) => {
  // Se Obtiene el usuario de la base de datos según su ID
  // y devuelve el objeto de usuario
};

const saveUser = (user) => {
};

// Llama a la función para modificar un usuario
const userId = '123'; // Reemplaza con el ID del usuario que deseas modificar
const newPassword = 'KevinLevin'; // Lo remplaza con la nueva contraseña

updateUser(userId, newPassword);
