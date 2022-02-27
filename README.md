#                 Projeto API_Filmes / Backend   <img align="center" alt="Python" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg">                
***

### Requisitos do projeto                     

*   Git

*   NodeJS v.16.10.0

*   Yarn


##


### Para clonar o projeto

*   `git clone https://github.com/Moises52771/API_Filmes.git`

##
                
### Para startar o projeto

*   De um `cd API_Filmes`

*   Em seguida execute `yarn` aguarde a instalação de node_modules
    
*   Execute o comando  `yar dev`

***

## Rotas da API


### Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |

***
## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `204` | Alteração realizada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|

***

## Cadastrar
### Cadastrar categoria [POST]

+ Rota:  ``` 'URL'/categories ```

+ Request (application/json)

    + Body

            {
                "name": "Açao",
	            "description": "Filmes intensos"
            }
            
    
+ Response 200 (application/json)

    + Body

            {
                "id": "ad0bdb47-e762-4b2c-9b5c-375e0b58ca28",
                "name": "Açao",
                "description": "Filmes intensos",
                "created_at": "2022-02-22T20:10:56.106Z"
            }  
            
##
### Cadastrar filme [POST]

+ Rota:  ``` 'URL'/videos ```

+ Request (application/json)

    + Body

            {
                "name": "Nome do filme",
                "description": "Descrição do filme",
                "category_id": "ad0bdb47-e762-4b2c-9b5c-375e0b58ca28",
                "duration": 120
            }
            
    
+ Response 200 (application/json)

    + Body

             {
                "id": "1c7b7767-38f8-4af1-9ede-783832335598",
                "name": "Nome do filme",
                "description": "Descrição do filme",
                "duration": 120,
                "category_id": "ad0bdb47-e762-4b2c-9b5c-375e0b58ca28",
                "created_at": "2022-02-22T22:39:32.316Z"
             }  
