import { useParams } from "react-router-dom";

export function Post() {
    const BlogPosts = {
        'first-blog-post': {
            title: 'First Blog Post',
            description: 'Lorem ipsum dolor sit amet, consectetur adip.'
        },
        'second-blog-post': {
            title: 'Second Blog Post',
            description: 'Hello React Router v6'
        }
    };

    const { slug } = useParams();
    const post = BlogPosts[slug];

    if (!post) {
        return <h2>Khong tim thay bai viet!</h2>;
    }

    const { title, description } = post;
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Post;
