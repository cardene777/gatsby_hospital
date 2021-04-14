import React from "react"
// importを追記
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostLink from "../../components/post-link"

const HomePage = () => {
  // queryの取得処理を追加
  const data = useStaticQuery(graphql`
    {
      allContentfulHospitalName {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>病院一覧</h1>
      {/* 取得したデータを表示する処理を追加 */}
      {data.allContentfulHospitalName.edges.map(edge => (
        <div class="container" key={edge.node.id}>
          <h2>{edge.node.name}</h2>
          <PostLink key={edge.node.id} post={edge.node} />
          <p>####################</p>
        </div>
      ))}
      <Link to="/">Go to page</Link>
    </Layout>
  )
}

export default HomePage

