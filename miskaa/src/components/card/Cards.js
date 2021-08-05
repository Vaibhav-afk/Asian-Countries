import React from "react";
import "./card.css";
import { Card, Row, Col, Table } from "react-bootstrap";

function Cards({ data }) {
  return (
    <div className="cardContainer">
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="cardWrapper">
              <Card.Img
                className="cardImg"
                variant="top"
                alt="img"
                src={data.flag}
              />
              <Card.Body>
                <Card.Title className="cardTitle">
                  <strong>{data.name}</strong>
                </Card.Title>
                <Card.Text>
                  <div className="cardText">
                    <Table striped bordered hover size="sm">
                      <tbody>
                        <tr>
                          <td>Capital:</td>
                          <td>{data.capital}</td>
                        </tr>
                        <tr>
                          <td>Region:</td>
                          <td>{data.region}</td>
                        </tr>
                        <tr>
                          <td>Sub-region:</td>
                          <td>{data.subregion}</td>
                        </tr>
                        <tr>
                          <td>Population:</td>
                          <td>{data.population}</td>
                        </tr>
                        <tr>
                          <td>Borders:</td>
                          <td>
                            [
                            {data.borders.map((border) => (
                              <span> {border}, </span>
                            ))}
                            ]
                          </td>
                        </tr>
                        <tr>
                          <td>Language:</td>
                          <td>
                            [
                            {data.languages.map((lang) => (
                              <span> {lang.name}, </span>
                            ))}
                            ]
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
