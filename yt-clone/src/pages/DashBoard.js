import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fetchData from '../utils/fetchData';



function Dashboard({currentPage, itemsPerPage=10}){
    const [fdata, setFData] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        fetchData(currentPage, itemsPerPage).then(dt => setFData(dt))
        console.log(fdata)
    }, [currentPage, itemsPerPage])
    return(
        fdata ? <div>

            <video controls width="100%" height="560">
                <source src={fdata.data.posts.filter((post) => post.postId == id)[0].submission.mediaUrl} type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
            <h1>{fdata.data.posts.filter((post) => post.postId == id)[0].submission.title}</h1>
            <p>{fdata.data.posts.filter((post) => post.postId == id)[0].submission.description}</p>
        </div> : <>Loading Data</>




    )
}

export default Dashboard;