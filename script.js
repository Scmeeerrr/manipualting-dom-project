// sets buttons as variavles
let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let remButton = document.getElementById("nothing-button");

// sets paragraph and image containers are variavles
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

// sets counters
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

// sets counter text
let pCount = document.getElementById("p-count");
let imgCount = document.getElementById("img-count");
let nothingCount = document.getElementById("nothing-count");

// when paragraph button is clicked
pButton.onclick = function() {
    imgDiv.style.display = "none"; // hides the image contanier from view
    pDiv.style.display = "";

    let newP = document.createElement("p"); // creates a NEW paragraph element
    newP.innerHTML = "Monkey D. Luffy";
    newP.style.padding = "5px";
    newP.style.color = "yellow";
    newP.style.backgroundColor = "black";
    pDiv.appendChild(newP); // appends new paragraph to div

    counter1++;
    pCount.innerHTML = counter1;
}

// when image button is clicked
imgButton.onclick = function() {
    pDiv.style.display = "none"; // hides the paragraph contanier from view
    imgDiv.style.display = "block";

    let newImg = document.createElement("img"); // creates a NEW image element
    newImg.src = "images/luffy-meme.png";
    newImg.style.width = "200px";
    imgDiv.appendChild(newImg); // appends new image to div

    counter2++;
    imgCount.innerHTML = counter2;
}

// when remove button is clicked
remButton.onclick = function() {
    pDiv.style.display = "none";
    imgDiv.style.display = "none";

    counter3++;
    nothingCount.innerHTML = counter3;
}

