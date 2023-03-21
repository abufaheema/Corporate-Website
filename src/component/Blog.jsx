import { Box, Typography } from "@mui/material"
import { Card, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap"

import img4 from './images/blog2.jpg'

const blogData = [
  {
    id: 1,
    // image: require('../assets/images/blog1.jpg'),
    time: '15 Nov 2016',
    title: 'Coffee Lovers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    // image: require('../assets/images/blog2.jpg'),
    time: '10 Nov 2016',
    title: 'Tips for UI Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    // image: require('../assets/images/blog3.jpg'),
    time: '07 Nov 2016',
    title: 'Beautiful Day',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.twitter.com'
  }
]

const Blog = () => {
    return (
      <Box id="blog" className="block blog-block">
        <Container fluid>
          <Box className="title-holder">
            <Typography variant="h2">Latest from blog</Typography>
            <Box className="subtitle">get our latest news from blog</Box>
          </Box>
                <Row>
                    {
                        blogData.map((blog) => {
                            return (
                              <Col sm={4} key={blog.id}>
                                <Card>
                                        <Card.Img variant="top" src={ img4} />
                                        <Card.Body>
                                            <Box component='time'>{ blog.time}</Box>
                                            <Card.Title>{ blog.title}</Card.Title>
                                            <Card.Text>{ blog.description}</Card.Text>
                                    <Typography
                                      component="a"
                                      className="btn btn-primary"
                                    >
                                      Read More{" "}
                                      <i className="fas fa-chevron-right"></i>
                                    </Typography>
                                  </Card.Body>
                                </Card>
                              </Col>
                            );
                        })
                    }
            
          </Row>
        </Container>
      </Box>
    );
}
export default  Blog