import {Component} from '@angular/core';
import {
    DemoHandlingImagesAndContainersComponent
} from "./demo-handling-images-and-containers/demo-handling-images-and-containers.component";
import {
    DemoPlayWithWidthAndHeightComponent
} from "./demo-play-with-width-and-height/demo-play-with-width-and-height.component";
import {DemoConceptClarityComponent} from "./demo-concept-clarity/demo-concept-clarity.component";
import {
    DemoScenariosTextOverflowComponent
} from "./demo-scenarios-text-overflow/demo-scenarios-text-overflow.component";
import {
    DemoScenariosWhiteSpaceCollapseComponent
} from "./demo-scenarios-white-space-collapse/demo-scenarios-white-space-collapse.component";

@Component({
  selector: 'app-demo-box-model',
  standalone: true,
    imports: [
        DemoHandlingImagesAndContainersComponent,
        DemoPlayWithWidthAndHeightComponent,
        DemoConceptClarityComponent,
        DemoScenariosTextOverflowComponent,
        DemoScenariosWhiteSpaceCollapseComponent
    ],
  templateUrl: './demo-box-model.component.html',
  styleUrl: './demo-box-model.component.css'
})
export class DemoBoxModelComponent {

}
