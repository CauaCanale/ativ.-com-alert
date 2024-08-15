num1 = 0
 num2 = 0
 operacao = ""
 num1 = prompt("Escreva o primeiro numero")
 num2 = prompt("Escreva o segundo numero")
 operacao = prompt("Escreva qual operação sera utilizada")

if(operacao == "+" || operacao == "soma"){
   alert(parseInt(num1) + parseInt(num2))
}
 else if(operacao == "-"){
   alert(parseInt(num1) - parseInt(num2))
 }
 else if(operacao == "/"){
   alert(parseInt(num1) / parseInt(num2))
 }
 else if(operacao == "*"){
   alert(parseInt(num1) * parseInt(num2))
 }