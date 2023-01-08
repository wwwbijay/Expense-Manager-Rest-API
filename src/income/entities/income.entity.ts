import { IncomeCategory } from "src/income-category/entities/income-category.entity";
import { User } from "src/user/entities/User.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'incomes' })
export class Income {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    title: string;

    @Column({ type: 'double' })
    amount: number;

    @Column()
    remarks: string;

    @ManyToOne(() => IncomeCategory, (incomeCategory) => incomeCategory.income)
    incomeCategory: IncomeCategory;

    @ManyToOne(() => User, (user) => user.income)
    user: User
}
