const qnaSection = document.getElementById("qna");
const qBox = document.querySelector(".qBox");
const aBox = document.querySelector(".aBox");
const answer = document.querySelectorAll(".answer");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let qIdx = 0;

function showQuestion(qIdx) {
    //console.log(qnaListss[qIdx])
    qBox.innerText = qnaListss[qIdx].q;
    const ans = qnaListss[qIdx].a;
    for(let i = 0; i < ans.length; i++){
        answer[i].innerText = ans[i].answer
    }
}

function onPrev() {
    if (qIdx > 0) {
        qIdx -= 1
        showQuestion(qIdx);
    }
}

function onNext() {
    if (qIdx < 9) {
        qIdx += 1
        showQuestion(qIdx);
    }
}

prevBtn.addEventListener("click", onPrev);
nextBtn.addEventListener("click", onNext);

showQuestion(qIdx);