import fs from 'fs/promises';

const readfile = async (path) => JSON.parse(await fs.readFile(path, "utf-8"));

export default {
    async allTodos() {
        return await readfile("todos.json");
    },
    async oneTodo({ id }) {
        const todos = await readfile("todos.json");
        const todo = todos.find(t => t.id === id);
        return todo;
    },
    async filteredTodos({ finished }) {
        const todos = await readfile("todos.json");
        const filtered = todos.filter(t => t.finished === finished);
        return filtered;
    },
    async createTodo({ text }) {
        const todos = await readfile("todos.json");
        const newTodo = { id: (todos.length + 1).toString(), text, finished: false };
        todos.push(newTodo);
        await fs.writeFile("todos.json", JSON.stringify(todos, null, 2));
        return newTodo;
    },
    async updateTodo({ id, text, finished }) {
        const todos = await readfile("todos.json");
        const index = todos.findIndex(t => t.id === id.toString());
        if (index === -1) {
            throw new Error("Todo not found");
        }
        if (text !== undefined) {
            todos[index].text = text;
        }
        if (finished !== undefined) {
            todos[index].finished = finished;
        }
        await fs.writeFile("todos.json", JSON.stringify(todos, null, 2));
        return todos[index];
    },
    async deleteTodo({ id }) {
        const todos = await readfile("todos.json");
        const index = todos.findIndex(t => t.id === id.toString());
        if (index === -1) {
            throw new Error("Todo not found");
        }
        const deletedTodo = todos.splice(index, 1)[0];
        await fs.writeFile("todos.json", JSON.stringify(todos, null, 2));
        return deletedTodo;
    }
};
