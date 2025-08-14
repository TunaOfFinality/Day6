import userController from "../controllers/userController.js"
import testMiddleware from "../middlewares/testMiddleware.js"

const useUserRoute = async (router) => {
  router.get('/user', testMiddleware('admin'), userController.getAllUsers)
  router.get('/user/:id', userController.getUserById)
  router.post('/user',userController.create)
}

export default useUserRoute