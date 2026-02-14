const bcrypt = require("bcrypt");
const { sequelize, User } = require("./models");

(async () => {
  await sequelize.sync();

  const hashed = await bcrypt.hash("admin123", 10);

  await User.create({
    username: "admin",
    password: hashed,
    role: "admin"
  });

  console.log("Admin created successfully");
  process.exit();
})();
