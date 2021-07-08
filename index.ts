//tsc --init

function somar(numero1 : number, numero2: number){
    return numero1+numero2;
}

const meunum1 = 10;
const meunum2 = 5;

console.log(somar(meunum1,meunum2));

//tsc


//Union Types
const note: string | number = 5;
function exibirNota(nota:number |string){
    console.log(`A nota é ${nota}`);
}

exibirNota("10");
exibirNota(10);

//Type alias
type Funcionarios = Array<string>
const funcionarios: Funcionarios = ['Fernanda', 'Fulano']

type Aluno ={
    nome: string;
    sobrenome: string;
    dataNasci : Date;
}

type Alunos = Array<Aluno>;

const alunos: Alunos=[{
    nome:'Fernanda',
    sobrenome:'Sesnick',
    dataNasci: new Date()
},
{
    nome:'José',
    sobrenome:'Sesnick',
    dataNasci: new Date()
}]

function tratarAlunos(alunos: Aluno[]){
    //...
    for(let aluno of alunos){
        console.log('Nome do aluno:' ,aluno.nome);
    }
}

type Contato = {
    nome: string;
    telefone1 : string;
    telefone2?:string|null; // ? torna campo opcional, pode ser nada
}

// Type Assertion

const minhaIdade: any = 23; // é do tipo any/qlqr coisa, mas assertion abaixo o faz number
( minhaIdade as number ).toString();
//(<number>minhaIdade).toString();

//casos com HTML, quando eu sei o tipo do que o HTML vai retornar, e eu sei que tem o .value
const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);

const input2 = <HTMLInputElement>document.getElementById("outroId");
console.log(input2.value);

