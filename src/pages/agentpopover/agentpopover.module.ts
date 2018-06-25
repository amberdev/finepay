import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentpopoverPage} from './agentpopover';

@NgModule({
  declarations: [
    AgentpopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentpopoverPage),
  ],
  exports: [
    AgentpopoverPage
  ]
})
export class AgentpopoverPageModule {}
