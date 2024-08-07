const kg = document.querySelector(".kg");
const m = document.querySelector(".m");
const btn = document.querySelector(".calcular");
const all = document.querySelector(".tudo");
const valor = document.querySelector(".valor");
const msg = document.querySelector(".msg");

btn.addEventListener('click', calc);

function calc() {
    const kilos = parseFloat(kg.value);
    let altura = parseFloat(m.value);

   
    if (altura > 3) { 
        altura = altura / 100;
    }

    if (isNaN(kilos) || isNaN(altura) || kilos <= 0 || altura <= 0) {
        valor.innerHTML = "0";
        msg.innerHTML = "Digite um valor <strong> válido</strong>";
        all.classList.add("all");
        return;
    }

    let calc = (kilos / (altura ** 2));
    calc = calc.toFixed(2);
    valor.innerHTML = `${calc}`;
    all.classList.remove("all");

    if (calc <= 16) {
        msg.innerHTML = "Magreza <strong> GRAVE </strong>";
    } else if (calc > 16 && calc <= 17) {
        msg.innerHTML = "Magreza <strong> MODERADA </strong>";
    } else if (calc > 17 && calc <= 18.5) {
        msg.innerHTML = "Magreza <strong> LEVE </strong>";
    } else if (calc > 18.5 && calc <= 25) {
        msg.innerHTML = "Parabéns, você está <strong> Saudável </strong>";
    } else if (calc > 25 && calc <= 30) {
        msg.innerHTML = "Você está com <strong> Sobrepeso </strong>";
    } else if (calc > 30 && calc <= 35) {
        msg.innerHTML = "Obesidade <strong> GRAU 1 </strong>";
    } else if (calc > 35 && calc <= 40) {
        msg.innerHTML = "Obesidade <strong> GRAU 2</strong>";
    } else if (calc > 40) {
        msg.innerHTML = "<strong> OBESIDADE MÓRBIDA </strong>";
    }
}

document.addEventListener('wheel', (event) => {
    window.scrollBy({
        top: event.deltaY,
        behavior: 'smooth'
    });
});

let startY;
let scrollSpeedMultiplier = 0.7;

document.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY;
});

document.addEventListener('touchmove', (event) => {
    const currentY = event.touches[0].clientY;
    const deltaY = startY - currentY;
    window.scrollBy({
        top: deltaY * scrollSpeedMultiplier,
        left: 0,
        behavior: 'auto'
    });
    startY = currentY;
});
