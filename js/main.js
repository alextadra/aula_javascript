 //poderia tersido criado dentro do body <script type="text/javascript" src="js/main.js"></script> 

function clicou(){
    document.getElementById("agradecimento").innerHTML ="<b> obrigado por clicar</b>"; 
                                                 //tag b utilizada para deixar em negrito
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar")
}

function redirecionar(){
    window.open("https://github.com/alextadra/aula_javascript"); //abre nova pág. referência
//window.location.href = "https://github.com/alextadra/aula_javascript"; //abriu na mesma pág. para abrir em 
}                                                                       // outra colocar "_blank"(descobrir como?)

//FUNÇÃO ONCHANGE E ONLOAD

function load(){      //quando carregar o body chama essa função
    alert("página carregada");
}

function funcaoChange(elemento){ //coleta o elemento que ele está pedindo
        console.log(elemento.value);
}

// FUNÇÃO ONMOUSEOVER E ONMOUSEOUT  (DUAS MANEIRAS DE EXECUÇÃO DESSA FUNÇÃO)

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML ="OBRIGO POR PASSAR O MOUSE";     //UTILIZANDO O id
    elemento.innerHTML = "OBRIGO POR PASSAR O MOUSE"                                    //SEM O id
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML ="passe o mouse aqui";           //UTILIZANDO O id
    elemento.innerHTML = "passe o mouse aqui"                                               //SEM O id
}

//FUNÇÃO VALIDAR

/*function validaIdade(idade){   //forma local, assim sinalizando o 0 da função
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    } 
    return validar;  
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));


var validar = 0 ; //sem var validar (apagando ele) é de forma global sinalizando true/false
function validaIdade(idade){   
     if (idade >= 18){/
        validar = true
    }else{
        validar = false
    } 
    return validar;  
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar); //console.log que têm a função de jogar pra fora da função


// FUNÇÃO SOMA

function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10));

function soma(n1, n2){
    return n1 + n2;
}

function setreplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome) //substitui os nomes, nesse caso no alert
}

alert(soma(5,10));
alert(setreplace("Vai Coxa", "Coxa", "Barcelona"))


//variaveis, laços de repetição e Date

DATE (dia, mês, ano, minuto, segundo,...)

var d = new Date();
alert(d); //estrutura simples de data

var d = new Date();
alert(d.getMonth() + 1); selecionar apenas o mês

var d = new Date();
alert(d.getMinutes()); selecionar minutos


ESTRUTURA DE REPETIÇÃO: FOR

var count;
for(count = 0; count <=5; count ++){
    alert(count);
};

ESTRUTURA DE REPETÇÃO: WHILE

var count = 0;
while(count <= 5){
    console.log(count); 
    alert(count); //cria pop-ups até final da número da contagem
    count = count + 1;  //ou usa ++ para o mesmo efeito
} 

CONDICIONAIS IF/ELSE

var idade = prompt ("Qual é a sua idade?"); //COMANDO PROMPT ABRE CAIXA DE INTERAÇÃO
var idade = 18   //(não terá esse, caso use comando acima)
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};


// COMANDO DICIONÁRIO


var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; //OS COLCHETES FORAAM USADOS PARA CRIAR UMA LISTA DE DICIO.
console.log(frutas);
alert(frutas[1].nome);



var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);t
alert(fruta.cor);


// COMANDO ARRAY

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); //COLOCAR ITEM A MAIS NA LISTA USA-SE PUSH
//lista.pop();       // USA-SE POP PARA EXCLUIR ITEM DA LISTA

//console.log(lista.length);  //QUANTIFICAR ELEMENTOS DENTRO DA LISTA
//console.log(lista.reverse()); //COLOCA OS ITNS NA LISTA AO CONTRÁRIO
//console.log(lista);
//console.log(lista.toString()); //TIRA A REFERÊNCIA DE ARRAY, COLOCA NUMA STRING(MESMA LINHA)
//console.log(lista.join(" - ")); //USADO PARA SEPARAR ITENS COM O SIMBOLO DESEJADO


VARIAVEIS/ALERT (NOME/IDADE/FRASES)

var nome = " Alexandre Tadra "; (criação de string dentro das "")
var idade =  36;    //se colocarmos aspas duplas no valor das váriaveis elas ñ irão somar
var idade2  = 10;   // mas sim concatenar, pois entende que é uma string    
var frase = "Coxa é o melhor time do mundo";
alert(nome + " tem " + idade + " anos "); //para concatenar usa a string o sinal de + a palavra definida na variavel 
alert(idade + idade2); // (o alert é´o popup criado na abertura da pág.)
console.log(nome);    //usamos essa variavel para visualizarmos na aba console do inspecionar(F12)
console.log(idade + idade2); //trocando o sinal conseguimos efetuar outras operações
console.log(frase.toLowerCase ()); //utilizamos toupper/tolower para deixar as strings maiusculas ou minusculas
alert(frase.replace("coxa", "barcelona"));
*/