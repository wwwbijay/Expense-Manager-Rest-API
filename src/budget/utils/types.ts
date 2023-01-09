export type CreateBudgetParams = {
    title: string;
    amount: number;
    remarks: string;
    expenseCategoryId: number;
    userId: number;
}

export type UpdateBudgetParams = {
    title: string;
    amount: number;
    remarks: string;
    expenseCategoryId: number;
    userId: number;
}