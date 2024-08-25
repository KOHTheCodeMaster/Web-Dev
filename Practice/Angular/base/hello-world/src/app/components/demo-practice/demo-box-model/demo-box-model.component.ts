import {Component} from '@angular/core';
import {
    DemoHandlingImagesAndContainersComponent
} from "./demo-handling-images-and-containers/demo-handling-images-and-containers.component";
import {
    DemoPlayWithWidthAndHeightComponent
} from "./demo-play-with-width-and-height/demo-play-with-width-and-height.component";

@Component({
  selector: 'app-demo-box-model',
  standalone: true,
    imports: [
        DemoHandlingImagesAndContainersComponent,
        DemoPlayWithWidthAndHeightComponent
    ],
  templateUrl: './demo-box-model.component.html',
  styleUrl: './demo-box-model.component.css'
})
export class DemoBoxModelComponent {

}
