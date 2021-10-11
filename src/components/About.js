import { useSelector } from 'react-redux'
import photo from '../1.jpg'
import backgroundImage from '../images/1.jpg'
export default function About (){

    let Data = useSelector(state=>state.allproducts.data)
    let links = Data[0].links
    
    let list = Data[0].interst.map(list=> <li> {list} </li>)
            

    return(
        <div style={{backgroundImage:`url(${backgroundImage})`,backgroundRepeat: 'no-repeat',maxWidth:"100%",height:"100vh" ,backgroundSize:"cover"
        }} className="container-fluid text-center bg"> 

        <div className='row mt-6 about' >
            <div className="col-sm-6 col-lg-4 p-5">
                
                <div className="container-md">
                <div class="text-center">
                    <img class="rounded-circle z-depth-2 " src = {photo} alt='not availbe'/>
                 </div>
                </div>
                <div className="row">  
                    <h5 className= "text-dark text-center ">{Data[0].name}</h5>                                  
                </div>
                <div className="row"> 
                  <h7 className= "text-dark text-center" > {Data[0].ocupation} </h7>
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
                        {Data[0].intro}
                
               <div className="row interst">
                   <div className='col'>
                       <h4>Education</h4>
                       
                           M.E STRUCTURAL ENGINEER ( M.S Bidwe Engineering College, Latur)
                           
                       
                   </div>
                   <div className='col'>
                       <h4>Interset</h4>
                       <ul>
                           {list}
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