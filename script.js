    document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar__link');
    const tabs = document.querySelectorAll('.tab-content');
    const exploreBtn = document.querySelector('.header__cta-btn');

    // Tìm thẻ Logo
const logo = document.querySelector('.navbar__logo--link');

// Nếu tìm thấy logo, gán sự kiện click cho nó
if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn trình duyệt load lại trang
        const targetId = logo.getAttribute('href'); // Lấy giá trị "#header"
        
        // Gọi hàm switchTab đã có trong code của bạn
        if (typeof switchTab === 'function') {
            switchTab(targetId); 
        } else {
            // Nếu bạn chưa gom nhóm hàm switchTab, hãy dùng logic này:
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.getElementById('header').classList.add('active');
            
            // Cập nhật luôn trạng thái sáng đèn cho nút Home trên Navbar
            document.querySelectorAll('.navbar__link').forEach(link => {
                link.classList.remove('navbar__link--active');
                if (link.getAttribute('href') === '#header') {
                    link.classList.add('navbar__link--active');
                }
            });
        }
        
        // Cuộn mượt lên đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

    function switchTab(targetId) {
        // 1. Ẩn tất cả các tab (Xóa active)
        tabs.forEach(tab => tab.classList.remove('active'));

        // 2. Hiện tab mục tiêu
        // Lưu ý: targetId có thể là "#about" hoặc "about" tùy cách lấy, ta xử lý chuỗi ở đây
        const cleanId = targetId.replace('#', '');
        const targetTab = document.getElementById(cleanId);
        
        if (targetTab) {
            targetTab.classList.add('active');
        }

        // 3. Cập nhật trạng thái Navbar
        navLinks.forEach(link => {
            link.classList.remove('navbar__link--active');
            if (link.getAttribute('href') === `#${cleanId}`) {
                link.classList.add('navbar__link--active');
            }
        });

        // 4. Cuộn lên đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Gán sự kiện cho Navbar
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Chỉ xử lý nếu href bắt đầu bằng # (link nội bộ)
            if (href.startsWith('#')) {
                e.preventDefault();
                switchTab(href);
            }
        });
    });

    // Gán sự kiện cho nút Explore My Work
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab('#projects');
        });
    }
});
switchTab('#header');