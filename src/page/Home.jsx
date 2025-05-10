import { Github, Linkedin, Mail, MapPin, FileCheck, ExternalLink, ChevronDown } from "lucide-react"

export default function NewspaperPortfolio() {
  // يمكنك تعديل هذه البيانات حسب معلوماتك الشخصية
  const personalInfo = {
    name: "فهد",
    title: "مطور واجهات أمامية",
    bio: "مطور برمجيات متحمس مع خبرة في تطوير تطبيقات الويب. أسعى دائماً لتعلم تقنيات جديدة وتطوير مهاراتي البرمجية.",
    location: "الرياض، المملكة العربية السعودية",
    email: "Alghamdi.dev@gmail.com",
    social: {
      github: "https://github.com/3ntazDev",
      linkedin: "www.linkedin.com/in/fahad-alghamdi-a91969246",
    },
  }

  // المهارات التقنية
  const skills = [
    {
      category: "اللغات البرمجية",
      items: ["Python", "Java", "JavaScript"],
    },
    {
      category: "أدوات اختبار البرمجيات",
      items: ["Jest", "JMeter", "Katalon", "SonarQube"],
    },
    {
      category: "أدوات التطوير",
      items: ["Git", "GitHub"],
    },
    {
      category: "الحوسبة السحابية",
      items: ["Oracle Cloud", "AWS"],
    },
    {
      category: "أطر العمل والتقنيات",
      items: ["React", "Supabase", "Agile", "Waterfall", "Scrum"],
    },
  ]

  // المشاريع
  const projects = [
    {
      title: "منصة FabMatch",
      description:
        "منصة تربط الأفراد والشركات مع أصحاب الطابعات ثلاثية الأبعاد، وتوفر مزايا مثل نظام المزايدة، الدعم الذكي بالذكاء الاصطناعي، المعاملات الآمنة، وعرض الخدمات.",
      technologies: ["AWS", "React", "Tailwind CSS", "n8n", "Supabase"],
      github: "https://github.com/yourusername/fabmatch",
      demo: "https://fabmatch.org",
    },
    {
      title: "WashyWay",
      description:
        "تطبيق ويب لحجز غسيل السيارات في أماكن متعددة بسهولة. يمكن للمستخدمين تصفح الخدمات القريبة وتحديد مواعيد الغسيل إلكترونيًا.",
      technologies: ["React", "Tailwind CSS", "Supabase"],
      github: "https://github.com/yourusername/washyway",
      demo: "washy-way.vercel.app",
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

  return (
    <div className="min-h-screen bg-stone-100 font-serif text-right" dir="rtl">
      {/* رأس الجريدة */}
      <header className="border-b-4 border-black py-6 px-4 md:px-8 bg-white">
        <div className="text-center mb-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2"></h1>
          <div className="flex justify-between items-center text-sm">
            <p>{currentDate}</p>
            <p>العدد الأول - نسخة خاصة</p>
            <p>صفحة 1 من 1</p>
          </div>
        </div>
      </header>

      {/* قسم البطل (Hero) */}
      <section className="py-16 px-4 md:px-8 bg-white border-b border-gray-300 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">{personalInfo.name}</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">{personalInfo.title}</h3>
        <div className="flex items-center justify-center gap-2 text-sm mb-4">
          <MapPin size={16} />
          <span>{personalInfo.location}</span>
        </div>
        <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">{personalInfo.bio}</p>
        <div className="flex gap-6 items-center justify-center">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline">
            <Mail size={18} />
            <span>{personalInfo.email}</span>
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="mt-12 animate-bounce flex justify-center">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* قسم نبذة برمجية */}
      <section className="py-12 px-4 md:px-8 bg-stone-50 border-b border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold border-b-2 border-black mb-6 pb-2 text-center">نبذة برمجية</h3>
          <div
            className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto shadow-lg"
            dir="ltr"
          >
            <pre>{`const developer = {
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
        </div>
      </section>

      {/* قسم المهارات */}
      <section className="py-12 px-4 md:px-8 bg-white border-b border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold border-b-2 border-black mb-6 pb-2 text-center">المهارات التقنية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="border border-gray-300 p-4 bg-stone-50 rounded-sm shadow-sm">
                <h4 className="font-bold text-xl mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-200 px-3 py-1 rounded-sm text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المشاريع */}
      <section className="py-12 px-4 md:px-8 bg-stone-50 border-b border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold border-b-2 border-black mb-6 pb-2 text-center">أبرز المشاريع</h3>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-300 p-6 bg-white shadow-sm">
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 px-3 py-1 rounded-sm text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الشهادات */}
      <section className="py-12 px-4 md:px-8 bg-white border-b border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold border-b-2 border-black mb-6 pb-2 text-center">الشهادات المهنية</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-300 p-6 bg-stone-50 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{cert.title}</h4>
                    <p className="text-sm mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="mb-3">{cert.description}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 hover:underline"
                      >
                        <ExternalLink size={16} />
                        <span>عرض الشهادة</span>
                      </a>
                    )}
                  </div>
                  <FileCheck className="w-12 h-12 text-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المساهمات */}
      <section className="py-12 px-4 md:px-8 bg-stone-50 border-b border-gray-300">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold border-b-2 border-black mb-6 pb-2 text-center">
            المساهمات المفتوحة المصدر
          </h3>
          {contributions.map((contribution, index) => (
            <div key={index} className="italic text-center py-8 text-xl">
              <p>{contribution.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* تذييل الصفحة */}
      <footer className="py-8 px-4 md:px-8 bg-white text-center text-sm">
        <p>
          © {new Date().getFullYear()} {personalInfo.name} - جميع الحقوق محفوظة
        </p>
        <p className="mt-2"></p>
      </footer>
    </div>
  )
}
