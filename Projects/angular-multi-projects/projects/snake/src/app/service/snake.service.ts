import {Injectable} from '@angular/core';
import {Snake} from "../shared/model/snake.model";
import {SnakeDirection} from "../shared/model/snake-direction.enum";
import {KeyboardInputService} from "./keyboard-input.service";
import {Observable, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SnakeService {

    private snake!: Snake;
    private refreshBoard$: Subject<void>;

    constructor(private keyboardInputService: KeyboardInputService) {
        this.initializeSnake();
        this.listenToKeyboardInputService();
        this.refreshBoard$ = new Subject<void>();
    }

    listenToKeyboardInputService() {
        this.keyboardInputService.getKeyPress$().subscribe((key) => {
            key = key.toLowerCase();
            console.log(key);

            if (key === 'w') this.move(SnakeDirection.UP);
            else if (key === 'd') this.move(SnakeDirection.RIGHT);
            else if (key === 's') this.move(SnakeDirection.DOWN);
            else if (key === 'a') this.move(SnakeDirection.LEFT);
        });
    }

    initializeSnake() {

        this.snake = new Snake();
        this.updateHeadCellValueByDirection();

        console.log(this.snake);

    }

    updateHeadCellValueByDirection() {

        let head = this.snake.getHead();
        let direction = this.snake.getSnakeDirection();

        if (direction === SnakeDirection.UP) head.setCellValue(SnakeDirection.UP);
        else if (direction === SnakeDirection.RIGHT) head.setCellValue(SnakeDirection.RIGHT);
        else if (direction === SnakeDirection.DOWN) head.setCellValue(SnakeDirection.DOWN);
        else if (direction === SnakeDirection.LEFT) head.setCellValue(SnakeDirection.LEFT);

        console.log(this.snake);

    }


    move(snakeDirection: SnakeDirection) {

        this.snake.setSnakeDirection(snakeDirection);

        //  Update the head cell value based on the direction
        this.updateHeadCellValueByDirection();

        //  Move the snake
        if (snakeDirection === SnakeDirection.UP) this.moveUp();
        else if (snakeDirection === SnakeDirection.RIGHT) this.moveRight();
        // else if (snakeDirection === SnakeDirection.DOWN) this.moveDown();
        // else if (snakeDirection === SnakeDirection.LEFT) this.moveLeft();

        this.refreshBoard$.next();

    }

    moveUp() {
        // let head = this.snake.getHead();
        // head.x--;
    }

    moveRight() {
        // let head = this.snake.getHead();
        // head.y++;
    }

    //  Getters
    //  -------

    getSnake(): Snake {
        return this.snake;
    }

    getSnakeDirection(): SnakeDirection {
        return this.snake.getSnakeDirection();
    }

    getRefreshBoard$(): Observable<void> {
        return this.refreshBoard$.asObservable();
    }

}
