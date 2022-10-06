import UserController from "../controllers/userController.js";


export default function(router){
// get users

router.get('/users',UserController.getUsers)

//post users

router.post('/userspost',UserController.postUsers)

//Delete user

router.delete('/usersdelete/:id',UserController.deleteUser)

//Update

router.put('/usersput/:id',UserController.putUser)
}