
export default function ProjectComponent({data,image}){       
    let path = data.path
        
    return(
        <div className="col">
<div class="container containerHover">
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src={image} style={{height:"20vh"}} />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">OnlineShopping</h3>
        <p class="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>
                  
            </div>
    )
}