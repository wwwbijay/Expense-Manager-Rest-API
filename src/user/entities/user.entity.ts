import { IsDate, IsDefined, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Budget } from "src/budget/entities/budget.entity";
import { Expense } from "src/expense/entities/expense.entity";
import { Income } from "src/income/entities/income.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";


@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @IsDefined()
    @MinLength(3)
    @Column({ unique: true })
    username: string;

    @Column()
    @IsDefined()
    @MinLength(5)
    password: string;

    @Column({ default: () => 'NOW()' })
    @IsDate()
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