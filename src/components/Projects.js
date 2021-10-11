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
        <div>
              <h1 className='text-center'>Projects</h1>       
              <div className="row row-cols-auto" style={{backgroundColor:"GrayText"}}>
              {project}            
             </div>
        </div>

    )
}