import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="container relative">
        <div className="mx-auto text-center max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Создаем адаптивные решения для вашего бизнеса
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
            Разрабатываем современные веб-решения, которые привлекают клиентов
            и выглядят идеально на любых устройствах
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-fade-in">Начать проект</Button>
            <Button size="lg" variant="outline" className="animate-fade-in">
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Decorative blurred circles */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl">
          <div className="h-[400px] w-[400px] rounded-full bg-primary/40"></div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 blur-3xl">
          <div className="h-[300px] w-[300px] rounded-full bg-secondary/40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;