const array = [
  {
    title: "Заголовок 1",
    text: "Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Но активно развивающиеся страны третьего мира представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть обнародованы.",
  },
  {
    title: "Заголовок 2",
    text: "Однозначно, некоторые особенности внутренней политики могут быть обнародованы. Задача организации, в особенности же высокотехнологичная концепция общественного уклада создаёт предпосылки для кластеризации усилий.",
  },
  {
    title: "Заголовок 3",
    text: "Равным образом, понимание сути ресурсосберегающих технологий способствует повышению качества глубокомысленных рассуждений. Являясь всего лишь частью общей картины, тщательные исследования конкурентов неоднозначны и будут описаны максимально подробно.",
  },
];

function handleClickBtn(index) {
  const textContent = `<h1>${array[index].title}</h1>
  <p>${array[index].text}</p>`;
  let blockTextContent = document.querySelector(".textContent");
  blockTextContent.innerHTML = textContent;
}

document.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("activeButton");
    });
    button.classList.add("activeButton");
    handleClickBtn(index);
  });
});

// console.log(document.querySelectorAll("button"))

document.addEventListener("DOMContentLoaded", function () {
  handleClickBtn(0);
});
