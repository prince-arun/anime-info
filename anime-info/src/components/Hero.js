import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import animeL from "../assets/logo.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import anime_cover from "../assets/anime cover.jpg";
import anime_cover_1 from "../assets/anime_cover_1.jpg";
import anime_cover_2 from "../assets/anime_cover_2.jpg";
import anime_cover_3 from "../assets/anime_cover_3.jpg";
import { auth } from "../config/Config";
import { db } from "../config/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Hero = () => {
  // ---------------------------Model States--------------------
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  //------------------------------------------------------------

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  let regUser = {
    Username: userName,

    Email: email,

    Age: age,
  };

  const handleClose = async (e) => {
    e.preventDefault();
    if (userName !== "" && email !== "" && password !== "" && age !== "") {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        ).then((success) => {
          const id = success.user.uid;
          console.log(regUser);
          set(ref(db, "RegUser/" + id), regUser);
          alert("User Created Successfully  ");
          setShow(false);
          navigate(`/signin/${id}`);
        });
      } catch (error) {
        console.log(error.message);
      }
    } else {
      alert("Please fill all the Details");
    }
  };
  return (
    <div className="hero">
      {/* ------------------------------------Nav Bar------------------------------------ */}
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={animeL} alt="anime-logo" width={180} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button
                variant="primary"
                onClick={handleShow}
                className="px-4 py-2"
              >
                Sign up
              </Button>

              <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Register...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="user name"
                        autoFocus
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        autoFocus
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Age"
                        autoFocus
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleClose}
                      className="px-4"
                    >
                      Register
                    </Button>
                    <Form.Label className="ms-3">
                      Already have a user Account?{" "}
                      <Link to={"/signin/:id"}>
                        <span className="login-link ms-2">Log In</span>
                      </Link>
                    </Form.Label>
                  </Form>
                </Modal.Body>
              </Modal>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ---------------------------Carousal------------------------------------------- */}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={anime_cover} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={anime_cover_1}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={anime_cover_2}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={anime_cover_3}
            alt="Fourth slide"
          />

          {/* <Carousel.Caption>
            <h3>fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
