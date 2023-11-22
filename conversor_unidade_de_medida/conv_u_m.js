function QuilometrosParaMetros(){
    var quilometros = document.getElementById('valor').value;
    var metros = quilometros * 1000;

    document.getElementById('resultado').value = metros;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de quilômetros por 1000"
}

function QuilometrosParaCentimetros(){
    var quilometros = document.getElementById('valor').value;
    var centímetros = quilometros * 100000;

    document.getElementById('resultado').value = centímetros;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de quilômetros por 100000"
}

function MetrosParaQuilometros(){
    var metros = document.getElementById('valor').value;
    var quilometros = metros / 1000;

    document.getElementById('resultado').value = quilometros;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de metros por 1000"
}

function MetrosParaCentimetros(){
    var metros = document.getElementById('valor').value;
    var centimetros = metros * 100;

    document.getElementById('resultado').value = centimetros;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de metros por 100"
}

function CentimetrosParaQuilometros(){
    var centimetros = document.getElementById('valor').value;
    var quilometros = centimetros / 100000;

    document.getElementById('resultado').value = quilometros;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de centímetros por 100000"
}

function CentimetrosParaMetros(){
    var centimetros = document.getElementById('valor').value;
    var metros = centimetros / 100;

    document.getElementById('resultado').value = metros;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de centímetros por 100"
}

function KgParaG(){
    var quilogramas = document.getElementById('valor').value;
    var gramas = quilogramas * 1000;

    document.getElementById('resultado').value = gramas;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de quilogramas por 1000"
}

function KgParaT(){
    var quilogramas = document.getElementById('valor').value;
    var toneladas = quilogramas / 1000;

    document.getElementById('resultado').value = toneladas;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de quilogramas por 1000"
}

function GParaKg(){
    var gramas = document.getElementById('valor').value;
    var quilogramas = gramas / 1000;

    document.getElementById('resultado').value = quilogramas;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de gramas por 1000"
}

function GParaT(){
    var gramas = document.getElementById('valor').value;
    var toneladas = gramas / 1000000;

    document.getElementById('resultado').value = toneladas;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de gramas por 1000000"
}

function TParaKg(){
    var toneladas = document.getElementById('valor').value;
    var quilogramas = toneladas * 1000;

    document.getElementById('resultado').value = quilogramas;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de toneladas por 1000"
}

function TParaG(){
    var toneladas = document.getElementById('valor').value;
    var gramas = toneladas * 1000000;

    document.getElementById('resultado').value = gramas;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de toneladas por 1000000"
}

function CelParaFah(){
    var celsius = document.getElementById('valor').value;
    var fahrenheit = (celsius * 9/5) + 32;

    document.getElementById('resultado').value = fahrenheit;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de celcius por 9/5 e adicione 32"
}

function CelParaKel(){
    var celsius = document.getElementById('valor').value;
    var kelvin = (celsius * 1) + 273.15;

    document.getElementById('resultado').value = kelvin;
    document.getElementById('gabigordo').innerHTML = "Adicione 273,15 no valor de celsius"
}

function FahParaCel(){
    var fahrenheit = document.getElementById('valor').value;
    var celsius = (fahrenheit - 32) * 5/9;

    document.getElementById('resultado').value = celsius;
    document.getElementById('gabigordo').innerHTML = "Diminua o valor de fahrenheit por 32 e multiplique o resultado por 5/9"
}

function FahParaKel(){
    var fahrenheit = document.getElementById('valor').value;
    var kelvin = (fahrenheit - 32) * 5/9 + 273.15;

    document.getElementById('resultado').value = kelvin;
    document.getElementById('gabigordo').innerHTML = "Diminua o valor de fahrenheit por 32, multiplique o resultado por 5/9 e adicione 273,15"
}

function KelParaCel(){
    var kelvin = document.getElementById('valor').value;
    var celsius = kelvin - 273.15;

    document.getElementById('resultado').value = celsius;
    document.getElementById('gabigordo').innerHTML = "Diminua 273,15 no valor de kelvin"
}

function KelParaFah(){
    var kelvin = document.getElementById('valor').value;
    var fahrenheit = (kelvin - 273.15) * 9/5 + 32;

    document.getElementById('resultado').value = fahrenheit;
    document.getElementById('gabigordo').innerHTML = "Diminua 273,15 no valor de kelvin, multiplique o resultado por 9/5 e adicione 32"
}

function SegParaMin(){
    var segundos = document.getElementById('valor').value;
    var minutos = segundos / 60;

    document.getElementById('resultado').value = minutos;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de segundos por 60"
}

function SegParaH(){
    var segundos = document.getElementById('valor').value;
    var horas = segundos / 3600;

    document.getElementById('resultado').value = horas;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de segundos por 3600"
}

function SegParaDia(){
    var segundos = document.getElementById('valor').value;
    var dias = segundos / 86400;

    document.getElementById('resultado').value = dias;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de segundos por 86400"
}

function MinParaSeg(){
    var minutos = document.getElementById('valor').value;
    var segundos = minutos * 60;

    document.getElementById('resultado').value = segundos;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de minutos por 60"
}

function MinParaH(){
    var minutos = document.getElementById('valor').value;
    var horas = minutos / 60;

    document.getElementById('resultado').value = horas;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de minutos por 60"
}

function MinParaDia(){
    var minutos = document.getElementById('valor').value;
    var dias = minutos / 1440;

    document.getElementById('resultado').value = dias;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de minutos por 1440"
}

function HParaSeg(){
    var horas = document.getElementById('valor').value;
    var segundos = horas * 3600;

    document.getElementById('resultado').value = segundos;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de horas por 3600"
}

function HParaMin(){
    var horas = document.getElementById('valor').value;
    var minutos = horas * 60;

    document.getElementById('resultado').value = minutos;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de horas por 60"
}

function HParaDia(){
    var horas = document.getElementById('valor').value;
    var dias = horas / 24;

    document.getElementById('resultado').value = dias;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de horas por 24"
}

function DiaParaSeg(){
    var dias = document.getElementById('valor').value;
    var segundos = dias * 86400;

    document.getElementById('resultado').value = segundos;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de dias por 86400"
}

function DiaParaMin(){
    var dias = document.getElementById('valor').value;
    var minutos = dias * 1440;

    document.getElementById('resultado').value = minutos;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de dias por 1440"
}

function DiaParaH(){
    var dias = document.getElementById('valor').value;
    var horas = dias * 24;

    document.getElementById('resultado').value = horas;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de dias por 24"
}

function KmHParaMS(){
    var quilometrosporhora = document.getElementById('valor').value;
    var metrosporsegundo = quilometrosporhora / 3.6;

    document.getElementById('resultado').value = metrosporsegundo;
    document.getElementById('gabigordo').innerHTML = "Divida o valor de Km/H por 3,6"
}

function MSParaKmH(){
    var metrosporsegundo = document.getElementById('valor').value;
    var quilometrosporhora = metrosporsegundo * 3.6;

    document.getElementById('resultado').value = quilometrosporhora;
    document.getElementById('gabigordo').innerHTML = "Multiplique o valor de m/s por 3,6"
}

function Calculo(){
    var calculo = document.getElementById('botafogo').value;
    var ladoA = document.getElementById('gluposo').value;
    var ladoB = document.getElementById('lodoso').value;
    
    var operacao = calculo + ladoA + ladoB;
    switch (operacao) {
        case 'COMAQBC':
            QuilometrosParaCentimetros();
            break;
        case 'COMAQBM':
            QuilometrosParaMetros();
            break;
        case 'COMAMBC':
            MetrosParaCentimetros();
            break;
        case 'COMAMBQ':
            MetrosParaQuilometros();
            break;
        case 'COMACBQ':
            CentimetrosParaQuilometros();
            break;
        case 'COMACBM':
            CentimetrosParaMetros();
            break;
        case 'MASBTBKg':
            TParaKg();
            break;
        case 'MASBTBG':
            TParaG();
            break;
        case 'MASBKgBG':
            KgParaG();
            break;
        case 'MASBKgBT':
            KgParaT();
            break;
        case 'MASBGBKg':
            GParaKg();
            break;
        case 'MASBGBT':
            GParaT();
            break;
        case 'TETBCelBFah':
            CelParaFah();
            break;
        case 'TETBCelBKel':
            CelParaKel();
            break;
        case 'TETBFahBCel':
            FahParaCel();
            break;
        case 'TETBFahBKel':
            FahParaKel();
            break;
        case 'TETBKelBCel':
            KelParaCel();
            break;
        case 'TETBKelBFah':
            KelParaFah();
            break;
        case 'TEMBDBH':
            DiaParaH();
            break;
        case 'TEMBDBMin':
            DiaParaMin();
            break;
        case 'TEMBDBSeg':
            DiaParaSeg();
            break;
        case 'TEMBHBD':
            HParaDia();
            break;
        case 'TEMBHBMin':
            HParaMin();
            break;
        case 'TEMBHBSeg':
            HParaSeg();
            break;
        case 'TEMBMinBD':
            MinParaDia();
            break;
        case 'TEMBMinBH':
            MinParaH();
            break;
        case 'TEMBMinBSeg':
            MinParaSeg();
            break;
        case 'TEMBSegBD':
            SegParaDia();
            break;
        case 'TEMBSegBH':
            SegParaH();
            break;
        case 'TEMBSegBMin':
            SegParaMin();
            break;
        case 'VELBKmHBMS':
            KmHParaMS();
            break;
        case 'VELBMSBKmH':
            MSParaKmH();
            break;
        default:
            break;
    }

}

function SelecionarMedida(){
    medida = document.forms[0].botafogo.value;

    switch (medida) {
        case 'COM':
            var opcoes = '<option value="BQ">Quilômetro</option><option value="BM">Metro</option><option value="BC">Centímetro</option>';
            break;
        case 'MAS':
            var opcoes = '<option value="BT">Tonelada</option><option value="BKg">Quilograma</option><option value="BG">Grama</option>';
            break;
        case 'TET':
            var opcoes = '<option value="BCel">Celsius</option><option value="BFah">Fahrenheit</option><option value="BKel">Kelvin</option>';
            break;
        case 'TEM':
            var opcoes = '<option value="BD">Dia</option><option value="BH">Hora</option><option value="BMin">Minuto</option><option value="BSeg">Segundo</option>';
            break;
        case 'VEL':
            var opcoes = '<option value="BKmH">Quilômetro por hora</option><option value="BMS">Metro por hora</option>';
            break;
        default:
            break;
    }

    document.getElementById("gluposo").innerHTML = opcoes;
    document.getElementById("lodoso").innerHTML = opcoes;

}