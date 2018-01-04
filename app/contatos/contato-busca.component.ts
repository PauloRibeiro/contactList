import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contato } from './contato.model';
import { Subject } from 'rxjs/Subject';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})

export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>;

    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService
    ) { }

    ngOnInit(): void { 
        this.contatos = this.termosDaBusca
            .switchMap(term => {
                console.log('Fez a busca: ', term);
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
            });

        this.contatos.subscribe((contatos: Contato[]) => {
            console.log('retornou do servidor: ', contatos);
        });
    }

    search(term: string): void {
        this.termosDaBusca.next(term);
    }
}