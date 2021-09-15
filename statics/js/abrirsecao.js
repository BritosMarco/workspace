function AbrirSecao(secao) {
    window.open("" + secao + "", "_parent");
}

//Inicio das funções para cáuculos de comprimentos/distancia

function criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn) {
    this.pol = pol;
    this.cm = cm;
    this.m = m;
    this.mm = mm;
    this.km = km;
    this.pe = pe;
    this.yd = yd;
    this.mi = mi;
    this.mn = mn;
}

//Conversão de polegadas

function ConvertePolegadasEmCm() {
    var pol = parseFloat(document.fprincipal.editval.value);
    if (pol < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var cm = pol * 2.54;
        var m = pol * 0.0254;
        var mm = pol * 254;
        var km = pol * 0.0000254;
        var pe = pol * 0.0833333;
        var yd = pol * 0.0277777;
        var mn = pol * 0.0000137149;
        var mi = pol * 0.0000157828;
        var pol = pol * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                        cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                    } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editkm.value = converte.km;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editpol.value = converte.pol;
    }
}

//conversão de Quilometro
function ConverteQuilometro() {
    var qui = parseFloat(document.fprincipal.editval.value);
    if (qui < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var cm = qui * 100000;
        var m = qui * 1000;
        var mm = qui * 1000000;
        var pol = qui * 39370.08;
        var pe = qui * 3280.84;
        var yd = qui * 1093.61;
        var mn = qui * 0.53996;
        var mi = qui * 0.6214;
        var km = qui * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                        cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                    } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editpol.value = converte.pol;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editkm.value = converte.km;
    }
}

//conversão de Metro
function ConverteMetro() {
    var met = parseFloat(document.fprincipal.editval.value);
    if (met < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var cm = met * 100;
        var km = met * 0.001;
        var mm = met * 1000;
        var pol = met * 39.37008;
        var pe = met * 3.28084;
        var yd = met * 1.09361;
        var mn = met * 0.00053996;
        var mi = met * 0.0006214;
        var m = met * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                        cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                    } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editpol.value = converte.pol;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editkm.value = converte.km;
    }
}

//conversão de Centimetro
function ConverteCentimetro() {
    var cem = parseFloat(document.fprincipal.editval.value);
    if (cem < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var m = cem * 0.01;
        var km = cem * 0.00001;
        var mm = cem * 10;
        var pol = cem * 0.3937008;
        var pe = cem * 0.0328084;
        var yd = cem * 0.0109361;
        var mn = cem * 0.0000053996;
        var mi = cem * 0.000006214;
        var cm = cem * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                            cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                        } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editpol.value = converte.pol;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editkm.value = converte.km;
    }
}

//conversão de Jardas
function ConverteJardas() {
    var yar = parseFloat(document.fprincipal.editval.value);
    if (yar < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var km = yar * 0.0009144;
        var m = yar * 0.9144;
        var cm = yar * 91.44;
        var mm = yar * 914.4;
        var pol = yar * 36;
        var pe = yar * 3;
        var mn = yar * 0.0004937;
        var mi = yar * 0.0005682;
        var yd = yar * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                                cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                            } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editpol.value = converte.pol;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editkm.value = converte.km;
    }
}

//conversão de Milhas
function ConverteMilhas() {
    var mil = parseFloat(document.fprincipal.editval.value);
    if (mil < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var km = mil * 1.60934;
        var m = mil * 1609.34;
        var cm = mil * 160934;
        var mm = mil * 1609344;
        var pol = mil * 63360;
        var pe = mil * 5280;
        var mn = mil * 0.86898;
        var yd = mil * 1760;
        var mi = mil * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                                cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                            } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editpol.value = converte.pol;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editkm.value = converte.km;
    }
}

//conversão de Milhas Nauticas
function ConverteMilhasNauticas() {
    var mna = parseFloat(document.fprincipal.editval.value);
    if (mna < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var km = mna * 1.852;
        var m = mna * 1852;
        var cm = mna * 185200;
        var mm = mna * 1852000;
        var pol = mna * 72913.39;
        var pe = mna * 6076.12;
        var mi = mna * 1.15078;
        var yd = mna * 2025.37;
        var mn = mna * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                                cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                            } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editpol.value = converte.pol;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editkm.value = converte.km;
    }
}

//conversão de Pes(ft)
function ConvertePes() {
    var pes = parseFloat(document.fprincipal.editval.value);
    if (pes < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var km = pes * 0.0003048;
        var m = pes * 0.3048;
        var cm = pes * 30.48;
        var mm = pes * 304.8;
        var pol = pes * 12;
        var mn = pes * 0.0001646;
        var mi = pes * 0.0001894;
        var yd = pes * 0.3333;
        var pe = pes * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                                  cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                              } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editpol.value = converte.pol;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editkm.value = converte.km;
    }
}

//conversão de milimetros
function ConverteMilimetro() {
    var mml = parseFloat(document.fprincipal.editval.value);
    if (mml < 0) {
        alert("Nao e possivel converter valor negativo");
    } else {
        var km = mml * 0.0000001;
        var m = mml * 0.001;
        var cm = mml * 0.1;
        var pe = mml * 0.0032808;
        var pol = mml * 0.03937;
        var mn = mml * 0;
        var mi = mml * 0;
        var yd = mml * 0.0010936;
        var mm = mml * 1;

        /*   (cm - (cm % 100)) / 100; */
        /*  if (cm > 100) {
                                                                                                                                                                                                                                                                                                                                                                                  cm = cm % 100;
                                                                                                                                                                                                                                                                                                                                                                              } */
        var converte = new criaobjeto(pol, cm, m, mm, km, pe, yd, mi, mn);
        document.fprincipal.editcm.value = converte.cm;
        document.fprincipal.editm.value = converte.m;
        document.fprincipal.editmm.value = converte.mm;
        document.fprincipal.editpol.value = converte.pol;
        document.fprincipal.editpe.value = converte.pe;
        document.fprincipal.edityd.value = converte.yd;
        document.fprincipal.editmi.value = converte.mi;
        document.fprincipal.editmn.value = converte.mn;
        document.fprincipal.editkm.value = converte.km;
    }
}

function converter(a) {
    var opcao = a.value || a.options[a.selectedIndex].value;
    if (opcao == "9") {
        ConvertePolegadasEmCm();
        return;
    } else if (opcao == "1") {
        ConverteQuilometro();
        return;
    } else if (opcao == "2") {
        ConverteMetro();
        return;
    } else if (opcao == "3") {
        ConverteCentimetro();
        return;
    } else if (opcao == "4") {
        ConverteMilimetro();
        return;
    } else if (opcao == "5") {
        ConverteMilhas();
        return;
    } else if (opcao == "6") {
        ConverteMilhasNauticas();
        return;
    } else if (opcao == "7") {
        ConverteJardas();
        return;
    } else if (opcao == "8") {
        ConvertePes();
        return;
    }
}

//Fim das funções para cálculos de comprimentos/distancia

//Inicio das funções para cáculos de volume