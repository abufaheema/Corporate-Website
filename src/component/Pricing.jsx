import { Box, Button, Typography } from "@mui/material"
import { Col, Container,ListGroup,Row } from "react-bootstrap";

const pricingData = [
  {
    id: 1,
    plan: "Basic",
    price: "£49",
    features: [
      "Wireframing",
      "Visual Design",
      "5 pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.google.com",
  },
  {
    id: 2,
    plan: "Premium",
    price: "£149",
    features: [
      "Wireframing",
      "Visual Design",
      "15 pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    plan: "Ultimate",
    price: "£349",
    features: [
      "Wireframing",
      "Visual Design",
      "Unlimited pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.twitter.com",
  },
];

const Pricing = () => {
    return (
      <Box id="pricing" className="block pricing-block">
        <Container fluid>
          <Box className="title-holder">
            <Typography variant="h2">Pricing &amp; plans</Typography>
            <Box className="subtitle">check our pricing &amp; plans</Box>
          </Box>
                <Row>
                    {
                        pricingData.map((pricing) => {
                            return (
                              <Col sm={4} key={pricing.id}>
                                <Box className="heading">
                                        <Typography variant="h3">{ pricing.plan}</Typography>
                                  <Typography
                                    component="span"
                                    className="price"
                                  >
                                    {pricing.price}
                                  </Typography>
                                </Box>
                                <Box className="content">
                                        <ListGroup>
                                            {
                                                pricing.features.map((feature,index) => {
                                                    return (
                                                      <ListGroup.Item key={index}>
                                                        {feature}
                                                      </ListGroup.Item>
                                                    );
                                                })
                                            }
                                    
                                  </ListGroup>
                                </Box>
                                <Box className="btn-holder">
                                  <Button className="btn btn-primary" href={pricing.link}>
                                    Order Now
                                  </Button>
                                </Box>
                              </Col>
                            );
                        })
                    }
           
          </Row>
        </Container>
      </Box>
    );
}

export default Pricing