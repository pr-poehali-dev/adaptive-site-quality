// Скрипт для автоматического слайдера
document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000);
    
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide active';
    }
    
    // Добавляем паузу при наведении на слайдер
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', function() {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Добавляем поддержку свайпов для мобильных устройств
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (slider) {
        slider.addEventListener('touchstart', function(event) {
            touchStartX = event.changedTouches[0].screenX;
        }, false);
        
        slider.addEventListener('touchend', function(event) {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Свайп влево - следующий слайд
            nextSlide();
        }
        
        if (touchEndX > touchStartX + 50) {
            // Свайп вправо - предыдущий слайд
            slides[currentSlide].className = 'slide';
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].className = 'slide active';
        }
    }
    
    // Добавляем загрузку изображений с отложенной загрузкой для оптимизации
    const slideImages = document.querySelectorAll('.slide img');
    slideImages.forEach(function(img, index) {
        if (index !== 0) {
            img.loading = 'lazy';
        }
    });
    
    // Инициализируем первый слайд как активный
    if (slides.length > 0) {
        slides[0].className = 'slide active';
    }
});

// Помощники для анимации элементов при прокрутке страницы
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.custom-card, .text1, .text2, h2.text-center, .asorti');
        
        elements.forEach(function(element) {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Запускаем анимацию при загрузке и прокрутке
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запуск при начальной загрузке
    
    // Плавная прокрутка для всех внутренних ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Улучшения для мобильной навигации
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Закрытие меню при клике на пункт меню
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }
});
