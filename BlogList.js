import React, { useState, useEffect } from 'react';

function BlogList() {
  const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/publications')
            .then(response => response.json())
            .then(data => setData(data))
            .then(data => console.log(data));
    }, []);

    return (
        <div>
            <p>a;;p</p>
        </div>
    )
}
