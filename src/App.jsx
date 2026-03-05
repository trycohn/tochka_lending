import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Calendar, MessageCircle, Shield, Sun, ArrowRight, CheckCircle2, X, Download, FileText } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Section = ({ children, className = "" }) => (
  <section className={`py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto ${className}`}>
    {children}
  </section>
);

const Lightbox = ({ src, onClose }) => (
  <AnimatePresence>
    {src && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X size={40} />
        </button>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          src={src}
          alt="Full size certificate"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToPrice = () => {
    document.getElementById('price').scrollIntoView({ behavior: 'smooth' });
  };

  const mariaDocs = [
    { type: 'img', src: './images/diplom_maria.jpg', title: 'Диплом о высшем образовании' },
    { type: 'img', src: './images/svidetelstvo_maria.jpg', title: 'Свидетельство' },
    { type: 'img', src: './images/attestat_maria.jpg', title: 'Аттестат' },
    { type: 'img', src: './images/certificate.jpg', title: 'Сертификат' },
    { type: 'img', src: './images/cert_maria_igroki.jpg', title: 'Игроки, участвующие в психологических...' },
    { type: 'img', src: './images/cert_maria_primenenie.jpg', title: 'Применение в психологическом...' },
    { type: 'img', src: './images/cert_maria_transform.jpg', title: 'Психологические трансформационные...' },
    { type: 'img', src: './images/cert_maria_skazki.jpg', title: 'Юнгианский анализ сказок' },
  ];

  const irinaDocs = [
    { type: 'img', src: './images/diplom_irina.jpg', title: 'Диплом' },
    { type: 'img', src: './images/ydostoverenie_irina.jpg', title: 'Удостоверение' },
    { type: 'img', src: './images/diploma_irina_clinical.jpg', title: 'Клиническая психология (Диплом)' },
    { type: 'img', src: './images/cert_irina_clinical_sootv.jpg', title: 'Клинический психолог (Сертификат)' },
    { type: 'img', src: './images/cert_irina_sot.jpg', title: 'Системно-образная терапия' },
    { type: 'img', src: './images/cert_irina_family.jpg', title: 'Семейные конфликты' },
    { type: 'img', src: './images/cert_irina_psychiatry.jpg', title: 'Психиатрия для психологов' },
    { type: 'img', src: './images/cert_irina_perinatal.jpg', title: 'Перинатальные потери' },
    { type: 'img', src: './images/cert_irina_appp.jpg', title: 'Свидетельство АППП' },
  ];

  const DocCard = ({ doc }) => {
    if (doc.type === 'pdf') {
      return (
        <a 
          href={doc.src} 
          target="_blank" 
          rel="noopener noreferrer"
          className="aspect-[3/4] bg-white border border-sand-200 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all group"
        >
          <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center text-sage-600 mb-4 group-hover:bg-sage-100 transition-colors">
            <FileText size={32} />
          </div>
          <p className="font-serif text-lg leading-tight mb-4 text-gray-700 line-clamp-3">{doc.title}</p>
          <span className="text-xs uppercase tracking-widest text-sage-500 flex items-center gap-2">
            Скачать PDF <Download size={14} />
          </span>
        </a>
      );
    }
    return (
      <div 
        onClick={() => setSelectedImage(doc.src)}
        className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform cursor-zoom-in shadow-sm relative group"
      >
        <img src={doc.src} alt={doc.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end p-4">
           <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">{doc.title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-sand-50 text-gray-700 overflow-x-hidden font-sans selection:bg-sage-200">
      {/* Hero Section */}
      <header 
        className="relative min-h-screen flex flex-col items-center justify-between pt-12 pb-8 px-4 bg-cover bg-[53%_center] md:bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./images/1231.png')" }}
      >
        {/* Semi-transparent overlay to make white text more readable */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl flex flex-col h-full grow">
          {/* Top text block */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-4 md:mt-8"
          >
            <h2 className="text-[#654e3f] tracking-widest uppercase text-sm md:text-lg font-bold mb-4 drop-shadow-sm">
              ПРОЕКТ ПСИХОЛОГИЧЕСКОЙ ПОДДЕРЖКИ
            </h2>
            <h1 className="text-7xl md:text-9xl lg:text-[140px] font-script text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Точка опоры
            </h1>
            <p className="text-[#654e3f] uppercase tracking-wide text-xs md:text-xl font-bold max-w-2xl mx-auto drop-shadow-sm">
              21 ДЕНЬ ПОДДЕРЖКИ ДЛЯ ЖЕНЩИН ПОСЛЕ РАЗВОДА
            </p>
          </motion.div>

          {/* List block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-grow flex flex-col justify-center mt-12 md:mt-0"
          >
            <div className="space-y-6 md:space-y-8 max-w-md">
              {[
                "6 онлайн-встреч",
                "Психологическая помощь",
                "Поддержка и забота"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-[#7a6452] flex items-center justify-center shrink-0 bg-white/40">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#5c6e58] fill-current" fill="currentColor">
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>
                  </div>
                  <span className="text-[#4a3525] text-xl md:text-2xl font-bold drop-shadow-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom block: Button & Footer text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center mt-auto pb-4 pt-12 flex flex-col items-center gap-6"
          >
            <button 
              onClick={scrollToPrice}
              className="bg-gradient-to-r from-[#fbe3c7] via-[#f0cfa3] to-[#fbe3c7] hover:from-[#f0cfa3] hover:to-[#e8bd89] text-[#5c3e26] text-xl md:text-2xl font-bold px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 w-[90%] md:w-auto max-w-md relative overflow-hidden group"
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-full border border-white/50 group-hover:border-white/80 transition-colors"></div>
              <span className="relative z-10 drop-shadow-sm">Начать путь к себе</span>
            </button>
            <p className="font-script text-4xl md:text-5xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Вы не одна в этот сложный период
            </p>
          </motion.div>
        </div>
      </header>

      {/* Hosts */}
      <Section className="bg-white rounded-3xl shadow-lg p-8 md:p-12 my-12">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Проект проводят</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Maria */}
            <div className="text-center">
              <div className="w-48 h-64 md:w-64 md:h-80 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-sand-100 shadow-inner">
                <img 
                  src="./images/photo_maria.jpg" 
                  alt="Мария Горенкова" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Мария Горенкова</h3>
              <p className="text-sage-600 uppercase tracking-widest text-sm mb-4">Психолог, специалист по трансперсональному консультированию и психотерапии</p>
            </div>

            {/* Irina */}
            <div className="text-center">
              <div className="w-48 h-64 md:w-64 md:h-80 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-sand-100 shadow-inner">
                <img 
                  src="./images/photo_irina.jpg" 
                  alt="Ирина Величко" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">Ирина Величко</h3>
              <p className="text-sage-600 uppercase tracking-widest text-sm mb-4">Интегративный психолог</p>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto space-y-6">
            <p className="text-lg">
              Мы дипломированные психологи и женщины, которые сами прошли через развод и глубокий личный кризис.
            </p>
            <p className="text-lg">
              Мы хорошо понимаем, через какие чувства и состояния проходит женщина в этот период. В группе мы остаёмся в профессиональной роли. Создаём безопасное пространство и сопровождаем каждую участницу с пониманием и поддержкой.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* The "Before/After" Problem Section */}
      <Section>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <p className="text-2xl md:text-3xl font-serif text-gray-700 font-medium">
              Иногда жизнь делится на «до» и «после».
            </p>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-sand-100 text-left space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                В такие моменты особенно остро ощущается одиночество. Даже если рядом есть люди — внутри может быть очень пусто, тревожно и больно.
              </p>
              <p>
                Проект «Точка опоры» создан для того, чтобы в этот непростой период вы не оставались с этим состоянием один на один.
              </p>
              <p>
                Это не про быстрые решения.<br/>
                Не про советы «отпустить и идти дальше».<br/>
                И не про попытки вернуть отношения.
              </p>
              <p>
                Это пространство, где можно выдохнуть и постепенно начать возвращаться к себе.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* For Whom */}
      <Section>
        <FadeIn>
          <div className="bg-sand-100 p-8 md:p-12 rounded-3xl max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">Для кого этот проект</h2>
            <p className="text-xl mb-6 font-medium text-gray-800">Для женщин, которые сейчас:</p>
            <div className="space-y-4 mb-8">
              {[
                "находятся в процессе развода",
                "уже расстались, но внутренне не завершили эти отношения",
                "испытывают сильные перепады эмоций — от гнева до апатии",
                "чувствуют тревогу за будущее",
                "сомневаются в себе",
                "теряют ощущение опоры",
                "хотят прожить этот период более осознанно и бережно к себе"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 pl-2">
                  <span className="text-sage-600 font-bold text-xl leading-none mt-1">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl font-serif italic text-sage-800 text-center border-t border-sage-200 pt-8 mt-8">
              Если вам важно не просто «пережить», а понять, что с вами происходит, этот формат может подойти.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What is it */}
      <Section className="bg-white rounded-3xl shadow-sm border border-sand-100 my-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Что такое «Точка опоры»</h2>
            <p className="text-xl text-gray-500">21 день мягкой, структурированной психологической поддержки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <Users size={24} />
              </div>
              <h3 className="font-serif text-xl mb-2">Закрытая группа</h3>
              <p className="text-sm text-gray-500">До 10 участниц</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <Calendar size={24} />
              </div>
              <h3 className="font-serif text-xl mb-2">6 живых встреч</h3>
              <p className="text-sm text-gray-500">Онлайн, 2 раза в неделю по 2 часа</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-serif text-xl mb-2">Чат поддержки</h3>
              <p className="text-sm text-gray-500">Пространство для вопросов, обсуждений и практических заданий</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Meeting Format */}
      <section className="py-16 bg-sage-800 text-sand-50">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Как проходят встречи (онлайн)</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-sage-300 font-serif text-5xl opacity-50">01</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Круг входа</h3>
                  <p className="text-sage-100 font-light">Небольшое пространство, где каждая может поделиться своей историей. Это помогает почувствовать, что вы не одна.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-sage-300 font-serif text-5xl opacity-50">02</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Теоретический блок</h3>
                  <p className="text-sage-100 font-light">Помогает понять, что происходит с психикой в период кризиса. Знание снижает тревогу и возвращает ощущение контроля.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-sage-300 font-serif text-5xl opacity-50">03</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Практическая работа</h3>
                  <p className="text-sage-100 font-light">Упражнения на проживание чувств, восстановление внутренней опоры, работу с самоценностью и границами.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-sage-300 font-serif text-5xl opacity-50">04</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Завершение и рефлексия</h3>
                  <p className="text-sage-100 font-light">Чтобы вы не уходили в тревоге, а выходили в более устойчивом состоянии.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Topics */}
      <Section>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">С чем мы работаем в течение 21 дня</h2>
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
            {[
              "Проживание боли и утраты",
              "Тревога и страх перед будущим",
              "Чувство вины и стыда",
              "Злость и обида",
              "Ощущение «я потеряла себя»",
              "Восстановление самоценности",
              "Личные границы",
              "Поиск новой внутренней опоры"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white border border-sand-100 rounded-xl shadow-sm">
                <div className="w-2 h-2 rounded-full bg-sage-400 shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-xl font-serif text-sage-700">
            Наша задача — не изменить вашу жизнь за три недели, <br />
            а помочь вам пройти этот этап более устойчиво и осознанно.
          </p>
        </FadeIn>
      </Section>

      {/* Format Details */}
      <Section>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Формат участия</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="bg-sand-100 p-3 rounded-full text-sage-600"><Sun size={20}/></div>
              <span>Онлайн (ВК)</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="bg-sand-100 p-3 rounded-full text-sage-600"><Users size={20}/></div>
              <span>Маленькая закрытая группа</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="bg-sand-100 p-3 rounded-full text-sage-600"><Shield size={20}/></div>
              <span>Конфиденциальность и уважение</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className="bg-sand-100 p-3 rounded-full text-sage-600"><Heart size={20}/></div>
              <span>Камеры включены — для живого присутствия</span>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-500 text-sm">
            После завершения программы возможна тёплая офлайн-встреча в Ижевске
          </p>
        </FadeIn>
      </Section>

      {/* Outcomes */}
      <section className="py-16 bg-gradient-to-b from-white to-sand-50">
        <Section>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Что может измениться за 21 день</h2>
            <div className="space-y-4 max-w-2xl mx-auto text-lg text-center">
              <p>Вы можете:</p>
              <ul className="space-y-3 inline-block text-left">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sage-500"/> Почувствовать меньше хаоса внутри</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sage-500"/> Начать лучше понимать свои реакции</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sage-500"/> Снизить уровень тревоги</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sage-500"/> Вернуть ощущение «я есть»</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sage-500"/> Увидеть, что впереди есть жизнь</li>
              </ul>
              <p className="pt-8 font-serif text-2xl text-sage-700">
                Иногда всё, что нужно в сложный период — это опора и поддержка.
              </p>
            </div>
          </FadeIn>
        </Section>
      </section>

      {/* Price & CTA */}
      <section id="price" className="py-24 bg-sage-800 text-white text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Стоимость участия</h2>
            <div className="text-6xl md:text-8xl font-serif mb-12 tracking-tight">
              6 000 ₽
            </div>
            <a 
              href="https://t.me/YOUR_USERNAME_HERE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-sage-800 text-xl md:text-2xl font-medium px-10 py-5 rounded-full hover:bg-sand-100 transition-transform hover:scale-105 shadow-xl"
            >
              Стать участником проекта <ArrowRight />
            </a>
            <p className="mt-8 text-sage-200 opacity-80">
              Если вы чувствуете, что сейчас вам важно быть в поддерживающем круге — <br />
              возможно, это ваш шаг к более спокойному и устойчивому состоянию.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Certificates */}
      <Section className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-serif text-center mb-16 text-gray-600">Дипломы и сертификаты</h2>
          
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sage-200">
                 <img src="./images/photo_maria.jpg" className="w-full h-full object-cover" alt="Maria" />
              </div>
              <h3 className="text-2xl font-serif text-sage-800">Мария Горенкова</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {mariaDocs.map((doc, i) => (
                <DocCard key={i} doc={doc} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sage-200">
                 <img src="./images/photo_irina.jpg" className="w-full h-full object-cover" alt="Irina" />
              </div>
              <h3 className="text-2xl font-serif text-sage-800">Ирина Величко</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {irinaDocs.map((doc, i) => (
                <DocCard key={i} doc={doc} />
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      <footer className="bg-sage-900 text-sage-400 py-8 text-center text-sm">
        <p>© 2026 Проект «Точка опоры». Все права защищены.</p>
      </footer>
      
      <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

export default App;