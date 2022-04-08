import './App.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './images.js';


function App() {
  
  const [width, setWidth] = useState(useState[0]);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);



  return (
    <div className="App">
      <div className="header">
       <div className="center">
         <div className="menu">
            <div className="logo">
              <h3>Projeto B</h3>
            </div>
            <nav>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="comics.html">Comics</a></li>
                  <li><a href="novel.html">Novel</a></li>
                  
                </ul>
            </nav>
            <div className="item-menu">
              <a href="/">Login</a>
            </div>
        </div>

            
        <div className="content-video">
          <div className='videohome'>
          <video loop muted autoPlay>
             <source src={require('../src/mp4/video.mp4')} type="video/mp4" />
          </video>
            </div>

        </div>
  
        
      </div>

      </div>

      <div className="main">
       <div className="center">

       <h1 class="heading" >our <span>Comics</span></h1>

        <motion.div 
              ref={carousel} 
              className='carousel'
              whileTap={{ cursor: 'grabbing' }}
              >
                <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }              
              } 
                className="inner-carousel">
                  {images.map((image) => {
                    return (
                      <motion.div className="item" key={image}>
                        
                        <img src={image} alt="" />
                        
                      </motion.div>
                    );
                  })}
                </motion.div>
        </motion.div>

        <h1 class="heading" >our <span>Novel</span></h1>                      
  
        <motion.div 
              ref={carousel} 
              className='carousel'
              whileTap={{ cursor: 'grabbing' }}
              >
                <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }              
              } 
                className="inner-carousel">
                  {images.map((image) => {
                    return (
                      <motion.div className="item" key={image}>
                        
                        <img src={image} alt="" />
                        
                      </motion.div>
                    );
                  })}
                </motion.div>
        </motion.div>





       </div>
      </div>





    </div>
  );
}

export default App;
