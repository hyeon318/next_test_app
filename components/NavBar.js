import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      {/* <a href="/">Home</a> 를 쓰는경우 페이지 자체라 reload 되어 spa 적으로 동작하지 않는다 => Link tag 를 사용할 것*/}
      {/* Link tag는 client side 의 navigation 을 생성해줌 */}
      <img src="/vercel.svg" alt="Landscape Picture" /> {/* public/* 경로여서 */}
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        Image {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }

      `}</style>
    </nav>
  );
};

export default NavBar;