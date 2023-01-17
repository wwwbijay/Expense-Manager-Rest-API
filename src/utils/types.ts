export type CreateUserParams = {
    username: string;
    email: string;
    password: string;
}

export type UpdateUserParams = {
    username: string;
    email: string;
    password: string;
}

export type CreateUserProfileParams = {
    firstname: string;
    lastname: string;
    age: number;
    dob: string;
    profileImagePath:string;
}

export type UpdateUserProfileParams = {
    firstname: string;
    lastname: string;
    age: number;
    dob: string;
    profileImagePath:string;
}

export type CreateBudgetParams = {
    title: string;
    amount: number;
    remarks: string;
}

export type UpdateBudgetParams = {
    title: string;
    amount: number;
    remarks: string;
}

export type CreateExpenseCategoryParams = {
    title: string;
    description: string;
}

export type UpdateExpenseCategoryParams = {
    title: string;
    description: string;
}

export type CreateIncomeCategoryParams = {
    title: string;
    description: string;
}

export type UpdateIncomeCategoryParams = {
    title: string;
    description: string;
}

export type CreateExpenseParams = {
    date: Date;
    title: string;
    amount: number;
    remarks: string;
}

export type UpdateExpenseParams = {
    date: Date;
    title: string;
    amount: number;
    remarks: string;
}

export type CreateIncomeParams = {
    date: Date;
    title: string;
    amount: number;
    remarks: string;
}

export type UpdateIncomeParams = {
    date: Date;
    title: string;
    amount: number;
    remarks: string;
}
