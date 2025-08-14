import userService from "../services/userService.js"

const userController = {
  getAllUsers: async (req, res) => {
    console.log("Authen");
    const users = await userService.getAllUsers()
    res.status(200).json(users)
  },
  getUserById: async (req, res) => {
    const id = req.params.id
    const user = await userService.getUserById(id)
    if(!user){
      res.status(404).json({
        message: "Not Found"
      })
    }
    res.status(200).json(user)
  },
  create: async (req, res) => {
    console.log("Authen");
    const { name, age, phone } = req.body
    const user = await userService.create(name, age, phone)
    res.status(201).json(user)
  }
}

export default userController