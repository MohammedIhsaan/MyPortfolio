import { useSelector } from 'react-redux'
import photo from '../1.jpg'
export default function About (){

    let Data = useSelector(state=>state.allproducts.data)
    let links = Data[0].links
    
    let list = Data[0].interst.map(list=> <li> {list} </li>)
            

    return(      
        <div className='row '>
            <div className="col-sm-6 col-lg-4">
                <div className="container-md">
                <div class="text-center">
                    <img class="rounded-circle z-depth-2 " src = {photo} alt='not availbe'/>
                 </div>
                </div>
                <div className="row">  
                    <h5 className= "text-primary text-center">{Data[0].name}</h5>                                  
                </div>
                <div className="row"> 
                  <h7 className= "text-info text-center" > {Data[0].ocupation} </h7>
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
                <span className="p-5"> {Data[0].intro} </span>
               <div className="row">
                   <div className='col'>
                       <h4>Interset</h4>
                       <ul>
                           {list}
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