


function BlogList() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
        fetch('http://localhost:3000/publications')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="container-fluid">
            <div id = "cardsRow" className="row d-flex justify-content-center">
                {data.map((item) => (
                    <BlogCard item = {item}/>
                ))}
            </div>
        </div>
    );

}

