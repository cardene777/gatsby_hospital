// src/templates/post.js
import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"

import { useStaticQuery, graphql, Link } from "gatsby"

export default function Post({ pageContext }) {
    const { name, sidebar } = pageContext.hospital;
    const path = "/pages-post/"

    return (
        <Layout>
        <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
          <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">サイドメニュー</h2>
          <nav class="small" id="toc">
            <ul class="list-unstyled">
            {sidebar.map((value, index)=>(
                <li key={index} class="my-2">

                    <Link to={path + value.id}>
                        {value.menu}
                    </Link>
                </li>
            ))}
            </ul>
          </nav>
        </aside>
            <div className="post-header">
                <h1>{name}</h1>

            </div>
        </Layout>
    )
}