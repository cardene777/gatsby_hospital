// src/templates/post.js
import React from "react"
import Layout from "../components/layout";

export default function Post({ pageContext }) {
    const { name, menu } = pageContext.post;

    return (
        <Layout>
            <div className="post-header">
                <h1>{name}</h1>
                {menu.map((value, index)=>(<p key={index}>{value.menu}</p>))}
            </div>
        </Layout>
    )
}