// Active state
{
    const sections = document.querySelectorAll("header, section, footer");
    const navLinks = document.querySelectorAll(".navbar__link");

    const options = {
        // Kích hoạt khi phần đó chiếm 60% diện tích màn hình
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");

                navLinks.forEach((link) => {
                    // Xóa bỏ class active cũ ở tất cả các link
                    link.classList.remove("navbar__link--active");

                    // Nếu href của link khớp với ID của phần đang hiển thị thì thêm class active
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("navbar__link--active");
                    }
                });
            }
        });
    }, options);

    // Bắt đầu theo dõi từng section
    sections.forEach((section) => {
        observer.observe(section);
    });
}