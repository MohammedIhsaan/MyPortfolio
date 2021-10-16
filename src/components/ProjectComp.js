
export default function ProjectComponent({data}){   
  console.log({data})   
  const {projectName,projectImage, projectLink ,projectDescription,icon} = data     
    return(
        <div className="col">
          <div className="row">
          <div className="col text-center pt-5">
            <h1>{projectName}</h1>
            <span> {projectDescription} </span>
            <div>{icon.map(item=> <img src={item} alt="not availble" style={{width:'30px',height:'30px', paddingRight:'5px'}}/>)}</div>
          </div>
          <div className="col">

<div class="container containerHover">
  <div className="content">
    <a href={projectLink} target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={projectImage} style={ {height:"300px"} }/>
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title"> {projectName} </h3>
      </div>
    </a>
  </div>
          </div>
    </div>
</div>
                  
            </div>
    )
}