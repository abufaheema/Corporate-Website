import { Box ,Typography} from "@mui/material"
import { Container, Row, Col } from 'react-bootstrap'

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Creative Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "SEO Optimized",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Retina Ready",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Brower Compatibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Customer Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
  },
];

const Services = () => {
    return (
      <Box id="services" className="block services-block">
        <Container fluid>
          <Box className="title-holder">
            <Typography variant="h2">Our Services</Typography>
            <Box component="div" align="center" className="subtitle">
              services we provide
            </Box>
          </Box>
                <Row>
                    {
                        servicesData.map(services => {
                            return (
                                <Col sm={4} className='holder gy-4' key={services.id}>
                                    <Box className="icon">
                                        <i className={services.icon}></i>
                                    </Box>
                                    <Typography variant="h3">{ services.title}</Typography>
                                    <Typography variant="body">{ services.description}</Typography>
                                </Col>
                            )
                        }) 
                    }
            
          </Row>
        </Container>
      </Box>
    );
}

export default Services