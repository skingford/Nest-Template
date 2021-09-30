/*
 * @Author: kingford
 * @Date: 2021-09-30 20:40:47
 * @LastEditTime: 2021-09-30 20:42:00
 */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrationNameHere1633005646573 implements MigrationInterface {
  name = 'migrationNameHere1633005646573';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`jin-nest-dev\`.\`posts\` (\`id\` char(36) NOT NULL, \`title\` varchar(500) NOT NULL, \`content\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`jin-nest-dev\`.\`WechatMiniUser\` (\`id\` char(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL COMMENT '软删除时间', \`openId\` varchar(255) NOT NULL COMMENT '用户唯一标识', \`unionId\` varchar(255) NOT NULL COMMENT '用户在开放平台的唯一标识符', \`sessionKey\` varchar(255) NOT NULL COMMENT '会话密钥', \`nickname\` varchar(20) NULL COMMENT '用户昵称', \`phone\` varchar(20) NULL COMMENT '用户手机号', \`userId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`jin-nest-dev\`.\`User\` (\`id\` char(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL COMMENT '软删除时间', \`username\` varchar(20) NOT NULL COMMENT '用户名', \`password\` varchar(200) NOT NULL COMMENT '密码', \`phone\` varchar(20) NULL COMMENT '手机号', \`email\` varchar(100) NULL COMMENT '邮箱', \`role\` varchar(20) NOT NULL COMMENT '用户角色' DEFAULT 'User', \`status\` tinyint NOT NULL COMMENT '用户状态:0-正常 | 1-禁用' DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`jin-nest-dev\`.\`WechatMiniUser\` ADD CONSTRAINT \`FK_ad4ba169642e0ca7c3927475ffb\` FOREIGN KEY (\`userId\`) REFERENCES \`jin-nest-dev\`.\`User\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`jin-nest-dev\`.\`WechatMiniUser\` DROP FOREIGN KEY \`FK_ad4ba169642e0ca7c3927475ffb\``,
    );
    await queryRunner.query(`DROP TABLE \`jin-nest-dev\`.\`User\``);
    await queryRunner.query(`DROP TABLE \`jin-nest-dev\`.\`WechatMiniUser\``);
    await queryRunner.query(`DROP TABLE \`jin-nest-dev\`.\`posts\``);
  }
}
