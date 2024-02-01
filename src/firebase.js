// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Ijc9g93u3LLOqd3jTIhBvY3x5XlUqIo",
  authDomain: "showpping-f5d37.firebaseapp.com",
  projectId: "showpping-f5d37",
  storageBucket: "showpping-f5d37.appspot.com",
  messagingSenderId: "691191822317",
  appId: "1:691191822317:web:cfd5d932750bf7f8dad9e4",
};
// 프로젝트 이름에 따라 api 키값을 달리 제공하기 때문에 늘 확인.
// firebase 공식문서도 있으니 참고하자.

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
