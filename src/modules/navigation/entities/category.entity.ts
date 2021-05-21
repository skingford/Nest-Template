/*
 * @Author: kingford
 * @Date: 2021-05-21 00:38:35
 * @LastEditTime: 2021-05-21 12:05:07
 */
import { Column, Entity, Index, Unique } from 'typeorm';
import { PublicEntity } from '@src/modules/shared/entities/public.entity';

@Entity('navigation_category')
@Unique('module_name_delete_at', ['moduleName', 'deletedAt'])
@Unique('action_name_delete_at', ['actionName', 'deletedAt'])
export class CategoryEntity extends PublicEntity {
  @Column({
    type: 'varchar',
    nullable: true,
    length: 50,
    name: 'module_name',
    comment: '模块名称',
  })
  moduleName: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
    name: 'action_name',
    comment: '操作名称',
  })
  actionName: string;

  @Index()
  @Column({
    type: 'varchar',
    nullable: true,
    length: 50,
    name: 'name',
    comment: '分类名称',
  })
  name: string;
}
