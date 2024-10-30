// Giả lập dữ liệu sách
let books = [
    { title: 'Bầu trời năm ấy', author: 'Tác giả A', category: 'Văn học', image: 'assets/bt.jpg', available: 3 },
    { title: 'Dế mèn phiêu lưu kí', author: 'Tác giả B', category: 'Văn học', image: 'assets/de.jpg', available: 5 },
    { title: 'Đắc Nhân Tâm', author: 'Tác giả C', category: 'Văn học', image: 'assets/dnt.jpg', available: 7 },
    { title: 'Doraemon', author: 'Tác giả D', category: 'Truyện tranh', image: 'assets/doraemon.jpg', available: 8 },
    { title: 'Cấu trúc dữ liệu và giải thuật', author: 'Tác giả E', category: 'Kỹ thuật', image: 'assets/dsa.jpg', available: 22 },
    { title: 'Harry Potter', author: 'Tác giả F', category: 'Văn học', image: 'assets/hp.jpg', available: 5 },
    { title: 'HTML5 & CSS3', author: 'Tác giả G', category: 'Kỹ thuật', image: 'assets/html.jpg', available: 0 },
    { title: 'Tiểu thuyết 1', author: 'Tác giả H', category: 'Văn học', image: 'assets/hv.jpg', available: 8 },
    { title: 'Tự học JavaScript', author: 'Tác giả I', category: 'Kỹ thuật', image: 'assets/javascript.jpg', available: 2 },
    { title: 'ktlt', author: 'Tác giả K', category: 'Kỹ thuật', image: 'assets/ktlt.jpg', available: 1 },
    { title: 'Cuộc sống và lập trình', author: 'Tác giả L', category: 'Kỹ thuật', image: 'assets/ls.jpg', available: 21 },
    { title: 'Tiểu thuyết 2', author: 'Tác giả M', category: 'Văn học', image: 'assets/nmt.jpg', available: 10 },
    { title: 'Tiểu thuyết 3', author: 'Tác giả N', category: 'Văn học', image: 'assets/nvscc.jpg', available: 2 } ,
    { title: 'Tiếng anh chuyên ngành', author: 'Tác giả O', category: 'Ngôn ngữ', image: 'assets/ta.jpg', available: 6 },
    { title: 'Lập trình Python', author: 'Tác giả P', category: 'Kỹ thuật', image: 'assets/python.jpg', available: 2 },
    { title: 'Tiểu thuyết 4', author: 'Tác giả Q', category: 'Văn học', image: 'assets/truyen.jpg', available: 2 },
    { title: 'Tiểu thuyết 5', author: 'Tác giả Z', category: 'Văn học', image: 'assets/tt.jpg', available: 2 },
    { title: 'Nhà giả kim', author: 'Tác giả Z', category: 'Văn học', image: 'assets/ngk.jpg', available: 2 },
];

// Xử lý tìm kiếm sách
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form reload trang
    const query = document.getElementById('search-query').value.toLowerCase();
    const searchResults = books.filter(book => book.title.toLowerCase().includes(query));
    displaySearchResults(searchResults);
});
// Hàm hiển thị tất cả các sách
function showAllBooks() {
    const results = document.getElementById('search-results');
    results.innerHTML = ''; // Xóa kết quả tìm kiếm
    results.style.display = 'block'; // Hiển thị lại danh sách sách
    document.getElementById('back-button').style.display = 'none'; // Ẩn nút quay lại

    // Hiển thị tất cả sách
    books.forEach(book => {
        const li = document.createElement('div');
        li.className = 'book-item'; // Thêm class cho từng sách
        li.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-details">
                <strong>${book.title}</strong> - ${book.author} <br>
                Thể loại: ${book.category} <br>
                Còn lại: ${book.available} quyển
            </div>
            <button onclick="borrowBook('${book.title}')">Mượn sách</button>
        `;
        results.appendChild(li);
    });
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults(books) {
    const results = document.getElementById('search-results');
    results.innerHTML = ''; // Xóa kết quả cũ
    if (books.length > 0) {
        books.forEach(book => {
            const li = document.createElement('div');
            li.className = 'book-item'; // Thêm class cho từng sách
            li.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <div class="book-details">
                    <strong>${book.title}</strong> - ${book.author} <br>
                    Thể loại: ${book.category} <br>
                    Còn lại: ${book.available} quyển
                </div>
                <button onclick="borrowBook('${book.title}')">Mượn sách</button>
            `;
            results.appendChild(li);
        });
        document.getElementById('back-button').style.display = 'block'; // Hiển thị nút quay lại
    } else {
        results.innerHTML = '<p>Không tìm thấy sách nào</p>';
        document.getElementById('back-button').style.display = 'none'; // Ẩn nút quay lại nếu không có kết quả
    }
}


// Hiển thị kết quả tìm kiếm
function displaySearchResults(books) {
    const results = document.getElementById('search-results');
    results.innerHTML = ''; // Xóa kết quả cũ
    if (books.length > 0) {
        books.forEach(book => {
            const li = document.createElement('div');
            li.className = 'book-item'; // Thêm class cho từng sách
            li.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <div class="book-details">
                    <strong>${book.title}</strong> - ${book.author} <br>
                    Thể loại: ${book.category} <br>
                    Còn lại: ${book.available} quyển
                </div>
                <button onclick="borrowBook('${book.title}')">Mượn sách</button>
            `;
            results.appendChild(li);
        });
        document.getElementById('back-button').style.display = 'block';
    } else {
        results.innerHTML = '<p>Không tìm thấy sách nào</p>';
        document.getElementById('back-button').style.display = 'none';
    }
}

// Xử lý mượn sách
function borrowBook(bookTitle) {
    alert(`Bạn đã chọn mượn sách: ${bookTitle}`);
}

// Mở form đăng nhập
function openLoginForm() {
    document.getElementById('loginForm').style.display = 'flex';
}

// Đóng form đăng nhập
function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

// Dữ liệu tài khoản giả lập
const users = [
    { username: "admin", password: "admin123" },
    { username: "user1", password: "password1" }
];

// Xử lý đăng nhập
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tài khoản và mật khẩu
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert("Đăng nhập thành công!");
        closeLoginForm();
        document.querySelector('.login-button button').textContent = `Xin chào, ${user.username}`;
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}
