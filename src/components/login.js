import { useDispatch, useSelector } from "react-redux"
import DashBoard from "."
import { updateUser } from "./redux/actionCreators"
import UpdateUser from "./update"
// import { updateUser } from "./redux/userSlice"

const Login = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state)
    console.log(user)

    return (
        <div>
            <p>Login here</p>
            <input onChange={(e) => dispatch(updateUser({
                ...user,
                email: e.target.value
            }))} placeholder="Enter your email"/>
            <input onChange={(e) => dispatch(updateUser({
                ...user,
                password: e.target.value
            }))} placeholder="Enter your password"/><hr/>
            <DashBoard /><hr/>
            <UpdateUser />
        </div>
    )
}

export default Login