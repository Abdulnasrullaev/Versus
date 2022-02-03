import React from 'react';
import { About, HomePage, Navbar } from './style';
import img1 from '../../assest/image1.png';
import img2 from '../../assest/image2.png';
import img3 from '../../assest/image3.png';
import img4 from '../../assest/image4.png';
import img5 from '../../assest/image5.png';
import img6 from '../../assest/image6.png';
import img7 from '../../assest/image7.png';
import img8 from '../../assest/image8.png';
import img9 from '../../assest/image9.png';

function Home() {
    return (
        <>
            <Navbar>
                <p className="logo">Versus</p>
                <nav>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </nav>
            </Navbar>
            <HomePage>
                <div className="text">
                    <p className="title">
                        We build beautiful web and mobile apps.
                    </p>
                    <button className="post">
                        Get a quote
                    </button>
                </div>
            </HomePage>
            <About>
                <p className="titles">
                    Latest Work
                </p>
                <div className="card-wraper">
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
<img src={img4} alt="" />   
<img src={img5} alt="" />   
<img src={img6} alt="" />   
<img src={img7} alt="" />   
<img src={img8} alt="" />   
<img src={img9} alt="" />   
                </div>
                <p className="end">
                    VERSUS <br /> <br />
             <span> 
                  Powered by Abdullo Nasrullaev
                  </span>
                </p>
            </About>
        </>
    );
}

export default Home;