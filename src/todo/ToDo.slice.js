import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [{ id: nanoid(9), name: 'Встать с кровати', isDone: false },
{ id: nanoid(9), name: 'Почистить зубы', isDone: false }]

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (payload) {
                state.push({ id: Date.now(), name: payload, isDone: false })
            } else return
        },
        removeTask: (state, action) => {
            console.log(action);
            if (action.payload) {
                return state.filter((t) => t.id !== action.payload);
            } else return
        },
        changeTask: (state, { payload }) => {
            if (payload) {
                const foundObject = state.find((t) => t.id === payload)
                state.map(task => {
                    if (task.id === foundObject.id) {
                        task.isDone = true
                    } else return state
                })
            } else return
        }
    }
});

export const { addTask, removeTask, changeTask } = TodoSlice.actions;
export default TodoSlice.reducer;