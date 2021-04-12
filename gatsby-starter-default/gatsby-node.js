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
                menu {
                  menu
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

	const { edges } = hospitalresult.data.allContentfulHospitalName

	edges.forEach(edge => {
		createPage({
			path: `/post/${edge.node.id}`,
			component: path.resolve(`./src/templates/post.js`),
			context: { post: edge.node }
		})
	});
}