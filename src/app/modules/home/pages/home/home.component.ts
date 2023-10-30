import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IPackage, IState } from '../../interfaces/api.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public country: string = 'x';
    public inputEntityType: string = '';
    public inputStateFormation: string = '';

    public states: IState[] = [];
    public packages: IPackage[] = [];
    public entityTypes: any[] = [];
    
    constructor(
        private API: ApiService
    ){}

    ngOnInit(): void {
        
    }

    loadStates(){
        this.API.states()
        .subscribe({
            next: (data) => {
                this.states = data;
            }
        });
    }

    loadPackages(){
        this.API.packages()
        .subscribe({
            next: (data) => {
                this.packages = data;
            }
        })
    }

    countrySelectionUpdate(){
        if(this.country == 'uk'){
            this.entityTypes = [
                {id: 'LTD', name: 'LTD'}
            ];
            this.states = [];
        }else if(this.country == 'us'){
            this.loadStates();
            this.entityTypes = [
                {id: 'LLC', name: 'LLC'},
                {id: 'S-Corporation', name: 'S-Corporation'},
                {id: 'C-Corporation', name: 'C-Corporation'},
                {id: 'Nonprofit', name: 'Nonprofit'},
            ];
        }else{
            this.entityTypes = [];
        }
    }

    onSelectFormation(){
        this.loadPackages();
    }

}
