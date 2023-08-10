const screen1 = document.querySelector(".screen1");
const screen3 = document.querySelector(".screen3");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
randon = Math.round(Math.random() * 10);

btnTry.addEventListener("click", handleClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", keyEnter)
btnTry.addEventListener("keydown", handleClick)
function handleClick() {
  toggleScreen();
  switch (randon) {
    case 1:
      randon = 1;
      document.querySelector(".screen3 p").innerText =
        "Se alguém está tão cansado que não possa te dar um sorriso deixa-lhe o teu";
      break;
    case 2:
      randon = 2;
      document.querySelector(".screen3 p").innerText =
        "Não importa que você vá devagar, contanto que você não pare.";
      break;
    case 3:
      randon = 3;
      document.querySelector(".screen3 p").innerText =
        "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
      break;
    case 4:
      randon = 4;
      document.querySelector(".screen3 p").innerText =
        "Comece onde você está, use o que você tem e faça o que você pode.";
      break;
    case 5:
      randon = 5;
      document.querySelector(".screen3 p").innerText =
        "A vida é 10% o que acontece a você e 90% como você reage a isso.";
      break;
    case 6:
      randon = 6;
      document.querySelector(".screen3 p").innerText =
        "A felicidade não é algo pronto. Ela é feita das suas próprias ações.";
      break;
    case 7:
      randon = 7;
      document.querySelector(".screen3 p").innerText =
        "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.";
      break;
    case 8:
      randon = 8;
      document.querySelector(".screen3 p").innerText =
        "Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.";
      break;
    case 9:
      randon = 9;
      document.querySelector(".screen3 p").innerText =
        "Cada segundo é tempo para mudar tudo para sempre.";
      break;
    case 10:
      randon = 10;
      document.querySelector(".screen3 p").innerText =
        "Deus é bom o Tempo todo , E o tempo todo Deus é bom";
      break;
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen3.classList.toggle("hide");
}
function handleResetClick() {
  toggleScreen();
  randon = Math.round(Math.random() * 10);
}
function keyEnter (e){
    if(e.key == "Enter" && screen1.classList.contains("hide")){
        handleResetClick()
    
}else if(e.key == "Enter" && screen3.classList.contains("hide")){
       
    handleClick()

}
}

