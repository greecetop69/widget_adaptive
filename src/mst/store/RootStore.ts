import axios from "axios";
import { applySnapshot, flow, toGenerator, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { IProductModelSnapshotIn, IRootStore } from "../interface";
import { todoModel } from "../models/tasksModel";

export const RootStore = types.model('RootStore', {

    tasks: types.array(todoModel),
})
    .views((self) => ({
        get topTasks() {
            return self.tasks.slice(0, 5);
        },
    }))
.actions((self) => ({

    fetchProducts: flow(function* () {
        try {
            const task: IProductModelSnapshotIn[] = yield* toGenerator(axios.get(' http://localhost:3000/tasks').then((res) => res.data))
            applySnapshot(self.tasks, task)

        } catch (e) {
            console.log('>>e', e)
        }
    }),

    removeTodoById: flow(function* (id: number) {
        try {
            yield* toGenerator(axios.delete(`http://localhost:3000/tasks/${id}`))
            const todo = self.tasks.filter((product) => product.id !== id)
            applySnapshot(self.tasks, todo)
        } catch (e) {
            console.log('>>e', e)
        }
    }),
}))

export const store = RootStore.create({})

export const ContextRootStore = createContext<IRootStore>(store)

export const useRootStore = () => useContext(ContextRootStore)