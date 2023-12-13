import {dataSource} from '../data-source';
import {MindMapFileEntity} from '../entities';

export const MindMapFileRepository = dataSource.getRepository(MindMapFileEntity)