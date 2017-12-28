import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {

        let contatos: Contato[] = [
            { id: 1, nome: 'Juca Pirama', email: 'jucapirama@gmail.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Gavião Bueno', email: 'bueno@globo.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Silvio Santos', email: 'silvio-santos@sbt.com.br', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Sr Madruga', email: 'madruga@gmail.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Jorge Tadeu', email: 'cesartadeu@gmail.com', telefone: '(00) 0000-0000' },
            { id: 6, nome: 'Sargento Pincel', email: 'pincel@militar.com', telefone: '(00) 0000-0000' }
        ];

        return {contatos};
    }
}