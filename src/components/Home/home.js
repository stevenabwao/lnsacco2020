import React from 'react';


import Registration from './Downloads/Registration';
import Investments from './products/invest';
import Topimage from './top'


const Home =() =>{
    return(
        <div className = "container">
            <Topimage />
             <Investments />
            <Registration />
            
        </div>
    )
}
export default Home