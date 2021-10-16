import ProjectComponent from './ProjectComp'
import imageArray from './imagesData'
import backgroundImage from '../images/3m.jpg'

// backgroundImage:`url(${backgroundImage})`,


export default function Projects (){
  let style = {fontSize:"70px",
              }
            console.log(imageArray)  
  let project = imageArray.map((obj,i)=>{
    return <ProjectComponent  data={obj}/>
  })
  
    return(
      <div id="project" style={{ backgroundPosition: "center center", backgroundAttachment: "fixed ",backgroundRepeat: 'no-repeat' , height:"120vh" ,backgroundSize:"cover"
    }} className="container-fluid text-center bg changeImage"> 
              <h1 className='text-center p-3 text-primary' style={style}>My Work</h1>       
              <div className="row row-cols-1 skill" >
              {project}            
             </div>
        </div>

    )
}