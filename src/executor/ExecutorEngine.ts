import { Cell, TupleItem, TupleReader } from 'ton-core';

export type ExecutorGetArgs = {
    method: string | number;
    code: Cell;
    data: Cell;
    stack: TupleItem[]
}

export type ExecutorGetResult = {
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
    get(args: ExecutorGetArgs): Promise<ExecutorGetResult>;
}

//
// Default
//

let defaultEngine: ExecutorEngine | null = null;

export function getDefaultExecutorEngine(): ExecutorEngine {
    if (!defaultEngine) {
        throw new Error('Default executor engine is not set. Please set it using setDefaultExecutorEngine(...)');
    }
    return defaultEngine;
}

export function setDefaultExecutorEngine(engine: ExecutorEngine) {
    defaultEngine = engine;
}