interface Usuario{
    nome: string;
    email: string;
    address?: string; //opcional
} 

function getUser(): Usuario{
    return{
        nome: "fernanda",
        email: "mail@mail.com"
    }
}

function setUser(usuario: Usuario){
    //...
}