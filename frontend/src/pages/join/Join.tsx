import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {useAppSelector, useTitle, useAppDispatch} from "../../hooks";
import './join.scss'
import {joinWorkspace, logout, setError} from "../../store/reducers/auth/action-creators";
import {Navigate} from "react-router-dom";

const Join: FC  = () => {
    const {error, isAuth} = useAppSelector(state => state.auth)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setError(''))
    }, [dispatch])

    const onSubmit = (data: any) => {
        dispatch(joinWorkspace(data['Workspace']) as any)
        // dispatch(setError('qwe'))
    }

    return (
        <div className={'join'}>
            {isAuth && <Navigate to={'/'} replace={true}/>}
            {/* {error && <div className={'registerError'}>
                {error}
            </div>} */}
            <div className={'joinForm'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        fieldName={'Workspace'}
                        register={register}
                        placeholder={'Enter workspace code...'}
                        isRequired={true}
                    />
                    <Button type={'submit'} text={'Enter'}/>
                </form>
            </div>
        </div>
    );
};

export default Join;