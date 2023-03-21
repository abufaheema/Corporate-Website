import { Box, Typography } from "@mui/material"
import React from 'react';
import { Carousel, Container } from "react-bootstrap";

var testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!",
    designation: "Accountant",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?",
    designation: "CEO",
  },
];


const Testimonial = () => {
    return (
      <Box id="testimonials" className="testimonials-block">
        <Container fluid>
          <Box className="title-holder">
            <Typography variant="h4">Client Testimonials</Typography>
            <Box className="subtitle">
              <Typography variant="subtitle">what client says about us</Typography>
            </Box>
                </Box>
                <Carousel controls={false}>
                    {
                        testimonialsData.map((data) => {
                            return (
                              <Carousel.Item key={data.id}>
                                <Box component='blockquote'>
                                  <p>{data.description}</p>
                                  <cite>
                                    <span className="name">
                                      {data.name}
                                    </span>
                                    <span className="designation">
                                      {data.designation}
                                    </span>
                                  </cite>
                                </Box>
                              </Carousel.Item>
                            );
                        })
                    }

                </Carousel>
        </Container>
      </Box>
    );
}


export default Testimonial