function cal() {
    var price = parseInt($(".price").val())
    var Shipping = parseInt($(".shipping").val())
    var num = parseFloat($(".num").val())
    var totalPrice = Math.round((price + Shipping) * 256 / 1000)
    var finalPrice = Math.round(totalPrice + num * 250 + 60)
    // var vipPrice
//   var text = `<p>📣報價如下</br>🔷商品金額：`
//     if ($(".vip").prop("checked")) {
//         if (totalPrice >= 3000 && totalPrice < 5999) {
//             vipPrice = totalPrice - 60
//             finalPrice = Math.round(vipPrice + num * 250 + 60)
//             if (Shipping == 0) {
//                 text += `<span class="Price">${toCurrency(price)}</span> * 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>🔷週年慶滿額折抵：${toCurrency(totalPrice)} - 60 = ${toCurrency(vipPrice)}`
//             } else {
//                 text += `[<span class="Price">${toCurrency(price)}</span> + <span class="Shipping">${toCurrency(Shipping)}</span>(日本境內運費)] * 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>🔷週年慶滿額折抵：${toCurrency(totalPrice)} - 60 = ${toCurrency(vipPrice)}`
//             }
//         } else if (totalPrice >= 6000 && totalPrice < 8999) {
//             vipPrice = totalPrice - 100
//             finalPrice = Math.round(vipPrice + num * 250 + 60)
//             if (Shipping == 0) {
//                 text += `<span class="Price">${toCurrency(price)}</span>* 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>🔷週年慶滿額折抵：${toCurrency(totalPrice)} - 100 = ${toCurrency(vipPrice)}`
//             } else {
//                 text += `[<span class="Price">${toCurrency(price)}</span> + <span class="Shipping">${toCurrency(Shipping)}</span>(日本境內運費)] * 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>🔷週年慶滿額折抵：${toCurrency(totalPrice)} - 100 = ${toCurrency(vipPrice)}`
//             }
//         } else if (totalPrice >= 9000 && totalPrice < 11999) {
//             vipPrice = totalPrice - 150
//             finalPrice = Math.round(vipPrice + num * 250 + 60)
//             if (Shipping == 0) {
//                 text += `<span class="Price">${toCurrency(price)}</span>* 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>🔷週年慶滿額折抵：${toCurrency(totalPrice)} - 150 = ${toCurrency(vipPrice)}`
//             } else {
//                 text += `[<span class="Price">${toCurrency(price)}</span> + <span class="Shipping">${toCurrency(Shipping)}</span>(日本境內運費)] * 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>🔷週年慶滿額折抵：${toCurrency(totalPrice)} - 150 = ${toCurrency(vipPrice)}`
//             }
//         } else if (totalPrice >= 12000) {
//             vipPrice = totalPrice - 200
//             finalPrice = Math.round(vipPrice + num * 250 + 60)
//             if (Shipping == 0) {
//                 text += `<span class="Price">${toCurrency(price)}</span>* 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>🔷週年慶滿額折抵：${toCurrency(totalPrice)} - 200 = ${toCurrency(vipPrice)}`
//             } else {
//                 text += `[<span class="Price">${toCurrency(price)}</span> + <span class="Shipping">${toCurrency(Shipping)}</span>(日本境內運費)] * 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>🔷週年慶滿額折抵：${toCurrency(totalPrice)} - 200 = ${toCurrency(vipPrice)}`
//             }
//         }else{
//             alert('您尚未符合滿額折扣資格~\n>>商品金額約11,000，才會符合週年慶滿額折底呦！！')
//         }
//         text += `</br>
// 🔷國際運費：1公斤250元</br>
// 🔷應付金額：<span class="totalPrice">${toCurrency(vipPrice)}</span> + <span class="Num">250*${num}</span>(重量預估${num}kg以內) + 60(超商運費) = <span class="finalPrice">${toCurrency(finalPrice)}</span></p>`
//     } else {
//         if (Shipping == 0) {
//             text += `<span class="Price">${toCurrency(price)}</span>`
//         } else { text += `[<span class="Price">${toCurrency(price)}</span> + <span class="Shipping">${toCurrency(Shipping)}</span>(日本境內運費)]` }
//         text += ` * 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>
// 🔷國際運費：1公斤250元</br>
// 🔷應付金額：<span class="totalPrice">${toCurrency(totalPrice)}</span> + <span class="Num">250*${num}</span>(重量預估${num}kg以內) + 60(超商運費) = <span class="finalPrice">${toCurrency(finalPrice)}</span></p>`
//     }
var text = `<p>📣報價如下</br>🔷商品金額：`
if (Shipping == 0) {
        text += `<span class="Price">${toCurrency(price)}</span>`
    } else { text += `[<span class="Price">${toCurrency(price)}</span> + <span class="Shipping">${toCurrency(Shipping)}</span>(日本境內運費)]` }
    text += ` * 0.256 = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>
🔷國際運費：1公斤250元</br>
🔷應付金額：<span class="totalPrice">${toCurrency(totalPrice)}</span> + <span class="Num">250*${num}</span>(重量預估${num}kg以內) + 60(超商運費) = <span class="finalPrice">${toCurrency(finalPrice)}</span></p>`


    $(".text").html(text)
    $(".copy").html(`<button onClick="CopyTextToClipboard('.text')">點擊複製</button>`)
    $(".price").val("")
    $(".shipping").val("")
    $(".num").val("")
    console.log(text)
}

function CopyTextToClipboard(id) {
    var TextRange = document.createRange();
    TextRange.selectNode(document.querySelector(id));
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(TextRange);
    document.execCommand("copy");
    // alert("複製完成！")  //此行可加可不加
}


function toCurrency(num){
    var parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
    
}
