function Comment({item}) {
    return (
        
    
                <div key={item.p_id} class="card-body p-4">
                  <div class="d-flex flex-start">
                    <img class="rounded-circle shadow-1-strong me-3"
                      src="./img/profil.png" alt="avatar" width="60"
                      height="60" />
                    <div>
                      <h6 id="commentT" class="fw-bold mb-1">Nobody</h6>
                      <div class="d-flex align-items-center mb-3">
                        <p class="mb-0">
                          {item.c_date}
                        </p>
                        <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                        <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                        <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                      </div>
                      <p id="commentP" class="mb-0">
                      {item.comment}
                      </p>
                    </div>
                  </div>
                </div>
      
                
    );
}