
function BlogCard({item}) {
    return (

<div key={item.id} id="cardCol" className="col-8 col-lg-3 d-flex flex-column justify-content-center m-3 p-2 ">
    <div className="card h-100">
        <img src="img/bn.png" className="card-img-top" alt={item.title}></img>
    </div>
    <div className="card-body d-flex flex-column">
        <h5 className="card-title ">{item.title}</h5>
        <p id="cardBlog" className="card-text ">{item.author} - {item.publication_date}</p>
        <a href={`blog.html?id=${item.id}`} className="btn btn-primary  align-self-flex-end">Voir le Blog</a>
    </div>
</div>
);
}

