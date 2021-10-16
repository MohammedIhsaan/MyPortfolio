
import photo from '../images/MohammedIhsaan.jpeg'
import backgroundImage from '../images/1.jpg'
export default function About (){
    return(
        <div id="intro" style={{backgroundImage:`url(${backgroundImage})`,  backgroundPosition: "center center", backgroundAttachment: "fixed " ,backgroundRepeat: 'no-repeat',backgroundSize:"cover"
        }} className="container-fluid text-center bg"> 
        <div className='row mt-6 about' >
            <div className="col-sm-6 col-lg-4 pt-5">       
                <div className="container-md">
                <div class="text-center">
                    <img class="rounded-circle z-depth-2 " style={{width:"240px"}} src = {photo} alt='not availbe'/>
                 </div>
                </div>
                <div className="row">  
                    <h5 className= "text-dark text-center pt-4 ">MOHAMMED IHSAANUL HAQUE</h5>                                  
                </div>
                <div className="row"> 
                  <h6 className= "text-dark text-center" > REACT.JS DEVELOPER </h6>
                 </div>  
                 <div className='text-center'>

                     <a href="https://twitter.com/ihsaanul_haque">
                  <button   type="button" className="btn btn-tw"><i style={{ fontSize : "2rem"}} className="bi bi-twitter" ></i></button>          
                     </a>

                     <a href="https://www.linkedin.com/in/ihsaan-mohammed-895732222/">
                         
                  <button type="button" className="btn btn-li"><i style={{ fontSize : "2rem"}} className="bi bi-linkedin"></i></button>          
                     </a>
                     <a href="https://github.com/MohammedIhsaan">
                         
                  <button type="button" className="btn btn-git"><i style={{ fontSize : "2rem"}} className="bi bi-github"></i></button>          
                     </a>
                    
                 </div>
                  
            </div>
            <div className="col-sm-6 col-lg-8 p-5">

            <div class="card font-link">
                    <div class="card-body">
                        <h5>

                    Hi, I am Mohammed Ihsaan. Motivated  web developer ,
                    Passionate about building first-class web applications.
                     I have completed some React.js projects. 
                     Feel free to check my My Work which will walk you through my project.
                      My expertise are in  React.js ,JavaScript, HTML5, CSS3, Bootstrap, 
                      Material UI, and apart from that I am also working as freelancer. 
                      I'm also learning Back-End Development 
                    and looking forward to be a Full Stack Web Developer.
                        </h5>
                
               <div className="row interst">
                   <div className='col'>
                       <h4>Education</h4>          
                       <h5>M.E STRUCTURAL ENGINEER </h5>( M.S Bidwe Engineering College, Latur)     
                   </div>
                   <div className='col'>
                       <h4>Interset</h4>
                       <ul>
                           <li><h5>Web Development</h5></li>
                           <li><h5>Block Chain</h5></li>
                           <li><h5>AI</h5></li>
                       </ul>
                   </div>
               </div>
               </div>
        </div>       
                    </div>
            </div>
        </div>      
    )
}