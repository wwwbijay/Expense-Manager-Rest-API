import { Expense } from "src/expense/entities/expense.entity";
import { Income } from "src/income/entities/income.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'incomecategories' })
export class IncomeCategory {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Income, (income) => income.incomeCategory)
    income: Income[]
}
