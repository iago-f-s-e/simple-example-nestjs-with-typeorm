import { ReadRepositoryDTO } from './read-repository';
import { WriteRepositoryDTO } from './write-repository';

export interface UserRepositoryDTO extends ReadRepositoryDTO, WriteRepositoryDTO {}
