/*
 * @Author: kingford
 * @Date: 2021-05-21 00:32:52
 * @LastEditTime: 2021-05-21 12:04:10
 */
import { Column, Entity, Index, Unique } from 'typeorm';
import { PublicEntity } from '@src/modules/shared/entities/public.entity';

@Entity('navigation')
@Unique('module_name_delete_at', ['moduleName', 'deletedAt'])
@Unique('action_name_delete_at', ['actionName', 'deletedAt'])
export class NavigationEntity extends PublicEntity {
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

  @Column({
    type: 'int',
    nullable: false,
    name: 'categoryId',
    comment: '所属类型',
  })
  categoryId: number;

  @Index()
  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
    name: 'name',
    comment: '收藏名称',
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'cover',
    comment: '封面图片地址',
  })
  cover: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 200,
    name: 'description',
    comment: '描述',
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'link',
    comment: '链接地址',
  })
  link: string;
}
