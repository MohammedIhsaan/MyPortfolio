export default function Navbar(){
     return(
        <nav className="navbar  navbar-dark bg-dark"> 
          <div className='container-fluid'>
                <a className="navbar-brand " href="#">
                    <div className="text-center">MOHAMMED</div>
                  </a>
              
            <div className="navbar-nav">
                <div className="row text-cener">
                    <div className='col'><a className="nav-link active" aria-current="page" href="#">About</a></div>
                    <div className='col'> <a className="nav-link" href="#">Skills</a></div>
                    <div className='col'><a className="nav-link" href="#">Projects</a></div>
                    <div className='col'><a className="nav-link disabled">Contact</a></div>     
                </div>
            </div>           
              </div>      
      </nav>
     )
}