const { User } = require('#models');

class UserController {
  //   constructor(req, res) {
  //     this.req = req;
  //     this.res = res;
  //   }

  async index(req, res) {
    const a = await User.findAll({
      attributes: [["id","user_id"]]
    });
    console.log(a);
    return res.send('Birds home page');
  }
}

module.exports = UserController;
