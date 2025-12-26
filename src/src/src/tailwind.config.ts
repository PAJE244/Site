import { Award, BookOpen, Users } from 'lucide-react';

const credentials = [
  { icon: BookOpen, text: '10+ anos de estudo em psicologia e neurociência' },
  { icon: Users, text: 'Mais de 5.000 pessoas impactadas' },
  { icon: Award, text: 'Especialista em Alta Performance' },
];

export const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/20">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-card flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-heading font-bold text-primary">
                    DP
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Autor & Mentor
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
              Conheça o <span className="text-gradient">Criador</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Há mais de uma década, me dedico a estudar a mente humana e os padrões que
              separam pessoas comuns de indivíduos extraordinários. Depois de ajudar
              milhares de pessoas a transformarem suas vidas, compilei todo esse
              conhecimento neste ebook.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Minha missão é democratizar o acesso às ferramentas de transformação mental
              que antes estavam reservadas apenas para a elite. Este material é o
              resultado de anos de pesquisa, testes e refinamento com pessoas reais.
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{credential.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from 'react';
import { Brain, Target, Zap, Shield, TrendingUp, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Mindset de Alta Performance',
    description:
      'Reprograme sua mente para pensar como pessoas extraordinárias e elimine crenças limitantes.',
  },
  {
    icon: Target,
    title: 'Foco Inabalável',
    description:
      'Desenvolva concentração de laser para alcançar seus objetivos com precisão e velocidade.',
  },
  {
    icon: Zap,
    title: 'Energia e Motivação',
    description:
      'Acorde todos os dias com propósito e mantenha seu nível de energia no máximo.',
  },
  {
    icon: Shield,
    title: 'Resiliência Mental',
    description:
      'Transforme obstáculos em oportunidades e nunca mais se deixe abater por dificuldades.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Exponenciais',
    description:
      'Multiplique seus resultados em todas as áreas: carreira, finanças e relacionamentos.',
  },
  {
    icon: Heart,
    title: 'Autoconfiança Genuína',
    description:
      'Construa uma autoestima sólida baseada em conquistas reais e autoconhecimento.',
  },
];

const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative bg-card rounded-xl p-6 border-l-4 border-primary card-hover opacity-0 ${
        isVisible ? 'animate-scale-in' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <benefit.icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold mb-2">{benefit.title}</h3>
          <p className="text-muted-foreground">{benefit.description}</p>
        </div>
      </div>
    </div>
  );
};

export const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            O Que Você Vai <span className="text-gradient">Conquistar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada capítulo foi desenvolvido para desbloquear uma nova dimensão do seu potencial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

import { useState, useEffect } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.kirvano.com/349f28d0-a6e7-49d5-bddd-1a0bb7edda44';

export const ExitIntent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>

          <h3 className="text-2xl font-heading font-bold mb-4">
            Espera! Tem <span className="text-gradient">um presente</span> para você
          </h3>

          <p className="text-muted-foreground mb-6">
            Não vá embora ainda! Por tempo limitado, estamos oferecendo um{' '}
            <strong className="text-foreground">desconto extra de 10%</strong> no checkout.
          </p>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            GARANTIR MEU DESCONTO
            <ArrowRight className="w-5 h-5" />
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Não, obrigado. Prefiro pagar mais caro.
          </button>
        </div>
      </div>
    </div>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Em quanto tempo verei resultados?',
    answer:
      'Muitos leitores relatam mudanças perceptíveis já nos primeiros 7 dias de aplicação das técnicas. No entanto, para uma transformação profunda e duradoura, recomendamos seguir o programa completo de 30 dias.',
  },
  {
    question: 'Preciso de algum conhecimento prévio?',
    answer:
      'Não! O conteúdo foi desenvolvido para ser acessível a qualquer pessoa, independente de sua experiência prévia com desenvolvimento pessoal. Tudo é explicado de forma clara e prática.',
  },
  {
    question: 'Como vou receber o ebook?',
    answer:
      'Imediatamente após a confirmação do pagamento, você receberá um email com o link para download. O acesso é instantâneo e você pode baixar quantas vezes quiser.',
  },
  {
    question: 'O pagamento é seguro?',
    answer:
      'Sim, 100% seguro. Utilizamos a plataforma Kirvano, que possui certificação de segurança e criptografia de dados. Aceitamos cartão de crédito, débito, Pix e boleto.',
  },
  {
    question: 'E se eu não gostar do conteúdo?',
    answer:
      'Você tem 30 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta enviar um email que devolvemos 100% do seu investimento, sem perguntas.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer:
      'Sim! O ebook está em formato PDF, que pode ser lido em qualquer dispositivo: celular, tablet ou computador. Você pode até imprimir se preferir.',
  },
];

export const FAQ = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas antes de começar sua transformação
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.kirvano.com/349f28d0-a6e7-49d5-bddd-1a0bb7edda44';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Final CTA */}
      <div className="section-padding bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container-tight text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
            Pronto para <span className="text-gradient">Despertar Seu Prime</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não deixe para depois. A sua transformação começa agora.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-8 px-4">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xl font-heading font-bold">
                Desperte <span className="text-primary">Seu Prime</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                © {new Date().getFullYear()} Todos os direitos reservados.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
              Este produto é vendido através da plataforma Kirvano. Os resultados podem variar
              de pessoa para pessoa. As informações contidas neste material são de caráter
              educacional e não substituem aconselhamento profissional de saúde mental.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#preview', label: 'Prévia Grátis' },
  { href: '#comprar', label: 'Comprar Agora' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-tight flex items-center justify-between px-4">
        <a href="#" className="text-2xl font-heading font-bold">
          Desperte <span className="text-primary">Seu Prime</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden glass mt-2 mx-4 rounded-lg p-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-center font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

import { useState, useEffect } from 'react';
import { ArrowRight, Flame, Clock } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.kirvano.com/349f28d0-a6e7-49d5-bddd-1a0bb7edda44';

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-hero-gradient flex items-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-tight section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Scarcity Badge */}
          <div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <Flame className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">
              🔥 Oferta limitada — Últimas <span className="text-primary font-bold">47</span> vagas
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Cansado de se sentir{' '}
            <span className="text-gradient">estagnado</span> e sem{' '}
            <span className="text-gradient">confiança</span>?
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Descubra o método comprovado para desbloquear seu potencial máximo, desenvolver uma
            mentalidade inabalável e conquistar resultados extraordinários em todas as áreas da
            sua vida.
          </p>

          {/* Countdown Timer */}
          <div
            className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Oferta expira em:</span>
            <div className="flex gap-2">
              {[
                { value: timeLeft.hours, label: 'h' },
                { value: timeLeft.minutes, label: 'm' },
                { value: timeLeft.seconds, label: 's' },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="bg-primary/20 text-primary font-bold px-3 py-1 rounded">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-muted-foreground ml-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg animate-pulse-glow"
            >
              QUERO TRANSFORMAR MINHA VIDA
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              💳 Pagamento 100% seguro • Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Check, Download, BookOpen } from 'lucide-react';

const PREVIEW_URL = 'https://drive.google.com/file/d/1G1q8pU6-Tb5ESKmpSlfeVOMFbesSh3WQ/view?usp=drivesdk';

const previewItems = [
  'Introdução completa ao método',
  'Primeiro capítulo: Fundamentos da Mentalidade',
  'Exercício prático de autoconhecimento',
  'Checklist de autoavaliação',
];

export const Preview = () => {
  return (
    <section
      id="preview"
      className="section-padding bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <div className="flex justify-center">
            <div className="relative animate-float">
              <div className="w-48 md:w-64 h-64 md:h-80 bg-gradient-to-br from-primary to-red-700 rounded-lg shadow-2xl shadow-primary/30 flex items-center justify-center transform rotate-3">
                <div className="text-center text-primary-foreground p-6">
                  <BookOpen className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">
                    Prévia Grátis
                  </p>
                  <p className="text-xl font-heading font-bold">Desperte Seu Prime</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-lg">
                <span className="text-success-foreground font-bold text-sm">GRÁTIS</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
              Experimente <span className="text-gradient">Grátis</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Antes de decidir, baixe gratuitamente a prévia do ebook e descubra por que
              milhares de pessoas estão transformando suas vidas com este conteúdo.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-8">
              {previewItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Download Button */}
            <a
              href={PREVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-success inline-flex items-center gap-2 text-lg"
            >
              <Download className="w-5 h-5" />
              BAIXAR PRÉVIA GRÁTIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Check, Shield, CreditCard, Lock, ArrowRight } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.kirvano.com/349f28d0-a6e7-49d5-bddd-1a0bb7edda44';

const included = [
  'Ebook completo "Desperte Seu Prime" (150+ páginas)',
  'Exercícios práticos de transformação mental',
  'Planilhas de acompanhamento de progresso',
  'Acesso vitalício ao conteúdo',
  'Atualizações gratuitas',
];

const bonuses = [
  'BÔNUS: Meditações guiadas em áudio',
  'BÔNUS: Grupo exclusivo de apoio',
  'BÔNUS: Resumo executivo para consulta rápida',
];

export const Pricing = () => {
  return (
    <section id="comprar" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Invista na Sua <span className="text-gradient">Transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por menos do que um café por dia, você terá acesso ao método completo
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl shadow-primary/10">
            {/* Header */}
            <div className="bg-primary p-6 text-center">
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mb-2">
                Oferta Especial
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-primary-foreground/60 line-through text-xl">
                  R$ 97,00
                </span>
              </div>
              <div className="flex items-baseline justify-center mt-2">
                <span className="text-primary-foreground text-2xl">R$</span>
                <span className="text-primary-foreground text-6xl font-heading font-bold">
                  9
                </span>
                <span className="text-primary-foreground text-2xl">,90</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mt-2">
                ou 12x de R$ 0,99
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Included */}
              <p className="font-semibold mb-4">O que está incluso:</p>
              <ul className="space-y-3 mb-6">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bonuses */}
              <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
                <p className="font-semibold text-success mb-3">🎁 Bônus Exclusivos:</p>
                <ul className="space-y-2">
                  {bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-4 bg-muted/50 rounded-lg p-4 mb-6">
                <Shield className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Garantia de 30 dias</p>
                  <p className="text-sm text-muted-foreground">
                    Se não ficar satisfeito, devolvemos 100% do seu dinheiro
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg animate-pulse-glow"
              >
                GARANTIR MINHA VAGA
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground">
                <div className="flex items-center gap-1 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Seguro</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão, Pix, Boleto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from 'react';
import { Users, Star, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Pessoas Transformadas' },
  { icon: Star, value: 4.9, suffix: '', label: 'Avaliação Média', decimals: 1 },
  { icon: TrendingUp, value: 97, suffix: '%', label: 'Taxa de Satisfação' },
];

const useCountUp = (end: number, duration: number = 2000, decimals: number = 0) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Number((end * easeOut).toFixed(decimals)));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return { count, ref };
};

export const SocialProof = () => {
  return (
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="container-tight px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000, stat.decimals || 0);
            return (
              <div
                key={index}
                ref={ref}
                className="flex flex-col items-center text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <div className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                  {count}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

@layer base {
  :root {
    --background: 0 0% 7%;
    --foreground: 0 0% 100%;

    --card: 0 0% 12%;
    --card-foreground: 0 0% 100%;

    --popover: 0 0% 12%;
    --popover-foreground: 0 0% 100%;

    --primary: 4 77% 55%;
    --primary-foreground: 0 0% 100%;

    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 100%;

    --muted: 0 0% 20%;
    --muted-foreground: 0 0% 70%;

    --accent: 4 77% 55%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 4 77% 55%;

    --radius: 0.75rem;

    --success: 142 76% 36%;
    --success-foreground: 0 0% 100%;

    --sidebar-background: 0 0% 10%;
    --sidebar-foreground: 0 0% 100%;
    --sidebar-primary: 4 77% 55%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 0 0% 15%;
    --sidebar-accent-foreground: 0 0% 100%;
    --sidebar-border: 0 0% 20%;
    --sidebar-ring: 4 77% 55%;

    --font-heading: 'Playfair Display', serif;
    --font-body: 'Montserrat', sans-serif;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground font-body antialiased;
    font-family: var(--font-body);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }
}

@layer utilities {
  .font-heading {
    font-family: var(--font-heading);
  }

  .font-body {
    font-family: var(--font-body);
  }

  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-400;
  }

  .bg-hero-gradient {
    background: radial-gradient(ellipse at top, hsl(4 77% 55% / 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, hsl(4 77% 55% / 0.1) 0%, transparent 40%),
                hsl(var(--background));
  }

  .shine-effect {
    position: relative;
    overflow: hidden;
  }

  .shine-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  .shine-effect:hover::before {
    left: 100%;
  }

  .glass {
    @apply bg-card/80 backdrop-blur-md border border-border/50;
  }

  .card-hover {
    @apply transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10;
  }
}

@layer components {
  .section-padding {
    @apply px-4 sm:px-6 lg:px-8 py-16 md:py-24;
  }

  .container-tight {
    @apply max-w-6xl mx-auto;
  }

  .btn-primary {
    @apply bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-lg 
           shine-effect transition-all duration-300 
           hover:bg-primary/90 hover:scale-105 
           shadow-lg shadow-primary/30;
  }

  .btn-success {
    @apply bg-success text-success-foreground font-semibold py-4 px-8 rounded-lg 
           shine-effect transition-all duration-300 
           hover:bg-success/90 hover:scale-105 
           shadow-lg shadow-success/30;
  }
}

import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { SocialProof } from '@/components/landing/SocialProof';
import { Benefits } from '@/components/landing/Benefits';
import { Testimonials } from '@/components/landing/Testimonials';
import { About } from '@/components/landing/About';
import { Preview } from '@/components/landing/Preview';
import { Pricing } from '@/components/landing/Pricing';
import { FAQ } from '@/components/landing/FAQ';
import { Footer } from '@/components/landing/Footer';
import { ExitIntent } from '@/components/landing/ExitIntent';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <SocialProof />
      <Benefits />
      <Testimonials />
      <About />
      <Preview />
      <Pricing />
      <FAQ />
      <Footer />
      <ExitIntent />
    </div>
  );
};

export default Index;

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.8)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-carousel": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "count-up": "count-up 0.5s ease-out forwards",
        "slide-carousel": "slide-carousel 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

