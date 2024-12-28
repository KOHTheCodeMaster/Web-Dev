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
import {FoodService} from "./food.service";
import {ScoreService} from "./score.service";
import {TimerService} from "./timer.service";

@Injectable({
    providedIn: 'root'
})
export class SnakeService {

    private snake!: Snake;
    private refreshBoard$: Subject<void>;
    private keyboardInputSubscription!: Subscription;

    constructor(private keyboardInputService: KeyboardInputService,
                private gameStateService: GameStateService,
                private foodService: FoodService,
                private scoreService: ScoreService,
                private timerService: TimerService) {

        this.initializeSnake();
        this.initSubscriptions();
        this.refreshBoard$ = new Subject<void>();

    }

    initSubscriptions() {
        this.gameStateService.getGameStatus$().subscribe(gameStatus => {
            if (gameStatus === GameStatus.SELECT_LEVEL) this.initializeSnake();
            else if (gameStatus === GameStatus.IN_PROGRESS) this.initializeKeyboardInputSubscription();
            else this.keyboardInputSubscription?.unsubscribe();
        });

        this.timerService.getTimer().subscribe(() => this.move(this.snake.getSnakeDirection()));

    }

    initializeKeyboardInputSubscription() {
        this.keyboardInputSubscription = this.keyboardInputService.getKeyPress$()
            .subscribe(key => this.handleKeyboardInputEvent(key));
    }

    handleKeyboardInputEvent(key: string) {
        key = key.toLowerCase();

        if (key === 'w') this.move(SnakeDirection.UP);
        else if (key === 'd') this.move(SnakeDirection.RIGHT);
        else if (key === 's') this.move(SnakeDirection.DOWN);
        else if (key === 'a') this.move(SnakeDirection.LEFT);
    }

    initializeSnake() {
        this.snake = new Snake();
    }

    move(snakeDirection: SnakeDirection) {

        //  Prevent the snake from moving in the opposite direction
        if (this.isMoveOppositeDirection(snakeDirection)) return;

        this.updateSnakeDirectionAndHeadCellValue(snakeDirection);

        if (this.snake.foodConsumed) this.snake.foodConsumed = false;   //  Reset the flag
        else this.removeTail();

        this.addHeadToBody();
        this.moveHead();

        this.checkCollisions();

        this.refreshBoard$.next();

    }

    isMoveOppositeDirection(snakeDirection: SnakeDirection): boolean {
        //  Prevent the snake from moving in the opposite direction
        if (this.snake.getSnakeDirection() === SnakeDirection.UP && snakeDirection === SnakeDirection.DOWN) return true;
        else if (this.snake.getSnakeDirection() === SnakeDirection.RIGHT && snakeDirection === SnakeDirection.LEFT) return true;
        else if (this.snake.getSnakeDirection() === SnakeDirection.DOWN && snakeDirection === SnakeDirection.UP) return true;
        else if (this.snake.getSnakeDirection() === SnakeDirection.LEFT && snakeDirection === SnakeDirection.RIGHT) return true;
        return false;
    }

    updateSnakeDirectionAndHeadCellValue(snakeDirection: SnakeDirection) {
        this.snake.setSnakeDirection(snakeDirection);
        this.snake.head.setCellValue(snakeDirection);
    }


    removeTail() {
        let tail = this.snake.getBodyCells().pop();
        tail?.setCellState(CellState.EMPTY);
    }

    addHeadToBody() {
        let newBodyCell = new Cell(this.snake.getHead().x, this.snake.getHead().y);
        newBodyCell.setCellState(CellState.SNAKE_BODY);
        this.snake.getBodyCells().unshift(newBodyCell);
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

    checkCollisions() {
        this.checkCollisionWithWall();
        this.checkCollisionWithSelf();
        this.checkCollisionWithFood();
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

    checkCollisionWithFood() {
        let head = this.snake.getHead();
        let food = this.foodService.getFood();

        if (head.x === food.x && head.y === food.y) {
            this.foodService.getRefreshFood$().next();
            this.snake.size++;
            this.snake.foodConsumed = true;

            //  Update current score
            this.scoreService.updateScores();
        }
    }

    //  Getters
    //  -------

    getSnake(): Snake {
        return this.snake;
    }

    getRefreshBoard$(): Observable<void> {
        return this.refreshBoard$.asObservable();
    }

}
