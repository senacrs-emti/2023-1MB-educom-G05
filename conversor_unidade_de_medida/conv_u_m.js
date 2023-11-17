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

function GParaKg(){
    var gramas = document.getElementById('valor').value;
    var quilogramas = gramas / 1000;

    alert(quilogramas);

}

function GParaT(){
    var gramas = document.getElementById('valor').value;
    var toneladas = gramas / 1000000;

    alert(toneladas);

}

function TParaKg(){
    var toneladas = document.getElementById('valor').value;
    var quilogramas = toneladas * 1000;

    alert(quilogramas);

}

function TParaG(){
    var toneladas = document.getElementById('valor').value;
    var gramas = toneladas * 1000000;

    alert(gramas);

}

function CelParaFah(){
    var celsius = document.getElementById('valor').value;
    var fahrenheit = (celsius * 9/5) + 32;

    alert(fahrenheit);

}

function CelParaKel(){
    var celsius = document.getElementById('valor').value;
    var kelvin = (celsius * 1) + 273.15;

    alert(kelvin);

}

function FahParaCel(){
    var fahrenheit = document.getElementById('valor').value;
    var celsius = (fahrenheit - 32) * 5/9;

    alert(celsius);

}

function FahParaKel(){
    var fahrenheit = document.getElementById('valor').value;
    var kelvin = (fahrenheit - 32) * 5/9 + 273.15;

    alert(kelvin);

}

function KelParaCel(){
    var kelvin = document.getElementById('valor').value;
    var celsius = kelvin - 273.15;

    alert(celsius);

}

function KelParaFah(){
    var kelvin = document.getElementById('valor').value;
    var fahrenheit = (kelvin - 273.15) * 9/5 + 32;

    alert(fahrenheit);

}

function SegParaMin(){
    var segundos = document.getElementById('valor').value;
    var minutos = segundos / 60;

    alert(minutos);

}

function SegParaH(){
    var segundos = document.getElementById('valor').value;
    var horas = segundos / 3600;

    alert(horas);

}

function SegParaDia(){
    var segundos = document.getElementById('valor').value;
    var dias = segundos / 86400;

    alert(dias);

}

function MinParaSeg(){
    var minutos = document.getElementById('valor').value;
    var segundos = minutos * 60;

    alert(segundos);

}

function MinParaH(){
    var minutos = document.getElementById('valor').value;
    var horas = minutos / 60;

    alert(horas);

}

function MinParaDia(){
    var minutos = document.getElementById('valor').value;
    var dias = minutos / 1440;

    alert(dias);

}

function HParaSeg(){
    var horas = document.getElementById('valor').value;
    var segundos = horas * 3600;

    alert(segundos);

}

function HParaMin(){
    var horas = document.getElementById('valor').value;
    var minutos = horas * 60;

    alert(minutos);

}

function HParaDia(){
    var horas = document.getElementById('valor').value;
    var dias = horas / 24;

    alert(dias);

}

function DiaParaSeg(){
    var dias = document.getElementById('valor').value;
    var segundos = dias * 86400;

    alert(segundos);

}

function DiaParaMin(){
    var dias = document.getElementById('valor').value;
    var minutos = dias * 1440;

    alert(minutos);

}

function DiaParaH(){
    var dias = document.getElementById('valor').value;
    var horas = dias * 24;

    alert(horas);

}

function KmHParaMS(){
    var quilometrosporhora = document.getElementById('valor').value;
    var metrosporsegundo = quilometrosporhora / 3.6;

    alert(metrosporsegundo);

}

function MSParaKmH(){
    var metrosporsegundo = document.getElementById('valor').value;
    var quilometrosporhora = metrosporsegundo * 3.6;

    alert(quilometrosporhora);

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