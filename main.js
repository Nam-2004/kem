// Thay đổi nội dung búc thư ở đây
var letterContent =" Lại 1 lần nữa lại đến ngày 12/5 như hàng năm❤️. Hôm nay anh viết tâm thư này :)) vì: Anh muốn cảm ơn ebe vì bé đã ở bên anh suốt thời gian vừa qua, anh muốn cảm ơn bé vì suốt thời gian qua ebe luôn cho anh những tình cảm đặc biệt cụ thể là những lúc yêu và những lúc dỗi anh🤣 không phải chê đâu nhá lên đừng bùn :)).Nói đùa thế thui giờ anh nói thật nè: Anh muốn nói rằng hiện tại anh cảm thấy rất hạnh phúc vì những gì anh đang có ví dụ anh đang có 1 cô bé siêu cute nè cực kì đáng yêu luôn ♥️ Anh cảm ơn ebe 365 ngày vừa qua đã bên anh và a hy vọng 365 ngày tiếp theo của 2 đứa sẽ là những ngày tuyệt vời nhất. TÓM LẠI ĐIỀU QUAN TRỌNG NHẤT ANH MUỐN NÓI LÀ ANH YÊU EM RẤT NHIỀU ♥️                             Chú thích nhẹ: Mnam khum giỏi văn lên viết ngu xíu nhưng mong ebe sẽ vui vì món quà anh đã chuẩn bị cho kem :3"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})