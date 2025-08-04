// html #circle을 찾아서 script circle로 저장
const circle = document.querySelector("#circle");
//html article(다수)인 요소를 찾아서 저장
const article = document.querySelectorAll("article");

// article의 전체 갯수만큼 반복을 돌면서 mouseenter, mouserleave이벤트 연결
// article에 css animation속성이 추가되어있어야함
for(let el of article){
    el.addEventListener("mouseenter",e=>{
        // article 에 마우스를 올리면 부모인 #circle의 animation-play-state값을 "paused"로 변경
        circle.style.animationPlayState="paused";
    });

    el.addEventListener("mouseleave",e=>{
        // article 에 마우스를 올리면 부모인 #circle의 animation-play-state값을 "running"로 변경
        circle.style.animationPlayState="running";
    });
}