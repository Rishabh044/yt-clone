import {useEffect, useState, useRef} from "react";
import React from "react";
import fetchData from "../utils/fetchData";
import Card from "react-bootstrap/Card"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";



function ThumbnailList({currentPage=0, itemsPerPage=10}){
    const [fdata, setFData] = useState(null);
    useEffect(() => {
        fetchData(currentPage, itemsPerPage).then(dt => {setFData(dt)});
    }, [currentPage, itemsPerPage]);
    
    const gradient = {
        background: "-webkit-linear-gradient(to right, rgba(161,140,209,0.5), rgba(251,194,235,0.5))",
    }

    return(
        <>
            <ul className="d-flex flex-column">
                {fdata ? fdata.data.posts.map((post) => {
                    return (
                    <li key = {post.postId}>
                        <Container className="align-items-start flex-wrap">
                            <Card style={{ width: '100%', height: "50%", ...gradient}} className="align-items-center justify-items-center">
                                <Card.Img variant="top" src={post.submission.thumbnail} style={{width : "14rem" }} />
                                    <Card.Body>
                                        <Card.Title>{post.submission.title}</Card.Title>
                                        <Card.Text>
                                            {post.submission.description}
                                        </Card.Text>
                                        <Link to={`/page=${currentPage}/${post.postId}`} state={post}>Go somewhere</Link>
                                </Card.Body>
                            </Card>
                        </Container>
                    </li>) 
                }) : <>LOADING</>}
            </ul>
            
        </>
   )
}

export default ThumbnailList    