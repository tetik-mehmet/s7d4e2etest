import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    setIsValidEmail(emailRegex.test(emailValue));
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsValidPassword(strongPasswordRegex.test(passwordValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && isValidPassword && acceptedTerms) {
      navigate("/success");
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <div className="login-form">
        <h1 className="text-center">Login</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && email && (
              <Alert color="danger">Geçerli bir email giriniz.</Alert>
            )}
          </FormGroup>

          <FormGroup>
            <Label for="password">Şifre:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {!isValidPassword && password && (
              <Alert color="danger">
                Şifre en az 8 karakter, bir büyük harf, bir küçük harf, bir sayı
                ve bir özel karakter içermelidir.
              </Alert>
            )}
          </FormGroup>

          <FormGroup>
            <Label>
              <Input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              Şartları kabul ediyorum.
            </Label>
            {!acceptedTerms && (
              <Alert color="warning">Şartları kabul etmelisiniz.</Alert>
            )}
          </FormGroup>

          <Button
            color="primary"
            type="submit"
            disabled={!isValidEmail || !isValidPassword || !acceptedTerms}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
