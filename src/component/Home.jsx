import React from 'react';
import { Outlet, useNavigation } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className='my-container'>
            <Header></Header>
            <div className='text-center w-96 mx-auto font-6xl'>
                {navigation.state === 'loading' ? 'Loding........................' : ''}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;