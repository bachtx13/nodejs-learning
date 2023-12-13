import {dataSource} from '../data-source';
import {UserEntity} from '../entities';

export const UserRepository = dataSource.getRepository(UserEntity)