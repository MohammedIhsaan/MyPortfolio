export default function Navbar(){
     return(
      <div className=" p-4">

        {/* <nav classNameName="navbar fixed-top  navbar-dark bg-dark p-1"> 
          <div classNameName='container-fluid'>
                <a classNameName="navbar-brand " href="#">
                    <div classNameName="text-center">MOHAMMED</div>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
                  </a>
                  <div classNameName="collapse navbar-collapse" id="navbarNav">

            <div classNameName="navbar-nav">
                <div classNameName="row text-cener">
                      <ul classNameName="navbar-nav">
                    <div classNameName='col'>


                    <li classNameName="nav-item">
                      <a classNameName="nav-link active" aria-current="page" href="#">About</a>
                     </li>
                      </div>
                    <li classNameName="nav-item">
                    <div classNameName='col'> <a classNameName="nav-link" href="#">Skills</a></div>
                     </li>
                    <li classNameName="nav-item">
                    <div classNameName='col'><a classNameName="nav-link" href="#">Projects</a></div>
                     </li>
                    <li classNameName="nav-item">
                    <div classNameName='col'><a classNameName="nav-link disabled">Contact</a></div>
                     </li>
                    
                      </ul>
                    
                    
                         
                </div>
            </div>           
                  </div>
              </div>      
      </nav> */}

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" dataBsTtoggle="collapse" dataBsTarget="#navbarNavAltMarkup" ariaControls="navbarNavAltMarkup" ariaExpanded="false" ariaLabel="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
      </div>
     )
}