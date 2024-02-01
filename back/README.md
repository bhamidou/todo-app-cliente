# todo-app

# endpoints

    http://localhost:PORT/api/

## Usuarios


GET /user

Respuesta: 200

```json
[
  {
    "id": 1,
    "name": "Lorena",
    "email": "Claudio_EspinalGaona@hotmail.com"
  },
  {
    "id": 2,
    "name": "Francisca",
    "email": "Rosalia.DelatorreDelvalle91@yahoo.com"
  },
  {
    "id": 3,
    "name": "José Eduardo",
    "email": "Estela_GalarzaBernal@gmail.com"
  },
  {
    "id": 4,
    "name": "Berta",
    "email": "Dolores.MunozTejada@gmail.com"
  },
  {
    "id": 5,
    "name": "badr",
    "email": "badr@daw.com"
  },
  {
    "id": 6,
    "name": "Yolanda",
    "email": "Lilia.RodriguezLara@hotmail.com"
  },
  {
    "id": 7,
    "name": "Lorenzo",
    "email": "Maria_NevarezBahena@gmail.com"
  },
  {
    "id": 8,
    "name": "Inés",
    "email": "Gregorio.TelloOrozco20@yahoo.com"
  },
  {
    "id": 9,
    "name": "Victoria",
    "email": "JulioCesar63@hotmail.com"
  }
]
```

GET /users/1
Respuesta: 200

```json 
    {
    "id": 1,
    "name": "Lorena",
    "email": "Claudio_EspinalGaona@hotmail.com",
    "password": "$2b$10$AzXFvm28oYX4TolXdCFCTuN6kq.irPLk8xiiXHTPR0NkKUSx6D6YK",
    "createdAt": "2024-01-16T18:07:57.000Z",
    "updatedAt": "2024-01-16T18:07:57.000Z"
}
```

## Task

POST /task

```json
    {
        "title": "Fregar",
        "description": "Fregar los platos de la cocina y secarlos y darselos a tu tía.",
        "asignated": 1,
        "time": 1,
        "difficulty": "S",
        "status": "0"
    }
```

Respuesta: 200

```json
    {
    "id": 7,
    "title": "Fregar",
    "description": "Fregar los platos de la cocina y secarlos y darselos a tu tía.",
    "asignated": 1,
    "time": 1,
    "difficulty": "S",
    "status": "0",
    "updatedAt": "2024-01-16T21:01:24.560Z",
    "createdAt": "2024-01-16T21:01:24.560Z"
    }
```

Respuesta: 400

```json
{
  "errors": [
    {
      "type": "field",
      "msg": "The title can not be empty",
      "path": "title",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "The description can not be empty",
      "path": "description",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "The time can not be empty",
      "path": "time",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "The time can not be empty",
      "path": "time",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "The difficulty can not be empty",
      "path": "difficulty",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "The difficulty can not be empty",
      "path": "difficulty",
      "location": "body"
    }
  ]
}
```

Documentación generada por openAPI, pluggin de webstrom:

```openapi
  /:
    get:
      summary: "GET "
      responses:
        "200":
          description: "OK"
    post:
      summary: "POST "
      responses:
        "200":
          description: "OK"
---
  /{id}:
    get:
      summary: "GET {id}"
      parameters:
      - name: "id"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /{id}:
    put:
      summary: "PUT {id}"
      parameters:
      - name: "id"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /{id}:
    delete:
      summary: "DELETE {id}"
      parameters:
      - name: "id"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /{id}:
    delete:
      summary: "DELETE {id}"
      parameters:
      - name: "id"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /{id}/progress:
    put:
      summary: "PUT {id}/progress"
      parameters:
      - name: "id"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /asign-me/{id}:
    post:
      summary: "POST asign-me/{id}"
      parameters:
      - name: "id"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /finish:
    post:
      summary: "POST finish"
      responses:
        "200":
          description: "OK"
    get:
      summary: "GET finish"
      responses:
        "200":
          description: "OK"
---
  /pending:
    get:
      summary: "GET pending"
      responses:
        "200":
          description: "OK"
---
  /pending:
    get:
      summary: "GET pending"
      responses:
        "200":
          description: "OK"
---
  /{id?}:
    put:
      summary: "PUT {id?}"
      parameters:
      - name: "id?"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /asgin-rol/{userId}:
    post:
      summary: "POST asgin-rol/{userId}"
      parameters:
      - name: "userId"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /login:
    post:
      summary: "POST login"
      responses:
        "200":
          description: "OK"
---
  /reset-password:
    post:
      summary: "POST reset-password"
      responses:
        "200":
          description: "OK"
---
  /rol/{userId}:
    get:
      summary: "GET rol/{userId}"
      parameters:
      - name: "userId"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /user:
    get:
      summary: "GET user"
      responses:
        "200":
          description: "OK"
    post:
      summary: "POST user"
      responses:
        "200":
          description: "OK"
---
  /user/{id}:
    get:
      summary: "GET user/{id}"
      parameters:
      - name: "id"
        in: "path"
        required: false
      responses:
        "200":
          description: "OK"
---
  /best-programmer:
    get:
      summary: "GET best-programmer"
      responses:
        "200":
          description: "OK"
```