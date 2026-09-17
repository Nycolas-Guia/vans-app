import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulos de domínio (ServicoModule, ViagemModule, RotaModule, etc.) entram
// aqui a partir da Fase 3/4 do roadmap. Não criar um "CoreModule" genérico —
// um módulo por área de domínio, conforme convenção do CLAUDE.md.
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
