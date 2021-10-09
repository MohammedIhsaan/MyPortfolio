import photo from '../1.jpg'
export default function About (){
    return(      
        <div className='row '>
            <div className="col-sm-6 col-lg-4 p-5">
                <div className="container-md">
                <div class="text-center">
                    <img class="rounded-circle z-depth-2 " src = {photo} alt='not availbe'/>
                 </div>
                </div>
                <div className="row">  
                    <h5 className= "text-primary text-center">MOHAMMED IHSAANUL HAQUE</h5>                                  
                </div>
                <div className="row"> 
                  <h7 className= "text-info text-center" >RACT.JS DEVELOPER</h7>
                 </div>  
                 <div className='text-center'>

                  <button type="button" className="btn btn-tw"><i style={{ fontSize : "2rem"}} className="bi bi-twitter"></i></button>          
                  <button type="button" className="btn btn-li"><i style={{ fontSize : "2rem"}} className="bi bi-linkedin"></i></button>          
                  <button type="button" className="btn btn-git"><i style={{ fontSize : "2rem"}} className="bi bi-github"></i></button>          
                 </div>
                  
            </div>
            <div className="col-sm-6 col-lg-8 p-5">
                <span className="p-5">  Hi, I am Mohammed Ihsaanul Haque.Looking to work as a Structural engineer
             in a construction company , a job that gives me opportunities to learn, innovate and enhance my
              skills and let me work on the leading areas of technology, alsowhich provides satisfaction and help
               me achieve personal as well as organizational goals.
               Hi, I am Mohammed Ihsaanul Haque.Looking to work as a Structural engineer
             in a construction company , a job that gives me opportunities to learn, innovate and enhance my
              skills and let me work on the leading areas of technology, alsowhich provides satisfaction and help
               me achieve personal as well as organizational goals.
               Hi, I am Mohammed Ihsaanul Haque.Looking to work as a Structural engineer
             in a construction company , a job that gives me opportunities to learn, innovate and enhance my
              skills and let me work on the leading areas of technology, alsowhich provides satisfaction and help
               me achieve personal as well as organizational goals.</span>
               <div className="row">
                   <div className='col'>
                       <h4>Interset</h4>
                       <ul>
                           <li>1</li>
                           <li>2</li>
                       </ul>
                       
                   </div>
                   <div className='col'>
                       <h4>Education</h4>
                       <ul>
                           <li>1</li>
                           <li>2</li>
                       </ul>
                   </div>

               </div>

              
               
               </div>

        </div>
        
    )
}