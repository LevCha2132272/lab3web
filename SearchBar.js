function SearchBar() {
    return (
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
    </div>);
}