import { Link } from "react-router-dom"
import MainPost from "./components/MainPost"
import MainHead from "./components/MainHead";

export default function Main() {
  return (
    <div>
      <MainHead />
      <MainPost />
      <Link to="/post">Todo쓰러가기</Link>
    </div>
  );
}
