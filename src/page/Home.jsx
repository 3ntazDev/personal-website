// "use client"
// import { useState, useEffect } from "react"
// import {
//   Github,
//   Linkedin,
//   Mail,
//   MapPin,
//   ExternalLink,
//   ChevronDown,
//   Code,
//   Briefcase,
//   Award,
//   GitFork,
//   Trophy,
//   User,
//   BarChart3,
//   Brain,
//   Palette,
//   Star,
//   Sparkles,
//   Zap,
//   Target,
//   Rocket,
//   Database,
//   Building,
//   Clock,
// } from "lucide-react"
// import { motion } from "framer-motion"

// export default function PremiumPortfolio() {
//   const [activeSection, setActiveSection] = useState("hero")
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   const personalInfo = {
//     name: "فهد",
//     title: "مهندس برمجيات",
//     bio: "مهندس برمجيات حديث التخرج أعمل في مشاريع تقنية وأديرها، أستخدم أحدث الأدوات وأشرف على العمل عليها. مهتم بالـ Data Engineering والتعامل مع قواعد البيانات لبناء حلول تقنية متطورة.",
//     location: "الرياض، المملكة العربية السعودية",
//     email: "Alghamdi.dev@gmail.com",
//     social: {
//       github: "https://github.com/3ntazDev",
//       linkedin: "https://www.linkedin.com/in/fahad-alghamdi-a91969246/",
//     },
//     cvUrl: "",
//   }

//   const skills = [
//     {
//       category: "اللغات البرمجية",
//       items: ["Python", "Java", "JavaScript"],
//       icon: <Code className="w-6 h-6" />,
//       color: "from-blue-500 via-indigo-500 to-purple-600",
//       bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-100",
//     },
//     {
//       category: "أدوات اختبار البرمجيات",
//       items: ["Jest", "JMeter", "Katalon", "SonarQube"],
//       icon: <Target className="w-6 h-6" />,
//       color: "from-emerald-500 via-teal-500 to-cyan-600",
//       bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-100",
//     },
//     {
//       category: "أدوات التطوير",
//       items: ["Git", "GitHub"],
//       icon: <Zap className="w-6 h-6" />,
//       color: "from-purple-500 via-violet-500 to-indigo-600",
//       bgPattern: "bg-gradient-to-br from-purple-50 to-violet-100",
//     },
//     {
//       category: "الحوسبة السحابية",
//       items: ["Oracle Cloud", "AWS"],
//       icon: <Rocket className="w-6 h-6" />,
//       color: "from-orange-500 via-red-500 to-pink-600",
//       bgPattern: "bg-gradient-to-br from-orange-50 to-red-100",
//     },
//     {
//       category: "أطر العمل والتقنيات",
//       items: ["React", "Supabase", "Agile", "Waterfall", "Scrum"],
//       icon: <Sparkles className="w-6 h-6" />,
//       color: "from-pink-500 via-rose-500 to-red-600",
//       bgPattern: "bg-gradient-to-br from-pink-50 to-rose-100",
//     },
//   ]

//   const projectCategories = [
//     {
//       id: "ui-ux",
//       title: "UI/UX Design",
//       icon: <Palette className="w-8 h-8" />,
//       color: "from-pink-500 via-rose-500 to-red-600",
//       bgGradient: "bg-gradient-to-br from-pink-50 via-rose-50 to-red-50",
//       projects: [
//         {
//           title: "تطبيق [ضيعت اغراضك ؟ ]",
//           description:
//             "تطبيق يساعد المستخدمين في البحث عن أغراضهم المفقودة بطريقة سهلة وبواجهة استخدام واضحة. تم تصميمه باستخدام Figma ليوفر تجربة مستخدم سلسة",
//           technologies: ["Figma"],
//         },
//         {
//           title: "نظام Edamah",
//           description:
//             "نظام يربط الجمعيات الخيرية بالمطاعم لإعادة توزيع الفائض من الطعام بشكل فعّال، ويهدف إلى تقليل الهدر وتعزيز الاستدامة",
//           technologies: ["Figma"],
//         },
//       ],
//     },
//     {
//       id: "developer",
//       title: "Development",
//       icon: <Code className="w-8 h-8" />,
//       color: "from-blue-500 via-indigo-500 to-purple-600",
//       bgGradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
//       projects: [
//         {
//           title: "منصة FabMatch",
//           description:
//             "منصة تربط الأفراد والشركات مع أصحاب الطابعات ثلاثية الأبعاد، وتوفر مزايا مثل نظام المزايدة، الدعم الذكي بالذكاء الاصطناعي، المعاملات الآمنة، وعرض الخدمات",
//           technologies: ["AWS", "React", "Tailwind CSS", "n8n", "Supabase"],
//           demo: "https://fabmatch.org",
//         },
//         {
//           title: "WashyWay",
//           description:
//             "تطبيق ويب لحجز غسيل السيارات في أماكن متعددة بسهولة. يمكن للمستخدمين تصفح الخدمات القريبة وتحديد مواعيد الغسيل إلكترونيًا",
//           technologies: ["React", "Tailwind CSS", "Supabase"],
//           demo: "https://washy-way.vercel.app/",
//         },
//       ],
//     },
//     {
//       id: "data-engineer",
//       title: "Data Engineering",
//       icon: <Database className="w-8 h-8" />,
//       color: "from-green-500 via-emerald-500 to-teal-600",
//       bgGradient: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50",
//       projects: [],
//     },
//     {
//       id: "product-owner",
//       title: "Product Owner",
//       icon: <User className="w-8 h-8" />,
//       color: "from-indigo-500 via-purple-500 to-pink-600",
//       bgGradient: "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",
//       projects: [],
//     },
//     {
//       id: "business-analysis",
//       title: "Business Analysis",
//       icon: <BarChart3 className="w-8 h-8" />,
//       color: "from-emerald-500 via-teal-500 to-cyan-600",
//       bgGradient: "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50",
//       projects: [],
//     },
//     {
//       id: "business-intelligence",
//       title: "Business Intelligence",
//       icon: <Brain className="w-8 h-8" />,
//       color: "from-amber-500 via-orange-500 to-red-600",
//       bgGradient: "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50",
//       projects: [],
//     },
//   ]

//   const contributions = [
//     {
//       title: "بوصلة - المساعد الدراسي",
//       description:
//         "مساعد دراسي ذكي يساعد الطلاب الجامعيين في جميع جامعات المملكة العربية السعودية. يوفر التطبيق مميزات متنوعة لتسهيل الحياة الأكاديمية للطلاب.",
//       link: "قريباً إن شاء الله",
//       technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
//       role: "Team Leader & Project Owner",
//       company: "شركة هيبرا",
//     },
//     {
//       title: "أقيام - نتائج الرياضات الإلكترونية",
//       description:
//         "منصة متخصصة في عرض وتتبع نتائج الرياضات الإلكترونية والبطولات المختلفة. توفر إحصائيات مفصلة ومتابعة حية للمباريات والفرق.",
//       link: "https://apps.apple.com/app/agyam/id6670207726",
//       technologies: ["React Native", "Express.js", "PostgreSQL", "Socket.io"],
//       role: "Team Leader & Project Owner",
//       company: "شركة هيبرا",
//     },
//   ]

//   const achievements = [
//     {
//       title: "المركز الأول في مسابقة CODE IN البرمجية",
//       organization: "مسابقة CODE IN",
//       year: "2024",
//       description:
//         "حصلت على المركز الأول في مسابقة CODE IN البرمجية التي تهدف إلى تطوير مهارات البرمجة وحل المشاكل التقنية",
//       image: "", // يمكن إضافة صورة الجائزة لاحقاً
//     },
//     {
//       title: "Soon!",
//       organization: "   ",
//       year: "",
//       description: "",
//       image: "", // Support for achievement images
//     },
//   ]

//   const certifications = [
//     {
//       title: "Oracle Certified Associate – Oracle Cloud Infrastructure 2025 Foundations",
//       issuer: "Oracle",
//       date: "2025",
//       description: "شهادة تُثبت الفهم الأساسي لبنية Oracle السحابية (OCI) ومفاهيم الحوسبة السحابية",
//       link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8E40C2DE93712A60F3B610D974E353764EDA7D496391DA614272170F4D220AC8",
//     },
//   ]

//   const experiences = [
//     {
//       type: "training",
//       title: "Software Engineer Intern",
//       organization: "Confidential Government",
//       position: "Software Engineer Intern",
//       duration: "يونيو 2025 - الحالي · 3 أشهر",
//       description: "تدريب في تطوير البرمجيات في جهة حكومية",
//       tags: ["Software Development", "Government Sector"],
//       logo: "",
//     },
//     {
//       type: "volunteer",
//       title: "Google Developer Student Club | PSAU",
//       organization: "Google Developer Student Club",
//       position: "Project Manager",
//       duration: "فبراير 2024 - فبراير 2024 · 1 شهر",
//       description: "إدارة المشاريع وتنسيق الأنشطة التقنية",
//       tags: ["Project Planning", "Member Relations"],
//       logo: "",
//     },
//     {
//       type: "volunteer",
//       title: "Google Developer Student Club | PSAU",
//       organization: "Google Developer Student Club",
//       position: "Member",
//       duration: "يناير 2023 - فبراير 2024 · 1 سنة 2 شهر",
//       description: "عضو نشط في النادي التقني",
//       tags: ["Member Relations"],
//       logo: "",
//     },
//     {
//       type: "volunteer",
//       title: "Software Engineering Club",
//       organization: "Software Engineering Club",
//       position: "Designer",
//       duration: "أبريل 2023 - مارس 2024 · 1 سنة",
//       description: "تصميم واجهات المستخدم والهوية البصرية للنادي",
//       tags: ["User Interface Design", "Member Relations"],
//       logo: "",
//     },
//     {
//       type: "volunteer",
//       title: "Software Engineering Club",
//       organization: "Software Engineering Club",
//       position: "Member",
//       duration: "فبراير 2022 - مارس 2023 · 1 سنة 2 شهر",
//       description: "عضو مؤسس في نادي هندسة البرمجيات",
//       tags: ["Member Relations", "Membership Building"],
//       logo: "",
//     },
//   ]

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section[id]")
//       const scrollPosition = window.scrollY + 200

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop
//         const sectionHeight = section.offsetHeight
//         const sectionId = section.getAttribute("id") || ""

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           setActiveSection(sectionId)
//         }
//       })
//     }

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     window.addEventListener("scroll", handleScroll)
//     window.addEventListener("mousemove", handleMouseMove)

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//       window.removeEventListener("mousemove", handleMouseMove)
//     }
//   }, [])

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId)
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 80,
//         behavior: "smooth",
//       })
//     }
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   }

//   const navItems = [
//     { id: "hero", label: "الرئيسية" },
//     { id: "skills", label: "المهارات" },
//     { id: "experience", label: "الخبرات" },
//     { id: "contributions", label: "المساهمات" },
//     { id: "projects", label: "المشاريع" },
//     { id: "certifications", label: "الشهادات" },
//     { id: "achievements", label: "الجوائز" },
//   ]

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 text-right relative overflow-hidden"
//       dir="rtl"
//     >
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
//         <div
//           className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
//           style={{
//             left: mousePosition.x - 192,
//             top: mousePosition.y - 192,
//             transition: "all 0.3s ease-out",
//           }}
//         ></div>
//       </div>

//       {/* القائمة الثابتة */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5">
//         <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
//           <div className="flex justify-between items-center">
//             <motion.div
//               className="flex items-center gap-2 sm:gap-3"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-purple-500/25">
//                 {personalInfo.name.charAt(0)}
//               </div>
//               <div className="hidden sm:block">
//                 <span className="font-bold text-lg sm:text-xl text-gray-800 block">{personalInfo.name}</span>
//                 <span className="text-xs sm:text-sm text-gray-600">{personalInfo.title}</span>
//               </div>
//             </motion.div>

//             <div className="hidden lg:flex gap-2">
//               {[
//                 { id: "hero", label: "الرئيسية", icon: <Star className="w-4 h-4" /> },
//                 { id: "skills", label: "المهارات", icon: <Zap className="w-4 h-4" /> },
//                 { id: "experience", label: "الخبرات", icon: <Building className="w-4 h-4" /> },
//                 { id: "contributions", label: "المساهمات", icon: <GitFork className="w-4 h-4" /> },
//                 { id: "projects", label: "المشاريع", icon: <Briefcase className="w-4 h-4" /> },
//                 { id: "certifications", label: "الشهادات", icon: <Award className="w-4 h-4" /> },
//                 { id: "achievements", label: "الجوائز", icon: <Trophy className="w-4 h-4" /> },
//               ].map((item) => (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 text-sm ${
//                     activeSection === item.id
//                       ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
//                       : "hover:bg-white/60 text-gray-700 hover:shadow-md"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.icon}
//                   <span className="font-medium hidden xl:inline">{item.label}</span>
//                 </motion.button>
//               ))}
//             </div>

//             <div className="flex gap-1 sm:gap-2">
//               <motion.a
//                 href={`mailto:${personalInfo.email}`}
//                 className="p-2 sm:p-3 rounded-xl bg-white/60 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
//               </motion.a>
//               <motion.a
//                 href={personalInfo.social.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 sm:p-3 rounded-xl bg-white/60 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
//                 whileHover={{ scale: 1.1, rotate: -5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
//               </motion.a>
//               <motion.a
//                 href={personalInfo.social.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 sm:p-3 rounded-xl bg-white/60 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
//               </motion.a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* قسم البطل (Hero) */}
//       <section
//         id="hero"
//         className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-6 sm:mb-8"
//           >
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
//               <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
//               <span className="text-blue-700 font-medium text-sm sm:text-base">مرحباً بك في عالمي الرقمي</span>
//             </div>

//             <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
//               {personalInfo.name}
//             </h1>

//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-700">
//               {personalInfo.title}
//             </h2>

//             <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
//               <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
//               <span className="text-gray-600 text-base sm:text-lg">{personalInfo.location}</span>
//             </div>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-700 font-light px-4"
//           >
//             {personalInfo.bio}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
//           >
//             <motion.button
//               onClick={() => scrollToSection("projects")}
//               className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 w-full sm:w-auto"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
//                 استكشف أعمالي
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </motion.button>

//             <motion.a
//               href={`mailto:${personalInfo.email}`}
//               className="px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
//                 تواصل معي
//               </span>
//             </motion.a>
//           </motion.div>

//           <motion.div
//             className="mt-12 sm:mt-16"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
//           >
//             <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mx-auto" />
//           </motion.div>
//         </div>
//       </section>

//       {/* قسم المهارات */}
//       <section id="skills" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
//         <motion.div
//           className="max-w-7xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//         >
//           <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
//             <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
//               <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
//               <span className="text-blue-700 font-medium text-sm sm:text-base">المهارات التقنية</span>
//             </div>
//             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">خبراتي التقنية</h3>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//               مجموعة متنوعة من المهارات والتقنيات التي أتقنها في مجال التطوير
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {skills.map((skillGroup, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className={`group relative p-6 sm:p-8 ${skillGroup.bgPattern} backdrop-blur-sm border border-white/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-r ${skillGroup.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
//                 ></div>

//                 <div className="relative z-10">
//                   <div
//                     className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${skillGroup.color} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                   >
//                     {skillGroup.icon}
//                   </div>

//                   <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{skillGroup.category}</h4>

//                   <div className="flex flex-wrap gap-2 sm:gap-3">
//                     {skillGroup.items.map((skill, skillIndex) => (
//                       <motion.span
//                         key={skillIndex}
//                         className="px-3 py-1 bg-white/70 backdrop-blur-sm border border-white/50 rounded-xl text-xs sm:text-sm font-medium text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300"
//                         whileHover={{ scale: 1.05 }}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
//                       >
//                         {skill}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section
//         id="experience"
//         className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-green-50/30 to-emerald-50/30"
//       >
//         <motion.div
//           className="max-w-6xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//         >
//           <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
//             <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
//               <Building className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                 الخبرات المهنية
//               </h2>
//             </div>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
//               رحلتي المهنية والتطوعية مع الشركات والمؤسسات المختلفة
//             </p>
//           </motion.div>

//           <div className="grid gap-6 sm:gap-8">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100/50"
//                 variants={fadeInUp}
//                 whileHover={{ y: -5, scale: 1.02 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between mb-4 sm:mb-6">
//                     <div className="flex items-center gap-3 sm:gap-4">
//                       {exp.logo && (
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center overflow-hidden">
//                           <img
//                             src={exp.logo || "/placeholder.svg"}
//                             alt={exp.organization}
//                             className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
//                           />
//                         </div>
//                       )}
//                       <div>
//                         <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{exp.title}</h3>
//                         <p className="text-base text-green-600 font-semibold">{exp.organization}</p>
//                         {exp.position && <p className="text-gray-600 mt-1">{exp.position}</p>}
//                       </div>
//                     </div>

//                     <div className="text-left">
//                       <span
//                         className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
//                           exp.type === "work"
//                             ? "bg-blue-100 text-blue-800"
//                             : exp.type === "volunteer"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-purple-100 text-purple-800"
//                         }`}
//                       >
//                         {exp.type === "work" ? "عمل" : exp.type === "volunteer" ? "تطوع" : "تدريب"}
//                       </span>
//                       {exp.duration && <p className="text-sm text-gray-500 mt-2">{exp.duration}</p>}
//                     </div>
//                   </div>

//                   {exp.description && <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed">{exp.description}</p>}

//                   {exp.tags && exp.tags.length > 0 && (
//                     <div className="flex flex-wrap gap-2">
//                       {exp.tags.map((tag, tagIndex) => (
//                         <motion.span
//                           key={tagIndex}
//                           className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-medium hover:from-green-200 hover:to-emerald-200 transition-all duration-300"
//                           whileHover={{ scale: 1.05 }}
//                         >
//                           {tag}
//                         </motion.span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section
//         id="contributions"
//         className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-50/30 to-pink-50/30"
//       >
//         <motion.div
//           className="max-w-6xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={staggerContainer}
//         >
//           <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
//             <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg mb-4 sm:mb-6">
//               <GitFork className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
//               <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 المساهمات والمشاريع
//               </h2>
//             </div>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
//               مشاريع تطوير التطبيقات والمنصات الرقمية التي ساهمت في تطويرها
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//             {contributions.map((contribution, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/50 hover:border-purple-300/50 overflow-hidden"
//                 variants={fadeInUp}
//                 whileHover={{ y: -10, scale: 1.02 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors truncate">
//                         {contribution.title}
//                       </h3>
//                       <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
//                         <span className="text-xs sm:text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full w-fit">
//                           {contribution.role}
//                         </span>
//                         <span className="text-xs sm:text-sm text-gray-500">{contribution.company}</span>
//                       </div>
//                     </div>
//                     <motion.div
//                       animate={{ rotate: [0, 10, 0] }}
//                       transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
//                     >
//                       <GitFork className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
//                     </motion.div>
//                   </div>

//                   <p className="text-gray-600 mb-6 leading-relaxed">{contribution.description}</p>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {contribution.technologies.map((tech, techIndex) => (
//                       <motion.span
//                         key={techIndex}
//                         className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:from-purple-200 hover:to-pink-200 transition-all cursor-default"
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                     {contribution.link ? (
//                       <motion.a
//                         href={contribution.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center gap-2 text-purple-600 hover:text-purple-800 font-medium bg-purple-50 hover:bg-purple-100 px-4 py-2 rounded-xl transition-all duration-300 text-sm"
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         <ExternalLink className="w-4 h-4" />
//                         <span>عرض التطبيق</span>
//                       </motion.a>
//                     ) : (
//                       <div className="inline-flex items-center justify-center gap-2 text-gray-500 bg-gray-100 px-4 py-2 rounded-xl text-sm">
//                         <Clock className="w-4 h-4" />
//                         <span>قريباً إن شاء الله</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section
//         id="projects"
//         className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50/50 to-white/50"
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 sm:mb-16"
//           >
//             <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-200/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
//               <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
//               <span className="text-purple-700 font-medium text-sm sm:text-base">معرض الأعمال</span>
//             </div>
//             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">مشاريعي المتنوعة</h3>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//               مجموعة من المشاريع المتنوعة التي تعكس خبرتي في مختلف المجالات التقنية
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12">
//             {projectCategories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className={`group relative p-6 sm:p-8 ${category.bgPattern} backdrop-blur-sm border border-white/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500`}
//                 whileHover={{ scale: 1.01 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

//                 <div className="relative z-10">
//                   <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
//                     <div
//                       className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       {category.icon}
//                     </div>
//                     <div>
//                       <h4 className="text-2xl sm:text-3xl font-black text-gray-900">{category.title}</h4>
//                       <div className={`h-1 w-16 sm:w-20 bg-gradient-to-r ${category.color} rounded-full mt-2`}></div>
//                     </div>
//                   </div>

//                   {category.projects.length > 0 ? (
//                     <div className="space-y-6">
//                       {category.projects.map((project, projectIndex) => (
//                         <motion.div
//                           key={projectIndex}
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
//                           className="group/project relative p-4 sm:p-6 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                           whileHover={{ scale: 1.02 }}
//                         >
//                           <h5 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{project.title}</h5>
//                           <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
//                             {project.description}
//                           </p>

//                           <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
//                             {project.technologies.map((tech, techIndex) => (
//                               <span
//                                 key={techIndex}
//                                 className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${category.color} text-white rounded-lg text-xs sm:text-sm font-medium shadow-sm`}
//                               >
//                                 {tech}
//                               </span>
//                             ))}
//                           </div>

//                           {project.demo && (
//                             <motion.a
//                               href={project.demo}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group-hover/project:translate-x-1 transition-transform duration-300"
//                               whileHover={{ scale: 1.05 }}
//                             >
//                               <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
//                               <span>عرض المشروع</span>
//                             </motion.a>
//                           )}
//                         </motion.div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="text-center py-8 sm:py-12">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 sm:mb-6 opacity-50`}
//                       >
//                         <Sparkles className="w-8 h-8 sm:w-12 sm:h-12" />
//                       </div>
//                       <p className="text-xl sm:text-2xl font-bold text-gray-500 mb-2">قريباً...</p>
//                       <p className="text-gray-400">مشاريع مثيرة قادمة في هذا المجال</p>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="certifications" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 sm:mb-16"
//           >
//             <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-200/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
//               <Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
//               <span className="text-emerald-700 font-medium text-sm sm:text-base">الشهادات المهنية</span>
//             </div>
//             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">شهاداتي المعتمدة</h3>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//               الشهادات المهنية التي حصلت عليها لتطوير مهاراتي التقنية
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {certifications.map((cert, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group relative p-6 sm:p-8 bg-gradient-to-br from-white/80 to-emerald-50/50 backdrop-blur-sm border border-white/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
//                 whileHover={{ scale: 1.01 }}
//               >
//                 <div className="flex items-start gap-4 sm:gap-6">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                     <Award className="w-8 h-8 sm:w-10 sm:h-10" />
//                   </div>

//                   <div className="flex-1">
//                     <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{cert.title}</h4>
//                     <p className="text-emerald-600 font-medium mb-2 sm:mb-3">
//                       {cert.issuer} • {cert.date}
//                     </p>
//                     <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed">{cert.description}</p>
//                     {cert.link && (
//                       <motion.a
//                         href={cert.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
//                         <span>عرض الشهادة</span>
//                       </motion.a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         id="achievements"
//         className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-50/30 to-orange-50/30"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 sm:mb-16"
//           >
//             <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-200/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
//               <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
//               <span className="text-amber-700 font-medium text-sm sm:text-base">الجوائز والإنجازات</span>
//             </div>
//             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">إنجازاتي المميزة</h3>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//               الجوائز والإنجازات التي حققتها في مسيرتي المهنية
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {achievements.map((achievement, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group relative p-6 sm:p-8 bg-gradient-to-br from-white/80 to-amber-50/50 backdrop-blur-sm border border-white/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
//                 whileHover={{ scale: 1.01 }}
//               >
//                 <div className="flex items-center justify-center">
//                   {achievement.image ? (
//                     <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-300">
//                       <img
//                         src={achievement.image || "/placeholder.svg"}
//                         alt={achievement.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ) : (
//                     <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
//                       <Trophy className="w-12 h-12 sm:w-16 sm:h-16" />
//                     </div>
//                   )}
//                 </div>

//                 <div className="text-center mt-6 sm:mt-8">
//                   <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{achievement.title}</h4>
//                   <p className="text-lg text-amber-600 font-medium mb-3 sm:mb-4">
//                     {achievement.organization} • {achievement.year}
//                   </p>
//                   <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
//                     {achievement.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <motion.button
//         className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl shadow-blue-500/25 z-50 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-300"
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{
//           opacity: activeSection !== "hero" ? 1 : 0,
//           scale: activeSection !== "hero" ? 1 : 0,
//         }}
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 transform rotate-180" />
//       </motion.button>

//       <footer className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-black text-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="mb-6 sm:mb-8">
//             <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl mx-auto mb-3 sm:mb-4 shadow-2xl">
//               {personalInfo.name.charAt(0)}
//             </div>
//             <h4 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{personalInfo.name}</h4>
//             <p className="text-gray-400">{personalInfo.title}</p>
//           </div>

//           <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
//             <motion.a
//               href={`mailto:${personalInfo.email}`}
//               className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300"
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
//             </motion.a>
//             <motion.a
//               href={personalInfo.social.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300"
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Github className="w-5 h-5 sm:w-6 sm:h-6" />
//             </motion.a>
//             <motion.a
//               href={personalInfo.social.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300"
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
//             </motion.a>
//           </div>

//           <div className="border-t border-white/20 pt-6 sm:pt-8">
//             <p className="text-gray-400">
//               © {new Date().getFullYear()} {personalInfo.name} - جميع الحقوق محفوظة
//             </p>
//             <p className="text-gray-500 mt-2">صُمم بعناية لإبراز الإبداع والاحترافية</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


"use client"
import { useState, useEffect, useRef } from "react"
import {
  Github,
  Linkedin,
  Mail,
  FileCheck,
  ExternalLink,
  ChevronDown,
  Code,
  Briefcase,
  Award,
  GitFork,
  Trophy,
  Target,
  Zap,
  Rocket,
  Sparkles,
  Palette,
  Database,
  User,
  BarChart3,
  Brain,
  Star,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FuturisticPortfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(50)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeProject, setActiveProject] = useState(null)
  const [glitchEffect, setGlitchEffect] = useState(false)
  const canvasRef = useRef(null)

  const personalInfo = {
    name: "فهد",
    title: "مهندس برمجيات",
    bio: "مهندس برمجيات حديث التخرج أعمل في مشاريع تقنية وأديرها، أستخدم أحدث الأدوات وأشرف على العمل عليها. مهتم بالـ Data Engineering والتعامل مع قواعد البيانات لبناء حلول تقنية متطورة.",
    location: "الرياض، المملكة العربية السعودية",
    email: "Alghamdi.dev@gmail.com",
    social: {
      github: "https://github.com/3ntazDev",
      linkedin: "https://www.linkedin.com/in/fahad-alghamdi-a91969246/",
    },
    cvUrl: "",
  }

  const skills = [
    {
      category: "اللغات البرمجية",
      items: ["Python", "Java", "JavaScript"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "أدوات اختبار البرمجيات",
      items: ["Jest", "JMeter", "Katalon", "SonarQube"],
      icon: <Target className="w-6 h-6" />,
    },
    {
      category: "أدوات التطوير",
      items: ["Git", "GitHub"],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      category: "الحوسبة السحابية",
      items: ["Oracle Cloud", "AWS"],
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      category: "أطر العمل والتقنيات",
      items: ["React", "Supabase", "Agile", "Waterfall", "Scrum"],
      icon: <Sparkles className="w-6 h-6" />,
    },
  ]

  const projectCategories = [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      projects: [
        {
          title: "تطبيق [ضيعت اغراضك ؟ ]",
          description:
            "تطبيق يساعد المستخدمين في البحث عن أغراضهم المفقودة بطريقة سهلة وبواجهة استخدام واضحة. تم تصميمه باستخدام Figma ليوفر تجربة مستخدم سلسة",
          technologies: ["Figma"],
        },
        {
          title: "نظام Edamah",
          description:
            "نظام يربط الجمعيات الخيرية بالمطاعم لإعادة توزيع الفائض من الطعام بشكل فعّال، ويهدف إلى تقليل الهدر وتعزيز الاستدامة",
          technologies: ["Figma"],
        },
      ],
    },
    {
      id: "developer",
      title: "Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      projects: [
        {
          title: "منصة FabMatch",
          description:
            "منصة تربط الأفراد والشركات مع أصحاب الطابعات ثلاثية الأبعاد، وتوفر مزايا مثل نظام المزايدة، الدعم الذكي بالذكاء الاصطناعي، المعاملات الآمنة، وعرض الخدمات",
          technologies: ["AWS", "React", "Tailwind CSS", "n8n", "Supabase"],
          demo: "https://fabmatch.org",
        },
        {
          title: "WashyWay",
          description:
            "تطبيق ويب لحجز غسيل السيارات في أماكن متعددة بسهولة. يمكن للمستخدمين تصفح الخدمات القريبة وتحديد مواعيد الغسيل إلكترونيًا",
          technologies: ["React", "Tailwind CSS", "Supabase"],
          demo: "https://washy-way.vercel.app/",
        },
      ],
    },
    {
      id: "data-engineer",
      title: "Data Engineering",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      projects: [],
    },
    {
      id: "product-owner",
      title: "Product Owner",
      icon: <User className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      projects: [],
    },
    {
      id: "business-analysis",
      title: "Business Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      projects: [],
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      icon: <Brain className="w-8 h-8" />,
      color: "from-teal-500 to-blue-600",
      projects: [],
    },
  ]

  const experiences = [
    {
      type: "training",
      title: "Software Engineer Intern",
      organization: "Confidential Government",
      position: "Software Engineer Intern",
      duration: "يونيو 2025 - الحالي · 3 أشهر",
      description: "تدريب في تطوير البرمجيات في جهة حكومية",
      tags: ["Software Development", "Government Sector"],
      logo: "",
    },
    {
      type: "volunteer",
      title: "Google Developer Student Club | PSAU",
      organization: "Google Developer Student Club",
      position: "Project Manager",
      duration: "فبراير 2024 - فبراير 2024 · 1 شهر",
      description: "إدارة المشاريع وتنسيق الأنشطة التقنية",
      tags: ["Project Planning", "Member Relations"],
      logo: "",
    },
    {
      type: "volunteer",
      title: "Google Developer Student Club | PSAU",
      organization: "Google Developer Student Club",
      position: "Member",
      duration: "يناير 2023 - فبراير 2024 · 1 سنة 2 شهر",
      description: "عضو نشط في النادي التقني",
      tags: ["Member Relations"],
      logo: "",
    },
    {
      type: "volunteer",
      title: "Software Engineering Club",
      organization: "Software Engineering Club",
      position: "Designer",
      duration: "أبريل 2023 - مارس 2024 · 1 سنة",
      description: "تصميم واجهات المستخدم والهوية البصرية للنادي",
      tags: ["User Interface Design", "Member Relations"],
      logo: "",
    },
    {
      type: "volunteer",
      title: "Software Engineering Club",
      organization: "Software Engineering Club",
      position: "Member",
      duration: "فبراير 2022 - مارس 2023 · 1 سنة 2 شهر",
      description: "عضو مؤسس في نادي هندسة البرمجيات",
      tags: ["Member Relations", "Membership Building"],
      logo: "",
    },
  ]

  const contributions = [
    {
      title: "بوصلة - المساعد الدراسي",
      description:
        "مساعد دراسي ذكي يساعد الطلاب الجامعيين في جميع جامعات المملكة العربية السعودية. يوفر التطبيق مميزات متنوعة لتسهيل الحياة الأكاديمية للطلاب.",
      link: "قريباً إن شاء الله",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      role: "Team Leader & Project Owner",
      company: "شركة هيبرا",
    },
    {
      title: "أقيام - نتائج الرياضات الإلكترونية",
      description:
        "منصة متخصصة في عرض وتتبع نتائج الرياضات الإلكترونية والبطولات المختلفة. توفر إحصائيات مفصلة ومتابعة حية للمباريات والفرق.",
      link: "https://apps.apple.com/app/agyam/id6670207726",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Socket.io"],
      role: "Team Leader & Project Owner",
      company: "شركة هيبرا",
    },
  ]

  const achievements = [
    {
      title: "المركز الأول في مسابقة CODE IN البرمجية",
      organization: "مسابقة CODE IN",
      year: "2024",
      description:
        "حصلت على المركز الأول في مسابقة CODE IN البرمجية التي تهدف إلى تطوير مهارات البرمجة وحل المشاكل التقنية",
      image: "",
    },
    {
      title: "Soon!",
      organization: "   ",
      year: "",
      description: "",
      image: "",
    },
  ]

  const certifications = [
    {
      title: "Oracle Certified Associate – Oracle Cloud Infrastructure 2025 Foundations",
      issuer: "Oracle",
      date: "2025",
      description: "شهادة تُثبت الفهم الأساسي لبنية Oracle السحابية (OCI) ومفاهيم الحوسبة السحابية",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8E40C2DE93712A60F3B610D974E353764EDA7D496391DA614272170F4D220AC8",
    },
  ]

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date())
    const timeInterval = setInterval(updateTime, 1000)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolling(true)

      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      setTimeout(() => setIsScrolling(false), 100)
    }

    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 200)
    }, 10000)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(timeInterval)
      clearInterval(glitchInterval)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden" dir="rtl">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.3 }} />

      <motion.div
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/20 border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 text-sm font-mono">
              <div className="text-cyan-400">{currentTime.toLocaleTimeString("ar-SA")}</div>
              <div className="text-green-400">SYSTEM: ONLINE</div>
              <div className="text-yellow-400">CPU: 98%</div>
            </div>

            <motion.div
              className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent ${
                glitchEffect ? "animate-pulse" : ""
              }`}
              animate={{ scale: glitchEffect ? [1, 1.1, 1] : 1 }}
            >
              {personalInfo.name} v2.0
            </motion.div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                onClick={() => setVolume(volume > 0 ? 0 : 50)}
                className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                {volume > 0 ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all"
              >
                {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="flex gap-2 p-2 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-cyan-500/30">
              {[
                { id: "hero", label: "البداية", icon: <Star size={16} /> },
                { id: "skills", label: "المهارات", icon: <Code size={16} /> },
                { id: "projects", label: "المشاريع", icon: <Briefcase size={16} /> },
                { id: "experience", label: "الخبرات", icon: <Trophy size={16} /> },
                { id: "contributions", label: "المساهمات", icon: <GitFork size={16} /> },
                { id: "certifications", label: "الشهادات", icon: <FileCheck size={16} /> },
                { id: "achievements", label: "الجوائز", icon: <Award size={16} /> },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                      : "hover:bg-white/10 text-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="hidden md:inline">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />

        <motion.div
          className="text-center z-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl mb-8 text-cyan-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.div
            className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-cyan-500/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl animate-pulse" />
            <p className="text-lg md:text-xl leading-relaxed relative z-10">{personalInfo.bio}</p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>تواصل معي</span>
            </motion.a>

            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <span className="text-sm text-gray-400 mb-2">اكتشف المزيد</span>
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border border-cyan-500/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      <section id="skills" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            المهارات التقنية
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-cyan-500/30 group-hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
                      {skillGroup.icon}
                    </div>
                    <h4 className="text-xl font-bold text-cyan-300">{skillGroup.category}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-cyan-500/30 text-sm hover:border-purple-500/50 transition-all cursor-default"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/10 to-cyan-900/10" />

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            المشاريع التقنية
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveProject(activeProject === category.id ? null : category.id)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}
                />
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-cyan-500/30 group-hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${category.color}`}>{category.icon}</div>
                    <h4 className="text-2xl font-bold text-white">{category.title}</h4>
                  </div>

                  <div className="text-gray-300 mb-4">
                    {category.projects.length > 0 ? `${category.projects.length} مشروع متاح` : "قريباً..."}
                  </div>

                  <AnimatePresence>
                    {activeProject === category.id && category.projects.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 mt-6"
                      >
                        {category.projects.map((project, projectIndex) => (
                          <motion.div
                            key={projectIndex}
                            className="p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: projectIndex * 0.1 }}
                          >
                            <h5 className="font-bold text-cyan-300 mb-2">{project.title}</h5>
                            <p className="text-sm text-gray-400 mb-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-cyan-500/20 text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {project.demo && (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                whileHover={{ scale: 1.05 }}
                              >
                                <ExternalLink size={14} />
                                <span>عرض المشروع</span>
                              </motion.a>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10" />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            الخبرات المهنية
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-green-500/30 group-hover:border-blue-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        exp.type === "training"
                          ? "bg-gradient-to-r from-orange-500 to-red-600"
                          : exp.type === "volunteer"
                            ? "bg-gradient-to-r from-green-500 to-emerald-600"
                            : "bg-gradient-to-r from-blue-500 to-purple-600"
                      }`}
                    >
                      {exp.type === "training" ? "تدريب" : exp.type === "volunteer" ? "تطوع" : "عمل"}
                    </div>
                    <h4 className="text-2xl font-bold text-cyan-300">{exp.title}</h4>
                  </div>

                  <div className="mb-4">
                    <p className="text-lg text-white mb-2">{exp.position}</p>
                    <p className="text-gray-400 mb-2">{exp.organization}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-green-600/30 to-blue-600/30 border border-green-500/30 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contributions Section */}
      <section id="contributions" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-pink-900/10 to-purple-900/10" />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            المساهمات والمشاريع
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributions.map((contribution, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-pink-500/30 group-hover:border-purple-500/50 transition-all h-full">
                  <h4 className="text-2xl font-bold text-pink-300 mb-3">{contribution.title}</h4>
                  <p className="text-gray-300 mb-4">{contribution.description}</p>

                  <div className="mb-4">
                    <p className="text-sm text-purple-400 mb-1">{contribution.role}</p>
                    <p className="text-sm text-gray-500">{contribution.company}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {contribution.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-600/30 to-purple-600/30 border border-pink-500/30 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {contribution.link !== "قريباً إن شاء الله" ? (
                    <motion.a
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} />
                      <span>عرض المشروع</span>
                    </motion.a>
                  ) : (
                    <span className="text-gray-500 italic">{contribution.link}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 to-orange-900/10" />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            الشهادات المهنية
          </motion.h3>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-yellow-500/30 group-hover:border-orange-500/50 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-yellow-300 mb-2">{cert.title}</h4>
                      <p className="text-gray-400 mb-2">
                        {cert.issuer} • {cert.date}
                      </p>
                      <p className="text-gray-300 mb-4">{cert.description}</p>

                      {cert.link && (
                        <motion.a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <ExternalLink size={16} />
                          <span>عرض الشهادة</span>
                        </motion.a>
                      )}
                    </div>

                    <motion.div
                      className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                    >
                      <FileCheck className="w-8 h-8" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-amber-900/10 to-yellow-900/10" />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            الجوائز والإنجازات
          </motion.h3>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-amber-500/30 group-hover:border-yellow-500/50 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-amber-300 mb-2">{achievement.title}</h4>
                      {achievement.organization && (
                        <p className="text-gray-400 mb-2">
                          {achievement.organization} • {achievement.year}
                        </p>
                      )}
                      {achievement.description && <p className="text-gray-300">{achievement.description}</p>}
                    </div>

                    <motion.div
                      className="p-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                      <Trophy className="w-8 h-8" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="py-12 px-4 relative border-t border-cyan-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              © {new Date().getFullYear()} {personalInfo.name} - جميع الحقوق محفوظة
            </h4>
            <p className="text-gray-400">تم تطويره بتقنيات مستقبلية</p>
          </motion.div>

          <div className="flex justify-center gap-6">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>

            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>
      </footer>

      <motion.button
        className="fixed bottom-8 left-8 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
        whileTap={{ scale: 0.9 }}
        animate={{
          opacity: scrollY > 300 ? 1 : 0,
          y: scrollY > 300 ? 0 : 100,
        }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-6 h-6 transform rotate-180" />
      </motion.button>
    </div>
  )
}
