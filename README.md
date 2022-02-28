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

## Ultilização da API


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
	     


***

## Listar
### Listar categorias [GET]

+ Rota:  ``` 'URL'/categories ```

+ Response 200 (application/json)

    + Body
    
            {
                "id": "ad0bdb47-e762-4b2c-9b5c-375e0b58ca28",
                "name": "Açao",
                "description": "Filmes intensos",
                "created_at": "2022-02-22T20:10:56.106Z"
            },
            {
                "id": "25c1a40a-a18b-42ec-9163-c16743459cd3",
    		    "name": "Comédia",
    		    "description": "Filmes bem humorados",
    		    "created_at": "2022-02-22T16:53:13.963Z"
            }	    
            
##
### Listar filmes [GET]

+ Rota:  ``` 'URL'/videos ```
   
+ Response 200 (application/json)

    + Body

             {
                "id": "669e469d-330b-46fa-8a95-1e6a385fe5ff",
		        "name": "Nome do filme",
                "description": "Descrição do filme",
		        "duration": "120",
		        "category_id": "ad0bdb47-e762-4b2c-9b5c-375e0b58ca28",
		        "created_at": "2022-02-22T20:45:40.341Z",
		        "category": {
		          "id": "ad0bdb47-e762-4b2c-9b5c-375e0b58ca28",
		          "name": "Açao",
		          "description": "Filmes intenssos",
		          "created_at": "2022-02-22T20:10:56.106Z"
		       }
             }  
             {
                "id": "669e469d-330b-46fa-8a95-1e6a385fe5ff",
		        "name": "Nome do filme",
                "description": "Descrição do filme",
		        "duration": "120",
		        "category_id": "25c1a40a-a18b-42ec-9163-c16743459cd3",
		        "created_at": "2022-02-22T20:45:40.341Z",
		        "category": {
		          "id": "25c1a40a-a18b-42ec-9163-c16743459cd3",
		          "name": "Comédia",
    		    	"description": "Filmes bem humorados",
    		    	"created_at": "2022-02-22T16:53:13.963Z"
		       }
             }

***

## Deletar
### Deletar categoria [DELETE]

+ Rota:  ``` 'URL'/categories/id ```   id do registro que deve ser deletado

+ Response 200 (application/json)

          
##
### Deletar filme [DELETE]

+ Rota:  ``` 'URL'/videos/id ```   id do registro que deve ser deletado

+ Response 200 (application/json)


***

## Atualizar
### Atualizar categoria [PUT]

+ Rota:  ``` 'URL'/categories/id ```   id do registro que deve ser atualizado

+ Request (application/json)

    + Body

            {
                "name": "Terror",
	            "description": "Filmes assustadores"
            }
            
    
+ Response 200 (application/json)

    + Body

            {
                "id": "ad0bdb47-e762-4b2c-9b5c-375e0b58ca28",
                "name": "Terror",
                "description": "Filmes assustadores",
                "created_at": "2022-02-22T20:10:56.106Z"
            }  
            
##
### Atualizar filme [PUT]

+ Rota:  ``` 'URL'/videos/id ```   id do registro que deve ser atualizado

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
	     


***








	     




