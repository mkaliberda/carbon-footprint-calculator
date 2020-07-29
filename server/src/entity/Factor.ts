import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Factor {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public slug: string;

    @Column()
    public label: string;

    @Column()
    public category: string;

    @Column('decimal', { precision: 2, scale: 2 })
    public value: number;
}
