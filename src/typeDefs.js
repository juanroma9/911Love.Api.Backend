
const typeDefs = `#graphql
  # Creamos un tipo de datos personalizado, recuerda que en GraphQL siempre van haber todos tipos de datos basicos 
  # Query -> para consultar 
  # Mutation -> para modificar
  type Task{
    id:ID
    title:String, 
    description:String
  }

  # This "Query" type defines the queryable fields for every book in our data source.
  type Query {
    hello: String,
    getAllTask: [Task]
    getTask(id:ID):Task
  }

  #En Mongo se pueden definir tipos de datos para evitar estar nombrando los campos uno a uno
  input TaskInput {
    title: String, 
    description: String
  }

  type Mutation {
    createTask(task: TaskInput): Task
    deleteTask(id:ID):String
    # con el simblo ! indica que el parámetro es obligatorio.
    updateTask(id:ID!, task: TaskInput): Task 
  }
  ` //End typeDefs

  export default typeDefs;
