// 1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
// a.	Use at least one array.
// b.	Use at least two classes.
// c.	Your menu should have the options to create, view, and delete elements.

//step 1 - Setup, including empty arrays and classes. 

let emptyArray = []

//menu Class holds all the information about the menu item.
class Menu {
    constructor(itemName, itemDescription, itemPrice){
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice
    }
//this method will have the emptyArray passed in and added to.
    addMenuItem(array){
        array.push("------")
        array.push(this.itemName )
        array.push(this.itemDescription)
        array.push("$" + parseInt(this.itemPrice))
    }

}


class Deletor {
    constructor(itemName, itemIndex){
        this.itemName = itemName
        this.itemIndex = itemIndex
    }

//this method will have the emptyArray passed in and deleted based on the food item requested.
//based on the creation method, each new menu name will be index 1, 5, 9, 13 etc. 
//deleting item 1, for example....would require deleting index 0, 1, 2, 3
//so I need to take in the array, search for the index of this.name, delete this.name's index value - 1 and 4 more indexes with splice method.
deleteMenuItem(array){

    array.splice(this.itemIndex - 1, 4)
    }
}




//create while loop to maintain the menu. continueDisplay holds the switch to shutting off the while loop.

let continueDisplay = true

while (continueDisplay === true){
    const customerEntry = prompt("0 - Exit Program\n" + "1 - Add Menu Item\n" + "2 - Delete Menu Item\n" + "3 - View Entire Menu\n", "Type a valid number entry")

    //if 0 or cancel is pressed, exit while loop.
    if (customerEntry === null || customerEntry === "0") {
    alert("Exiting Menu Program. Please refresh to reopen the application.")
    continueDisplay = false
    } else if (customerEntry === "") {
        alert("Please select a valid entry.")
    } else if (customerEntry === "1"){
        //creates a new instance of the Menu class using prompts provided by user.
        let newMenuName = prompt("What is the name of the dish?")
        let newMenuDesc = prompt("Please describe the dish in one short sentence.")
        let newMenuPrice = prompt("Please enter a price for the dish without the $ sign.")
        let newMenuItem = new Menu(newMenuName, newMenuDesc, newMenuPrice)
        //pass in master array for manipulation by the method.
        newMenuItem.addMenuItem(emptyArray)
    } else if (customerEntry === "2"){
        //prompts user to specify the menu item name to delete. 
        console.log(emptyArray)
        let deletionFinder = prompt("Please specify the name of the dish you want to delete.", "You must type the menu item in exactly.")
        //searches through master array, looking for a match. 
        for (i=0; i <= emptyArray.length; i++){
            if (deletionFinder === emptyArray[i]){
                //finding a match will create a new deletor object with the index value and its number passed into deleteMenu item.
                let indexValue = emptyArray[i]
                let indexNumber = i
                let menuDeleter = new Deletor(indexValue, indexNumber)
                menuDeleter.deleteMenuItem(emptyArray)
            }
        }
        
    //to have a nice clean menu look, commas and line breaks are added. look for numbers and add # sign.    
    } else if (customerEntry === "3"){
        let finalArray = emptyArray.join(' \n')
        alert(finalArray)
    }
}

//Mentor Session Questions:

//1) How can I make this code more readable/clean?
//2) Say I wanted to create another option that the customer could modify the name, description, or price of an already existing item. How would I do that?


