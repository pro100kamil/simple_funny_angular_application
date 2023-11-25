import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
    infiniteBlock: HTMLElement | null = null;
    currentNumber: number = 1000;

    addNewParagraph() {
        let paragraph = document.createElement('p');
        paragraph.innerText = String(this.currentNumber);
        if (Math.abs(this.currentNumber) % 2 == 1) paragraph.classList.add("text-red-800", "font-bold");

        this.infiniteBlock?.append(paragraph);

        this.currentNumber -= 7;
    }

    populate() {
        while (this.currentNumber >= 0) {
            this.addNewParagraph();
        }
    }

    ngOnInit(): void {
        this.infiniteBlock = document.querySelector("#infiniteBlock");
        this.populate();
        window.addEventListener('scroll', () => {
            this.addNewParagraph();
        });
    }
}
