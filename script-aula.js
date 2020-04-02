//Após instalar o eslint para usar em outros lugares basta levarmos a pasta '.eslintrs.json' e 'package.json' que ao dar npm init ele mesmo já vai consultar tudo que o projeto tem de dependência.

//Vou abrir cada arquivo da pasta JS e ir vendo os problemas que falam.
//No meu vai ter um monte pois algumas coisas estão sem funcionar.


// -----
//Erro de Document is not defined
   //No node realmente não existe esse document e não criamos a variável document em nenhum momento.
   //Para resolver vamos nas configs do ESLint e colocamos que nosso dev é para o Browser (e lá existe document)
   //"env": { "browser": true}

//Ele fala quando colocamos start = start + incremento, ao invés de start += incremento

//Assignment to property of function parameter 'numero'. (no-param-reassign)
   //Ele não acha certo colocarmos outro valor em uma propriedade. Já que recebi um valor nela ele quer que permaneça.
   //Ele quer que os objetos sejam imutáveis. Ao criar um objeto com seus valores ele não quer que eu altere o valor de alguma propriedade.
   //Mas no Browser, pq às vezes queremos alterar o innerText de algum elemento. Por isso temos que refazer a regra.

//Erro de usar algo antes de declarar
   //Deu problema na parte de observer, pq ele estava em baixo e eu usava a observar em cima.
   //Quando passei pra cima o problema mudou pq o observer usava um método que estava em baixo.

   //Pra resolver eu somente declarei a observer em cima com let e depois de rodar a função eu atribui à essa var observer o que ele deveria observar, passando como parâmetro o método que tinha tentado acessar antes de declarar.

//Ele dá acusa erro quando tentamos importar um arquivo com extensão .js, e temos que ter essa extensão senão dá erro.
   //Ele espera que a gente utilize uma ferramenta (ver depois) que junte nossos arquivos .js
   //Estamos usando o type="module", e com ele temos que colocar a extensão.
   //Vamos ter que passar por cima dessa também. Em 'rules', "import/extensions": 0

//Ele quer que sempre que utilizamos Arrow Function e for usado as chaves{} o parâmetro (mesmo único) precisa dos ()

//Para strings e concatenação ele já indica que devemos usar Template Strings.