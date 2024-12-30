interface IItem {
    name: string,
    color: 'green' | 'blue' | 'red',
}

export interface ITask {
    id: number,
    name: string,
    description?: string,
    executor: IItem,
    columnsName: string,
    deadline?: string,
    tags?: IItem[],
}

export interface IColumn {
    id: number,
    name: string,
    tasks: ITask[]
}