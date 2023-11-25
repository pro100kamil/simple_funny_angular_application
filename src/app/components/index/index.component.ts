import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
    infiniteBlock: HTMLElement | null = null;
    addNewParagraph() {
        let paragraph = document.createElement('p');
        paragraph.innerText = <string>this.infiniteBlock?.lastChild?.textContent;
        this.infiniteBlock?.append(paragraph);
    }

    ngOnInit(): void {
        this.infiniteBlock = document.querySelector("#infiniteBlock");

        window.addEventListener('scroll', () => {
            this.addNewParagraph();
        });
    }
}
