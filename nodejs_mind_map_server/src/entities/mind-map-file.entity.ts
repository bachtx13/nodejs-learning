import {Entity, Column, ManyToOne, OneToMany} from 'typeorm';
import {MindMapEntity} from './mind-map.entity';
import {UserEntity} from './user.entity';
import {AbstractBaseEntity} from './abstract-base.entity';

@Entity({name: 'mind_map_file'})
export class MindMapFileEntity extends AbstractBaseEntity{
    @Column()
    title: string
    @ManyToOne(() => UserEntity, user => user.mindMapFiles, {lazy: true})
    user: Promise<UserEntity>
    @OneToMany(() => MindMapEntity, mindMap => mindMap.mindMapFile, {lazy: true})
    mindMaps: Promise<MindMapEntity[]>
}