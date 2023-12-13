import {Entity, Column, ManyToOne} from 'typeorm';
import {IsEmail} from 'class-validator';
import {MindMapFileEntity} from './mind-map-file.entity';
import {AbstractBaseEntity} from './abstract-base.entity';

@Entity({name: 'mind_map'})
export class MindMapEntity extends AbstractBaseEntity{
    @Column()
    @IsEmail()
    email: string
    @Column()
    username: string
    @ManyToOne(() => MindMapFileEntity, (file) => file.mindMaps, {lazy: true})
    mindMapFile: Promise<MindMapFileEntity>
}