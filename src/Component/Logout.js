import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import "../Component/login.css"
import { logout ,selectUser} from '../feature/userSlice';


export const Logout = () => {
    const user= useSelector(selectUser);
    const dispatch = useDispatch();

    const handlelogout= (e) => {
        e.preventDefault();
        dispatch(logout())
            
    }

    return (
        <  div className="main">
            <h1 className=" cnter ">
                Wellcome <span className="user">{user.name}</span>
            </h1>
            <a class="submit" align="center" onClick={(e)=>handlelogout(e)}>Log out</a>


        </div>
    )
}
