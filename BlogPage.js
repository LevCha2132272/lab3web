function BlogPage({item}) {
    return(
<>
<div key={item.id} class="container-fluid" >
  <div class="custom-fluid-containerMain">
    <div class = "row">
      <div class = "col-12 d-flex justify-content-center">
        <img  src="./img/logo.png" alt="logo" width = "60%" height="100%"></img>
      </div>
    </div>
    <div class = "row d-flex justify-content-center">
      <div class = "col-12 d-flex justify-content-center">
        <h1>{item.title}</h1>
      </div>
      <div class = "col-8 d-flex justify-content-center">
        <p id = "paragraph1" class = "text-center">{item.content}</p>
      </div>
      <div class = "col-12 d-flex justify-content-center">
        <img  src="./img/logo.png" alt="logo" width = "60%" height="100%"></img>
      </div>
      <div id = "comments" class = "row d-flex justify-content-center pb-5 pt-5">
      </div>
    </div>
  </div>
</div>


</>);
}