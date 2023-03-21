import { Box ,Typography} from "@mui/material"
import { Container, Row, Col, Image } from 'react-bootstrap'
import React from 'react';
import img2  from './images/img15.jpg'



const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    // image: require("./images/img2.jpg"),
    title: "Lonely Path",
    subtitle: "Web Design",
  },
  {
    id: 2,
    link: "https://www.google.com",
    // image: require("./images/img3.jpg"),
    title: "Photographer Girl",
    subtitle: "Branding",
  },
  {
    id: 3,
    link: "https://www.google.com",
    // image: require("./images/img4.jpg"),
    title: "The Difference",
    subtitle: "Web Design",
  },
  {
    id: 4,
    link: "https://www.google.com",
    // image: require("./images/img5.jpg"),
    title: "Nature Patterns",
    subtitle: "Branding",
  },
  {
    id: 5,
    link: "https://www.google.com",
    // image: require("./images/img6.jpg"),
    title: "The Difference",
    subtitle: "Photography",
  },
  {
    id: 6,
    link: "https://www.google.com",
    // image: require("./images/img7.jpg"),
    title: "Winter Sonata",
    subtitle: "Web Design",
  },
  {
    id: 7,
    link: "https://www.google.com",
    // image: require("./images/img8.jpg"),
    title: "Lonely Path",
    subtitle: "Branding",
  },
  {
    id: 8,
    link: "https://www.google.com",
    // image: require("./images/img9.jpg"),
    title: "Appreciation",
    subtitle: "Photography",
  },
  {
    id: 9,
    link: "https://www.google.com",
    // image: require("./images/img10.jpg"),
    title: "Happy Days",
    subtitle: "Web Design",
  },
];

const Works = () => {
    return (
      <Box id='works'>
        <Container fluid>
          <Box className="title-holder mt-5">
            <Typography variant="h2">Our Works</Typography>
            <Box component="div" align="center" className="subtitle">
              our awesome works
            </Box>
          </Box>
                <Row className="portfoliolist">
                    {
                        worksData.map((work) => {
                            return (
                              <Col sm={4} key={work.id} className='mt-5'>
                                <Box className="portfolio-wrapper">
                                  <Box component="a" href={work.link}>
                                            <Image src={img2} />
                                    <Box className="label text-center">
                                      <Typography variant="h3">
                                        {work.title}
                                      </Typography>
                                      <Typography variant="body">
                                        {work.subtitle}
                                      </Typography>
                                    </Box>
                                  </Box>
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

export default Works