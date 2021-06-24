import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('places')
class Places {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  reference: string;

  @Column()
  about: string;

  @Column()
  owner: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Places;