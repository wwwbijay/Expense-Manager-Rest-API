export type CreateUserParams = {
    username: string;
    password: string;
}

export type UpdateUserParams = {
    username: string;
    password: string;
}

export type CreateUserProfileParams = {
    firstname: string;
    lastname: string;
    age: number;
    dob: string;
}

export type UpdateUserProfileParams = {
    firstname: string;
    lastname: string;
    age: number;
    dob: string;
}

export type CreateBudgetParams = {
    title: string;
    date: Date;
    amount: number;
    remarks: string;
}

export type UpdateBudgetParams = {
    title: string;
    date: Date;
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

