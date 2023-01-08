import { ExpenseCategory } from "src/expense-category/entities/expense-category.entity";
import { User } from "src/user/entities/User.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'expenses' })
export class Expense {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    title: string;

    @Column({ type: 'double' })
    amount: number;

    @Column()
    remarks: string;

    @ManyToOne(() => ExpenseCategory, (expenseCategory) => expenseCategory.expense)
    expenseCategory: ExpenseCategory;

    @ManyToOne(() => User, (user) => user.expense)
    user: User
}
