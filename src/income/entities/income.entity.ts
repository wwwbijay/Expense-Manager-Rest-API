import { User } from "src/user/entities/User.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Income {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    title: string;

    @Column({ type: 'double' })
    amount: number;

    @Column({ type: 'int' })
    incomeCategoryId: number;

    @Column()
    remarks: string;

    @ManyToOne(() => User, (user) => user.income)
    user: User
}
