let doc = document;
let img = doc.querySelector("img");
let block = doc.querySelector(".img");

let forms = doc.forms.forma;
let chek = forms.elements.radio;

console.log(chek);

for (let item of chek) {
  item.onclick = () => {
    let chek1 = chek[1].checked;
    let chek2 = chek[2].checked;
    if (chek2 == true) {
      block.style.opacity = 0;
      let set = setInterval(() => {
        block.style.transition = ".5s";
        block.style.opacity = 1;
        img.src = "./img/3v1.jpg";
      }, 200);
      setTimeout(() => {
        clearInterval(set);
      }, 230);
    } else if (chek1 == true) {
      block.style.opacity = 0;
      let set = setInterval(() => {
        block.style.transition = ".5s";
        block.style.opacity = 1;
        img.src = "./img/white.jpg";
      }, 200);
      setTimeout(() => {
        clearInterval(set);
      }, 230);
    } else {
      block.style.opacity = 0;
      let set = setInterval(() => {
        block.style.transition = ".5s";
        block.style.opacity = 1;
        img.src = "./img/black.jpg";
      }, 200);
      setTimeout(() => {
        clearInterval(set);
      }, 230);
    }
  };
}
