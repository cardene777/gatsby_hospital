import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function PostLink({ post }) {
    const { menu } = post;
    const pageLink = `/pages-post/${post.id}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link">
                <div className="post-link">
                    <div className="post-link-text">
                        <h2>{menu}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}