import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';
import { FormsModule as AngularFormsModule , ReactiveFormsModule } from '@angular/forms';


import { Graph } from './graph';
import { FormNode } from './formNode';

import { GraphService } from './graph/graph.service';
import {TestService} from './test.service'

import {ModalModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing,
    ModalModule
  ],
  declarations: [
    Graph,
    FormNode,
    Dashboard
  ],
  providers: [
    GraphService,
    TestService
  ]
})
export default class DashboardModule {}
