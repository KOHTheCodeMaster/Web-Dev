import {Injectable} from '@angular/core';
import {Snake} from "../shared/model/snake.model";
import {SnakeDirection} from "../shared/model/snake-direction.enum";
import {KeyboardInputService} from "./keyboard-input.service";
import {Observable, Subject, Subscription} from "rxjs";
import {CellState} from "../shared/model/cell-state.enum";
import {Cell} from "../shared/model/cell.model";
import {GameStateService} from "./game-state.service";
import {GameStatus} from "../shared/model/game-status.enum";
import {GameBoardService} from "./game-board.service";

@Injectable({
    providedIn: 'root'
})
export class SnakeService {

    private snake!: Snake;
    private refreshBoard$: Subject<void>;
    private keyboardInputSubscription!: Subscription;

    constructor(private keyboardInputService: KeyboardInputService,
                private gameStateService: GameStateService) {
        this.initializeSnake();
        this.listenToKeyboardInputService();
        this.refreshBoard$ = new Subject<void>();
    }

    listenToKeyboardInputService() {

        this.gameStateService.getGameStatus().subscribe(gameStatus => {
            if (gameStatus === GameStatus.IN_PROGRESS) {
                this.keyboardInputSubscription = this.keyboardInputService.getKeyPress$().subscribe(key => this.handleKeyboardInputEvent(key));
            } else {
                //  Unsubscribe if subscription exists and game is not in progress
                this.keyboardInputSubscription?.unsubscribe();
            }
        });
    }

    handleKeyboardInputEvent(key: string) {
        key = key.toLowerCase();
        console.log(key);

        if (key === 'w') this.move(SnakeDirection.UP);
        else if (key === 'd') this.move(SnakeDirection.RIGHT);
        else if (key === 's') this.move(SnakeDirection.DOWN);
        else if (key === 'a') this.move(SnakeDirection.LEFT);
    }

    initializeSnake() {

        this.snake = new Snake();
        // this.moveHead();

        console.log(this.snake);

    }

    move(snakeDirection: SnakeDirection) {

        this.snake.setSnakeDirection(snakeDirection);

        this.moveSnakeBody();
        this.moveHead();

        this.checkCollision();

        this.refreshBoard$.next();

    }

    checkCollision() {
        this.checkCollisionWithWall();
        this.checkCollisionWithSelf();
    }

    checkCollisionWithWall() {
        let head = this.snake.getHead();

        if (head.x < 0 || head.x >= GameBoardService.ROW_SIZE || head.y < 0 || head.y >= GameBoardService.COL_SIZE) {
            this.snake.isDead = true;
            this.gameStateService.updateGameStatus(GameStatus.GAME_OVER);
            console.log('Game Over');
            console.log(this.snake);
        }
    }

    checkCollisionWithSelf() {
        let head = this.snake.getHead();
        let bodyCells = this.snake.getBodyCells();

        //  Check if head collides with body
        for (let cell of bodyCells) {
            if (head.x === cell.x && head.y === cell.y) {
                this.snake.isDead = true;
                this.gameStateService.updateGameStatus(GameStatus.GAME_OVER);
            }
        }

    }

    moveSnakeBody() {

        //  Remove the tail cell from the body
        let tail = this.snake.getBodyCells().pop();
        tail?.setCellState(CellState.EMPTY);

        //  add new cell to the body based on the current head
        this.addHeadCellToBody();

    }

    addHeadCellToBody() {
        let head = this.snake.getHead();
        let newCell = new Cell(head.x, head.y);
        newCell.setCellState(CellState.SNAKE_BODY);

        this.snake.getBodyCells().unshift(newCell);
    }

    moveHead() {

        let head = this.snake.getHead();
        let direction = this.snake.getSnakeDirection();

        if (direction === SnakeDirection.UP) {
            head.setCellValue(SnakeDirection.UP);
            head.x--;
        } else if (direction === SnakeDirection.RIGHT) {
            head.setCellValue(SnakeDirection.RIGHT);
            head.y++;
        } else if (direction === SnakeDirection.DOWN) {
            head.setCellValue(SnakeDirection.DOWN);
            head.x++;
        } else if (direction === SnakeDirection.LEFT) {
            head.setCellValue(SnakeDirection.LEFT);
            head.y--;
        }

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
