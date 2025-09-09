import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    area: '',
    designStyle: 'минимализм',
    budget: ''
  });

  const [calculatedCost, setCalculatedCost] = useState(0);

  const calculateCost = () => {
    const area = parseFloat(calculatorData.area) || 0;
    const basePrice = calculatorData.designStyle === 'премиум' ? 15000 : 8000;
    const materials = area * 3000;
    const work = area * basePrice;
    setCalculatedCost(materials + work);
  };

  const services = [
    {
      icon: 'Palette',
      title: 'Дизайн-проект',
      description: 'Полный проект интерьера с 3D визуализацией',
      price: 'от 8 000 ₽/м²'
    },
    {
      icon: 'Hammer',
      title: 'Ремонт под ключ',
      description: 'Комплексный ремонт по дизайн-проекту',
      price: 'от 25 000 ₽/м²'
    },
    {
      icon: 'ShoppingBag',
      title: 'Подбор мебели',
      description: 'Поиск и закупка мебели и декора',
      price: 'от 15%'
    },
    {
      icon: 'Eye',
      title: 'Авторский надзор',
      description: 'Контроль качества выполненных работ',
      price: 'от 2 000 ₽/выезд'
    }
  ];

  const portfolio = [
    {
      image: '/img/7a67cae3-464c-4abf-8cbe-e2402da4dd57.jpg',
      title: 'Скандинавская студия',
      area: '32 м²',
      style: 'минимализм'
    },
    {
      image: '/img/787ea9d5-476d-4fab-be65-dd57d44e8d3b.jpg',
      title: 'Креативное пространство',
      area: '45 м²',
      style: 'современный'
    },
    {
      image: '/img/f05f6f50-709d-4d38-b3e7-dcd92a177f9b.jpg',
      title: 'Лофт офис',
      area: '38 м²',
      style: 'индустриальный'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши пожелания и бюджет'
    },
    {
      number: '02',
      title: 'Замеры',
      description: 'Выезжаем на объект для точных измерений'
    },
    {
      number: '03',
      title: 'Концепция',
      description: 'Создаем дизайн-концепцию и 3D визуализацию'
    },
    {
      number: '04',
      title: 'Реализация',
      description: 'Воплощаем проект в жизнь'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="text-primary" size={28} />
              <span className="text-2xl font-display font-bold text-gray-900">Design Bureau</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#process" className="text-gray-700 hover:text-primary transition-colors">Процесс</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
              <a href="#calculator" className="text-gray-700 hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
              Дизайн студий и <br />
              <span className="text-primary">небольших офисов</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Создаем креативные и функциональные интерьеры для пространств до 50 м². 
              От концепции до воплощения — превращаем ваше рабочее место в источник вдохновения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg rounded-full">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для создания идеального рабочего пространства
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Badge variant="outline" className="text-primary border-primary">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Процесс работы</h2>
            <p className="text-xl text-gray-600">Четкий алгоритм от идеи до результата</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10 transform translate-x-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600">Наши лучшие проекты интерьеров</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-semibold">{project.title}</h3>
                    <Badge variant="secondary">{project.area}</Badge>
                  </div>
                  <p className="text-gray-600 capitalize">{project.style}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">Рассчитайте стоимость материалов и работ по проекту</p>
          </div>
          
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <Tabs defaultValue="calculate" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="calculate">Расчет</TabsTrigger>
                  <TabsTrigger value="prices">Цены</TabsTrigger>
                </TabsList>
                
                <TabsContent value="calculate" className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="area">Площадь помещения (м²)</Label>
                      <Input
                        id="area"
                        type="number"
                        placeholder="Введите площадь"
                        value={calculatorData.area}
                        onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="style">Стиль дизайна</Label>
                      <select
                        id="style"
                        value={calculatorData.designStyle}
                        onChange={(e) => setCalculatorData({...calculatorData, designStyle: e.target.value})}
                        className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="минимализм">Минимализм</option>
                        <option value="современный">Современный</option>
                        <option value="премиум">Премиум</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button onClick={calculateCost} className="w-full py-6 text-lg">
                    <Icon name="Calculator" className="mr-2" size={20} />
                    Рассчитать стоимость
                  </Button>
                  
                  {calculatedCost > 0 && (
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg text-center animate-scale-in">
                      <h3 className="text-2xl font-display font-bold mb-2">Примерная стоимость</h3>
                      <p className="text-4xl font-bold text-primary">
                        {calculatedCost.toLocaleString()} ₽
                      </p>
                      <p className="text-gray-600 mt-2">Включает материалы и работы</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="prices" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Дизайн-проект (минимализм)</span>
                      <span className="text-primary font-bold">8 000 ₽/м²</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Дизайн-проект (премиум)</span>
                      <span className="text-primary font-bold">15 000 ₽/м²</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Материалы (среднее качество)</span>
                      <span className="text-primary font-bold">3 000 ₽/м²</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium">Авторский надзор</span>
                      <span className="text-primary font-bold">2 000 ₽/выезд</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Готовы начать?</h2>
          <p className="text-xl text-gray-600 mb-8">Свяжитесь с нами для консультации по вашему проекту</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hello@designbureau.ru</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">Москва, ул. Дизайнерская, 1</p>
            </div>
          </div>
          
          <Button size="lg" className="px-12 py-6 text-lg rounded-full">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="text-2xl font-display font-bold">Design Bureau</span>
          </div>
          <p className="text-gray-400">Создаем вдохновляющие пространства для вашего успеха</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;