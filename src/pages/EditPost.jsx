import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/configure";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const [post, setPosts] = useState([]);
  const { slug } = useParams();
  const navigate = useParams();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
