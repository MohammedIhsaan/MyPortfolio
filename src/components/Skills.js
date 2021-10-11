import HtmlPhoto from "../html.png"
import CSSPhoto from "../css3.png"
import JSPhoto from "../js.png"
import RPhoto from "../reactjs.png"
import RDPhoto from "../redux.png"
import BPhoto from "../bootstrap.png"
import backgroundImage from '../images/2.jpg'

let style = {fontSize:"70px",
              }
export default function Skills (){
    return(
        <div style={{backgroundImage:`url(${backgroundImage})`,backgroundRepeat: 'no-repeat' ,backgroundSize:"cover"
        }} className="container-fluid text-center bg">        
            

            <div className=" ">
  <div className="row ">
  <div className="col-md-4 skill-text col-6-center">
    <h1 className='' style = {style} >Skills</h1>  
    </div>

    <div className="col-md-8 ">
     <div className="p-1 border border-dark skill-center">   
     <div className="row row-cols-3 mySkills ">
        
        <div className="col p-2 skill">
                <div>
                            <h3>HTML5</h3>
                       <img src={HtmlPhoto} width="80" height="100" ></img>
                </div>
        </div>
    <div className="col p-2 skill">
        <div>
        <h3>CSS3</h3>
       <img src={CSSPhoto} width="80" height="100" ></img>
        </div>
    </div>
         
         

    <div className="col p-2 skill ">
    <div>
        <h3>JAVASCRIPT</h3>
    <img src={JSPhoto} width="80" height="100" ></img>
        </div>
    </div>
  
    <div className="col p-2 skill">
           <div>
        <h3>REACT.JS</h3>
           <img src={RPhoto} width="80" height="100" ></img>
        </div>
    </div>
         
         

    <div className="col p-2 skill">
         <div>
        <h3>REDUX</h3>
        <img src={RDPhoto} width="80" height="100" ></img>
        </div>
    </div>
    <div className="col p-2 skill">
          <div>
        <h3>BOOTSTRAP</h3>
         <img src={BPhoto} width="100" height="80" ></img>
        </div>
         
  
  </div>
  </div>
         
     </div>
    </div>
    
    
  </div>
</div>
        
</div>
    )
}

