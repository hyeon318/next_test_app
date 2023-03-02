import { useRouter } from 'next/router';

export default function Detail(){
  const router = useRouter();

  return(
    <div>
      <h4>
        {router.query.title || "Loading . . ." }
        {/* router.query.title 은 오직 main 에서 detail 로 진입할떄만 set 된다. => 자주 쓰는 방식은 아닐거같음;; */}
      </h4>
    </div>
  )
}