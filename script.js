function maxSubarrayWith0Sum(arr) {
    //using kedan's method
    let sum = 0;
    let maxLength = 0;
    const n = arr.length;
    const hasMap = new Map();
    for (let i = 0; i < n; i++){
    sum += arr[i];
    if (arr[i] == 0 && maxLength == 0) maxLength = 1;
    if (sum == 0) maxLength = i + 1;
    if (hasMap.has(sum)) maxLength = Math.max(maxLength, i - hasMap.get(sum));
    else hasMap.set(sum, i);
    }
    if (sum === 0) return n;
    return maxLength;
    }
    
    const btn = document.getElementById("_mybtn");
    btn.addEventListener("click", () => {
    const inputVal = document.getElementById("_myinput").value;
    if(inputVal.length===0) return window.alert("Please add some values");
    let separatedValArr = inputVal.split(",").map(Number);
    document.getElementById("_myoutput").innerHTML = maxSubarrayWith0Sum(separatedValArr);
    });
