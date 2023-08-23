total = 0
function mainButtonClick(target){
    const cardName = target.childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = cardName
    const selectedMainItemContainer = document.getElementById('selected-main-Item')
    selectedMainItemContainer.appendChild(li)
    const mainPrice = target.childNodes[3].childNodes[5].childNodes[0].innerText
    total = parseFloat(total) + parseFloat(mainPrice)
    const dataBody = document.getElementById('main-total-price').innerText = total
    document.getElementById('main-total-amount').innerText = dataBody
    
    const purchaseBtn = document.getElementById('last-make-purchase')

    if (total > 0) {
        purchaseBtn.removeAttribute('disabled')
    } else {
        purchaseBtn.setAttribute('disabled', true)
    }
    const applyButton = document.getElementById('applyButton')
    if(total > 200){
        applyButton.removeAttribute('disabled')
    }
    else{
        applyButton.setAttribute('disabled', true)
    }
}

document.getElementById('refresh-button').addEventListener('click', function(){
    window.location.href='index.html'
})

document.getElementById('applyButton').addEventListener('click',function(){

    const discountInput = document.getElementById('main-discount-input').value;
    discountInput.value = '';
    console.log(discountInput)
    if(discountInput === 'SELL200'){

    var discountPercentage = 20
    var discountedPrice = (total * (discountPercentage / 100));
    const tofixedDiscountedPrice = discountedPrice.toFixed(2);
    document.getElementById('main-discount').innerText = tofixedDiscountedPrice;
    const totalAmount = total - tofixedDiscountedPrice;
    document.getElementById('main-total-amount').innerText =totalAmount;
    
    }else{
        alert('price')
    }
})

