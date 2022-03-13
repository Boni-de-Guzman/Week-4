///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const totalCost = cart.reduce((a, c) => a + c.price, 0)

console.log(totalCost)

//////////////////PROBLEM 2////////////////////
/*
cls    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal + tax - couponValue
}

console.log(calcFinalPrice(13, 3, 0.06))


//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE

// Customer 
First Name-- To properly identify the right customer when possibly picking the order . This should be "string" because it contains text that use double or single qoutation mark.
Last Name - same thing as the first name . this is also string because it contains text.
Email Address-- if the customer doesnt want paper receipt they can send the receipt on his/her email, also it can send promotions or deals. This is also string.
Phone number-- this another way to verify of the customer also to notify if the order is ready or not . The type of data for this property is number.

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customerInfo = {
    firstName: "Boni",
    lastName: "De Guzman",
    emailAdrress: "boni.deg@gmail.com",
    phoneNumber: 7023130202,

}
console.log(customerInfo)