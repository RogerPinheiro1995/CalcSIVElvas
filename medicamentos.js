const medicamentos = {

    //=====================================================
    // ADULTO
    //=====================================================

    cetaminaAdulto: {

        nome: "Cetamina",

        apresentacao: "500 mg / 10 ml",

        diluicao: "1 ml Cetamina + 19 ml NaCl 0,9%",

        concentracao: 25,

        unidade: "mg",

        vias: {

            EV: 0.25

        }

    },

    fentanilAdulto: {

        nome: "Fentanil",

        apresentacao: "0,25 mg / 5 ml",

        diluicao: "5 ml Fentanil + 5 ml NaCl 0,9%",

        concentracao: 25,

        unidade: "mcg",

        doseMaxima: 50,

        vias: {

            EV: 1

        }

    },

    //=====================================================
    // ANALGESIA PEDIATRIA
    //=====================================================

    paracetamol: {

        nome: "Paracetamol",

        apresentacao: "Paracetamol EV",

        diluicao: "Sem diluição",

        concentracao: 10,

        unidade: "mg",

        vias: {

            EV: 15

        }

    },

    cetaminaPed: {

        nome: "Cetamina",

        apresentacao: "500 mg / 10 ml",

        diluicao: "1 ml Cetamina + 19 ml NaCl 0,9%",

        concentracao: 2.5,

        unidade: "mg",

        vias: {

            EV: 0.25,

            IO: 0.25,

            IM: 0.5,

            IN: 0.5

        }

    },

    fentanilPed: {

        nome: "Fentanil",

        apresentacao: "0,05 mg / 1 ml",

        diluicao: "5 ml Fentanil + 10 ml NaCl 0,9%",

        concentracao: 16.67,

        unidade: "mcg",

        doseMaxima: 50,

        vias: {

            EV: 1,

            IN: 1.5

        }

    },

    morfina: {

        nome: "Morfina",

        apresentacao: "10 mg / 1 ml",

        diluicao: "1 ml Morfina + 9 ml NaCl 0,9%",

        concentracao: 1,

        unidade: "mg",

        vias: {

            EV: 0.05,

            IO: 0.05

        }

    },
const medicamentos = {

    //=====================================================
    // ADULTO
    //=====================================================

    cetaminaAdulto: {

        nome: "Cetamina",

        apresentacao: "500 mg / 10 ml",

        diluicao: "1 ml Cetamina + 19 ml NaCl 0,9%",

        concentracao: 25,

        unidade: "mg",

        vias: {

            EV: 0.25

        }

    },

    fentanilAdulto: {

        nome: "Fentanil",

        apresentacao: "0,25 mg / 5 ml",

        diluicao: "5 ml Fentanil + 5 ml NaCl 0,9%",

        concentracao: 25,

        unidade: "mcg",

        doseMaxima: 50,

        vias: {

            EV: 1

        }

    },

    //=====================================================
    // ANALGESIA PEDIATRIA
    //=====================================================

    paracetamol: {

        nome: "Paracetamol",

        apresentacao: "Paracetamol EV",

        diluicao: "Sem diluição",

        concentracao: 10,

        unidade: "mg",

        vias: {

            EV: 15

        }

    },

    cetaminaPed: {

        nome: "Cetamina",

        apresentacao: "500 mg / 10 ml",

        diluicao: "1 ml Cetamina + 19 ml NaCl 0,9%",

        concentracao: 2.5,

        unidade: "mg",

        vias: {

            EV: 0.25,

            IO: 0.25,

            IM: 0.5,

            IN: 0.5

        }

    },

    fentanilPed: {

        nome: "Fentanil",

        apresentacao: "0,05 mg / 1 ml",

        diluicao: "5 ml Fentanil + 10 ml NaCl 0,9%",

        concentracao: 16.67,

        unidade: "mcg",

        doseMaxima: 50,

        vias: {

            EV: 1,

            IN: 1.5

        }

    },

    morfina: {

        nome: "Morfina",

        apresentacao: "10 mg / 1 ml",

        diluicao: "1 ml Morfina + 9 ml NaCl 0,9%",

        concentracao: 1,

        unidade: "mg",

        vias: {

            EV: 0.05,

            IO: 0.05

        }

    },
    //=====================================================
    // SEDAÇÃO
    //=====================================================

    midazolamAgitacao: {

        nome: "Midazolam",

        apresentacao: "15 mg / 3 ml",

        diluicao: "3 ml Midazolam + 12 ml NaCl 0,9%",

        concentracao: 1,

        unidade: "mg",

        doseMaxima: 10,

        vias: {

            EV: 0.1,

            IM: 0.2

        }

    },

    midazolamProcedimento: {

        nome: "Midazolam",

        apresentacao: "15 mg / 3 ml",

        diluicao: "3 ml Midazolam + 12 ml NaCl 0,9%",

        concentracao: 1,

        unidade: "mg",

        vias: {

            EV: 0.02,

            IM: 0.05

        }

    },

    midazolamVentilado: {

        nome: "Midazolam",

        apresentacao: "15 mg / 3 ml",

        diluicao: "Sem diluição",

        concentracao: 5,

        unidade: "mg",

        vias: {

            EV: 0.1,

            IO: 0.1

        }

    },

    //=====================================================
    // INTOXICAÇÕES
    //=====================================================

    flumazenilo: {

        nome: "Flumazenilo",

        apresentacao: "0,5 mg / 5 ml",

        diluicao: "5 ml Flumazenilo + 5 ml NaCl 0,9%",

        concentracao: 0.1,

        unidade: "mg",

        doseMaxima: 0.2,

        vias: {

            EV: 0.01

        }

    },

    naloxona: {

        nome: "Naloxona",

        apresentacao: "0,4 mg / 1 ml",

        diluicao: "1 ml Naloxona + 9 ml NaCl 0,9%",

        concentracao: 0.04,

        unidade: "mg",

        doseMaxima: 0.4,

        vias: {

            EV: 0.1

        }

    },

    //=====================================================
    // TRAUMA
    //=====================================================

    acidoTranexamico: {

        nome: "Ácido Tranexâmico",

        apresentacao: "100 mg/ml (5 ml)",

        diluicao: "Administrar em 50 ml NaCl 0,9% EV em 10 min",

        concentracao: 100,

        unidade: "mg",

        doseMaxima: 1000,

        vias: {

            EV: 15

        }

    },
    //====================================================
// ABRIR MEDICAMENTO
//====================================================

function abrirMedicamento(codigo){

    medicamentoAtual = codigo;

    esconderPaginas();

    document.getElementById("paginaMedicamento").style.display = "block";

    let med = medicamentos[codigo];

    document.getElementById("tituloMedicamento").innerHTML = med.nome;

    document.getElementById("peso").value = "";

    document.getElementById("resultado").innerHTML = "";

    let listaVias = document.getElementById("via");

    listaVias.innerHTML = "";

    for(let via in med.vias){

        let option = document.createElement("option");

        option.value = via;

        option.text = via;

        listaVias.appendChild(option);

    }

}
//====================================================
// CALCULAR DOSE
//====================================================

function calcularDose(){

    let peso = parseFloat(document.getElementById("peso").value);

    if(isNaN(peso) || peso<=0){

        alert("Introduza um peso válido.");

        return;

    }

    let med = medicamentos[medicamentoAtual];

    let via = document.getElementById("via").value;

    let dose = peso * med.vias[via];

    if(med.doseMaxima){

        if(dose > med.doseMaxima){

            dose = med.doseMaxima;

        }

    }

    let volume = 0;

    if(med.concentracao){

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
//====================================================
// RESULTADO
//====================================================

function mostrarResultado(med,peso,via,dose,volume){

    document.getElementById("resultado").innerHTML =

    `

    <h3>${med.nome}</h3>

    <hr>

    <p><b>Peso:</b> ${peso} kg</p>

    <p><b>Via:</b> ${via}</p>

    <p><b>Dose:</b> ${dose.toFixed(2)} ${med.unidade}</p>

    <p><b>Volume:</b> ${volume.toFixed(2)} ml</p>

    <hr>

    <p><b>Apresentação</b></p>

    <p>${med.apresentacao}</p>

    <br>

    <p><b>Diluição</b></p>

    <p>${med.diluicao}</p>

    `;

}