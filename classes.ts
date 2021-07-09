class Carro {
   private velocAtual: number =0; //so pode ser alterada de dentro da propria class

    constructor(
        public marca: string,
        public modelo: string,
        private velocMax: number =220 // nao pode ser alterado depois da instancia
    ){}
    
    private alterarVelocidade(delta:number){
        const novaVelocidade = this.velocAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocMax)
        {
            this.velocAtual +novaVelocidade;
        }else{
            this.velocAtual = delta > 0? this.velocMax : 0
        }
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