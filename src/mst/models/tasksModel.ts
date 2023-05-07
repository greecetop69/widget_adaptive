import { types } from 'mobx-state-tree'

export const todoModel = types.model("tasksModel", {
    id: types.identifierNumber,
    title: types.optional(types.string, ""),
    date: types.string,
    time: types.string
})
