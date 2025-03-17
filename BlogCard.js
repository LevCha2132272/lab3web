
function BlogCard({item}) {
    return (

<div key={item.id} className="col-10 col-lg-4 d-flex flex-column justify-content-center w-25 h-25">
    <div className="card m-0">
        <img src="img/bn.png" className="card-img-top" width="100" height="300" alt={item.title}></img>
    </div>
    <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.author} - {item.publication_date}</p>
        <a href={`blog.html?id=${item.id}`} className="btn btn-primary">Voir le Blog</a>
    </div>
</div>
);
}

