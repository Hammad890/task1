class todoList{
    constructor(){
        this.todos=[]
    }

    add(task){
        this.todos.push(task)
        console.log(`Added:${task}`);
    }
    read(){
        console.log("To-do List")
        this.todos.length > 0
        ? this.todos.forEach((task,i)=>console.log(`${i+1}.${task}`)) 
        : console.log ("No tasks found");
    }
    edit(newTask,index){
       if (this.todos[index]){
        console.log(`Updated:${this.todos[index]} to ${newTask}`);
        this.todos[index]=newTask;
       }else{
        console.log('Invalid task index')
       }

    }
    delete(index){
        if(this.todos[index]){
            console.log(`deleted:${this.todos[index]}`);
            this.todos.splice(index,1)
        }else{
            console.log('Invalid index')
        }
    }

}