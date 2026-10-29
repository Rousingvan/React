import { Outlet, Link } from "react-router-dom";

export function Posts() {
    return (
        <>
            <h1> Day la trang Posts </h1>
            <Link to="/posts" style={{ padding: 5 }}>Danh sach bai dang </Link>
            <Link to="/posts/new" style={{ padding: 5 }}>Tao bai dang </Link>
            <Link to="/posts/popular" style={{ padding: 5 }}>Bai noi bat </Link>
            <Outlet />
        </>
    );
}

export default Posts;