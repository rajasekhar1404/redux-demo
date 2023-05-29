import { useSelector } from "react-redux"

const DashBoard = () => {

    const user = useSelector(state => state)

    return (
        <div>
            <p>loggedin user</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    )
}

export default DashBoard