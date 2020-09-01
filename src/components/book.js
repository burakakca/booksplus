import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "../components/seo"

class Item extends React.Component {
  render() {
    const book = this.props.data.mongodbGatsbyBooks

    return (
      <Layout>
        <SEO title={book.title} />
        <div>
          <img src={book.thumbnailUrl} alt={book.title} />
          <h1>{book.title}</h1>
          <p>By {book.authors.map(author => (<span>{author}, </span>))}</p>
          <p>{book.longDescription}</p>
          <p>Published: {book.publishedDate} | ISBN: {book.isbn}</p>
          {book.categories.map(category => category)}
        </div>
        <Link to="/">
          <a>Go back {"<--"} </a>
        </Link>
      </Layout>
    )
  }
}

export default Item

export const pageQuery = graphql`
  query($id: String!) {
    mongodbGatsbyBooks(id: { eq: $id }) {
      id
      title
      longDescription
      thumbnailUrl
      isbn
      pageCount
      publishedDate(formatString: "MMMM DD, YYYY")
      authors
      categories
    }
  }
`
