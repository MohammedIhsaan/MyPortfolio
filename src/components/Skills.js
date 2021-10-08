import HtmlPhoto from "../html.png"
import CSSPhoto from "../css3.png"
import JSPhoto from "../js.png"
import RPhoto from "../reactjs.png"
import RDPhoto from "../redux.png"
import BPhoto from "../bootstrap.png"
export default function Skills (){
    return(
        <div style={{backgroundColor:""}} className="container">
            <h2 className='text-center' >Skills</h2>
  <div className="row text-center">
    <div className="col">
        <div>
            <h1>HTML5</h1>
      <img src={HtmlPhoto} width="120" height="140" ></img>
        </div>
    </div>
    <div className="col">
        <div>
        <h1>CSS3</h1>
    <img src={CSSPhoto} width="130" height="150" ></img>
        </div>
    </div>
    <div className="col">
    <div>
        <h1>JAVASCRIPT</h1>
    <img src={JSPhoto} width="130" height="150" ></img>
        </div>
    </div>
  </div>
  <div className="row text-center">
    <div className="col">
    <div>
        <h1>REACT</h1>
    <img src={RPhoto} width="130" height="150" ></img>
        </div>
    </div>
    <div className="col">
    <div>
        <h1>REDUX</h1>
    <img src={RDPhoto} width="110" height="130" ></img>
        </div>
    </div>
    <div className="col">
    <div>
        <h1>BOOTSTRAP</h1>
    <img src={BPhoto} width="130" height="100" ></img>
        </div>
      
    </div>
  </div>
</div>
    )
}