// Giả lập dữ liệu sách và người dùng
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
    { title: 'Tiểu thuyết 3', author: 'Tác giả N', category: 'Văn học', image: 'assets/nvscc.jpg', available: 2 },
    { title: 'Tiếng anh chuyên ngành', author: 'Tác giả O', category: 'Ngôn ngữ', image: 'assets/ta.jpg', available: 6 },
    { title: 'Lập trình Python', author: 'Tác giả P', category: 'Kỹ thuật', image: 'assets/python.jpg', available: 2 },
    { title: 'Tiểu thuyết 4', author: 'Tác giả Q', category: 'Văn học', image: 'assets/truyen.jpg', available: 2 },
    { title: 'Tiểu thuyết 5', author: 'Tác giả Z', category: 'Văn học', image: 'assets/tt.jpg', available: 2 },
    { title: 'Nhà giả kim', author: 'Tác giả T', category: 'Văn học', image: 'assets/ngk.jpg', available: 2 },
]
const users = [
    { username: "admin", password: "admin123", role: "admin"},
    { username: "user1", password: "password1", role: "user" }
];
let currentUser = null;
function isAuthenticated() {
    return currentUser !== null;
}
function isAdmin() {
    return currentUser && currentUser.role === 'admin';
}
// Xử lý đăng nhập
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; 
    currentUser = users.find(user => user.username === username && user.password === password);
    
    if (currentUser) {
        alert("Đăng nhập thành công!");
        document.querySelector('.login-button button').textContent = `Xin chào, ${currentUser.username}`;
        closeLoginForm(); 
        toggleAdminFunctions();
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}

// Hiển thị hoặc ẩn các chức năng cho admin
function toggleAdminFunctions() {
    const adminFunctions = document.getElementById('admin-functions');
    if (isAdmin()) {
        adminFunctions.style.display = 'block';
    } else {
        adminFunctions.style.display = 'none';
    }
}

// Tắt form đăng nhập
function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

// Xử lý tìm kiếm sách
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (!isAuthenticated()) {
        alert('Bạn cần đăng nhập để sử dụng chức năng này.');
        return;
    }
    const query = document.getElementById('search-query').value.toLowerCase();
    const searchResults = books.filter(book => book.title.toLowerCase().includes(query));
    displaySearchResults(searchResults);
});

// Hiển thị kết quả tìm kiếm
function displaySearchResults(searchResults) {
    const results = document.getElementById('search-results');
    results.innerHTML = ''; 
    if (searchResults.length > 0) {
        searchResults.forEach(book => {
            const li = document.createElement('div');
            li.className = 'book-item';
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
    } else {
        results.innerHTML = '<p>Không tìm thấy sách nào</p>';
    }
}
function toggleUtility() {
    const utilityMenu = document.getElementById("utility-menu");
    utilityMenu.style.display = utilityMenu.style.display === 'none' ? 'block' : 'none';
}
function showForm(formId) {
    document.querySelectorAll('.form-section > div').forEach(form => {
        form.style.display = 'none'; // Ẩn tất cả các form
    });
    document.getElementById(formId).style.display = 'block';
}
// Xử lý mượn sách
function borrowBook(bookTitle) {
    if (!isAuthenticated()) {
        alert('Bạn cần đăng nhập để sử dụng chức năng này.');
        return;
    }
    let book = books.find(b => b.title === bookTitle);
    if (book && book.available > 0) {
        book.available--;
        alert(`Bạn đã mượn sách: ${book.title}`);
        displaySearchResults(books.filter(b => b.available > 0));
    } else if (book) {
        alert(`Sách ${book.title} đã hết!`);
    }
}

// Xử lý trả sách
function returnBook() {
    if (!isAuthenticated()) {
        alert('Bạn cần đăng nhập để sử dụng chức năng này.');
        return;
    }
    const returnTitle = document.getElementById('returnBookTitle').value;
    let book = books.find(b => b.title === returnTitle);
    if (book) {
        book.available++;
        alert(`Bạn đã trả sách: ${book.title}`);
    } else {
        alert('Không tìm thấy sách để trả.');
    }
    document.getElementById('returnBookTitle').value = ''; 
}

// Xử lý thêm sách (chỉ dành cho admin)
document.getElementById('add-book-form-element').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (!isAuthenticated() || !isAdmin()) {
        alert("Bạn không có quyền thêm sách.");
        return;
    }

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const genre = document.getElementById('book-genre').value;

    books.push({ title, author, category: genre, image: 'assets/default.jpg', available: 1 });
    alert(`Đã thêm sách: ${title}`);
    document.getElementById('add-book-form-element').reset();
});

// Hiển thị tất cả sách
function showAllBooks() {
    if (!isAuthenticated()) {
        alert('Bạn cần đăng nhập để sử dụng chức năng này.');
        return;
    }
    displaySearchResults(books);
}

// Mở form đăng nhập
function openLoginForm() {
    document.getElementById('loginForm').style.display = 'flex';
}

// Tắt form đăng nhập
function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}
