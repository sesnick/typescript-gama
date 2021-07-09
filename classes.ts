class Carro {
   private velocAtual: number =0; //so pode ser alterada de dentro da propria class

    constructor(
        public marca: string,
        public modelo: string,
        private velocMax: number =220 // nao pode ser alterado depois da instancia
    ){}
    
    
    acelerar(){
        const aceleracao = 5;
        if(this.velocAtual  + aceleracao <= this.velocMax){
        this.velocAtual += aceleracao;
        }
    }

    frear(){
        const frenagem =5;
        this.velocAtual -= frenagem;
    }
}

const carro = new Carro ('ford', 'ka',250);
carro.acelerar();