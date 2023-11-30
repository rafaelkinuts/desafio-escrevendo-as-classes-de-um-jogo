class heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Mago':
                ataque = 'magia';
                break;
            case 'Guerreiro':
                ataque = 'espada';
                break;
            case 'Monge':
                ataque = 'artes marciais';
                break;
            case 'Ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const heroi1 = new heroi('Gandalf', 25, 'Mago');
const heroi2 = new heroi('Lucius', 30, 'Guerreiro');
const heroi3 = new heroi('Gainden', 35, 'Ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
