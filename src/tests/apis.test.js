const { getToDoApi, postToDoApi, updateToDoApi, postDoneTodoApi, putUnoneTodoApi, deleteToDoApi } = require("../Api/ToDoApi");

test('POST ToDo', async () => {
    const newTask = {
        name:"Task 1",
        priority:"medium"
    }
    const response = await postToDoApi(newTask);
    expect(response?.name).toBe("Task 1"); // the API should return the stored object
});

test('GET ToDos', async()=>{
    const filters = {
        name: '',
        priority: 'all',
        status: 'all'
    };
    const sort = {
        sortByDate:null,
        sortByPriority:null
    }
    const pagination = 1;
    const response = await getToDoApi(filters,sort,pagination);
    expect(response.totalPages>=0).toBe(true); // the API should return an object which includes the number of total pages
});

test('UPDATE ToDo',()=>{
    const editedTask = {
        name:"Task x",
        priority:"medium"
    }
    updateToDoApi(0,editedTask).then(response=>{
        expect(response.name).toBe("Task x"); // the API should return the updated object
    });
})

test('Done ToDo',async()=>{
    postDoneTodoApi(0).catch(error=>{
        console.log(error);
        expect(true).toBe(false);
    })
});

test('Undone ToDo',async()=>{
    putUnoneTodoApi(0).catch(error=>{
        console.log(error);
        expect(true).toBe(false);
    })
});

test('Delete ToDo',async()=>{
    deleteToDoApi(0).catch(error=>{
        console.log(error);
        expect(true).toBe(false);
    })
});
