export default function Navbar(){
     return(
      <div class="position-relative p-2">

        <nav className="navbar fixed-top  navbar-dark bg-dark p-1"> 
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
      </div>
     )
}