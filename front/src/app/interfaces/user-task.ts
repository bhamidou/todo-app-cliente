
export interface UserTask {
    id:        number;
    user_id:   number | null;
    todo_id:   number;
    createdAt: string;
    updatedAt: string;
    user:      User | null;
    todo:      Todo;
}

export interface Todo {
    id:          number;
    title:       Title;
    description: Description;
    time:        null;
    difficulty:  Description;
    status:      string;
    progress:    number;
    createdAt:   string;
    updatedAt:   string;
}

export enum Description {
    Asdfasd = "asdfasd",
}

export enum Title {
    Fasdf = "fasdf",
}

export interface User {
    id:        number;
    name:      string;
    email:     string;
    password:  string;
    startAt:   null;
    endAt:     null;
    createdAt: string;
    updatedAt: string;
}
