import React, {FC} from 'react';
import './home.scss'
import { useNavigate } from "react-router-dom";
import ReactEditor from '../../ReactEditor';
import Button from "../../components/common/Button";
import {useAppSelector, useAppDispatch} from "../../hooks";
import {logout} from "../../store/reducers/auth/action-creators";

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {error, isAuth} = useAppSelector(state => state.auth)
    const handleClick = () => {
        navigate("/join")
    };
    const handleLogout = () => {
        dispatch(logout() as any)
    }

    return (
        <div className={'container'}>
            <div className={'navbar'}>
                {isAuth && <Button type={'button'} text={'Logout'} handleClick={handleLogout} />}
                {!isAuth && <Button type={'button'} text={'Join'} handleClick={handleClick} />}
            </div>
            <div className={'home'}>
                <ReactEditor />
                {isAuth && "hello!"}
            </div>
        </div>
        
    );
};

export default Home;