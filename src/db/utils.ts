import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient(); // This needs to stay server-side, PrismaClient should never be run client-side

// Get all the todos from the db
export async function getTodos(){
  return await prisma.todo.findMany({
    orderBy: [{
      id: 'asc'
    }]
  });
}

// If you would want to grab a todo by an id
export async function getTodo(todoId: number) {
  return await prisma.todo.findUnique({
    where: {
      id: todoId
    }
  })
}

// If you wanted to update the status of a todo
export async function toggleTodo(todoId: number) {
  const todo = await getTodo(todoId); // I could just make the status of the Todo an arg for this function instead
  return await prisma.todo.update({
    where: { id: todoId },
    data: { status: !todo?.status }
  })
}