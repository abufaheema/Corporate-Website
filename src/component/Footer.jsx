import { Container } from "react-bootstrap"
import {Box} from '@mui/material'
import { useEffect, useState } from "react";

const Footer = () => {

    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.screenY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])
    return (
      <Container fluid >
        <Box className="copyright">
          &copy; 2023 Corporate, All Ru=ight Reserved
        </Box>
        <Box className="socials">
          <ul>
            <li>
              <a href="">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
            </Box>
            {
                showTopBtn && (<div className="go-top"></div>)
            }
      </Container>
    );
}

export default Footer