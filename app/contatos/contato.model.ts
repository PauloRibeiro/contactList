export class Contato {
    constructor(public id: number, public nome:string, public email: string, public telefone: string) {
    }
}

let c: Contato = new Contato(1, 'Paulo', 'phoribeiro@gmail.com', '(41) 98405-8209');