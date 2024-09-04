function Celular(marca){
    this.marca = marca;
}

function CelularCaract(cor, modelo, memoria, marca){
    this.cor = cor
    this.memoria = memoria
    this.modelo=modelo
    this.memoriaRam = function(){
        console.log(this.memoria)
    }
    Celular.call(this, marca)
}

function Aplicativos(Banco, Jogos){
    this.Banco = Banco;
    this.Jogos = Jogos;
    this.appDoJoao = function(){
        return `O Joao tem um celular da marca ${celularDoJoao2.marca}, do modelo ${celularDoJoao2.modelo}, na cor ${celularDoJoao2.cor} com ${celularDoJoao2.memoria} de memoria ram. E os apps instalados no celular dele é: ${aplicativosDoJoao.Banco} e ${aplicativosDoJoao.Jogos}`
    }

}

const celularDoJoao = new Celular('Samsung')
const celularDoJoao2 = new CelularCaract( 'azul', 'S24', '8gb','Samsung')
const aplicativosDoJoao = new Aplicativos('NuBank', 'Jogo')
console.log(celularDoJoao)
console.log(celularDoJoao2)
console.log(aplicativosDoJoao)
celularDoJoao2.memoriaRam()
console.log(aplicativosDoJoao.appDoJoao())

