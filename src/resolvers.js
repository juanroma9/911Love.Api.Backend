import Task from "./models/Task.js";



// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "hello" array above.
const resolvers = {
    Query: {
        hello: () => "Hello World",
        getAllTask: async () => {
          const tasks = Task.find()
          return tasks
        }, 
        getTask: async (_, args) => {
          const task = await Task.findById(args.id)
          return task
        }
    },
    Mutation : {
      createTask : async (_, args) => {
        const {title, description} = args.task
        const new_task = new Task({title, description})
        await new_task.save()
        console.log(new_task)
        return new_task
      }, // Para no utilizar todo el objeto args pongo entre corchetes el parámetro que requiero
      deleteTask : async (_, {id}) => {
        const delete_task = await Task.findByIdAndDelete(id)
        return 'Se ha eliminado la tarea'
      },
      updateTask : async (_, {id, task}) => {
        const task_updated = await Task.findByIdAndUpdate(id, {$set : task}, {new : true}) // con $set le estoy diciendo que actualice los campos que trae task, puede ser uno o varios
        return task_updated
      }
    }
  };



export default resolvers;