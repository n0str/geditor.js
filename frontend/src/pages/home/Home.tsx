import React, {FC} from 'react';
import './home.scss'
import ReactEditor from '../../ReactEditor';
import {useAppSelector, useTitle, useAppDispatch} from "../../hooks";

const Home: FC = () => {
    const {error, isAuth} = useAppSelector(state => state.auth)

    return (
        <div className={'home'}>
            <ReactEditor />
            {isAuth && "hello!"}
        </div>
    );
};

export default Home;