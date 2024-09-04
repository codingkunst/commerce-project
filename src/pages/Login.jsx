import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    props.setAuthenticate(true);
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        이메일로 로그인/회원가입 하기
      </h1>
      <Container className="flex items-center justify-center">
        <Form className="w-96 m-5" onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3 w-96" controlId="formBasicEmail">
            <Form.Label>이메일(아이디)</Form.Label>
            <Form.Control type="email" placeholder="abc@email.com" />
          </Form.Group>

          <Form.Group className="mb-3 w-96" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="8자 이상의 비밀번호" />
          </Form.Group>

          <Button className="w-96 mt-5" variant="dark" type="submit">
            로그인
          </Button>
          <Button className="w-96 mt-2.5" variant="secondary">
            <Link to="/">이메일로 가입하기</Link>
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
