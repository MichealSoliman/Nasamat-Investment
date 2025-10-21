// script header

  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const overlay = document.getElementById('mobile-menu-overlay');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.add('active');
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.remove('active');
  }

  mobileMenuBtn.addEventListener('click', openMenu);
  mobileMenuCloseBtn.addEventListener('click', closeMenu);

  // Close menu when clicking outside
  overlay.addEventListener('click', closeMenu);

  // Optional: close menu on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
//   end script header



// script hero section

  // عند تحميل الصفحة
  window.addEventListener('load', () => {
    const banner = document.getElementById('cards-banner');
    const cards = document.querySelectorAll('.card-item');

    // إظهار البانر (القسم نفسه)
    banner.classList.remove('opacity-0', 'translate-y-[80px]');
    banner.classList.add('opacity-100', 'translate-y-0');

    // إظهار كل كارت بتأخير مختلف
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.remove('opacity-0', 'translate-x-[80px]', '-translate-x-[80px]', '-translate-y-[80px]');
        card.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
      }, i * 200 + 300); // التأخير التدريجي
    });
  });



   
        // تشغيل الأنيميشن عند تحميل الصفحة للكروت
        window.addEventListener("load", () => {
            const cards = document.querySelectorAll(".card");
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 300);
            });
        });

        // التحكم بالصور المتغيرة مع التأثير والانتقال الناعم
        document.addEventListener("DOMContentLoaded", () => {
            const slides = document.querySelectorAll('.slide');
            const indicators = document.querySelectorAll('.slide-indicator');
            let currentSlide = 0;
            let intervalTime = 6000;
            let slideInterval;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
                indicators.forEach((ind, i) => {
                    ind.classList.toggle('active', i === index);
                });
                currentSlide = index;
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            // تشغيل العرض التلقائي
            slideInterval = setInterval(nextSlide, intervalTime);

            // التعامل مع النقر على نقاط التنقل
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    showSlide(index);
                    clearInterval(slideInterval);
                    slideInterval = setInterval(nextSlide, intervalTime);
                });
            });

            // عرض أول صورة مبدئياً
            showSlide(currentSlide);
        });
    


  // تشغيل الأنيميشن عند تحميل الصفحة للكروت
  window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 300); // تأخير بسيط بين كل كارت
    });
  });

  // التحكم بالصور المتغيرة مع التأثير والانتقال الناعم
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    let currentSlide = 0;
    let intervalTime = 6000;
    let slideInterval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
      });
      currentSlide = index;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // تشغيل العرض التلقائي
    slideInterval = setInterval(nextSlide, intervalTime);

    // التعامل مع النقر على نقاط التنقل
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        showSlide(index);
        clearInterval(slideInterval); // إيقاف العرض التلقائي عند النقر
        slideInterval = setInterval(nextSlide, intervalTime); // إعادة تشغيله بعد النقر
      });
    });

    // عرض أول صورة مبدئياً
    showSlide(currentSlide);
  });


// script hero section end


// script our work section

        // فلترة المشاريع
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectItems = document.querySelectorAll('.project-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // إزالة النشاط من جميع الأزرار
                    filterButtons.forEach(btn => {
                        btn.classList.remove('active', 'bg-[#285b52]', 'text-white');
                        btn.classList.add('bg-gray-100', 'text-gray-700');
                    });

                    // إضافة النشاط للزر المختار
                    this.classList.add('active', 'bg-[#285b52]', 'text-white');
                    this.classList.remove('bg-gray-100', 'text-gray-700');

                    const filterValue = this.getAttribute('data-filter');

                    // تصفية المشاريع
                    projectItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 50);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 400);
                        }
                    });
                });
            });

            // أنيميشن الظهور عند التمرير
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);

            // مراقبة العناصر المتحركة
            document.querySelectorAll('.project-card, .section-title').forEach(el => {
                observer.observe(el);
            });
        });
   
// end script our work section