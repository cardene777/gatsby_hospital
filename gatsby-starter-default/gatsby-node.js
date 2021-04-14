const path = require("path")

exports.createPages = async({ graphql, actions, reporter }) => {
	const { createPage } = actions

	const hospitalresult = await graphql(`
		{
          allContentfulHospitalName {
            edges {
              node {
                id
                name
                sidebar {
                  id
                  menu
                  pages {
                    id
                    title
                  }
                }
              }
            }
          }
		}
	`)

	const sidebarresult = await graphql(`
		{
          allContentfulSidebar {
            edges {
              node {
                id
                menu
                pages {
                  id
                  title
                }
              }
            }
          }
		}
	`)

	if(hospitalresult.errors) {
		reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
		return
	}

	if(sidebarresult.errors) {
		reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
		return
	}



	hospitalresult.data.allContentfulHospitalName.edges.forEach(edge => {
		createPage({
			path: `/hospital-post/${edge.node.id}`,
			component: path.resolve(`./src/templates/hospital-post.js`),
			context: { hospital: edge.node }
		})
	})

	sidebarresult.data.allContentfulSidebar.edges.forEach(edge => {
		createPage({
			path: `/pages-post/${edge.node.id}`,
			component: path.resolve(`./src/templates/pages-post.js`),
			context: { pages: edge.node }
		})
	})
}


