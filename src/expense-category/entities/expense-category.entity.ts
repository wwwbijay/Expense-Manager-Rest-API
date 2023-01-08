import { Budget } from "src/budget/entities/budget.entity";
import { Expense } from "src/expense/entities/expense.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'expenseCategories' })
export class ExpenseCategory {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Expense, (expense) => expense.expenseCategory)
    expense: Expense[]

    @OneToMany(() => Budget, (budget) => budget.expenseCategory)
    budget: Budget[]
}
