// src/templates/post.js
import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/pages-link"

export default function Post({ pageContext }) {
    const { menu, pages } = pageContext.pages;

    return (
        <Layout>
        <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
          <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">{menu}</h2>
        </aside>
            <div className="post-header">
                {pages.map((value, index)=>(
                    <div key={index}>
                    {value.title}
                    </div>
                ))}
            </div>
        </Layout>
    )
}
