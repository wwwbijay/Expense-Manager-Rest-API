import { Budget } from "src/budget/entities/budget.entity";
import { Expense } from "src/expense/entities/expense.entity";
import { Income } from "src/income/entities/income.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";


@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: () => 'NOW()' })
    createdAt: Date

    @Column({ nullable: true })
    authStrategy: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile

    @OneToMany(() => Income, (income) => income.user)
    income: Income[]

    @OneToMany(() => Expense, (expense) => expense.user)
    expense: Expense[]

    @OneToMany(() => Budget, (budget) => budget.user)
    budget: Budget[]
}