import { useSelector } from 'react-redux'
import ProjectComponent from './ProjectComp'
import imageArray from './imagesData'


export default function Projects (){
  let Data = useSelector(state=>state.allproducts.data)
  let data =Data[0].project 
  console.log(Data[0])

  let project = data.map((item,i)=>{
    return <ProjectComponent data ={item} image={imageArray[i]}/>
  })
  
    return(
        <div style={{backgroundColor:"GrayText", height:"120vh"}}>
              <h1 className='text-center p-3'>Projects</h1>       
              <div className="row row-cols-auto skill" >
              {project}            
             </div>
        </div>

    )
}