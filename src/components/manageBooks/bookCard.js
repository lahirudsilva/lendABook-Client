import React from "react";
import { Badge, Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getBook } from "../../redux/actions/dataActions";

import "./bookCard.scss";

function BookCard(props) {
  const { ISBN, isAvailable, bookCover, title, author } = props.book;

  const handleSetBook = (ISBN) => {
    props.getBook(ISBN);
  };

  return (
    <Card className="book-card" onClick={() => handleSetBook(ISBN)}>
      <Image variant="top" src={bookCover} className="book-card-image" />
      {/* <img src={bookCover}/> */}
      <Badge
        pill
        className="book-card-badge"
        variant={isAvailable ? "success" : "danger"}
      >
        {isAvailable ? "Available" : "Reservered"}
      </Badge>
      <Card.Body>
        <Badge variant="secondary">Title</Badge>
        <span>
          {"	"}
          {title.substring(0, 25)}
        </span>
        <br />
        <Badge variant="secondary">Author</Badge>
        <span>
          {"	"}
          {author.substring(0, 20)}
        </span>
      </Card.Body>
    </Card>
  );
}

BookCard.propTypes = {
  getBook: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  getBook,
};

export default connect(null, mapActionsToProps)(BookCard);
