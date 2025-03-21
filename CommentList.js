function CommentList() {
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
          const queryParams = new URLSearchParams(window.location.search);
          const id = queryParams.get('id');

          fetch(`http://localhost:3000/commentaires?p_id=${id}`)
              .then(response => response.json())
              .then(data => setData(data));
      }, []);
  
      return (
        <div class="container-fluid">
        <div class="container py-5">
        <div class="row d-flex justify-content-center">
                {data.map((item) => (
                    <Comment item = {item}/>
                ))}
            </div>
        </div>
        </div>
);
}
  