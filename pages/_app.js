import NavBar from '@/components/NavBar';
import '../styles/globals.css'; // custom app 에서만 import 가 가능함

export default function App({Component, pageProps}){
  return <>
      <NavBar/>
      <Component {...pageProps}></Component>
      <span>hello</span>
      <style jsx global>{`a{color:white}`}</style>
    </>
}
// next js 는 url 페이지를 호출할때 해당 component들을 _app 의 Component의 매개변수로 넣어 해당 함수를 실행 시킨다.
// 현재 <Component >(중략)</Component> 에 있는 부분을 div 로 대체하면, about 페이지를 호출할때 
// about.js 내부의 component를 변수로 받기만 할 뿐 화면에 노출하지 않는다.
// 즉 param : Component 는 호출한 페이지의 내부 components를 의미한다.
//   param : pageProps 는 호출한 페이지의 props를 의미하는 거같음
// navigation 요소를 render 하면 navbar의 중복 코드를 줄일 수 있다.