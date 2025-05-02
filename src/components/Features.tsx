import { BadgeCheck, Globe, Rocket, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Современный дизайн',
    description: 'Создаем современные веб-интерфейсы с использованием последних тенденций в дизайне',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Адаптивная верстка',
    description: 'Ваш сайт будет отлично работать и выглядеть на любых устройствах и экранах',
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: 'Высокое качество',
    description: 'Уделяем внимание деталям и гарантируем качественный результат',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'Быстрая скорость',
    description: 'Оптимизируем производительность для быстрой загрузки вашего сайта',
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Наши преимущества
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Мы предлагаем комплексный подход к созданию веб-ресурсов, 
            объединяя эстетику, функциональность и доступность
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;