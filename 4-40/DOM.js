const mainTitle = document.getElementById("main-title")
console.log(mainTitle);

const contents = document.getElementsByClassName("contents")
console.log(contents);

// idで指定したwrapperを取得
const wrapper = document.getElementById("wrapper")
// 挿入するHTML要素
const newBox = `<div class="new-box">new-box要素</div>`

// setTimeoutはJavaScriptが用意している関数です
setTimeout(function () {
// wrapper要素内先頭のnewBoxに代入されたHTML要素を挿入
wrapper.insertAdjacentHTML("afterbegin", newBox)
// wrapper要素の直後にnewBoxへ代入されたHTML要素を挿入
wrapper.insertAdjacentHTML("afterend", newBox)
}, 3000)


// idで指定したparentを取得
const parent = document.getElementById("parent")
// idで取得したchildを取得
const child = document.getElementById("child")

setTimeout(function () {
  // 3秒後に#child要素が削除される
  parent.removeChild(child)
}, 3000)