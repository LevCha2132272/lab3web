
function BlogDetails() {
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
          const queryParams = new URLSearchParams(window.location.search);
          const id = queryParams.get('id');

          fetch(`http://localhost:3000/publications?id=${id}`)
              .then(response => response.json())
              .then(data => setData(data));
      }, []);
  
      return (
      
        <div class="container-fluid" >
            <div class="custom-fluid-containerMain">
            {data.map((item) => (
                    <BlogPage item = {item}/>
                ))}
        </div>
    </div>);
}
  
  