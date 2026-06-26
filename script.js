//======================================================
// CalcSIVElvas
// Script Principal
//======================================================

let medicamentoAtual = "";
let paginaAnterior = "";

//======================================================
// Esconder páginas
//======================================================

function esconderPaginas() {

    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("adulto").style.display = "none";
    document.getElementById("pediatria").style.display = "none";
    document.getElementById("paginaMedicamento").style.display = "none";

}

//======================================================
// Menu Inicial
//======================================================

function voltarInicio() {

    esconderPaginas();

    document.getElementById("menuPrincipal").style.display = "block";

}

//======================================================
// Adulto
//======================================================

function mostrarAdulto() {

    paginaAnterior = "adulto";

    esconderPaginas();

    document.getElementById("adulto").style.display = "block";

}

//======================================================
// Pediatria
//======================================================

function mostrarPediatria() {

    paginaAnterior = "pediatria";

    esconderPaginas();

    document.getElementById("pediatria").style.display = "block";

}

//======================================================
// Voltar
//======================================================

function voltarAtras() {

    esconderPaginas();

    if(paginaAnterior=="adulto"){

        document.getElementById("adulto").style.display="block";

    }

    else{

        document.getElementById("pediatria").style.display="block";

    }

}

//======================================================
// Abrir Medicamento
//======================================================

function abrirMedicamento(codigo){

    medicamentoAtual = codigo;

    esconderPaginas();

    document.getElementById("paginaMedicamento").style.display="block";

    let med=medicamentos[codigo];

    document.getElementById("tituloMedicamento").innerHTML=med.nome;

    document.getElementById("peso").value="";

    document.getElementById("resultado").innerHTML="";

    let via=document.getElementById("via");

    via.innerHTML="";

    for(let v in med.vias){

        let option=document.createElement("option");

        option.value=v;

        option.text=v;

        via.appendChild(option);

    }

}

//======================================================
// Início
//======================================================

window.onload=function(){

    voltarInicio();

}
//======================================================
// CALCULAR DOSE
//======================================================

function calcularDose(){

    let peso = parseFloat(document.getElementById("peso").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    let med = medicamentos[medicamentoAtual];

    let via = document.getElementById("via").value;

    let dosePorKg = med.vias[via];

    let dose = peso * dosePorKg;

    // Aplicar dose máxima
    if(med.doseMaxima && dose > med.doseMaxima){

        dose = med.doseMaxima;

    }

    // Calcular volume
    let volume = 0;

    if(med.concentracao > 0){

        volume = dose / med.concentracao;

    }

    mostrarResultado(
        med,
        peso,
        via,
        dose,
        volume
    );

}

//======================================================
// MOSTRAR RESULTADO
//======================================================

function mostrarResultado(med,peso,via,dose,volume){

    document.getElementById("resultado").innerHTML = `

        <h3>${med.nome}</h3>

        <hr>

        <p><strong>Peso:</strong> ${peso} kg</p>

        <p><strong>Via:</strong> ${via}</p>

        <p><strong>Dose:</strong> ${dose.toFixed(2)} ${med.unidade}</p>

        <p><strong>Volume:</strong> ${volume.toFixed(2)} ml</p>

        <hr>

        <p><strong>Apresentação</strong></p>

        <p>${med.apresentacao}</p>

        <br>

        <p><strong>Diluição</strong></p>

        <p>${med.diluicao}</p>

    `;

}
//======================================================
// CALCULAR DOSE
//======================================================

function calcularDose(){

    let peso = parseFloat(document.getElementById("peso").value);

    if(isNaN(peso) || peso <= 0){

        alert("Introduza um peso válido.");

        return;

    }

    let med = medicamentos[medicamentoAtual];

    let via = document.getElementById("via").value;

    let dosePorKg = med.vias[via];

    let dose = peso * dosePorKg;

    // Aplicar dose máxima
    if(med.doseMaxima && dose > med.doseMaxima){

        dose = med.doseMaxima;

    }

    // Calcular volume
    let volume = 0;

    if(med.concentracao > 0){

        volume = dose / med.concentracao;

    }

    mostrarResultado(
        med,
        peso,
        via,
        dose,
        volume
    );

}

//======================================================
// MOSTRAR RESULTADO
//======================================================

function mostrarResultado(med,peso,via,dose,volume){

    document.getElementById("resultado").innerHTML = `

        <h3>${med.nome}</h3>

        <hr>

        <p><strong>Peso:</strong> ${peso} kg</p>

        <p><strong>Via:</strong> ${via}</p>

        <p><strong>Dose:</strong> ${dose.toFixed(2)} ${med.unidade}</p>

        <p><strong>Volume:</strong> ${volume.toFixed(2)} ml</p>

        <hr>

        <p><strong>Apresentação</strong></p>

        <p>${med.apresentacao}</p>

        <br>

        <p><strong>Diluição</strong></p>

        <p>${med.diluicao}</p>

    `;

}
