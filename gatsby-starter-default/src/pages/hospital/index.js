import React from "react"
// importを追記
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../../components/layout"
//import Image from "../../images"
import SEO from "../../components/seo"

const HomePage = () => {
  // queryの取得処理を追加
  const data = useStaticQuery(graphql`
    {
      allContentfulHospitalName {
        nodes {
          name
          id
          menu {
            menu
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>病院一覧</h1>
      <p>#############################################</p>
      {/* 取得したデータを表示する処理を追加 */}
      {data.allContentfulHospitalName.nodes.map(({ id, name, menu }) => (
        <div class="container" key={id}>
          <h2>病院名：　{name}</h2>
          {menu.map((value, index)=>(<p key={index}>{value.menu}</p>))}
          <p>#############################################</p>
        </div>
      ))}
      <Link to="/home/">Back to home</Link>
    </Layout>
  )
}

export default HomePage

