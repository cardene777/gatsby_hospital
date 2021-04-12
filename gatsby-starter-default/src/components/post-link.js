import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function PostLink({ post }) {
    const { name } = post;
    const pageLink = `/post/${post.id}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link">
                <div className="post-link">
                    <div className="post-link-text">
                        <h2>{name}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}