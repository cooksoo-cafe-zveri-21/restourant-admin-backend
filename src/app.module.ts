import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MenuModule } from './menu/menu.module';
import { BranchModule } from './branch/branch.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    MenuModule,
    BranchModule
  ],
})
export class AppModule {}
