import "./App.css";
import { useState } from "react";
import { questions } from "./Questions";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
import { MultiStepForm } from "./components/MultiStepForm";
import {
  usernameAndPasswordValidation,
  addressValidation,
} from "./components/Validator";

function App() {
  const totalPagesCount = questions?.length || 0;
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [userInput, setuserInput] = useState({});

  const [validated, setValidated] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // submission callback
  const onSubmit = (e) => {
    e.preventDefault();
    switch (index) {
      case 1:
        // username and password
        usernameAndPasswordValidation
          .validate(userInput[index], { abortEarly: false })
          .then((responseData) => {
            console.log(responseData);
            // no validation error
            goToNextPage();
          })
          .catch((err) => {
            setValidated(false);
            setErrorMessage(err.errors.join("\r\n"));
          });
        break;
      case 2:
        addressValidation
          .validate(userInput[index], { abortEarly: false })
          .then((responseData) => {
            console.log(responseData);
            // no validation error
            goToNextPage();
          })
          .catch((err) => {
            setValidated(false);
            setErrorMessage(err.errors.join("\r\n"));
          });
        break;
      default:
        console.log("No more validation required");
        goToNextPage();
    }
  };

  const goToNextPage = () => {
    setValidated(true);
    if (index - totalPagesCount) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      window.alert(JSON.stringify(userInput));
      // clear form on submit
      setuserInput({});
      setSubmitted(true);
    }
  };

  // previous button callback
  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  // restart the submission
  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };

  // setup the answer state in the controlled form
  const onPageUpdate = (step, answerObj) => {
    setuserInput({
      ...userInput,
      [step]: {
        ...userInput[step],
        ...answerObj,
      },
    });
  };

  return (
    <main className="App">
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar
              step={index}
              totalStepCount={totalPagesCount}
            />
          </Col>
        </Row>

        <Row className="m-5">
          <Col className="align-self-center">
            {!validated && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
          </Col>
        </Row>

        <Form onSubmit={onSubmit}>
          <Card>
            {submitted ? (
              <Card.Body>
                <p>Your answers have been submitted!</p>
              </Card.Body>
            ) : (
              <Card.Body>
                <MultiStepForm
                  list={questions}
                  step={index}
                  onPageUpdate={onPageUpdate}
                  userInput={userInput}
                />
              </Card.Body>
            )}

            {submitted ? (
              <Card.Footer>
                <Button onClick={handleStart}>Start Over</Button>
              </Card.Footer>
            ) : (
              <Card.Footer className="d-flex justify-content-between">
                <Button onClick={prevButton} disabled={index === 1}>
                  Previous
                </Button>
                <Button type="submit">
                  {index === totalPagesCount ? "Submit" : "Next"}
                </Button>
              </Card.Footer>
            )}
          </Card>
        </Form>
      </Container>
    </main>
  );
}

export default App;
