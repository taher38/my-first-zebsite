<script>
function openModal(bookName) {
    document.getElementById('payment-modal').style.display = 'block';
    document.getElementById('selected-book-title').innerText = "أنت تطلب الآن: " + bookName;
    document.getElementById('book-input').value = bookName;
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

// ربط أزرار الشراء القديمة بالنافذة الجديدة
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function() {
        // يأخذ اسم الكتاب المكتوب في الكارد
        let bookTitle = this.parentElement.querySelector('h3').innerText;
        openModal(bookTitle);
    });
});
</script>
