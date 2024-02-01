export interface Task {
    id?: number,
    title: string,
    description: string,
    time: number,
    progress?: number,
    difficulty: string,
    updatedAt?: Date,
    createdAt: Date
}