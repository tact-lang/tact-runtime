import { Cell, TupleItem, TupleReader } from 'ton-core';

export type ExecutorArgs = {
    code: Cell;
    data: Cell;
    stack: TupleItem[]
}

export type ExecutorResult = {
    success: true;
    stack: TupleItem[];
    exitCode: number;
    logs: string;
} | {
    success: false;
    error: string;
    logs: string;
};

export type ExecutorEngine = {
    execute(args: ExecutorArgs): Promise<ExecutorResult>;
}