import { randomUUID } from 'crypto';
import { BeforeInsert, Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { IUser } from '../interfaces/user';


@Entity('user')
export class User implements IUser {
  @PrimaryColumn({ type: 'uuid', name: 'user_id' })
  public userId!: string;

  @Column({ type: 'varchar' })
  public name!: string;

  @Index({ unique: true })
  @Column({ type: 'varchar' })
  public email!: string;

  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'boolean', name: 'is_admin', default: false })
  public isAdmin!: boolean;

  @Index({ unique: false })
  @Column({ type: 'boolean', name: 'is_active', default: false })
  public isActive!: boolean;


  @BeforeInsert()
  protected setUserId (): void {
    this.userId = randomUUID()
  }
}
