//Referencing
const arrayRef = document.querySelector("#array");

const arr = ["false", 1, 0, 1, 2, 0, 1, 3, "a"];
//Function to push elements or zeros at the end of the Array
const pushAllZerosAtTheEnd = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
};
console.log(pushAllZerosAtTheEnd(arr));
arrayRef.innerHTML = arr;