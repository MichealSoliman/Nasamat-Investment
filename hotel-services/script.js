//  script about section
    // السلايدر
    document.addEventListener('DOMContentLoaded', function () {
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      let currentSlide = 0;
      let slideInterval;

      // عرض الشريحة المحددة
      function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
      }

      // الشريحة التالية
      function nextSlide() {
        showSlide(currentSlide + 1);
      }

      // الشريحة السابقة
      function prevSlide() {
        showSlide(currentSlide - 1);
      }

      // بدء التشغيل التلقائي
      function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
      }

      // إيقاف التشغيل التلقائي
      function stopSlideShow() {
        clearInterval(slideInterval);
      }

      // الأحداث
      nextBtn.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
      });

      prevBtn.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
      });

      dots.forEach(dot => {
        dot.addEventListener('click', function () {
          stopSlideShow();
          showSlide(parseInt(this.dataset.slide));
          startSlideShow();
        });
      });

      // تأثيرات الظهور
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
      });

      // بدء السلايدر
      startSlideShow();
    });
  
    // end script about section



    // start script services section


     
        // بيانات الخدمات التسع
        const services = {
            1: {
                title: "الشقق الفندقية المخدومة",
                subtitle: "إدارة متكاملة لتجربة إقامة استثنائية",
                icon: "🏠",
                image: "../asstes/img/hotel-apartments.png",
                description: "نقدم حزمة متكاملة من الخدمات لإدارة الشقق الفندقية المخدومة، بدءاً من استقبال النزلاء وحتى تقديم الخدمات اليومية. نضمن تجربة إقامة استثنائية تجمع بين راحة المنزل ورفاهية الفندق، مع الحفاظ على أعلى معايير الجودة والخدمة.",
                features: [
                    {
                        icon: "🛎️",
                        title: "خدمة الغرف الشاملة",
                        description: "تنظيف يومي محترف وتجهيز الغرف بأعلى المعايير"
                    },
                    {
                        icon: "📞",
                        title: "دعم على مدار الساعة",
                        description: "فريق دعم متاح 24/7 لخدمة النزلاء وتلبية احتياجاتهم"
                    },
                    {
                        icon: "💼",
                        title: "إدارة الحجوزات",
                        description: "نظام حجوزات متكامل وإدارة الإشغال الذكية"
                    },
                    {
                        icon: "🎯",
                        title: "مراقبة الجودة",
                        description: "مراقبة مستمرة لجودة الخدمات ورضا النزلاء"
                    }
                ],
                details: [
                    {
                        icon: "⏱️",
                        value: "24/7",
                        label: "خدمة على مدار الساعة"
                    },
                    {
                        icon: "⭐",
                        value: "5 نجوم",
                        label: "معايير الخدمة"
                    },
                    {
                        icon: "👥",
                        value: "50+",
                        label: "شقة مُدارة"
                    },
                    {
                        icon: "📊",
                        value: "98%",
                        label: "رضا العملاء"
                    }
                ]
            },
            2: {
                title: "خدمات تشغيل وصيانة الفنادق",
                subtitle: "تشغيل احترافي وصيانة متكاملة بمعايير عالمية",
                icon: "🛎️",
                image: "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1000&q=80",
                description: "نقدم حلولاً متكاملة لتشغيل وصيانة الفنادق، تشمل الإدارة اليومية، والخدمات التشغيلية، والصيانة الوقائية والدورية لجميع المرافق، لضمان استمرارية الأداء الفندقي بأعلى جودة وكفاءة.",
                features: [
                    {
                        icon: "⚙️",
                        title: "تشغيل متكامل",
                        description: "إدارة العمليات التشغيلية اليومية لجميع أقسام الفندق بكفاءة عالية"
                    },
                    {
                        icon: "🛠️",
                        title: "صيانة شاملة",
                        description: "تنفيذ خطط الصيانة الوقائية والتصحيحية للحفاظ على المرافق في أفضل حالة"
                    },
                    {
                        icon: "👷‍♂️",
                        title: "فريق فني متخصص",
                        description: "كوادر مؤهلة في مجالات الكهرباء، السباكة، التكييف، والنظافة"
                    },
                    {
                        icon: "💡",
                        title: "تحسين الكفاءة التشغيلية",
                        description: "مراقبة مستمرة للأداء التشغيلي وخفض التكاليف مع الحفاظ على الجودة"
                    }
                ],
                details: [
                    {
                        icon: "🏨",
                        value: "25+",
                        label: "منشأة فندقية مدارة"
                    },
                    {
                        icon: "🕒",
                        value: "24/7",
                        label: "خدمات تشغيل وصيانة"
                    },
                    {
                        icon: "🔧",
                        value: "100%",
                        label: "جاهزية المرافق"
                    },
                    {
                        icon: "⭐",
                        value: "98%",
                        label: "رضا النزلاء"
                    }
                ]
            },

           3: {
    title: "إدارة وتشغيل الفنادق",
    subtitle: "تجربة ضيافة متميزة بمعايير تشغيل عالمية",
    icon: "🏨",
    image: "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1000&q=80",
    description: "نقدم خدمات إدارة وتشغيل الفنادق بمستوى احترافي يضمن تجربة إقامة استثنائية للنزلاء. تشمل خدماتنا إدارة العمليات اليومية، الإشراف على الأداء، تحسين تجربة العملاء، وتحقيق أعلى معدلات الكفاءة التشغيلية والربحية.",
    features: [
        {
            icon: "🛎️",
            title: "تشغيل متكامل للفنادق",
            description: "إدارة كافة الأقسام التشغيلية من استقبال، ضيافة، ومطاعم لضمان تجربة فندقية راقية."
        },
        {
            icon: "👨‍💼",
            title: "إدارة الكوادر والموارد البشرية",
            description: "توظيف، تدريب، وتطوير الكوادر الفندقية لضمان أداء متميز وخدمة احترافية."
        },
        {
            icon: "📈",
            title: "تحسين الأداء والربحية",
            description: "تحليل الأداء التشغيلي والمالي وابتكار حلول لرفع الكفاءة وخفض التكاليف."
        },
        {
            icon: "⭐",
            title: "تجربة نزلاء استثنائية",
            description: "ضمان أعلى معايير الراحة والخدمة المخصصة لزيادة رضا النزلاء وولائهم."
        }
    ],
    details: [
        {
            icon: "🏨",
            value: "30+",
            label: "فنادق مُدارة"
        },
        {
            icon: "🕒",
            value: "24/7",
            label: "تشغيل مستمر"
        },
        {
            icon: "📊",
            value: "95%",
            label: "رضا العملاء"
        },
        {
            icon: "💼",
            value: "20+",
            label: "عام خبرة تشغيلية"
        }
    ]
},

4: {
    title: "تجربة إقامة متميزة",
    subtitle: "راحة استثنائية وجودة تفوق التوقعات",
    icon: "🌟",
    image: "https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1000&q=80",
    description: "نهدف إلى تقديم تجربة إقامة فندقية راقية تضمن للنزلاء أقصى درجات الراحة والرفاهية. نركز على جودة الخدمة، التفاصيل الدقيقة، وخلق أجواء من التميز تجعل الإقامة تجربة لا تُنسى.",
    features: [
        {
            icon: "🛏️",
            title: "غرف راقية ومريحة",
            description: "تصميم عصري يحقق أقصى درجات الراحة مع الاهتمام بأدق التفاصيل."
        },
        {
            icon: "🍽️",
            title: "خدمات ضيافة راقية",
            description: "خيارات طعام متنوعة وتجربة طهو مميزة تلبي جميع الأذواق."
        },
        {
            icon: "🤝",
            title: "خدمة عملاء مخصصة",
            description: "فريق متواجد دائماً لتلبية احتياجات النزلاء وضمان رضاهم الكامل."
        },
        {
            icon: "🏖️",
            title: "مرافق ترفيهية متميزة",
            description: "منتجعات، صالات رياضية، ومرافق استجمام توفر بيئة مريحة وممتعة."
        }
    ],
    details: [
        {
            icon: "⭐",
            value: "4.9/5",
            label: "تقييم النزلاء"
        },
        {
            icon: "🕒",
            value: "24/7",
            label: "خدمة الغرف"
        },
        {
            icon: "👥",
            value: "150K+",
            label: "نزيل سنوياً"
        },
        {
            icon: "💎",
            value: "100%",
            label: "رضا العملاء"
        }
    ]
},

5: {
    title: "الاستشارات الفندقية",
    subtitle: "رؤية استراتيجية لتحقيق التميز الفندقي",
    icon: "💼",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    description: "نقدم خدمات استشارية متكاملة لمشاريع الضيافة والفنادق، تشمل التخطيط الاستراتيجي، وتحليل الأداء، وتطوير العمليات لضمان تحقيق أفضل النتائج التشغيلية والمالية وفق المعايير العالمية.",
    features: [
        {
            icon: "📊",
            title: "دراسات الجدوى",
            description: "تحليل شامل لتحديد جدوى المشاريع الفندقية واستراتيجيات الاستثمار."
        },
        {
            icon: "🎯",
            title: "تخطيط استراتيجي",
            description: "وضع خطط تشغيل وتطوير شاملة لتحقيق أهداف مستدامة."
        },
        {
            icon: "🏨",
            title: "تطوير الأداء",
            description: "تحسين العمليات الفندقية ورفع كفاءة الكوادر والإنتاجية."
        },
        {
            icon: "🤝",
            title: "دعم وتشغيل احترافي",
            description: "تقديم حلول استشارية وتشغيلية مخصصة وفق طبيعة كل منشأة."
        }
    ],
    details: [
        {
            icon: "📁",
            value: "120+",
            label: "مشروع استشاري"
        },
        {
            icon: "🧠",
            value: "20+",
            label: "خبير فندقي"
        },
        {
            icon: "🏆",
            value: "98%",
            label: "رضا العملاء"
        },
        {
            icon: "📈",
            value: "15 سنة",
            label: "خبرة ميدانية"
        }
    ]
},

 
  
        };

        // متغيرات المودال
        let currentService = 1;
        const modal = document.getElementById('serviceModal');
        const modalClose = document.getElementById('modalClose');
        const prevBtn = document.getElementById('prevService');
        const nextBtn = document.getElementById('nextService');
        const contactBtn = document.getElementById('modalContact');

        // فتح المودال
        document.querySelectorAll('.read-more').forEach(btn => {
            btn.addEventListener('click', function() {
                const serviceCard = this.closest('.service-card');
                currentService = parseInt(serviceCard.dataset.service);
                openModal(currentService);
            });
        });

        // فتح المودال
        function openModal(serviceId) {
            const service = services[serviceId];
            
            document.getElementById('modalImage').src = service.image;
            document.getElementById('modalIcon').textContent = service.icon;
            document.getElementById('modalTitle').textContent = service.title;
            document.getElementById('modalSubtitle').textContent = service.subtitle;
            document.getElementById('modalDescription').textContent = service.description;
            
            // تعبئة المميزات
            const featuresContainer = document.getElementById('modalFeatures');
            featuresContainer.innerHTML = '';
            service.features.forEach(feature => {
                featuresContainer.innerHTML += `
                    <div class="feature-item">
                        <div class="feature-icon">${feature.icon}</div>
                        <div class="feature-content">
                            <h4>${feature.title}</h4>
                            <p>${feature.description}</p>
                        </div>
                    </div>
                `;
            });
            
            // تعبئة التفاصيل
            const detailsContainer = document.getElementById('modalDetails');
            detailsContainer.innerHTML = '';
            service.details.forEach(detail => {
                detailsContainer.innerHTML += `
                    <div class="detail-item">
                        <div class="detail-icon">${detail.icon}</div>
                        <div class="detail-value">${detail.value}</div>
                        <div class="detail-label">${detail.label}</div>
                    </div>
                `;
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // إغلاق المودال
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // التنقل بين الخدمات
        prevBtn.addEventListener('click', () => {
            currentService = currentService > 1 ? currentService - 1 : Object.keys(services).length;
            openModal(currentService);
        });

        nextBtn.addEventListener('click', () => {
            currentService = currentService < Object.keys(services).length ? currentService + 1 : 1;
            openModal(currentService);
        });

        // زر الاتصال
        contactBtn.addEventListener('click', () => {
            alert('سيتم تحويلك إلى صفحة الاتصال');
            closeModal();
        });

        // أزرار الاتصال في الكروت
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                alert('سيتم تحويلك إلى صفحة الاتصال');
            });
        });

        // إغلاق المودال بالزر ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
     // end script services section
     // start script testimonials section


       
        // تأثيرات الظهور
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('[data-aos]').forEach(el => {
                observer.observe(el);
            });

            // تأثير hover إضافي للكروت
            const cards = document.querySelectorAll('.ns-testimonial-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-15px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-10px) scale(1)';
                });
            });
        });
 // end script testimonials section