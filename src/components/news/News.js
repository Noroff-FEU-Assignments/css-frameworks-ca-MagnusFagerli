import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import Footer from '../footer/Footer'

function Cards() {
    return (
        <>
        
        <h1>News</h1>

        <Pagination size="lg" className="pagination">
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
        </Pagination>


        <div className="cardcontainer">

          <Card style={{ width: '264px', height: '394px' }}>
              <Card.Img variant="top" src="News images/news-1.jpg" className="cardimg" />
            <Card.Body>
              <Card.Title className="cardtitle">Nunc porttitor vel</Card.Title>
              <Card.Text className="cardtext">
                Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary" size="lg" className="morebtn">More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '264px', height: '394px' }}>
              <Card.Img variant="top" src="News images/news-2.jpg" className="cardimg" />
            <Card.Body>
              <Card.Title className="cardtitle">Nunc porttitor vel</Card.Title>
              <Card.Text className="cardtext">
                Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary" size="lg" className="morebtn">More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '264px', height: '394px' }}>
              <Card.Img variant="top" src="News images/news-3.jpg" className="cardimg" />
            <Card.Body>
              <Card.Title className="cardtitle">Nunc porttitor vel</Card.Title>
              <Card.Text className="cardtext">
                Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary" size="lg" className="morebtn">More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '264px', height: '394px' }}>
              <Card.Img variant="top" src="News images/news-4.jpg" className="cardimg" />
            <Card.Body>
              <Card.Title className="cardtitle">Nunc porttitor vel</Card.Title>
              <Card.Text className="cardtext">
                Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary" size="lg" className="morebtn">More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '264px', height: '394px' }}>
              <Card.Img variant="top" src="News images/news-5.jpg" className="cardimg" />
            <Card.Body>
              <Card.Title className="cardtitle">Nunc porttitor vel</Card.Title>
              <Card.Text className="cardtext">
                Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary" size="lg" className="morebtn">More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '264px', height: '394px' }}>
              <Card.Img variant="top" src="News images/news-6.jpg" className="cardimg" />
            <Card.Body>
              <Card.Title className="cardtitle">Nunc porttitor vel</Card.Title>
              <Card.Text className="cardtext">
                Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary" size="lg" className="morebtn">More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '264px', height: '394px' }}>
              <Card.Img variant="top" src="News images/news-7.jpg" className="cardimg" />
            <Card.Body>
              <Card.Title className="cardtitle">Nunc porttitor vel</Card.Title>
              <Card.Text className="cardtext">
                Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary" size="lg" className="morebtn">More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '264px', height: '394px' }}>
              <Card.Img variant="top" src="News images/news-8.jpg" className="cardimg" />
            <Card.Body>
              <Card.Title className="cardtitle">Nunc porttitor vel</Card.Title>
              <Card.Text className="cardtext">
                Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary" size="lg" className="morebtn">More</Button>
            </Card.Body>
          </Card>
            
        </div>

        <Pagination size="lg">
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
        </Pagination>
        <Footer />
        </>
    )
}

export default Cards


