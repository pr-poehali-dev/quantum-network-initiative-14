import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начать, если я хочу сделать ремонт?",
    answer:
      "Начните с консультации — это самый быстрый способ понять объём работ, бюджет и сроки. За один час я помогу вам разобраться в возможностях вашего пространства и наметить путь от идеи до готового интерьера.",
  },
  {
    question: "Сколько времени занимает разработка дизайн-проекта?",
    answer:
      "Сроки зависят от площади и сложности объекта. В среднем дизайн-проект квартиры занимает 3–6 недель. Инженерная документация разрабатывается параллельно или после согласования концепции.",
  },
  {
    question: "Что входит в полный дизайн-проект?",
    answer:
      "Полный проект включает: обмерный план, планировочное решение, цветовую концепцию, подбор отделочных материалов и мебели, 3D-визуализации, а также полный комплект рабочей документации для строителей.",
  },
  {
    question: "Могу ли я заказать только консультацию или подбор цвета?",
    answer:
      "Да, я работаю с проектами любого масштаба. Вы можете заказать разовую консультацию, подбор цветовой палитры или только инженерную документацию — выбор за вами.",
  },
  {
    question: "Работаете ли вы с уже начатым ремонтом?",
    answer:
      "Конечно. Я могу подключиться на любом этапе: скорректировать планировку, подобрать материалы или разработать недостающую документацию. Расскажите, где вы находитесь — найдём решение.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Напишите или позвоните — я свяжусь с вами и назначу первичную консультацию. Уже на ней мы обсудим ваши пожелания, параметры объекта и стоимость услуг.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}