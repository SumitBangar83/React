import React,{useState} from 'react'
export function Navbar(){
    const [i_hovered_div, setI_hovered] = useState(false);

    const handleMouseEnter = () =>{
        setI_hovered(true);
        document.getElementById('c-hover').style.backgroundColor = 'lightblue';
    }

    const handleMouseLeave = () =>{
        setI_hovered(false);
        document.getElementById('c-hover').style.backgroundColor = 'white';
    }
    
    return <div id = "Navbar">
                <div id="logo">
                    <div>
                        <img src="https://sarvar8950.github.io/internshala_clone.github.io/images/internshala_logo.png" alt="" />
                    </div>
                </div>
                <div id="pages" >
                    <div className='w-full h-full  z-10'>
                    <div id="page" className=''>
                        <div id = "c-hover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <p>Courses</p>
                        <i class="fa-solid fa-caret-down"></i>
                        {i_hovered_div && (
                            <div id = "c-hovered" className=" p-5 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                                <div className="pl-2">
                                    <p className='text-xl' id = "heading">Certification Courses</p>
                                </div>

                                <div className="courses-sections">
                                    <p>Python Programming</p>
                                </div>  

                                <div className="courses-sections">
                                    <p>Web Development</p>
                                </div>

                                <div className="courses-sections">
                                    <p>Auto Cad</p>
                                </div>

                                <div className="courses-sections ">
                                    <p>UI/UX</p>
                                </div>

                                <div className="courses-sections ">
                                    <p>Advanced Excel</p>
                                </div>

                                <div className="courses-sections ">
                                    <p>Video Editing</p>
                                </div>

                                <div className="courses-sections ">
                                    <p>Digital Marketing</p>
                                </div>

                                <div className="courses-sections ">
                                    <p>Machine Learning</p>
                                </div>
                            </div>
                        )}
                        </div>

                        <div>
                        <p>Jobs</p>
                        <i class="fa-solid fa-caret-down"></i>
                        </div>

                        
                    </div>
                    </div>
                   
                    <div id = "search">
                        <input type="text" placeholder = "Search" />
                    </div>
                    <div id = "users">
                        <i class="fa-regular fa-user"></i>
                    </div>
                </div>
            </div>
}