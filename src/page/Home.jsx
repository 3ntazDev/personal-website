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
  MessageSquare,
  Quote,
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
      link: "https://apps.apple.com/sa/app/agyam/id6746292350",
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

  const testimonials = [
    {
      id: 1,
      name: "Ibrahim Alotaibi",
      role: "Co-Founder & Lead Software Developer",
      company: "Tech Company",
      content:
        "فI've worked with Fahad on multiple projects... sharp, reliable, and technically solid. A great engineer to have on any team . ",
      rating: 5,
      avatar: null, // Removed image path to use default icon
    },
    {
      id: 2,
      name: "Mohammed Assiri",
      role: "Engineering Innovation & Building Ventures",
      company: "جامعة الامير سطام ",
      content:
        "I had the pleasure of teaching Fahad Alghamdi in the Foundations of Software Engineering course, where he consistently ranked among the top-performing students. Fahad demonstrated a strong grasp of technical concepts, analytical thinking, and the ability to engage meaningfully in discussions. His work was always thorough, timely, and reflective of a high level of academic commitment.In addition to his academic performance, I worked with Fahad through his role in the student council. During our collaboration, I observed several standout qualities in him—most notably his leadership, reliability, and strong sense of initiative. He showed genuine dedication to serving his peers and contributing positively to student life, always acting with professionalism and a collaborative spirit.Fahad combines academic excellence with interpersonal strength and a proactive mindset. I am confident he will be an asset in any professional or academic setting.I highly recommend Fahad without reservation",
      rating: 5,
      avatar: null, // Removed image path to use default icon
    },
    {
      id: 3,
      name: "رزان الودعاني",
      role: "Software Engineer & Project Manager",
      company: "شركة تقنية",
      content:
        "It was a pleasure working with Fahad during his time with us in the Software Engineering Club. Fahad was part of the Media team, and he consistently demonstrated exceptional creativity and dedication. He was always proactive, often offering his ideas and support.I highly recommend Fahad for any future opportunities, as I am confident he will bring great value to any team he joins.",
      rating: 5,
      avatar: null, // Removed image path to use default icon
    },
    {
      id: 4,
      name: "Saeed Almousa",
      role: "Software Engineering Student",
      company: "جامعة الأمير سطام",
      content:
        "I truly enjoyed working with Fahad Alghamdi on the Software Engineering Club’s website project. Throughout our collaboration, Fahad demonstrated deep knowledge in web design, strong technical skills, and a great eye for aesthetics.I personally gained a lot from the experience — both in terms of expanding my knowledge and learning new skills in web development and design. Working with him was an excellent experience, and I deeply appreciated his professionalism and collaborative spirit.I would gladly work with him again in the future and highly recommend him for any technical or design-related project.",
      rating: 5,
      avatar: null, // Removed image path to use default icon
    },
    {
      id: 5,
      name: "Eng.Osama Alghamdi",
      role: "Data Analyst",
      company: "شركة تحليل البيانات",
      content:
        "مهندس فهد من الناس اللي زاملتهم في عديد انشطة وفعاليات وخضنا تجارب جميلة وتعلمنا الكثير وهو شخص طموح ويسعى لتجاوز حدود مهاراته ولا سقف له في مجاله، اعانك ربي ووفقك مهندسنا فهد. ",
      rating: 5,
      avatar: null, // Removed image path to use default icon
    },
    {
      id: 6,
      name: "Naif Alqahtani",
      role: "Aspiring Product Manager",
      company: "المجلس الطلابي",
      content:
        "I had the pleasure of working with Fahad during our time on the student council. Fahad consistently demonstrated the qualities of a natural leader, action-oriented, and deeply collaborative. He brought forward innovative ideas, mobilized the team with clarity and energy, and always delivered impact beyond expectations. His ability to navigate challenges with composure and lead initiatives with ownership made him a key driver of our success. I would gladly work with him again in any high-performance environment.",
      rating: 5,
      avatar: null, // Removed image path to use default icon
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = [
        "hero",
        "skills",
        "projects",
        "experience",
        "contributions",
        "testimonials",
        "certifications",
        "achievements",
      ]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    const updateTime = () => setCurrentTime(new Date())
    const updateStats = () => {
      setSystemStats({
        cpu: Math.floor(Math.random() * 30) + 40,
        ram: Math.floor(Math.random() * 40) + 50,
        gpu: Math.floor(Math.random() * 20) + 75,
        temp: Math.floor(Math.random() * 10) + 38,
        network: Math.floor(Math.random() * 200) + 100,
      })
    }

    window.addEventListener("scroll", handleScroll)
    const timeInterval = setInterval(updateTime, 1000)
    const statsInterval = setInterval(updateStats, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timeInterval)
      clearInterval(statsInterval)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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
                { id: "testimonials", label: "التوصيات", icon: <MessageSquare size={14} className="sm:w-4 sm:h-4" /> },
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

      <motion.section
        id="testimonials"
        className="py-20 px-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                التوصيات
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              آراء وتقييمات من الزملاء والعملاء الذين تعاملوا معي في مشاريع مختلفة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="relative group"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-right">{testimonial.content}</p>

                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Quote className="w-8 h-8 text-cyan-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
