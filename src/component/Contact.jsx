import { Box ,Typography} from "@mui/material"
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Iframe from 'react-iframe'


const Contact = () => {
    return (
      <Box id="contact" className="block contact-block">
        <Container fluid>
          <Box className="title-holder">
            <Typography variant="h2">Contact us</Typography>
            <Box className="subtitle">get connected with us</Box>
          </Box>

          <Form className="contact-form">
            <Row>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="tel"
                  placeholder="Enter your contact number"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Control
                  as="textarea"
                  placeholder="Enter your message"
                  required
                />
              </Col>
            </Row>
            <Box className="btn-holder">
              <Button type="submit">Submit</Button>
            </Box>
          </Form>
        </Container>
        <Box className="google-map">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5252405718975!2d4.476658514165717!3d7.839963808635444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10378152de7e6745%3A0x6c9a2d5650768bbb!2sIrepodun%20Local%20Government%20Secretariat%2C%20Ilobu!5e0!3m2!1sen!2sng!4v1679353576394!5m2!1sen!2sng"
            width="640px"
            height="320px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </Box>
        <Container fluid>
          <Box className="contact-info">
            <Box component='ul'>
              <Box component='li'>
                <Box component='i' className="fas fa-envelope"></Box>
                hello@domain.com
              </Box>
              <Box component='li'>
                <Box component='i' className="fas fa-phone"></Box>
                000-000-0000
              </Box>
              <Box component='li'>
                <Box component='i' className="fas fa-map-marker-alt"></Box>
                London, United Kingdom
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    );
}

export default Contact