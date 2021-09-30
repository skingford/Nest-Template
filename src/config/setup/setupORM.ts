/*
 * @Author: kingford
 * @Date: 2021-09-30 20:25:34
 * @LastEditTime: 2021-09-30 20:31:57
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

export function setupTypeORM() {
  // 添加ormconfig.json外的配置
  TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  });

  return TypeOrmModule.forRoot();
}
