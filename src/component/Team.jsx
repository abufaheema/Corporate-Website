import { Box ,Typography} from "@mui/material"
import { Container, Row, Col, Image } from "react-bootstrap"
import img3 from './images/team8.jpg'


const teamsData = [
  {
    id: 1,
    // image: require("../assets/images/team1.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Gabriel Hart",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 2,
    // image: require("../assets/images/team2.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Antony",
    designation: "Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 3,
    // image: require("../assets/images/team3.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Nicholas Perry",
    designation: "UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 4,
    // image: require("../assets/images/team4.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 5,
    // image: require("../assets/images/team5.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sophia Pitt",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 6,
    // image: require("../assets/images/team6.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Taylor Lopez",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 7,
    // image: require("../assets/images/team7.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ryan Giggs",
    designation: "Content Writer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 8,
    // image: require("../assets/images/team8.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Smith",
    designation: "SEO Expert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
];

const Team = () => {
    return (
      <Box mt='20px' id='teams'>
        <Container fluid className="mt-5">
          <Box className="title-holder">
            <Typography variant="h2">Our teams</Typography>
            <Box component="div" align="center" className="subtitle">
              some of our experts
            </Box>
          </Box>
                <Row className="gy-5 mb-5">
                    {
                        teamsData.map((team) => {
                            return (
                              <Col sm={3} className='mb-5' key={team.id}>
                                <Box className="image">
                                  <Image src={img3}/>
                                  <Box className="overlay">
                                    <Box className="socials">
                                      <Box component="ul">
                                        <Box component="li">
                                          <a href={team.fbLink}>
                                            <i className="fab fa-facebook-f"></i>
                                          </a>
                                        </Box>
                                        <Box component="li">
                                          <a href={team.twitterLink}>
                                            <i className="fab  fa-twitter"></i>
                                          </a>
                                        </Box>
                                        <Box component="li">
                                          <a href={team.linkedinLink}>
                                            <i className="fab  fa-linkedin-in"></i>
                                          </a>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box className="content">
                                            <Typography variant="h3">{ team.name}</Typography>
                                    <Typography
                                      component="span"
                                      className="designation"
                                    >
                                      {team.designation}
                                    </Typography>
                                    <Typography component="p">
                                      {team.description}
                                    </Typography>
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

export default Team