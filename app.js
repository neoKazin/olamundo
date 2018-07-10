//Imprime informações no console
console.log('Iniciando servidor');
//Importando o modulo http ao modulo app.js
//o modulo http é o modulo nativo do nodeJS para tratar requisicoes web(http)
var http = require('http');

//Crianddo servidor Web
var servidor = http.createServer(function(request, response)
{
    var rota = request.url;
    var pagina= '';
    if (rota === '/'){
        pagina = '<html><body><h1>Pagina Inicial</h1></body></html>'
    }else if(rota ==='/sistemas'){
        pagina = '<html><body><h1>Pagina Sistemas</h1></body></html>'
    }else if (rota ==='/sobre'){
        pagina = '<html><body><h1>Pagina Sobre</h1></body></html>'

    }

    response.end(pagina);


    //response.end("<html><body><h1>Pagina Inicial</h1></body></html>")


});

//Definir qual porta o servidor vai ficar ouvindo
servidor.listen(80);

console.log('Fim');













//var msgErro = new Error('Deu ruim');
//console.error(msgErro);