import { useSelector } from 'react-redux'
import ProjectComponent from './ProjectComp'
import imageArray from './imagesData'
import backgroundImage from '../images/3m.jpg'


export default function Projects (){
  let Data = useSelector(state=>state.allproducts.data)
  let data =Data[0].project 
  console.log(Data[0])

  let style = {fontSize:"70px",
              }
  let project = data.map((item,i)=>{
    return <ProjectComponent data ={item} image={imageArray[i]}/>
  })
  
    return(
      <div id="project" style={{backgroundImage:`url(${backgroundImage})`, backgroundPosition: "center center", backgroundAttachment: "fixed ",backgroundRepeat: 'no-repeat' , height:"120vh" ,backgroundSize:"cover"
    }} className="container-fluid text-center bg changeImage"> 
              <h1 className='text-center p-3 text-primary' style={style}>My Work</h1>       
              <div className="row row-cols-auto skill" >
              {project}            
             </div>
        </div>

    )
}