// 按钮点击交互
function showMessage() {
    alert('欢迎来到我的网站！');
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 控制台输出
console.log('网站已加载完成！');

// 添加滚动效果
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = '#1a252f';
    } else {
        header.style.background = '#2c3e50';
    }
});