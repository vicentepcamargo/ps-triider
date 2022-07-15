# Só Piada Boa

Esse projeto foi desenvolvido utilizando o framework de Java Script, ReactJS. Para simular um banco de dados, foi utilizada a biblioteca JSON-Server.

## Como iniciar o projeto

Para iniciar o projeto, no diretorio raiz, você deve rodar os seguintes comandos em terminais diferentes:

#### Aplicativo ReactJS

`npm start`

Inicia o aplicativo react do projeto, no modo de desenvolvimento.

Para visualizar no seu navegador acesse: [http://localhost:3000](http://localhost:3000).

#### Biblioteca JSON-Server
`json-server --watch src/db/db.json --port 3001`

Inicia a biblioteca do JSON-Server.

Para que a plataforma funcione corretamente, é importante ressaltar que essa biblioteca deve estar rodando na porta `3001`.

Além disso, para realizar a troca o diretório com o JSON que será lido pela biblioteca, atualizar também o segundo argumento desse comando para apontar para o novo diretório.

`json-server --watch [DIR] --port [PORT]`