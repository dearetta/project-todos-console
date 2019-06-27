const todosList = [ 'Jog in the morning', 'Breakfast at The Branche', 'Go to Supermarkt']


function showTodos (data) {

    for (let index =0; index< data.length; index++)
    {
        const items = data[index]

        console.log(`[index+1] ${items}`);
        
    }

}

function searchTodos (searchKey, data){
    let newTodos = [] //creating an array object 

  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    const lowerCasedItem = item.toLowerCase()
    const lowerCasedText = textToSearch.toLowerCase()

    if (lowerCasedItem.includes(lowerCasedText)) {
      newTodos.push(item)
    }
  }

  return newTodos
}

const foundTodos = searchTodos('Jog', todosList)
showTodos(foundTodos);