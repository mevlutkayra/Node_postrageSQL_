const UserModel = require("../models/User");

exports.get_users = async (req, res, next) => {
  //get users from db
  try {
    const userList = await UserModel.findAll({});
    res.render("users", { userList });
  } catch (error) {
    res.send("An error occured" + error);
  }
};

exports.show_add_user_form = (req, res) => {
  res.render("addUser");
};

exports.show_edit_user_form = async (req, res) => {
  /*
  const user= await UserModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  */

  const user= await UserModel.findByPk(req.params.id);
  console.log("user:",user);

  res.render("editUsers",{user});
};


exports.edit_user = async (req, res) => {
  try {
    await UserModel.update(
      {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    { 
      where: { id: req.body._id } }
    );

    //const userList = await UserModel.findAll({});
    // res.render("users", { userList });
    res.redirect("/users");
  } catch (error) {
    res.send("Add error: " + error);
  }
};


exports.add_user = async (req, res) => {
  try {
    await UserModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    //const userList = await UserModel.findAll({});
    // res.render("users", { userList });
    res.redirect("/users");
  } catch (error) {
    res.send("Add error: " + error);
  }
};

exports.delete_user = async (req, res) => {
  try {
    await UserModel.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/users");
  } catch (error) {
    res.send("Add error: " + error);
  }
};
