"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileCheck,
  ExternalLink,
  ChevronDown,
  Newspaper,
  Code,
  Briefcase,
  Award,
  GitFork,
  FileDown,
  Trophy,
} from "lucide-react"
import { motion } from "framer-motion"

export default function NewspaperPortfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolling, setIsScrolling] = useState(false)

  // يمكنك تعديل هذه البيانات حسب معلوماتك الشخصية
  const personalInfo = {
    name: "فهد",
    title: "مطور واجهات أمامية",
    bio: "مطور واجهات أمامية أمتلك خبرة في تنفيذ مشاريع متنوعة، مع اهتمام بجودة البرمجيات وتجربة المستخدم. لدي خبرة أيضًا في ضمان الجودة وإدارة المشاريع وتنظيم سير العمل بكفاءة.",
    location: "الرياض، المملكة العربية السعودية",
    email: "Alghamdi.dev@gmail.com",
    social: {
      github: "https://github.com/3ntazDev",
      linkedin: "https://www.linkedin.com/in/fahad-alghamdi-a91969246/",
    },
    // إضافة رابط السيرة الذاتية - قم بتغييره إلى الرابط الفعلي للملف
    cvUrl: "" 
  }

  // المهارات التقنية
  const skills = [
    {
      category: "اللغات البرمجية",
      items: ["Python", "Java", "JavaScript"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "أدوات اختبار البرمجيات",
      items: ["Jest", "JMeter", "Katalon", "SonarQube"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "أدوات التطوير",
      items: ["Git", "GitHub"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "الحوسبة السحابية",
      items: ["Oracle Cloud", "AWS"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "أطر العمل والتقنيات",
      items: ["React", "Supabase", "Agile", "Waterfall", "Scrum"],
      icon: <Code className="w-6 h-6" />,
    },
  ]

  // المشاريع
  const projects = [
    {
      title: "منصة FabMatch",
      description:
        "منصة تربط الأفراد والشركات مع أصحاب الطابعات ثلاثية الأبعاد، وتوفر مزايا مثل نظام المزايدة، الدعم الذكي بالذكاء الاصطناعي، المعاملات الآمنة، وعرض الخدمات.",
      technologies: ["AWS", "React", "Tailwind CSS", "n8n", "Supabase"],
      demo: "https://fabmatch.org",
    },
    {
      title: "WashyWay",
      description:
        "تطبيق ويب لحجز غسيل السيارات في أماكن متعددة بسهولة. يمكن للمستخدمين تصفح الخدمات القريبة وتحديد مواعيد الغسيل إلكترونيًا.",
      technologies: ["React", "Tailwind CSS", "Supabase"],
      demo: "https://washy-way.vercel.app/",
    },
    {
      title: "تطبيق",
      description:
        "تطبيق يساعد المستخدمين في البحث عن أغراضهم المفقودة بطريقة سهلة وبواجهة استخدام واضحة. تم تصميمه باستخدام Figma ليوفر تجربة مستخدم سلسة.",
      technologies: ["Figma"],
    },
    {
      title: "نظام Edamah",
      description:
        "نظام يربط الجمعيات الخيرية بالمطاعم لإعادة توزيع الفائض من الطعام بشكل فعّال، ويهدف إلى تقليل الهدر وتعزيز الاستدامة.",
      technologies: ["Figma"],
    },
  ]

  // المساهمات
  const contributions = [
    {
      title: "Soon !",
    },
  ]

  // الجوائز والإنجازات
  const achievements = [
    {
      title: "Soon!",
      organization: "   ",
      year: "",
      description: ""
    },

  ]

  // الشهادات الاحترافية
  const certifications = [
    {
      title: "Oracle Certified Associate – Oracle Cloud Infrastructure 2025 Foundations",
      issuer: "Oracle",
      date: "2025",
      description: "شهادة تُثبت الفهم الأساسي لبنية Oracle السحابية (OCI) ومفاهيم الحوسبة السحابية.",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8E40C2DE93712A60F3B610D974E353764EDA7D496391DA614272170F4D220AC8",
    },
  ]

  const currentDate = new Date().toLocaleDateString("ar-SA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // تتبع التمرير وتحديد القسم النشط
  useEffect(() => {
    const handleScroll = () => {
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

      // إيقاف تحديث حالة التمرير بعد 100 مللي ثانية
      setTimeout(() => {
        setIsScrolling(false)
      }, 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // التمرير إلى القسم المحدد
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // تأثيرات الحركة
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-stone-100 font-serif text-right relative" dir="rtl">
      {/* القائمة الثابتة */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Newspaper className="w-6 h-6" />
            <span className="font-bold text-xl">{personalInfo.name}</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className={`px-3 py-1 rounded-md transition-colors ${activeSection === "hero" ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`px-3 py-1 rounded-md transition-colors ${activeSection === "skills" ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              المهارات
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-3 py-1 rounded-md transition-colors ${activeSection === "projects" ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              المشاريع
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className={`px-3 py-1 rounded-md transition-colors ${activeSection === "certifications" ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              الشهادات
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className={`px-3 py-1 rounded-md transition-colors ${activeSection === "achievements" ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              الجوائز والإنجازات
            </button>
            <button
              onClick={() => scrollToSection("contributions")}
              className={`px-3 py-1 rounded-md transition-colors ${activeSection === "contributions" ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              المساهمات
            </button>
          </div>
          <div className="flex gap-3">
            {/* زر تحميل السيرة الذاتية في القائمة */}
            {/* <a 
              href={personalInfo.cvUrl} 
              download 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="تحميل السيرة الذاتية"
            >
              <FileDown size={18} />
            </a> */}
            <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Mail size={18} />
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* رأس الجريدة */}
      <header className="border-b-4 border-black py-6 px-4 md:px-8 bg-white mt-16">
        <div className="text-center mb-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">صحيفة المبرمج</h1>
          <div className="flex justify-between items-center text-sm">
            <p>{currentDate}</p>
            <p>العدد الأول - نسخة خاصة</p>
            <p>صفحة 1 من 1</p>
          </div>
        </div>
      </header>

      {/* قسم البطل (Hero) */}
      <section id="hero" className="py-16 px-4 md:px-8 bg-white border-b border-gray-300 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">{personalInfo.name}</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">{personalInfo.title}</h3>
          <div className="flex items-center justify-center gap-2 text-sm mb-4">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>
          <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">{personalInfo.bio}</p>
          
          {/* زر تحميل السيرة الذاتية */}
          {/* <motion.a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md mb-8 hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown size={20} />
            <span className="font-bold">تحميل السيرة الذاتية</span>
          </motion.a> */}
          
          <div className="flex gap-6 items-center justify-center mt-4">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </motion.a>
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </motion.a>
          </div>
          <motion.div
            className="mt-12 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* قسم نبذة برمجية */}
      <section className="py-12 px-4 md:px-8 bg-stone-50 border-b border-gray-300">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold border-b-2 border-black mb-6 pb-2 text-center">نبذة برمجية</h3>
          <div
            className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto shadow-lg transform transition-all hover:shadow-xl"
            dir="ltr"
          >
            <pre className="typing-animation">{`const developer = {
  name: "${personalInfo.name}",
  title: "${personalInfo.title}",
  skills: ["React", "JavaScript", "Tailwind"],
  passion: "بناء تجارب رقمية استثنائية",
  contact: "${personalInfo.email}"
};

// دائماً في حالة تعلم
function learnNewTechnologies() {
  return developer.skills.push("NextJS");
}

// جاهز للتعاون
if (youNeedDeveloper) {
  contactMe(developer.contact);
}`}</pre>
          </div>
        </motion.div>
      </section>

      {/* قسم المهارات */}
      <section id="skills" className="py-12 px-4 md:px-8 bg-white border-b border-gray-300">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="w-8 h-8" />
            <h3 className="text-3xl font-bold border-b-2 border-black pb-2 text-center">المهارات التقنية</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 p-4 bg-stone-50 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 mb-3">
                  {skillGroup.icon}
                  <h4 className="font-bold text-xl">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-gray-200 px-3 py-1 rounded-sm text-sm hover:bg-gray-300 transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* قسم المشاريع */}
      <section id="projects" className="py-12 px-4 md:px-8 bg-stone-50 border-b border-gray-300">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="w-8 h-8" />
            <h3 className="text-3xl font-bold border-b-2 border-black pb-2 text-center">أبرز المشاريع</h3>
          </div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-gray-200 px-3 py-1 rounded-sm text-sm hover:bg-gray-300 transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* قسم الشهادات */}
      <section id="certifications" className="py-12 px-4 md:px-8 bg-white border-b border-gray-300">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8" />
            <h3 className="text-3xl font-bold border-b-2 border-black pb-2 text-center">الشهادات المهنية</h3>
          </div>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 p-6 bg-stone-50 shadow-sm hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{cert.title}</h4>
                    <p className="text-sm mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="mb-3">{cert.description}</p>
                    {cert.link && (
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>عرض الشهادة</span>
                      </motion.a>
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                  >
                    <FileCheck className="w-12 h-12 text-gray-700" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* قسم الجوائز والإنجازات */}
      <section id="achievements" className="py-12 px-4 md:px-8 bg-stone-50 border-b border-gray-300">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="w-8 h-8" />
            <h3 className="text-3xl font-bold border-b-2 border-black pb-2 text-center">الجوائز والإنجازات</h3>
          </div>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{achievement.title}</h4>
                    <p className="text-sm mb-2">
                      {achievement.organization} • {achievement.year}
                    </p>
                    <p className="mb-3">{achievement.description}</p>
                  </div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  >
                    <Trophy className="w-12 h-12 text-amber-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* قسم المساهمات */}
      <section id="contributions" className="py-12 px-4 md:px-8 bg-stone-50 border-b border-gray-300">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <GitFork className="w-8 h-8" />
            <h3 className="text-3xl font-bold border-b-2 border-black pb-2 text-center">المساهمات المفتوحة المصدر</h3>
          </div>
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              className="italic text-center py-8 text-xl bg-white border border-gray-300 rounded-md shadow-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p>{contribution.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* زر العودة للأعلى */}
      <motion.button
        className={`fixed bottom-6 left-6 p-3 bg-black text-white rounded-full shadow-lg z-50 ${isScrolling || window.scrollY > 300 ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="w-5 h-5 transform rotate-180" />
      </motion.button>

      {/* تذييل الصفحة */}
      <footer className="py-8 px-4 md:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-black pt-6">
            <p className="font-bold text-lg mb-2">
              © {new Date().getFullYear()} {personalInfo.name} - جميع الحقوق محفوظة
            </p>
            <div className="flex justify-center gap-4 mt-4">
              {/* زر تحميل السيرة الذاتية في التذييل */}
              {/* <motion.a
                href={personalInfo.cvUrl}
                download
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="تحميل السيرة الذاتية"
              >
                <FileDown size={18} />
              </motion.a> */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS للتأثيرات */}
      <style jsx>{`
        .typing-animation {
          overflow: hidden;
          border-right: .15em solid orange;
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: orange; }
        }
      `}</style>
    </div>
  )

}



// "use client";

// import { useState, useEffect, useRef } from "react";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Twitter,
//   Code,
//   ExternalLink,
//   ChevronRight,
//   Server,
//   Database,
//   FileCheck,
//   Terminal,
//   Cpu,
//   Layers,
//   Zap,
//   Globe,
//   Hexagon,
//   X,
// } from "lucide-react";

// export default function Home() {
//   const [isVisible, setIsVisible] = useState({});
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const animationFrameRef = useRef(null);

//   // يمكنك تعديل هذه البيانات حسب معلوماتك الشخصية
//   const personalInfo = {
//     name: "فهد  ",
//     title: "مطور واجهات أمامية",
//     bio: "مطور برمجيات متحمس مع خبرة في تطوير تطبيقات الويب. أسعى دائماً لتعلم تقنيات جديدة وتطوير مهاراتي البرمجية.",
//     location: "الرياض، المملكة العربية السعودية",
//     email: "Alghamdi.dev@gmail.com",
//     social: {
//       github: "https://github.com/3ntazDev",
//       linkedin: "www.linkedin.com/in/fahad-alghamdi-a91969246",
//     },
//   };

//   // المهارات التقنية
//   const skills = [
//     {
//       category: "اللغات البرمجية",
//       items: ["Python", "Java", "JavaScript"],
//     },
//     {
//       category: "أدوات اختبار البرمجيات",
//       items: ["Jest", "JMeter", "Katalon", "SonarQube"],
//     },
//     {
//       category: "أدوات التطوير",
//       items: ["Git", "GitHub"],
//     },
//     {
//       category: "الحوسبة السحابية",
//       items: ["Oracle Cloud", "AWS"],
//     },
//     {
//       category: "أطر العمل والتقنيات",
//       items: ["React", "Supabase", "Agile", "Waterfall", "Scrum"],
//     },
//   ];

//   // المشاريع
//   const projects = [
//     {
//       title: "منصة FabMatch",
//       description:
//         "منصة تربط الأفراد والشركات مع أصحاب الطابعات ثلاثية الأبعاد، وتوفر مزايا مثل نظام المزايدة، الدعم الذكي بالذكاء الاصطناعي، المعاملات الآمنة، وعرض الخدمات.",
//       technologies: ["AWS", "React", "Tailwind CSS", "n8n", "Supabase"],
//       github: "https://github.com/yourusername/fabmatch", // استبدل بالرابط الفعلي
//       demo: "https://fabmatch.org", // استبدل بالرابط الفعلي
//     },
//     {
//       title: "WashyWay",
//       description:
//         "تطبيق ويب لحجز غسيل السيارات في أماكن متعددة بسهولة. يمكن للمستخدمين تصفح الخدمات القريبة وتحديد مواعيد الغسيل إلكترونيًا.",
//       technologies: ["React", "Tailwind CSS", "Supabase"],
//       github: "https://github.com/yourusername/washyway", // استبدل بالرابط الفعلي
//       demo: "washy-way.vercel.app", // استبدل بالرابط الفعلي
//     },
//     {
//       title: "تطبيق  ",
//       description:
//         "تطبيق يساعد المستخدمين في البحث عن أغراضهم المفقودة بطريقة سهلة وبواجهة استخدام واضحة. تم تصميمه باستخدام Figma ليوفر تجربة مستخدم سلسة.",
//       technologies: ["Figma"], // أضف تقنيات أخرى إذا تم برمجته
//       // استبدل بالرابط الفعلي
//     },
//     {
//       title: "نظام Edamah",
//       description:
//         "نظام يربط الجمعيات الخيرية بالمطاعم لإعادة توزيع الفائض من الطعام بشكل فعّال، ويهدف إلى تقليل الهدر وتعزيز الاستدامة.",
//       technologies: ["Figma"], // أضف تقنيات أخرى إذا تم برمجته
//       // استبدل بالرابط الفعلي
//     },
//   ];

//   // المساهمات
//   const contributions = [
//     {
//       title: "Soon !",
//     },
//   ];

//   // الشهادات الاحترافية
//   const certifications = [
//     {
//       title:
//         "Oracle Certified Associate – Oracle Cloud Infrastructure 2025 Foundations",
//       issuer: "Oracle",
//       date: "2025",
//       description:
//         "شهادة تُثبت الفهم الأساسي لبنية Oracle السحابية (OCI) ومفاهيم الحوسبة السحابية.",
//       link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8E40C2DE93712A60F3B610D974E353764EDA7D496391DA614272170F4D220AC8",
//       icon: <FileCheck className="w-12 h-12 text-white/80" />,
//     },
//   ];

//   // تأثير الظهور عند التمرير
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({
//               ...prev,
//               [entry.target.id]: true,
//             }));
//             setActiveSection(entry.target.id.replace("-section", ""));
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const sections = document.querySelectorAll("section[id]");
//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);

//   // كود الكتابة المتحركة
//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);
//   const phrases = [
//     "مطور واجهات أمامية",
//     "مصمم تجربة المستخدم",
//     "مطور تطبيقات ويب",
//     "مختبر برمجيات",
//   ];
//   const [phraseIndex, setPhraseIndex] = useState(0);

//   useEffect(() => {
//     const currentPhrase = phrases[phraseIndex];

//     if (index < currentPhrase.length) {
//       const timeout = setTimeout(() => {
//         setText((prev) => prev + currentPhrase[index]);
//         setIndex((prev) => prev + 1);
//       }, 100);
//       return () => clearTimeout(timeout);
//     } else {
//       const timeout = setTimeout(() => {
//         setText("");
//         setIndex(0);
//         setPhraseIndex((prev) => (prev + 1) % phrases.length);
//       }, 2000);
//       return () => clearTimeout(timeout);
//     }
//   }, [index, phraseIndex]);

//   // تأثير الجزيئات في الخلفية
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const particles = [];
//     const particleCount = 50;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", resizeCanvas);
//     resizeCanvas();

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 0.5;
//         this.speedX = Math.random() * 1 - 0.5;
//         this.speedY = Math.random() * 1 - 0.5;
//         this.color = `rgba(${Math.floor(
//           Math.random() * 100 + 100
//         )}, ${Math.floor(Math.random() * 100 + 100)}, 255, ${
//           Math.random() * 0.5 + 0.3
//         })`;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > canvas.width) this.x = 0;
//         else if (this.x < 0) this.x = canvas.width;
//         if (this.y > canvas.height) this.y = 0;
//         else if (this.y < 0) this.y = canvas.height;
//       }

//       draw() {
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     const init = () => {
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle());
//       }
//     };

//     const connectParticles = () => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(100, 100, 255, ${0.2 - distance / 500})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < particles.length; i++) {
//         particles[i].update();
//         particles[i].draw();
//       }
//       connectParticles();
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };

//     init();
//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameRef.current);
//     };
//   }, []);

//   // التمرير إلى القسم
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(`${sectionId}-section`);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#050816] text-white font-sans relative overflow-hidden">
//       {/* القائمة العلوية */}
//       <nav className="fixed top-0 left-0 right-0 z-40 bg-[#050816]/80 backdrop-blur-md border-b border-[#2A2A40]">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-[#915EFF] to-[#5D54FF] rounded-lg flex items-center justify-center">
//               <Terminal className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#5D54FF]">
//               {personalInfo.name}
//             </span>
//           </div>

//           {/* القائمة للشاشات الكبيرة */}
//           <div className="hidden md:flex items-center space-x-8 space-x-reverse">
//             {[
//               "home",
//               "skills",
//               "projects",
//               "certifications",
//               "contributions",
//             ].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className={`relative text-sm font-medium transition-colors hover:text-[#915EFF] ${
//                   activeSection === item ? "text-[#915EFF]" : "text-gray-300"
//                 } group`}
//               >
//                 <span>
//                   {item === "home"
//                     ? "الرئيسية"
//                     : item === "skills"
//                     ? "المهارات"
//                     : item === "projects"
//                     ? "المشاريع"
//                     : item === "certifications"
//                     ? "الشهادات"
//                     : "المساهمات"}
//                 </span>
//                 <span
//                   className={`absolute -bottom-1 right-0 w-0 h-0.5 bg-[#915EFF] transition-all duration-300 group-hover:w-full ${
//                     activeSection === item ? "w-full" : ""
//                   }`}
//                 ></span>
//               </button>
//             ))}
//           </div>

//           {/* زر القائمة للشاشات الصغيرة */}
//           <button
//             className="md:hidden text-white focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Layers className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* القائمة المنسدلة للشاشات الصغيرة */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-[#0A0A1B] border-t border-[#2A2A40] py-4 px-4">
//             <div className="flex flex-col space-y-4">
//               {[
//                 "home",
//                 "skills",
//                 "projects",
//                 "certifications",
//                 "contributions",
//               ].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className={`text-right py-2 px-4 rounded-md transition-colors ${
//                     activeSection === item
//                       ? "bg-[#2A2A40] text-[#915EFF]"
//                       : "text-gray-300 hover:bg-[#1A1A2E] hover:text-[#915EFF]"
//                   }`}
//                 >
//                   {item === "home"
//                     ? "الرئيسية"
//                     : item === "skills"
//                     ? "المهارات"
//                     : item === "projects"
//                     ? "المشاريع"
//                     : item === "certifications"
//                     ? "الشهادات"
//                     : "المساهمات"}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* القسم الرئيسي */}
//       <section
//         id="home-section"
//         className="min-h-screen flex items-center justify-center px-4 pt-20 relative"
//       >
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915EFF]/20 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5D54FF]/20 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto relative z-10">
//           <div className="flex flex-col items-center text-center">
//             <div className="mb-8 relative">
//               <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#915EFF] to-[#5D54FF] rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(145,94,255,0.5)]">
//                 <Terminal className="w-16 h-16 md:w-20 md:h-20 text-white" />
//               </div>
//               <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg animate-pulse">
//                 <Cpu className="w-6 h-6 text-[#050816]" />
//               </div>
//               <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#00FFFF] rounded-full flex items-center justify-center shadow-lg animate-pulse delay-300">
//                 <Zap className="w-5 h-5 text-[#050816]" />
//               </div>
//             </div>

//             <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#5D54FF] tracking-tighter">
//               {personalInfo.name}
//             </h1>

//             <div className="h-8 mb-6 mt-8">
//               <h2 className="text-xl md:text-2xl text-[#00FFFF]">
//                 {text}
//                 <span className="animate-pulse">|</span>
//               </h2>
//             </div>

//             <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
//               {personalInfo.bio}
//             </p>

//             <div className="flex flex-wrap gap-6 justify-center mb-16">
//               <a
//                 href={personalInfo.social.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#2A2A40] px-6 py-3 rounded-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#915EFF]/20 border border-[#2A2A40]"
//               >
//                 <Github className="w-5 h-5 text-[#915EFF] group-hover:text-[#00FFFF] transition-colors" />
//                 <span className="group-hover:text-[#00FFFF] transition-colors">
//                   GitHub
//                 </span>
//               </a>
//               <a
//                 href={personalInfo.social.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#2A2A40] px-6 py-3 rounded-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#915EFF]/20 border border-[#2A2A40]"
//               >
//                 <Linkedin className="w-5 h-5 text-[#915EFF] group-hover:text-[#00FFFF] transition-colors" />
//                 <span className="group-hover:text-[#00FFFF] transition-colors">
//                   LinkedIn
//                 </span>
//               </a>
//               <a
//                 href={personalInfo.social.twitter}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#2A2A40] px-6 py-3 rounded-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#915EFF]/20 border border-[#2A2A40]"
//               >
//                 <Twitter className="w-5 h-5 text-[#915EFF] group-hover:text-[#00FFFF] transition-colors" />
//                 <span className="group-hover:text-[#00FFFF] transition-colors">
//                   Twitter
//                 </span>
//               </a>
//               <a
//                 href={`mailto:${personalInfo.email}`}
//                 className="group flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#2A2A40] px-6 py-3 rounded-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#915EFF]/20 border border-[#2A2A40]"
//               >
//                 <Mail className="w-5 h-5 text-[#915EFF] group-hover:text-[#00FFFF] transition-colors" />
//                 <span className="group-hover:text-[#00FFFF] transition-colors">
//                   {personalInfo.email}
//                 </span>
//               </a>
//             </div>

//             <div className="flex flex-wrap gap-4 justify-center">
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="group relative overflow-hidden bg-gradient-to-r from-[#915EFF] to-[#5D54FF] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#915EFF]/30"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   <span>عرض المشاريع</span>
//                   <ChevronRight className="w-5 h-5 transform rotate-180" />
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#5D54FF] to-[#915EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               </button>
//               <button
//                 onClick={() => scrollToSection("skills")}
//                 className="group relative overflow-hidden bg-transparent border border-[#915EFF] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#915EFF]/20"
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   <span>المهارات</span>
//                   <ChevronRight className="w-5 h-5 transform rotate-180" />
//                 </span>
//                 <span className="absolute inset-0 bg-[#915EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronRight className="w-8 h-8 rotate-90 text-[#915EFF]" />
//         </div>

//         {/* كود متحرك في الخلفية */}
//         <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-20 pointer-events-none">
//           <div className="animate-slide-left whitespace-nowrap text-[#00FFFF] font-mono text-sm">
//             {`const Portfolio = () => { const [skills, setSkills] = useState([]); useEffect(() => { fetchSkills().then(data => setSkills(data)); }, []); return ( <div className="portfolio"> <Header /> <About /> <Skills data={skills} /> <Projects /> <Contact /> </div> ); };`.repeat(
//               3
//             )}
//           </div>
//           <div className="animate-slide-right whitespace-nowrap text-[#00FFFF] font-mono text-sm mt-2">
//             {`function initializeCanvas() { const canvas = document.getElementById('canvas'); const ctx = canvas.getContext('2d'); const particles = []; for (let i = 0; i < 100; i++) { particles.push(new Particle()); } function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => p.update()); requestAnimationFrame(animate); } animate(); }`.repeat(
//               3
//             )}
//           </div>
//           <div className="animate-slide-left-slow whitespace-nowrap text-[#00FFFF] font-mono text-sm mt-2">
//             {`import React, { useState, useEffect, useRef } from 'react'; import { motion, AnimatePresence } from 'framer-motion'; import { projects, skills, experiences } from './data'; import { Header, Footer, ProjectCard, SkillBadge } from './components';`.repeat(
//               3
//             )}
//           </div>
//         </div>
//       </section>

//       {/* قسم المهارات */}
//       <section id="skills-section" className="py-20 relative">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#915EFF]/10 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#5D54FF] inline-block">
//               المهارات والتقنيات
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#5D54FF] mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {skills.map((skillGroup, index) => (
//               <div
//                 key={index}
//                 className={`group bg-[#1A1A2E] backdrop-blur-sm rounded-xl p-6 border border-[#2A2A40] hover:border-[#915EFF]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#915EFF]/10 ${
//                   isVisible["skills-section"]
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 bg-[#2A2A40] rounded-lg text-[#915EFF] group-hover:text-[#00FFFF] transition-colors">
//                     {skillGroup.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold group-hover:text-[#00FFFF] transition-colors">
//                     {skillGroup.category}
//                   </h3>
//                 </div>

//                 {/* Skill level section removed */}

//                 <div className="flex flex-wrap gap-2">
//                   {skillGroup.items.map((skill, skillIndex) => (
//                     <span
//                       key={skillIndex}
//                       className="px-3 py-1 bg-[#2A2A40] text-gray-300 rounded-full text-sm hover:bg-[#915EFF]/20 hover:text-[#00FFFF] transition-colors duration-300"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* أيقونات تقنية متحركة */}
//           <div className="mt-20 relative h-32 overflow-hidden">
//             <div className="absolute inset-0 flex items-center">
//               <div className="animate-marquee-slow whitespace-nowrap flex gap-16">
//                 {[...Array(10)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-center w-16 h-16 bg-[#1A1A2E] rounded-xl border border-[#2A2A40] shadow-lg"
//                   >
//                     {i % 5 === 0 ? (
//                       <Hexagon className="w-8 h-8 text-[#915EFF]" />
//                     ) : i % 5 === 1 ? (
//                       <Globe className="w-8 h-8 text-[#00FFFF]" />
//                     ) : i % 5 === 2 ? (
//                       <Code className="w-8 h-8 text-[#FFD700]" />
//                     ) : i % 5 === 3 ? (
//                       <Server className="w-8 h-8 text-[#FF6B6B]" />
//                     ) : (
//                       <Database className="w-8 h-8 text-[#4ECDC4]" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* قسم المشاريع */}
//       <section id="projects-section" className="py-20 relative">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#5D54FF]/10 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#5D54FF] inline-block">
//               المشاريع
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#5D54FF] mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className={`group relative bg-[#1A1A2E] backdrop-blur-sm rounded-xl overflow-hidden border border-[#2A2A40] hover:border-[#915EFF]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#915EFF]/10 ${
//                   isVisible["projects-section"]
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 <div className="h-2 bg-gradient-to-r from-[#915EFF] to-[#5D54FF]"></div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00FFFF] transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-400 mb-4 text-sm">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-2 py-1 bg-[#2A2A40] text-gray-300 rounded-full text-xs"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-3">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300 bg-[#2A2A40] px-3 py-2 rounded-lg hover:bg-[#3A3A50]"
//                     >
//                       <Github className="w-4 h-4" />
//                       <span>GitHub</span>
//                     </a>
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-1 text-sm text-white transition-colors duration-300 bg-gradient-to-r from-[#915EFF] to-[#5D54FF] hover:from-[#5D54FF] hover:to-[#915EFF] px-3 py-2 rounded-lg flex-grow text-center justify-center"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       <span>عرض المشروع</span>
//                     </a>
//                   </div>
//                 </div>

//                 {/* تأثير التحويم */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/20 to-[#5D54FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* قسم الشهادات الاحترافية */}
//       <section id="certifications-section" className="py-20 relative">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FFD700]/5 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#5D54FF] inline-block">
//               الشهادات الاحترافية
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#5D54FF] mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {certifications.map((certification, index) => (
//               <div
//                 key={index}
//                 className={`group relative bg-[#1A1A2E] backdrop-blur-sm rounded-xl overflow-hidden border border-[#2A2A40] hover:border-[#915EFF]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#915EFF]/10 ${
//                   isVisible["certifications-section"]
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 <div className="h-32 bg-gradient-to-br from-[#915EFF] to-[#5D54FF] flex items-center justify-center relative overflow-hidden">
//                   <div className="relative z-10">{certification.icon}</div>
//                   <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10 bg-repeat"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00FFFF] transition-colors duration-300">
//                     {certification.title}
//                   </h3>
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="text-gray-400 text-sm">
//                       {certification.issuer}
//                     </span>
//                     <span className="inline-block px-2 py-1 bg-[#2A2A40] text-[#00FFFF] rounded-full text-xs">
//                       {certification.date}
//                     </span>
//                   </div>
//                   <p className="text-gray-400 mb-4 text-sm">
//                     {certification.description}
//                   </p>
//                   <a
//                     href={certification.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 bg-gradient-to-r from-[#915EFF] to-[#5D54FF] hover:from-[#5D54FF] hover:to-[#915EFF] px-3 py-2 rounded-lg text-white transition-all duration-300"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     <span>عرض الشهادة</span>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* قسم المساهمات */}
//       <section id="contributions-section" className="py-20 relative">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#00FFFF]/5 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#5D54FF] inline-block">
//               المساهمات
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#5D54FF] mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {contributions.map((contribution, index) => (
//               <div
//                 key={index}
//                 className={`group relative bg-[#1A1A2E] backdrop-blur-sm rounded-xl overflow-hidden border border-[#2A2A40] hover:border-[#915EFF]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#915EFF]/10 ${
//                   isVisible["contributions-section"]
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 <div className="h-2 bg-gradient-to-r from-[#915EFF] to-[#5D54FF]"></div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-xl font-semibold group-hover:text-[#00FFFF] transition-colors duration-300">
//                       {contribution.title}
//                     </h3>
//                   </div>
//                   <span className="inline-block px-2 py-1 bg-[#2A2A40] text-[#00FFFF] rounded-full text-xs mb-3">
//                     {contribution.type}
//                   </span>
//                   <p className="text-gray-400 mb-4 text-sm">
//                     {contribution.description}
//                   </p>
//                   <a
//                     href={contribution.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-1 bg-gradient-to-r from-[#915EFF] to-[#5D54FF] hover:from-[#5D54FF] hover:to-[#915EFF] px-3 py-2 rounded-lg text-white transition-all duration-300"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     <span>عرض المساهمة</span>
//                   </a>
//                 </div>

//                 {/* تأثير التحويم */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/20 to-[#5D54FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* تذييل الصفحة */}
//       <footer className="py-8 border-t border-[#2A2A40] relative">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center gap-2 mb-4 md:mb-0">
//               <div className="w-8 h-8 bg-gradient-to-br from-[#915EFF] to-[#5D54FF] rounded-lg flex items-center justify-center">
//                 <Terminal className="w-4 h-4 text-white" />
//               </div>
//               <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#5D54FF]">
//                 {personalInfo.name}
//               </span>
//             </div>
//             <div className="flex items-center gap-4">
//               <a
//                 href={personalInfo.social.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-[#915EFF] transition-colors"
//                 aria-label="GitHub"
//               >
//                 <Github className="w-5 h-5" />
//               </a>
//               <a
//                 href={personalInfo.social.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-[#915EFF] transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a
//                 href={personalInfo.social.twitter}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-[#915EFF] transition-colors"
//                 aria-label="Twitter"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//             </div>
//             <div className="mt-4 md:mt-0 text-gray-400 text-sm">
//               © {new Date().getFullYear()} {personalInfo.name}. جميع الحقوق
//               محفوظة.
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* كود متحرك في الخلفية */}
//       <div className="fixed bottom-0 left-0 right-0 h-32 overflow-hidden opacity-5 pointer-events-none">
//         <div className="animate-slide-left whitespace-nowrap text-white font-mono text-sm">
//           {`const Portfolio = () => { const [skills, setSkills] = useState([]); useEffect(() => { fetchSkills().then(data => setSkills(data)); }, []); return ( <div className="portfolio"> <Header /> <About /> <Skills data={skills} /> <Projects /> <Contact /> </div> ); };`.repeat(
//             3
//           )}
//         </div>
//         <div className="animate-slide-right whitespace-nowrap text-white font-mono text-sm mt-2">
//           {`function initializeCanvas() { const canvas = document.getElementById('canvas'); const ctx = canvas.getContext('2d'); const particles = []; for (let i = 0; i < 100; i++) { particles.push(new Particle()); } function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => p.update()); requestAnimationFrame(animate); } animate(); }`.repeat(
//             3
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
