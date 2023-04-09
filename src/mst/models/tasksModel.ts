import { flow, toGenerator, types } from 'mobx-state-tree'
import axios from "axios";

export const todoModel = types.model("tasksModel", {
    id: types.identifierNumber,
    title: types.optional(types.string, ""),
    date: types.string,
    time:types.string
})
    .actions(self => ({

    }))
