

    
function AddComment({item}) {
    const handleSubmit = (event) => {
     
        event.preventDefault(); // Prevent the default form submission

        const commentText = document.getElementById('comment').value;
        const p_id = item.id; // Assuming `item` is the id of the publication

        if (commentText.trim() === "") {
            alert("Comment cannot be empty");
            return;
        }

        const newComment = {
            id: Math.random().toString(36).substring(2, 9),
            p_id: p_id,
            c_date: new Date().toISOString().split('T')[0],
            comment: commentText
        };

        fetch('http://localhost:3000/commentaires', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Comment added successfully');
            document.getElementById('comment').value = ''; // Clear the text area
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to add comment');
        });

        
    }
return( 

<div   key={item.id} class="container-fluid d-flex flex-column justify-content-center" >
    <div class="col-12 d-flex justify-content-center">
        <h1>Commentaires</h1>
    </div>   
    <div class = "col-12 d-flex justify-content-center ">
    <form class = "w-75 d-flex flex-column justify-content-center " onSubmit={handleSubmit}>
        <textarea  name="comment" id="comment" cols="30" rows="10"></textarea>
        <button  class = "w-25 align-self-end mt-2" type="submit">Envoyer</button>
    </form>
    </div>
</div> 
);
}

