const { create, getUserByUserId, getUsers, updateUser, deleteUser, getUserByUserEmail } = require("./user_service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt")
const {sign} = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          result: "failed",
          message: "Database connection error" 
        });
      }
      return res.status(200).json({
        result: "success",
        data: results
      });
    });

  
  },
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found"

        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
   
  
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      if(!results) {
        return res.json({
          success: 0,
          message: "failed to update users"
        });
      }
      return res.json({
        success:1,
        message: "updated successfully"
      }); 
    });
  
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found"
        });

      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
    });

  
  
  },
  login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        result.password = undefined;
        const jsontoken = sign({ result: results}, "qwe1234", {
          expiresIn: "1hr"
        });
        return res.json({
          success: 1,
          message: "logged in successfully",
          token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
  }, 
};