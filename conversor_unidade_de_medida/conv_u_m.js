function QuilometrosParaMetros(){
    var quilometros = document.getElementById('valor').value;
    var metros = quilometros * 1000;

    alert(metros);

}

function QuilometrosParaCentimetros(){
    var quilometros = document.getElementById('valor').value;
    var centímetros = quilometros * 100000;

    alert(centímetros);

}

function MetrosParaQuilometros(){
    var metros = document.getElementById('valor').value;
    var quilometros = metros / 1000;

    alert(quilometros);
}

function MetrosParaCentimetros(){
    var metros = document.getElementById('valor').value;
    var centimetros = metros * 100;

    alert(centimetros);
    
}function CentimetrosParaQuilometros(){
    var centimetros = document.getElementById('valor').value;
    var quilometros = centimetros / 100000;

    alert(quilometros);
    
}

function CentimetrosParaMetros(){
    var centimetros = document.getElementById('valor').value;
    var metros = centimetros / 100;

    alert(metros);
    
}

function KgParaG(){
    var quilogramas = document.getElementById('valor').value;
    var gramas = quilogramas * 1000;

    alert(gramas);

}

function KgParaT(){
    var quilogramas = document.getElementById('valor').value;
    var toneladas = quilogramas / 1000;

    alert(toneladas);

}
