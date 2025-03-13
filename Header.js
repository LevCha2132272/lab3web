function Header() {
    return (<>
    <nav class="navbar navbar-expand-lg">    
    <img class = "logo" src="./img/logo.png" alt="logo" width = "125" height="75"></img>
    <button id ="drop" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            <img class = "logo2" src="./img/profil.png" alt="profil" width = "75" height="75" ></img>
        </div>
</nav>
<div class="container-fluid">
        <div class="custom-fluid-containerSb">
            <div class="row d-flex justify-content-center">
                <div id = "searchbar" class = "col-10 col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div class = "col-4 col-lg-1">
                    <p class = "text-white" >Trier Par </p>
                </div>
                <div class = "col-6 col-lg-4 ">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div> 
    </div>
    </>);
}