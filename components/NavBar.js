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
      <Link href="/" legacyBehavior >
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior >
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`nav{background-color:tomato;} a{text-decoration: none;} .active{color:yellow;}`}</style>
    </nav>
  );
};

export default NavBar;