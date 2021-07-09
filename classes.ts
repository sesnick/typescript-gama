class Carro {
   private velocAtual: number =0; //so pode ser alterada de dentro da propria class

    constructor(
        public marca: string,
        public modelo: string,
        private velocMax: number =220 // nao pode ser alterado depois da instancia
    ){}
    
    private alterarVelocidade(delta:number){
        //VALIDAÇÕES DE ACELERAÇÃO E FRENAGEM
        //this.velocAtual =xxx
    }
    acelerar(){
        this.alterarVelocidade(5);
    }

    frear(){
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro ('ford', 'ka',250);
carro.acelerar();