import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  // 회원가입 버튼 클릭 시 실행되는 함수
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const userCredential = createUserWithEmailAndPassword(auth, email, password);
      console.log('회원가입 성공 : ', userCredential);
    } catch (error) {
      console.error('회원가입 실패 : ', error);
    }
  }

  // 로그인 버튼 클릭 시 실행되는 함수
  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('로그인 성공', userCredential);
    } catch (error) {
      console.error('로그인 실패 : ', error);
    }
  }

  // 로그아웃 버튼 클릭 시 실행되는 함수
  const handleLogout = async (event) => {
    event.preventDefault();
    await signOut(auth);
    console.log('로그아웃 성공');
  }

  const loginUser = (event) => {
    event.preventDefault();
    console.log('로그인 버튼 클릭');
  }

  return (
    <div>
      <form>
        <div>
          <label>이메일 : </label>
          <input type="email" value={email} name="email" onChange={onChange} required />
        </div>

        <div>
          <label>비밀번호 : </label>
          <input type="password" value={password} name="password" onChange={onChange} required />
        </div>

        <button onClick={handleSignup}>회원가입</button>
        <button onClick={handleSignin}>로그인</button>
        <button onClick={handleLogout}>로그아웃</button>
      </form>

      <h1 className='text-center text-3xl font-bold'>이메일로 로그인/회원가입 하기</h1>
      <Container className="flex items-center justify-center">
        <Form className='w-96 m-5' onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3 w-96" controlId="formBasicEmail">
            <Form.Label>이메일(아이디)</Form.Label>
            <Form.Control type="email" value={email} name="email"placeholder="abc@email.com" />
          </Form.Group>

          <Form.Group className="mb-3 w-96" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" value={password} name="password" placeholder="8자 이상의 비밀번호" />
          </Form.Group>

          <Button className='w-96 mt-5' variant="dark" type="submit">로그인</Button>
          <Button className='w-96 mt-2.5' variant="secondary" type="submit">이메일로 가입하기</Button>
        </Form>
      </Container>
    </div>
  )
}

export default Login