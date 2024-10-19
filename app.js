//1
function text() {
    var paragraph = document.getElementById("paraqraf")
    paragraph.innerHTML = "metn deyisildi"
}

//2
function mesaj() {
    alert("mesaj gonderildi")
}

//3
const colorBox = document.getElementById('colorBox');
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
 colorBox.style.backgroundColor = 'lightblue';
});

//4
function oncilick() {
    var paragraph = document.querySelector(".paragraph")
    paragraph.innerHTML = "metn deyisildi"

}

//5

  const paragraphs = document.querySelectorAll('.deyis');
  const button = document.getElementById('deyismek');
  button.addEventListener('click', function() {
      paragraphs.forEach(function(paragraph, index) {
          paragraph.textContent =  "hamisi deyisildi";
      });
  });

  //6
  document.addEventListener('keypress', function(basilan) {
    const soz = basilan.key;

    document.getElementById('soz').textContent = `Basılan düymə: ${soz}`;
})

//7
const buton = document.querySelector('#goster');
const paragraph = document.querySelector('#p');
buton.addEventListener('click', function() {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
});

//8
const items = document.querySelectorAll('.color');
const color = document.querySelector('#button');
color.addEventListener('click', function() {
    items.forEach(function(item, index) {
        item.style.backgroundColor = getRandomColor();
    });
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//9
const hover = document.querySelector('.hover');
hover.addEventListener('mouseover', function() {
    hover.style.backgroundColor = 'red';
});
hover.addEventListener('mouseout', function() {
    hover.style.backgroundColor = 'lightgray';
})

//10

document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
        event.preventDefault();
    }
});


