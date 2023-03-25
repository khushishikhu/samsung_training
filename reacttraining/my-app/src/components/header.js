
function Header(){
    return(
        <>
      
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a class="navbar-brand mt-2 mt-lg-0" href="/#">
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Samsung_SDS_logo.svg/120px-Samsung_SDS_logo.svg.png?20180921195711"
          height="20"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/#">Cloud</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/#">Logistics</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/#" >Industries</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/#">Free Trials</a>
        </li>
      </ul>
    
    </div>
  

  
    <div class="d-flex align-items-center">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/#">Insights</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/#">Career</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/#">About</a>
        </li>
       
      </ul>

      <a class="text-reset me-3" href="/#">
        <i class="fas fa-shopping-cart"></i>
      </a>

      <span class="input-group-text border-0 fa-lg" id="search-addon">
      <i class="fab fa-sistrix"></i>
      </span>
      <span class="input-group-text border-0 fa-lg" id="search-addon">
      <i class="fas fa-align-justify"></i>
      </span>
  
      
    </div>
  
  </div>

</nav>


</>

    );
}

export default Header;