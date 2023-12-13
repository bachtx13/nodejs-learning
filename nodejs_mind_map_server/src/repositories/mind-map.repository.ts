import {dataSource} from '../data-source';
import {MindMapEntity} from '../entities';

export const MindMapRepository = dataSource.getRepository(MindMapEntity)