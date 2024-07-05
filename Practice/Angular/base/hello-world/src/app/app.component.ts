import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Comp1Component} from './components/comp1/comp1.component';
import {InlineTemplateComponent} from './components/inline-template/inline-template.component';
import {CompSelectorDemoComponent} from './components/comp-selector/comp-selector-demo/comp-selector-demo.component';
import {DataBindingComponent} from './components/data-binding/data-binding.component';
import {StyleScopingDemoComponent} from './components/style-scoping/style-scoping-demo.component';
import {
    NgClassAndStyleComponent
} from './directives/attribute-directives/ng-class-and-style/ng-class-and-style.component';
import {DemoNgModelComponent} from './directives/attribute-directives/demo-ng-model/demo-ng-model.component';
import {DemoNgIfComponent} from './directives/structural/demo-ng-if/demo-ng-if.component';
import {DemoNgForComponent} from './directives/structural/demo-ng-for/demo-ng-for.component';
import {DemoNgSwitchComponent} from './directives/structural/demo-ng-switch/demo-ng-switch.component';
import {
    DemoTransactionComponent
} from './components/demo-injectable-service/demo-transaction/demo-transaction.component';
import {DI1Component} from "./components/dependency-injection/providedIn/di-1/di-1.component";
import {DI2Component} from "./components/dependency-injection/providedIn/di-2/di-2.component";
import {DI3Component} from "./components/dependency-injection/providedIn/di-3/di-3.component";
import {DI4Component} from "./components/dependency-injection/providedIn/di-4/di-4.component";
import {
    DiProviders1Component
} from "./components/dependency-injection/di-providers/di-providers/di-providers-1.component";
import {
    DiProviders2Component
} from "./components/dependency-injection/di-providers/di-providers/di-providers-2.component";
import {
    DiProviders3Component
} from "./components/dependency-injection/di-providers/di-providers/di-providers-3.component";
import {
    AttributesVsPropertiesComponent
} from "./components/data-binding/attributes-vs-properties/attributes-vs-properties.component";
import {DemoEvents1Component} from "./components/events/demo-events-1/demo-events-1.component";
import {DemoEventFilteringComponent} from "./components/events/demo-event-filtering/demo-event-filtering.component";
import {DemoBuiltInPipesComponent} from "./components/pipes/demo-built-in-pipes/demo-built-in-pipes.component";
import {DemoCustomPipesComponent} from "./components/pipes/demo-custom-pipes/demo-custom-pipes.component";
import {DemoInput1Component} from "./components/input/demo-input-1/demo-input-1.component";
import {DemoOutput1Component} from "./components/custom-events-using-output/demo-output-1/demo-output-1.component";
import {DemoOutput2Component} from "./components/custom-events-using-output/demo-output-2/demo-output-2.component";
import {DemoLikeCounterComponent} from "./components/demo-practice/demo-like-counter/demo-like-counter.component";
import {LikeCounterCompComponent} from "./components/demo-practice/demo-like-counter/like-counter-comp.component";
import {
    DemoNgContentContainerAndTemplateComponent
} from "./components/demo-ng-content-container-and-template/demo-ng-content-container-and-template.component";
import {DemoGreetingsExample1} from "./components/demo-ng-content-container-and-template/demo-greetings-example-1";
import {DemoRouting1Component} from "./components/routing/demo-routing-1/demo-routing-1.component";
import {OptionsMenu1Component} from "./components/demo-practice/options-menu-1/options-menu-1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,
        Comp1Component, InlineTemplateComponent, CompSelectorDemoComponent, DataBindingComponent,
        StyleScopingDemoComponent, NgClassAndStyleComponent, DemoNgModelComponent,
        DemoNgIfComponent, DemoNgForComponent, DemoNgSwitchComponent,
        DemoTransactionComponent, DI1Component, DI2Component, DI3Component, DI4Component,
        DiProviders1Component,
        DiProviders2Component,
        DiProviders3Component,
        AttributesVsPropertiesComponent,
        DemoEvents1Component,
        DemoEventFilteringComponent,
        DemoBuiltInPipesComponent,
        DemoCustomPipesComponent,
        DemoInput1Component,
        DemoOutput1Component,
        DemoOutput2Component,
        DemoLikeCounterComponent,
        LikeCounterCompComponent,
        DemoNgContentContainerAndTemplateComponent,
        DemoGreetingsExample1,
        DemoRouting1Component,
        OptionsMenu1Component,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'hello-world';
}
