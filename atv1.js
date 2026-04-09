
function descontar (valor,desconto){
    descontar = (valor  * desconto)/100;
    console.log("o preço é R$" + valor);
    console.log("o desconto é de " + desconto + "%");
    console.log("o preço final é de R$" + descontar);
}
 
descontar(200,25);