import { TasksController } from './tasks/tasks_controllers/productos';
import { TasksService } from './tasks/tasks.service';

AppModule({
  imports: [],
  controllers: [
      TasksController
  ],
  providers: [
      TasksService
  ],
})
export class AppModule {}
