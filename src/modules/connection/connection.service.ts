import mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { env } from 'src/shared/config/env';

@Injectable()
export class ConnectionService {
  async onModuleInit() {
    await mongoose.connect(env.dbURL).then(() => {
      console.log('Connection to MongoDB successfully established!');
    });
  }
}
