import http from 'node:http'

const PORT = 3333

// 5 Rotas/endepoints
// Get -> Listar todos os usuarios
// Get -> Listar um unico usuarios
// Post -> Cadastrar usuarios
// Put -> Atualizar usuarios
// Delet -> Deletar um usuario

//3 Tipos de requisição
// body -> via formulario -> Post
// ROUTER -> parametros -> GET, PUT, DELETE, PATH
// QUERY => /usuarios?param1=valor1&param2=valor2 -> GET

const usuarios = [] //Base de dados
const serve = http.createServer((request, response)=>{
     const {method, url} = request

//localhost:33/usuario/{id}
if(method === 'GET' && url ==='/usuarios'){
    response.writeHead(200, {'Content-Type': 'application'})
    response.end(JSON.stringify(usuarios))

}else if(method === 'Post' && url === '/usuarios'){
    let body = ''
    request.on('data', (chunk)=>{

        body+= chunk.toString()
    })
    request.on('end', ()=>{
        const novoUsuario =JSON.parse(body)
        novoUsuario.id = usuarios.length + 1
        response.writeHead(201, {'Content-Type':'application/json'})
        response.end(JSON.stringify(novoUsuario))
    })
}else if(method === 'PUT' && url.startsWith('/usuarios/')){
    response.end('PUT /usuarios')
}else if(method === 'DELETE' && ur.startsWith('/usuarios/')){
    response.end('DELETE /usuarios')
}else if(method === 'GET' && url.startsWith('/usuarios/')){
    response.end('GET /usuarios')
    
}else{
    response.writeHead(404, { "contene-Type":"application/json"})
    response.end(JSON.stringify({message: "Rota nao EXISTE"}))
}


})
serve.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
})