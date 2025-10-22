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
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
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
                title: "إدارة الفنادق",
                subtitle: "حلول إدارية متكاملة بمعايير عالمية",
                icon: "🏨",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
                description: "إدارة شاملة للفنادق بكافة أقسامها التشغيلية والإدارية. نضمن تقديم خدمات فندقية استثنائية مع الحفاظ على أعلى معايير الجودة والكفاءة التشغيلية، وتحقيق أعلى معدلات رضا العملاء.",
                features: [
                    {
                        icon: "🎯",
                        title: "إدارة العمليات",
                        description: "إدارة كافة الأقسام والعمليات الفندقية بكفاءة عالية"
                    },
                    {
                        icon: "🔧",
                        title: "الصيانة الشاملة",
                        description: "برامج صيانة وقائية وتصليحات فورية لجميع المرافق"
                    },
                    {
                        icon: "👨‍💼",
                        title: "تدريب الكوادر",
                        description: "تأهيل وتدريب فريق العمل بشكل مستمر ومتخصص"
                    },
                    {
                        icon: "📈",
                        title: "تحسين الأداء",
                        description: "مراقبة وتحسين مؤشرات الأداء التشغيلي والمالي"
                    }
                ],
                details: [
                    {
                        icon: "🏨",
                        value: "30+",
                        label: "فندق مُدار"
                    },
                    {
                        icon: "⚡",
                        value: "95%",
                        label: "كفاءة تشغيلية"
                    },
                    {
                        icon: "🛠️",
                        value: "24/7",
                        label: "دعم فني"
                    },
                    {
                        icon: "💰",
                        value: "40%",
                        label: "توفير في التكاليف"
                    }
                ]
            },
            3: {
                title: "إدارة المشاريع",
                subtitle: "تخطيط وتنفيذ متكامل للمشاريع الفندقية",
                icon: "📋",
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
                description: "إشراف متكامل على المشاريع الفندقية منذ مرحلة التخطيط وحتى التشغيل. نضمن تنفيذ المشاريع ضمن الميزانية المحددة والجداول الزمنية مع الحفاظ على أعلى معايير الجودة والسلامة.",
                features: [
                    {
                        icon: "📋",
                        title: "تخطيط المشاريع",
                        description: "دراسات الجدوى والتخطيط الاستراتيجي المتكامل"
                    },
                    {
                        icon: "👷",
                        title: "إشراف على التنفيذ",
                        description: "مراقبة ومتابعة تنفيذ المشاريع بدقة عالية"
                    },
                    {
                        icon: "💰",
                        title: "إدارة الميزانيات",
                        description: "التحكم في التكاليف والموارد المالية بكفاءة"
                    },
                    {
                        icon: "📊",
                        title: "تقارير الأداء",
                        description: "تقارير دورية شاملة عن سير المشاريع"
                    }
                ],
                details: [
                    {
                        icon: "📅",
                        value: "200+",
                        label: "مشروع منجز"
                    },
                    {
                        icon: "✅",
                        value: "100%",
                        label: "التزام بالجداول"
                    },
                    {
                        icon: "🎯",
                        value: "15+",
                        label: "سنة خبرة"
                    },
                    {
                        icon: "💎",
                        value: "5 نجوم",
                        label: "تقييم العملاء"
                    }
                ]
            },
            4: {
                title: "الصيانة والتشغيل",
                subtitle: "ضمان استمرارية العمل بكفاءة عالية",
                icon: "🔧",
                image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
                description: "برامج صيانة وقائية وشاملة لجميع مرافق ومعدات الفنادق. نضمن استمرارية العمل دون انقطاع والحفاظ على جودة الخدمات المقدمة، مع تقليل التكاليف التشغيلية وزيادة عمر الأصول.",
                features: [
                    {
                        icon: "🛠️",
                        title: "الصيانة الوقائية",
                        description: "برامج صيانة دورية لمنع الأعطال والمشاكل"
                    },
                    {
                        icon: "⚡",
                        title: "الصيانة الطارئة",
                        description: "استجابة سريعة للأعطال الطارئة على مدار الساعة"
                    },
                    {
                        icon: "📝",
                        title: "سجلات الصيانة",
                        description: "توثيق كامل لجميع عمليات الصيانة والإصلاح"
                    },
                    {
                        icon: "💡",
                        title: "تحسين الكفاءة",
                        description: "تحسين أداء المعدات وتقليل استهلاك الطاقة"
                    }
                ],
                details: [
                    {
                        icon: "⏰",
                        value: "30 دقيقة",
                        label: "متوسط وقت الاستجابة"
                    },
                    {
                        icon: "📉",
                        value: "60%",
                        label: "تقليل الأعطال"
                    },
                    {
                        icon: "💰",
                        value: "25%",
                        label: "توفير في التكاليف"
                    },
                    {
                        icon: "⭐",
                        value: "99%",
                        label: "جودة الخدمة"
                    }
                ]
            },
            5: {
                title: "الخدمات الغذائية",
                subtitle: "تجربة طعام استثنائية بمعايير عالمية",
                icon: "🍽️",
                image: "https://images.unsplash.com/photo-1559305289-0d0f00a0b5cb?auto=format&fit=crop&w=1000&q=80",
                description: "إدارة متكاملة للمطاعم والخدمات الغذائية داخل الفنادق. نقدم تجربة طعام استثنائية تجمع بين الإبداع في التقديم والجودة في المذاق، مع الالتزام بأعلى معايير السلامة والنظافة.",
                features: [
                    {
                        icon: "👨‍🍳",
                        title: "طهاة محترفون",
                        description: "فريق من الطهاة المتخصصين بأعلى المؤهلات"
                    },
                    {
                        icon: "🥗",
                        title: "أطباق متنوعة",
                        description: "تشكيلة واسعة من الأطباق المحلية والعالمية"
                    },
                    {
                        icon: "🌱",
                        title: "مواد طازجة",
                        description: "استخدام أفضل المواد الغذائية الطازجة والعضوية"
                    },
                    {
                        icon: "🎉",
                        title: "مناسبات خاصة",
                        description: "تنظيم حفلات ومناسبات طعام بمستوى راقي"
                    }
                ],
                details: [
                    {
                        icon: "🍴",
                        value: "50+",
                        label: "طبق يومي"
                    },
                    {
                        icon: "⭐",
                        value: "4.9/5",
                        label: "تقييم النزلاء"
                    },
                    {
                        icon: "👥",
                        value: "1000+",
                        label: "وجبة يومياً"
                    },
                    {
                        icon: "🏆",
                        value: "10+",
                        label: "جائزة تميز"
                    }
                ]
            },
            6: {
                title: "التسويق الفندقي",
                subtitle: "تعزيز الإشغال والعلامة التجارية",
                icon: "📈",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
                description: "حلول تسويقية متكاملة ومبتكرة لتعزيز وجود الفنادق في السوق وزيادة معدلات الإشغال. نستخدم أحدث استراتيجيات التسويق الرقمي والتقليدي لبناء صورة ذهنية قوية وزيادة العائد على الاستثمار.",
                features: [
                    {
                        icon: "🌐",
                        title: "التسويق الرقمي",
                        description: "حملات تسويقية متكاملة على المنصات الرقمية"
                    },
                    {
                        icon: "📱",
                        title: "إدارة وسائل التواصل",
                        description: "إدارة محترفة لوسائل التواصل الاجتماعي"
                    },
                    {
                        icon: "🎯",
                        title: "استهداف العملاء",
                        description: "استراتيجيات استهداف دقيقة للعملاء المحتملين"
                    },
                    {
                        icon: "📊",
                        title: "تحليل البيانات",
                        description: "تحليل بيانات السوق والمنافسين باستمرار"
                    }
                ],
                details: [
                    {
                        icon: "📈",
                        value: "40%",
                        label: "زيادة الإشغال"
                    },
                    {
                        icon: "💻",
                        value: "500K+",
                        label: "مشاهدات شهرية"
                    },
                    {
                        icon: "⭐",
                        value: "4.8/5",
                        label: "تقييم عبر الإنترنت"
                    },
                    {
                        icon: "💰",
                        value: "300%",
                        label: "عائد على الاستثمار"
                    }
                ]
            },
            7: {
                title: "التدريب والتطوير",
                subtitle: "بناء كوادر بشرية محترفة",
                icon: "🎓",
                image: "https://images.unsplash.com/photo-1589988020891-b7a5dd9e8c39?auto=format&fit=crop&w=1000&q=80",
                description: "برامج تدريبية متخصصة وشاملة لتطوير مهارات الكوادر البشرية في القطاع الفندقي. نهدف إلى رفع مستوى الخدمة وتمكين الموظفين من تقديم أفضل ما لديهم، مما ينعكس إيجاباً على تجربة النزلاء وسمعة الفندق.",
                features: [
                    {
                        icon: "👨‍🏫",
                        title: "مدربون متخصصون",
                        description: "فريق من المدربين المعتمدين دولياً"
                    },
                    {
                        icon: "📚",
                        title: "برامج مخصصة",
                        description: "تصميم برامج تدريبية تلبي احتياجات كل فندق"
                    },
                    {
                        icon: "🎯",
                        title: "تدريب عملي",
                        description: "جلسات تدريبية عملية ومحاكاة للواقع"
                    },
                    {
                        icon: "📊",
                        title: "تقييم الأداء",
                        description: "متابعة وتقييم تطور أداء المتدربين"
                    }
                ],
                details: [
                    {
                        icon: "👥",
                        value: "1000+",
                        label: "متدرِب سنوياً"
                    },
                    {
                        icon: "⭐",
                        value: "95%",
                        label: "رضا المتدربين"
                    },
                    {
                        icon: "📈",
                        value: "50%",
                        label: "تحسين الأداء"
                    },
                    {
                        icon: "🏆",
                        value: "15+",
                        label: "شهادة معتمدة"
                    }
                ]
            },
            8: {
                title: "الاستشارات الفندقية",
                subtitle: "حلول استشارية لتحسين الأداء",
                icon: "💼",
                image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80",
                description: "استشارات متخصصة واحترافية في مجال إدارة وتشغيل الفنادق. نقدم تحليلاً دقيقاً للأداء ووضع استراتيجيات فعالة لتحسين العمليات التشغيلية وزيادة الربحية وتعزيز القدرة التنافسية في السوق.",
                features: [
                    {
                        icon: "🔍",
                        title: "تحليل الأداء",
                        description: "دراسة شاملة لأداء الفندق وتحديد نقاط التحسين"
                    },
                    {
                        icon: "🎯",
                        title: "استراتيجيات تطوير",
                        description: "وضع خطط استراتيجية لتحسين الأداء والربحية"
                    },
                    {
                        icon: "📊",
                        title: "دراسات الجدوى",
                        description: "إعداد دراسات جدوى دقيقة للمشاريع الجديدة"
                    },
                    {
                        icon: "🔄",
                        title: "تحسين العمليات",
                        description: "إعادة هندسة العمليات لزيادة الكفاءة"
                    }
                ],
                details: [
                    {
                        icon: "💡",
                        value: "50+",
                        label: "مشروع استشاري"
                    },
                    {
                        icon: "📈",
                        value: "35%",
                        label: "تحسين الربحية"
                    },
                    {
                        icon: "⭐",
                        value: "100%",
                        label: "رضا العملاء"
                    },
                    {
                        icon: "🎯",
                        value: "20+",
                        label: "خبير استشاري"
                    }
                ]
            },
            9: {
                title: "خدمة النزلاء",
                subtitle: "تجربة إقامة لا تُنسى",
                icon: "🔔",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
                description: "تقديم تجربة استثنائية وشخصية للنزلاء من خلال خدمة متميزة على مدار الساعة. نحرص على تلبية كافة احتياجات النزلاء وتجاوز توقعاتهم، مما يضمن تجربة إقامة فريدة تترك انطباعاً إيجابياً يدوم طويلاً.",
                features: [
                    {
                        icon: "🤵",
                        title: "موظفون مدربون",
                        description: "فريق خدمة عملاء مدرب على أعلى مستوى"
                    },
                    {
                        icon: "💬",
                        title: "دعم متعدد اللغات",
                        description: "خدمة عملاء بعدة لغات لتلبية احتياجات جميع النزلاء"
                    },
                    {
                        icon: "⚡",
                        title: "استجابة سريعة",
                        description: "معالجة طلبات واستفسارات النزلاء فوراً"
                    },
                    {
                        icon: "🎁",
                        title: "خدمات متميزة",
                        description: "خدمات إضافية متميزة لتجربة إقامة استثنائية"
                    }
                ],
                details: [
                    {
                        icon: "⏰",
                        value: "5 دقائق",
                        label: "متوسط وقت الاستجابة"
                    },
                    {
                        icon: "⭐",
                        value: "4.9/5",
                        label: "تقييم الخدمة"
                    },
                    {
                        icon: "🌍",
                        value: "10+",
                        label: "لغة مدعومة"
                    },
                    {
                        icon: "💝",
                        value: "95%",
                        label: "نسبة العودة"
                    }
                ]
            }
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