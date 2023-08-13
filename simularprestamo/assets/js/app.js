function ver_calculo() {
    document.getElementById("calculo").innerHTML = "";
    let capital = Number(document.getElementById("capital").value);
    let cuotas = Number(document.getElementById("cuotas").value);
    let interes = Number(document.getElementById("interes").value);
    if (capital > 0) {
        for (index = 1; index <= cuotas; index++) {
            c = capital / cuotas;
            fix = c.toFixed(2);
            entre = ((capital * interes) / 100) / cuotas;
            fix2 = entre.toFixed(2);
            re = c + entre;
            fix3 = re.toFixed(2);
            document.getElementById("calculo").innerHTML = document.getElementById("calculo").innerHTML +
                `
            <tr>
                <td> ${index}</td>
                <td> ${fix}</td>
                <td> ${fix2}</td>
                <td> ${fix3}</td>
            </tr>
            `;
        }
        f1 = capital.toFixed(2);
        por = entre * cuotas;
        fix4 = por.toFixed(2);
        por2 = re * cuotas;
        fix5 = por2.toFixed(2);
        document.getElementById("c").innerHTML = f1;
        document.getElementById("i").innerHTML = fix4;
        document.getElementById("p").innerHTML = fix5;
    } else {
        alert("Falta algun numero");
    }
}