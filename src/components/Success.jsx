import React from "react";
import { Alert } from "reactstrap";

const Success = () => {
  return (
    <div className="success-container d-flex align-items-center justify-content-center vh-100">
      <Alert color="success" className="text-center">
        <h1>Giriş Başarılı!</h1>
        <p>Tebrikler, başarıyla giriş yaptınız.</p>
      </Alert>
    </div>
  );
};

export default Success;
