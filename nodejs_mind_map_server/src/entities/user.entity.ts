import {Entity, Column, OneToMany} from 'typeorm';
import {IsEmail} from 'class-validator';
import {MindMapFileEntity} from './mind-map-file.entity';
import {AbstractBaseEntity} from "./abstract-base.entity";

@Entity({name: 'user'})
export class UserEntity extends AbstractBaseEntity{
  @Column()
  @IsEmail()
  email: string
  @Column()
  username: string
  @OneToMany(() => MindMapFileEntity, (mindMapFile) => mindMapFile.user, {lazy: true})
  mindMapFiles: Promise<MindMapFileEntity[]>
}