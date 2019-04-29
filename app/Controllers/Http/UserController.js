"use strict";

class UserController {
  register({ request }) {
    console.log(request.all());
    return {
      message: "this is post message"
    };
  }
}

module.exports = UserController;
