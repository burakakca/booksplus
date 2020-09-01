import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const books = props.data.allMongodbGatsbyBooks.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <div className="book-container">
        {books.map(book =>
          <div className="book" key={book.node.id}>
            {book.node.thumbnailUrl &&
              <Link to={'/book/' + book.node.id}>
                <img src={book.node.thumbnailUrl} alt={book.node.title} />
              </Link>
            }
          </div>
        )}
      </div>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMongodbGatsbyBooks {
      edges {
        node {
          id
          title
          shortDescription
          thumbnailUrl
        }
      }
    }
  }
`
