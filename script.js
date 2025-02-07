// 訪問者数をローカルストレージから取得または初期化
let visitorCount = localStorage.getItem('visitorCount') || 0;

// 管理者パスワード
const adminPassword = 'your_admin_password';

// 訪問者数を表示
document.getElementById('visitor-count').textContent = visitorCount;

// 管理者パネルを表示
function showAdminPanel() {
    document.getElementById('admin-panel').style.display = 'block';
}

// 管理者認証
function authenticateAdmin() {
    const enteredPassword = document.getElementById('password').value;
    if (enteredPassword === adminPassword) {
        document.getElementById('admin-message').textContent = `現在の訪問者数: ${visitorCount}`;
    } else {
        document.getElementById('admin-message').textContent = 'パスワードが正しくありません。';
    }
}

// 訪問者数を1増やす
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
