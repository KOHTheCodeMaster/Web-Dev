/*
Date: 27th May 2K24 - 05:41 PM..!!

Concept: Getters & Setters, get & set keywords for properties

Dev: K.O.H..!! (Harshit Gupta)

GitHub: https://github.com/KOHTheCodeMaster/Frontend-Web-Dev/

Commands:
    - Compile:  tsc .\basic-modules\demo.ts .\basic-modules\mathUtils.ts .\default-modules\demo.ts .\default-modules\user.ts   .\named-modules\mathUtils.ts .\named-modules\demo.ts     .\re-exporting-modules\src\food\fruits.ts .\re-exporting-modules\src\food\vegetables.ts .\re-exporting-modules\src\food\index.ts .\re-exporting-modules\src\demo.ts      .\app.ts
    - Run: node .\app.js

----------------------------------------------------------------------------------------------------
*/

import { demoBasicExample } from './basic-modules/demo'
import { demoDefaultModules } from './default-modules/demo'
import { demoNamedModules } from './named-modules/demo'
import { demoReExportingModules } from './re-exporting-modules/src/demo'

main();

function main() {

    demoBasicExample();

    demoDefaultModules();

    demoNamedModules();

    demoReExportingModules();

}
