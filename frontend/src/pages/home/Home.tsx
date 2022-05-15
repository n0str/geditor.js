import React, {FC} from 'react';
import './home.scss'
import ReactEditor from '../../ReactEditor';

const Home: FC = () => {
    return (
        <div className={'home'}>
            <ReactEditor />
        </div>
    );
};

export default Home;