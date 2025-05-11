
// document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const inputs = document.querySelectorAll(".formulario input");
//     const textarea = document.querySelector(".mensagem");
//     const mensagensErro = document.querySelectorAll(".formulario a");

//     let valido = true;

//     inputs.forEach((input, index) => {
//         if (input.value.trim() === "") {
//             input.style.border = "2px solid red"
//             mensagensErro[index].style.display = "block";
//             valido = false;
//         } else {
//             input.style.border = "2px solid green";
//             mensagensErro[index].style.display = "none";
//         }
//     });


//     const msgIndex = inputs.length;
//     if (textarea.value.trim() === "") {
//         textarea.style.border = "2px solid red";
//         mensagensErro[msgIndex].style.display = "block";
//         valido = false;
//     } else {
//         textarea.style.border = "2px solid green";
//         mensagensErro[msgIndex].style.display = "none";
//     }


// });

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll(".formulario input");
    const textarea = document.querySelector(".mensagem");
    const mensagensErro = document.querySelectorAll(".formulario a");

    let valido = true;

    inputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            input.style.border = "2px solid red";
            mensagensErro[index].textContent = "Campo obrigatório";
            mensagensErro[index].style.color = "red";
            mensagensErro[index].style.display = "block";
            valido = false;
        } else {
            input.style.border = "2px solid green";
            mensagensErro[index].textContent = "";
            mensagensErro[index].style.display = "none";
        }
    });

    const msgIndex = inputs.length;
    if (textarea.value.trim() === "") {
        textarea.style.border = "2px solid red";
        mensagensErro[msgIndex].textContent = "Campo obrigatório";
        mensagensErro[msgIndex].style.color = "red";
        mensagensErro[msgIndex].style.display = "block";
        valido = false;
    } else {
        textarea.style.border = "2px solid green";
        mensagensErro[msgIndex].textContent = "";
        mensagensErro[msgIndex].style.display = "none";
    }
});

