import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "./redux/actionCreators"
// import { updateUser } from "./redux/userSlice"

const UpdateUser = () => {

    const user = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            <p>Update User</p>
            <input onChange={(e) => dispatch(updateUser({...user, email: e.target.value}))} placeholder="Enter your name"/>
            <input onChange={(e) => dispatch(updateUser({...user, password: e.target.value}))} placeholder="Enter your password"/>

            <p>Updated User</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    )
}

export default UpdateUser