import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function NikeNav() {
  const navi = useNavigate();

  const initUser = localStorage.getItem("UserData")
    ? JSON.parse(localStorage.getItem("UserData"))
    : {};

  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [userDb, setUserDb] = useState({});

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserDb(result.user);
        localStorage.setItem("UserData", JSON.stringify(result.user));
        // 제이슨 형식에서 문자열로 넣어달라.
      })
      .catch((error) => alert(error));
  };

  // 로그인 상태 확인.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        console.log("로그인 되어있습니다.", localStorage);
        navi("/login");
      } else {
        console.log("로그아웃");
        navi("/");
      }
    });
  }, [auth]); // [auth] ---> 상태유지를 위함???

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserDb({});
        localStorage.removeItem("UserData");
        navi("/");
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navi("/")}>나이키</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navi("/men")}>Men</Nav.Link>
            <Nav.Link onClick={() => navi("/women")}>Women</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {localStorage.length == 0 ? (
              <Nav.Link onClick={handleAuth}>Login</Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogOut}>
                <Spinner animation="grow" size="sm" />
                <Navbar.Text className="ms-2">Logout</Navbar.Text>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NikeNav;

// 다음시간은 배포.
