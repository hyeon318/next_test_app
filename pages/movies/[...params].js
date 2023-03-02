import { useRouter } from 'next/router';
import Seo from '../Seo';

export default function Detail({params}){
  const router = useRouter();
  // router.query.parms 는 url 로 바로 접근했을때는 데이터가 없어 에러가 발생하지만
  // 이후 없을때 []로 세팅하고 rendering 이 완료 되면 이후 router에 값이 setting 되어 title이 화면에 노출되게 된다.

  // const [title, id] = router.query.params || [];
  const [title,id] = params || []
  console.log(router);
  return(
    <div>
      <Seo title="Detail"/>
      <h4>
        {title || "Loading . . ." }
        {/* router.query.title 은 오직 main 에서 detail 로 진입할떄만 set 된다. => 자주 쓰는 방식은 아닐거같음;; */}
      </h4>
    </div>
  )
}

export function getServerSideProps({params:{params}}){
  // just get url 
  console.log(params);
  return{
    props: {params}
  }
}