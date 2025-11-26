import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Конфликты в деловом общении',
    subtitle: 'СГ.07 Психология общения',
    type: 'title'
  },
  {
    id: 2,
    title: 'Введение',
    content: [
      'Конфликт — столкновение противоположных интересов, мнений, целей в процессе взаимодействия',
      'В деловом общении конфликты неизбежны и могут быть как деструктивными, так и конструктивными',
      'Умение управлять конфликтами — ключевая компетенция современного специалиста'
    ],
    type: 'content'
  },
  {
    id: 3,
    title: 'Виды конфликтов',
    content: [
      {
        subtitle: 'По субъектам конфликта:',
        items: ['Внутриличностные', 'Межличностные', 'Между личностью и группой', 'Межгрупповые']
      },
      {
        subtitle: 'По характеру:',
        items: ['Конструктивные (функциональные)', 'Деструктивные (дисфункциональные)']
      },
      {
        subtitle: 'По сфере проявления:',
        items: ['Деловые', 'Личностные', 'Смешанные']
      }
    ],
    type: 'structured'
  },
  {
    id: 4,
    title: 'Причины конфликтов',
    content: [
      {
        icon: 'Users',
        text: 'Различия в ценностях, целях и интересах'
      },
      {
        icon: 'MessageSquare',
        text: 'Недостаток или искажение информации'
      },
      {
        icon: 'Briefcase',
        text: 'Ограниченность ресурсов'
      },
      {
        icon: 'TrendingUp',
        text: 'Взаимозависимость задач'
      },
      {
        icon: 'Users',
        text: 'Различия в психологических особенностях'
      },
      {
        icon: 'AlertCircle',
        text: 'Неудовлетворительные коммуникации'
      }
    ],
    type: 'icons'
  },
  {
    id: 5,
    title: 'Стратегии поведения в конфликте',
    subtitle: 'Модель Томаса-Килманна',
    content: [
      {
        name: 'Конкуренция',
        desc: 'Стремление добиться своих интересов в ущерб другому'
      },
      {
        name: 'Приспособление',
        desc: 'Принесение собственных интересов в жертву интересам другого'
      },
      {
        name: 'Компромисс',
        desc: 'Соглашение на основе взаимных уступок'
      },
      {
        name: 'Избегание',
        desc: 'Отсутствие стремления к кооперации и отстаиванию своих интересов'
      },
      {
        name: 'Сотрудничество',
        desc: 'Поиск решения, полностью удовлетворяющего интересы обеих сторон'
      }
    ],
    type: 'strategies'
  },
  {
    id: 6,
    title: 'Способы разрешения конфликтов',
    content: [
      {
        step: '1',
        title: 'Признание конфликта',
        text: 'Осознание и открытое обсуждение проблемы'
      },
      {
        step: '2',
        title: 'Анализ ситуации',
        text: 'Выявление истинных причин и интересов сторон'
      },
      {
        step: '3',
        title: 'Переговоры',
        text: 'Конструктивный диалог для поиска решения'
      },
      {
        step: '4',
        title: 'Выбор стратегии',
        text: 'Определение оптимального способа разрешения'
      },
      {
        step: '5',
        title: 'Реализация решения',
        text: 'Выполнение согласованных действий'
      }
    ],
    type: 'steps'
  },
  {
    id: 7,
    title: 'Профилактика конфликтов',
    content: [
      'Создание благоприятной психологической атмосферы',
      'Четкое распределение прав, обязанностей и ответственности',
      'Справедливая система оценки и вознаграждения',
      'Развитие навыков эффективной коммуникации',
      'Своевременное информирование сотрудников',
      'Учет индивидуальных особенностей работников',
      'Обучение персонала навыкам разрешения конфликтов'
    ],
    type: 'content'
  },
  {
    id: 8,
    title: 'Заключение',
    content: [
      'Конфликты — естественная часть делового общения',
      'Грамотное управление конфликтами способствует развитию организации',
      'Профилактика эффективнее, чем разрешение конфликтов',
      'Конструктивный подход превращает конфликт в возможность для улучшения взаимодействия'
    ],
    type: 'content'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <Card className="bg-white shadow-2xl overflow-hidden">
          <div className="aspect-[16/9] flex flex-col">
            <div className="flex-1 p-12 flex flex-col justify-center">
              {slide.type === 'title' && (
                <div className="text-center space-y-8">
                  <h1 className="text-6xl font-bold text-primary leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl text-muted-foreground font-light">
                    {slide.subtitle}
                  </p>
                </div>
              )}

              {slide.type === 'content' && (
                <div className="space-y-6">
                  <h2 className="text-5xl font-bold text-primary mb-8">
                    {slide.title}
                  </h2>
                  <ul className="space-y-4">
                    {(slide.content as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0" />
                        <span className="text-xl text-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.type === 'structured' && (
                <div className="space-y-6">
                  <h2 className="text-5xl font-bold text-primary mb-8">
                    {slide.title}
                  </h2>
                  {(slide.content as Array<{ subtitle: string; items: string[] }>).map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {section.subtitle}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {section.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="bg-secondary/50 px-4 py-3 rounded-lg text-lg"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {slide.type === 'icons' && (
                <div className="space-y-6">
                  <h2 className="text-5xl font-bold text-primary mb-8">
                    {slide.title}
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    {(slide.content as Array<{ icon: string; text: string }>).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg"
                      >
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon as any} className="text-white" size={24} />
                        </div>
                        <span className="text-lg text-foreground">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === 'strategies' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-5xl font-bold text-primary">
                      {slide.title}
                    </h2>
                    {slide.subtitle && (
                      <p className="text-xl text-muted-foreground mt-2">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="space-y-3">
                    {(slide.content as Array<{ name: string; desc: string }>).map((strategy, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-secondary/40 rounded-lg border-l-4 border-accent"
                      >
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {strategy.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {strategy.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === 'steps' && (
                <div className="space-y-6">
                  <h2 className="text-5xl font-bold text-primary mb-8">
                    {slide.title}
                  </h2>
                  <div className="space-y-4">
                    {(slide.content as Array<{ step: string; title: string; text: string }>).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border px-12 py-6 bg-secondary/20">
              <div className="flex items-center justify-between">
                <Button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Icon name="ChevronLeft" size={20} />
                  Назад
                </Button>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Слайд {currentSlide + 1} из {slides.length}
                  </span>
                  <div className="flex gap-1">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentSlide
                            ? 'bg-accent w-8'
                            : 'bg-border hover:bg-accent/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <Button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  variant="default"
                  size="lg"
                  className="gap-2"
                >
                  Далее
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
