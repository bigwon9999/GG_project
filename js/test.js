let $button = document.querySelector("#stBtn");
//html에서 id가 stBtn인 태그를 $button 변수에 연결
let $qBox = document.querySelector(".qBox");
//class가 .qBox인 태그를 $qBox 변수에 연결
let $ansA = document.querySelector("#ansA");
let $ansB = document.querySelector("#ansB");
let $ansC = document.querySelector("#ansC");
let $title = document.querySelector("#title");
let $prev = document.querySelector("#prev");
let $next = document.querySelector("#next");
let qIdx = 0;
function begin(){
const onClick = () => {
  console.log("테스트 시작");
  $title.textContent = ' 테스트가 시작되었습니다.';
}
$button.addEventListener("click", onClick);
//$button 에 eventListener을 추가해서 click 이벤트 발생 시 onClick함수 실행
//이 때 함수는 es6문법인 화살표함수(익명함수)로 만듦

goNext(qIdx);
}
function goPrev(qIdx){
  for(var el of qnaListss){
    $qBox.innerHTML = qnaListss[el];
    if(el === 0){
      alert("안됩니다");
      el = 0;
    }
  }
  $prev.addEventListener("click",goPrev);
}
function goNext(qIdx){
  console.log(qIdx);
  console.log(qnaListss[qIdx].q);
  $qBox.innerHTML = qnaListss[qIdx].q;
  for(let i in qnaListss[qIdx].a){
    addAnswer(qnaListss[qIdx].a[i].answer, qIdx);
  }
  $next.addEventListener("click",goNext(qidx++));
}
