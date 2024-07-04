function reqListener() {
    const counteryArr = (JSON.parse(this.responseText)) ;
    // console.log(counteryArr)
    for (let countery of counteryArr){
    console.log(countery.flags.png)
    }
  }
 

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

  