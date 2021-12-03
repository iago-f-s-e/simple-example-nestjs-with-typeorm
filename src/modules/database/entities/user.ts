import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { IUser } from '../interfaces/user';

@Entity('user')
export class User implements IUser {
  @PrimaryColumn({ type: 'uuid', name: 'user_id' })
  public readonly userId!: string;

  @Column({ type: 'varchar' })
  public readonly name!: string;

  @Index({ unique: true })
  @Column({ type: 'varchar' })
  public readonly email!: string;

  @Column({ type: 'varchar' })
  public readonly password!: string;

  @Column({ type: 'boolean', name: 'is_admin', default: false })
  public readonly isAdmin!: boolean;

  @Index({ unique: false })
  @Column({ type: 'boolean', name: 'is_active', default: false })
  public readonly isActive!: boolean;
}
