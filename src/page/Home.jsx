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
//     bio: "أنسج خيوط البرمجيات كما تُنسج الحكايات، أتنقّل بين مرافئ تحليل الأعمال وسفن البيانات، وأحمل في رحلتي بوصلة الجودة وإدارة المنتجات، لأرسم للعالم حلولًا تصنع الفرق",
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
import { useState, useEffect } from "react"
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
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FuturisticPortfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeProject, setActiveProject] = useState(null)
  const [systemStats, setSystemStats] = useState({
    cpu: 45,
    ram: 67,
    gpu: 82,
    temp: 42,
    network: 156,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const personalInfo = {
    name: "فهد",
    title: "مهندس برمجيات",
    bio: "أنسج خيوط البرمجيات كما تُنسج الحكايات، أتنقّل بين مرافئ تحليل الأعمال وسفن البيانات، وأحمل في رحلتي بوصلة الجودة وإدارة المنتجات، لأرسم للعالم حلولًا تصنع الفرق.",
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
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      category: "أدوات اختبار البرمجيات",
      items: ["Jest", "JMeter", "Katalon", "SonarQube"],
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      category: "أدوات التطوير",
      items: ["Git", "GitHub"],
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      category: "الحوسبة السحابية",
      items: ["Oracle Cloud", "AWS"],
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      category: "أطر العمل والتقنيات",
      items: ["React", "Supabase", "Agile", "Waterfall", "Scrum"],
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ]

  const projectCategories = [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
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
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
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
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-green-500 to-emerald-600",
      projects: [],
    },
    {
      id: "product-owner",
      title: "Product Owner",
      icon: <User className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-500 to-red-600",
      projects: [],
    },
    {
      id: "business-analysis",
      title: "Business Analysis",
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-indigo-500 to-purple-600",
      projects: [],
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
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
    const handleScroll = () => {
      setScrollY(window.scrollY)
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
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen text-gray-900 font-mono relative overflow-hidden" dir="rtl">
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-gray-300 bg-white/80"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center gap-1 sm:gap-3 lg:gap-6 text-xs sm:text-sm font-mono overflow-x-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="text-cyan-600 hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                {currentTime.toLocaleTimeString("ar-SA")}
              </div>
              <div className="text-green-600 hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                ONLINE
              </div>
              <div
                className={`transition-all duration-300 hover:scale-110 whitespace-nowrap ${
                  systemStats.cpu > 70 ? "text-red-600" : systemStats.cpu > 50 ? "text-yellow-600" : "text-green-600"
                }`}
              >
                CPU: {systemStats.cpu}%
              </div>
              <div
                className={`transition-all duration-300 hover:scale-110 whitespace-nowrap ${
                  systemStats.ram > 80 ? "text-red-600" : systemStats.ram > 60 ? "text-yellow-600" : "text-blue-600"
                }`}
              >
                RAM: {systemStats.ram}%
              </div>
              <div className="text-purple-600 hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                GPU: {systemStats.gpu}%
              </div>
              <div
                className={`transition-all duration-300 hover:scale-110 whitespace-nowrap ${
                  systemStats.temp > 45 ? "text-red-600" : systemStats.temp > 40 ? "text-yellow-600" : "text-cyan-600"
                }`}
              >
                TEMP: {systemStats.temp}°C
              </div>
              <div className="text-pink-600 hover:scale-110 transition-transform duration-300 whitespace-nowrap">
                NET: {systemStats.network}MB/s
              </div>
            </motion.div>
            <motion.div
              className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {personalInfo.name} v2.0
            </motion.div>
            <div className="w-4 sm:w-16"></div>
          </div>
          <motion.div
            className="flex justify-center mt-2 sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex gap-1 sm:gap-2 p-1 sm:p-2 rounded-full bg-gray-100 border border-gray-300 overflow-x-auto max-w-full">
              {[
                { id: "hero", label: "البداية", icon: <Star size={14} className="sm:w-4 sm:h-4" /> },
                { id: "skills", label: "المهارات", icon: <Code size={14} className="sm:w-4 sm:h-4" /> },
                { id: "projects", label: "المشاريع", icon: <Briefcase size={14} className="sm:w-4 sm:h-4" /> },
                { id: "experience", label: "الخبرات", icon: <Trophy size={14} className="sm:w-4 sm:h-4" /> },
                { id: "contributions", label: "المساهمات", icon: <GitFork size={14} className="sm:w-4 sm:h-4" /> },
                { id: "certifications", label: "الشهادات", icon: <FileCheck size={14} className="sm:w-4 sm:h-4" /> },
                { id: "achievements", label: "الجوائز", icon: <Award size={14} className="sm:w-4 sm:h-4" /> },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all whitespace-nowrap ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                      : "hover:bg-gray-200 text-gray-700"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="hidden sm:inline lg:inline">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center relative pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
            variants={fadeInUp}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-gray-700"
            variants={fadeInUp}
          >
            {personalInfo.title}
          </motion.h2>
          <motion.div
            className="relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-gray-50 border border-gray-200 mb-8 sm:mb-12 shadow-lg"
            variants={scaleIn}
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800">{personalInfo.bio}</p>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={staggerContainer}>
            {[
              {
                href: `mailto:${personalInfo.email}`,
                icon: Mail,
                text: "تواصل معي",
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                href: personalInfo.social.github,
                icon: Github,
                text: "GitHub",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                href: personalInfo.social.linkedin,
                icon: Linkedin,
                text: "LinkedIn",
                gradient: "from-blue-500 to-indigo-600",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={index > 0 ? "_blank" : undefined}
                rel={index > 0 ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${link.gradient} hover:shadow-lg transition-all text-white`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} />
                <span>{link.text}</span>
              </motion.a>
            ))}
          </motion.div>
          <motion.div className="flex flex-col items-center" variants={fadeInUp}>
            <span className="text-sm text-gray-600 mb-2">اكتشف المزيد</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <ChevronDown className="w-6 h-6 text-cyan-600" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="py-12 sm:py-20 px-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent leading-tight pb-4"
            variants={fadeInUp}
          >
            المهارات التقنية
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
            variants={staggerContainer}
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <motion.div
                  className="relative p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all"
                  whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {skillGroup.icon}
                    </motion.div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-2 sm:px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-xs sm:text-sm hover:bg-gray-200 transition-all cursor-default text-gray-700"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#e5e7eb",
                          transition: { duration: 0.2 },
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section id="projects" className="py-12 sm:py-20 px-4 relative">
        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            المشاريع التقنية
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
            variants={staggerContainer}
          >
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="relative group cursor-pointer"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                onClick={() => setActiveProject(activeProject === category.id ? null : category.id)}
              >
                <motion.div
                  className="relative p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all"
                  whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <motion.div
                      className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${category.color} text-white`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-lg sm:text-2xl font-bold text-gray-800">{category.title}</h4>
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 mb-4">
                    {category.projects.length > 0 ? `${category.projects.length} مشروع متاح` : "قريباً..."}
                  </div>
                  <AnimatePresence>
                    {activeProject === category.id && category.projects.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 mt-6"
                      >
                        {category.projects.map((project, projectIndex) => (
                          <motion.div
                            key={projectIndex}
                            className="p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: projectIndex * 0.1 }}
                            whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
                          >
                            <h5 className="font-bold text-cyan-700 mb-2 text-sm sm:text-base">{project.title}</h5>
                            <p className="text-xs sm:text-sm text-gray-600 mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 rounded-full bg-gray-200 border border-gray-300 text-xs hover:scale-110 transition-transform duration-200 text-gray-700"
                                  whileHover={{ scale: 1.05 }}
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
                                className="inline-flex items-center gap-2 text-xs sm:text-sm text-cyan-600 hover:text-cyan-700 transition-colors hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                              >
                                <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                                <span>عرض المشروع</span>
                              </motion.a>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="experience" className="py-12 sm:py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            الخبرات المهنية
          </motion.h3>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="relative p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold w-fit text-white ${
                        exp.type === "training"
                          ? "bg-gradient-to-r from-orange-500 to-red-600"
                          : exp.type === "volunteer"
                            ? "bg-gradient-to-r from-green-500 to-emerald-600"
                            : "bg-gradient-to-r from-blue-500 to-purple-600"
                      }`}
                    >
                      {exp.type === "training" ? "تدريب" : exp.type === "volunteer" ? "تطوع" : "عمل"}
                    </div>
                    <h4 className="text-lg sm:text-2xl font-bold text-gray-800">{exp.title}</h4>
                  </div>
                  <div className="mb-4">
                    <p className="text-base sm:text-lg text-gray-900 mb-2">{exp.position}</p>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">{exp.organization}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{exp.duration}</p>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-xs sm:text-sm text-gray-700"
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

      <section id="contributions" className="py-12 sm:py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            المساهمات والمشاريع
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {contributions.map((contribution, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all h-full">
                  <h4 className="text-lg sm:text-2xl font-bold text-pink-600 mb-3">{contribution.title}</h4>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">{contribution.description}</p>
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-purple-600 mb-1">{contribution.role}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{contribution.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {contribution.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-xs sm:text-sm text-gray-700"
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
                      className="inline-flex items-center gap-2 text-sm sm:text-base text-pink-600 hover:text-pink-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      <span>عرض المشروع</span>
                    </motion.a>
                  ) : (
                    <span className="text-sm text-gray-500 italic">{contribution.link}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="certifications" className="py-12 sm:py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            الشهادات المهنية
          </motion.h3>
          <div className="space-y-6 sm:space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-2xl font-bold text-yellow-600 mb-2">{cert.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        {cert.issuer} • {cert.date}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 mb-4">{cert.description}</p>
                      {cert.link && (
                        <motion.a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm sm:text-base text-yellow-600 hover:text-yellow-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                          <span>عرض الشهادة</span>
                        </motion.a>
                      )}
                    </div>
                    <motion.div
                      className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex-shrink-0 text-white"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                    >
                      <FileCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="achievements" className="py-12 sm:py-20 px-4 relative">
        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            الجوائز والإنجازات
          </motion.h3>
          <div className="space-y-6 sm:space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-2xl font-bold text-amber-600 mb-2">{achievement.title}</h4>
                      {achievement.organization && (
                        <p className="text-sm sm:text-base text-gray-600 mb-2">
                          {achievement.organization} • {achievement.year}
                        </p>
                      )}
                      {achievement.description && (
                        <p className="text-sm sm:text-base text-gray-700">{achievement.description}</p>
                      )}
                    </div>
                    <motion.div
                      className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 flex-shrink-0 text-white"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                      <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="py-8 sm:py-12 px-4 relative border-t border-gray-300">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4">
              © {new Date().getFullYear()} {personalInfo.name} - جميع الحقوق محفوظة
            </h4>
            <p className="text-sm sm:text-base text-gray-600">تم تطويره بتقنيات مستقبلية</p>
          </motion.div>
          <motion.div
            className="flex justify-center gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { href: `mailto:${personalInfo.email}`, icon: Mail, gradient: "from-cyan-500 to-blue-600" },
              { href: personalInfo.social.github, icon: Github, gradient: "from-purple-500 to-pink-600" },
              { href: personalInfo.social.linkedin, icon: Linkedin, gradient: "from-blue-500 to-indigo-600" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={index > 0 ? "_blank" : undefined}
                rel={index > 0 ? "noopener noreferrer" : undefined}
                className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${link.gradient} hover:shadow-lg transition-all text-white`}
                variants={scaleIn}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </footer>

      <motion.button
        className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 p-3 sm:p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg z-50 transition-all text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: scrollY > 300 ? 1 : 0,
          y: scrollY > 300 ? 0 : 100,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 360,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-180" />
      </motion.button>
    </div>
  )
}
