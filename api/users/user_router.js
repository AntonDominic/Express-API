const { createUser, getUserByUserId, getUsers, updateUser, deleteUser, login } = require("./user_controller");
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");

router.post("/register", createUser);
router.get("/profile", checkToken, getUsers);
router.get("/profile/:id", checkToken, getUserByUserId);
router.put("/update", checkToken, updateUser);
router.delete("/", checkToken, deleteUser);
router.post("/login", login );
module.exports = router;
