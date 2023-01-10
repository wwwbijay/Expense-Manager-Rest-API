import { ExpenseCategory } from "src/expense-category/entities/expense-category.entity";
import { User } from "src/user/entities/User.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'budgets' })
export class Budget {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    date: Date

    @Column()
    title: string;

    @Column({ type: 'double' })
    amount: number;

    @Column()
    remarks: string;

    @ManyToOne(() => ExpenseCategory, (expenseCategory) => expenseCategory.budget)
    expenseCategory: ExpenseCategory;

    @ManyToOne(() => User, (user) => user.budget)
    user: User
}
