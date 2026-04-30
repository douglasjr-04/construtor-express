import React, { useState } from 'react';
import { 
  Zap, 
  DollarSign, 
  ShieldCheck, 
  ArrowRight, 
  Layout, 
  Calculator, 
  ChevronDown,
  MessageCircle,
  Check,
  Award,
  Layers,
  Smartphone,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fachadas = [
  '/fachadas/477815-1bc7238f5894d2fe07e096ae2482aa67.png',
  '/fachadas/477815-20151ce5671db510061b1e9c63d4fce2.png',
  '/fachadas/477815-24420f1de705512ef6d3d2c538bbee7c.png',
  '/fachadas/477815-322cdecfd2d7b481295c32ebb7586990.png',
  '/fachadas/477815-395e060b6af1e6b48167f0894740e474.png',
  '/fachadas/477815-40f24191ec09379297228a95771c3fd9.png',
  '/fachadas/477815-46ede613f21ace11700dd298cec11e0d.png',
  '/fachadas/477815-4dc9241b38f9a33e383ba6e427634b45.png',
  '/fachadas/477815-5c7af31a19a9b8584102a58f47d4677c.png',
  '/fachadas/477815-5ca3cdcf739027892d28867a5273242a.png',
  '/fachadas/477815-61c0c5eadaacfe36a7b95ddf81b69b79.png',
  '/fachadas/477815-69420276b268cd816d37fa4a93b2e96c.png',
  '/fachadas/477815-6d02b9530713cd803d3430ef065861ef.png',
  '/fachadas/477815-7a90524a74ca83c8a1f42b53909f92cc.png',
  '/fachadas/477815-7de3c10008aed75f78266ad409a16b3e.png',
  '/fachadas/477815-7e0c121e5d314aaa17c286111d0d44af.png',
  '/fachadas/477815-8d465c2b58568d576cfe228be34e54c9.png',
  '/fachadas/477815-9219cba1c9caca81310e4f3fc058e0fa.png',
  '/fachadas/477815-93046e9f1fe52f16cbf0fdd59dbfee5e.png',
  '/fachadas/477815-9b7f568c32a922fd42abf7721f5f658b.png',
  '/fachadas/477815-a811449fb96d5c3b03fbdc986390e0dc.png',
  '/fachadas/477815-abd86bdfa14e53e95e4efa62339c540f.png',
  '/fachadas/477815-b1d041ea1200e3a85cebfec932d9f64c.png',
  '/fachadas/477815-b2bfd883cd96a5a75b37863a5f82f83b.png',
  '/fachadas/477815-b52be3e576fc9864b952f0d32aa80cea.png',
  '/fachadas/477815-b5f78ab9197eefe54057972ec6b1691b.png',
  '/fachadas/477815-c16d3504e9bc0137e65f55d3f2ed38ba.png',
  '/fachadas/477815-c47dfce06f54f5951e76b44ae8584244.png',
  '/fachadas/477815-c4a87adcd18a31ef4c6e7bf839426e06.png',
  '/fachadas/477815-c8036427f74d7c240d5e3979e7e8cf0b.png',
  '/fachadas/477815-d0e27db1fb4590f47a5197431451fe4b.png',
  '/fachadas/477815-db897b4be2d3b9d70adbcaa322b70de9.png',
  '/fachadas/477815-e2dd5fe3bfdc2483e823d0aef29c84af.png',
  '/fachadas/477815-e426895a298408ac107b5f2676d4c77a.png',
  '/fachadas/477815-e4377ef7e57ab61b546f0001c30300a5.png',
  '/fachadas/477815-f320834a618a20e014291a987be3414f.png',
  '/fachadas/477815-f491776c65bf8624d38c236711dc7198.png',
  '/fachadas/477815-f7e1007e083aa84616df28116514a86e.png',
];

const App = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showUpsell, setShowUpsell] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden antialiased">
      {/* Upsell Modal */}
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowUpsell(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 md:p-12 text-center">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1 bg-red-500/10 text-red-500 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full mb-4">
                    🤔 ESPERE! PENSE BEM ANTES DE TROCAR
                  </span>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight mb-4">
                    VOCÊ VAI MESMO ABRIR MÃO DO <span className="text-primary italic">PLANO COMPLETO?</span>
                  </h2>
                  <p className="text-white/40 text-sm md:text-base leading-relaxed mb-8">
                    Eu entendo que você queira economizar, mas optar pelo "Plano Básico" significa abrir mão de mais de 100 projetos, checklists de obra e o simulador de custos que são essenciais para você construir sem erros e economizar de verdade.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-8 text-left">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Oferta Única desta Página</span>
                    <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">CUPOM APLICADO: -R$ 10,00 OFF</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm font-bold text-white/80">100+ Projetos Completos e Editáveis em Revit</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm font-bold text-white/80">Simulador Automático de Custos por Região</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm font-bold text-white/80">Checklists Técnicos para Canteiro de Obras</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-sm font-bold text-white/80">Acesso Vitalício + Todos os Bônus VIP</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white/20 line-through text-lg font-bold">R$ 37,90</span>
                      <span className="text-primary font-black text-xs uppercase tracking-widest italic">Por apenas R$ 19,90</span>
                    </div>
                    <div className="text-2xl md:text-4xl font-black tracking-tighter">
                      LEVE TUDO POR + R$ 9,90
                    </div>
                    <p className="text-white/20 text-[10px] font-bold mt-2 uppercase">VOCÊ ESTÁ ECONOMIZANDO R$ 574,10</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <a 
                    href="https://checkout.projetodescomplicado.com.br/08104661/"
                    className="w-full bg-white text-black py-5 md:py-6 rounded-2xl font-black text-base md:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  >
                    SIM! QUERO O UPGRADE POR + R$ 9,90
                  </a>
                  
                  <div className="relative p-6 md:p-8 rounded-[2rem] bg-red-500/5 border border-red-500/10 text-center overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
                    <p className="text-[10px] md:text-xs font-black text-red-500 uppercase tracking-[0.2em] mb-3">
                      ⚠️ Atenção: Você perderá acesso imediato a:
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 opacity-40">
                      {["90 Projetos Modernos", "Simulador de Custos", "Checklists de Obra", "Bônus VIP"].map((item, i) => (
                        <span key={i} className="text-[9px] md:text-[10px] font-bold uppercase line-through">{item}</span>
                      ))}
                    </div>
                    <a 
                      href="https://checkout.projetodescomplicado.com.br/49126785/"
                      className="inline-block w-full py-4 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest border border-white/5"
                    >
                      ABRIR MÃO DE TUDO E SEGUIR COM APENAS 10 PROJETOS
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Urgency Banner */}
      <div className="bg-primary py-2 px-4 text-center sticky top-0 z-[110]">
        <p className="text-[9px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] flex items-center justify-center gap-2">
          <AlertCircle className="w-3 h-3 md:w-4 md:h-4 shrink-0" /> 🚨 85% das vagas do APP já preenchidas! Aproveite agora! 🚨
        </p>
      </div>

      {/* Cinematic Hero */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-16 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero.png" 
            alt="Construction Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-[#050505]/50" />
        </div>

        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[180px] rounded-full opacity-40 pointer-events-none z-1" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 text-[10px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/40 border border-white/10 rounded-full bg-white/5">
              <Zap className="w-3 h-3 text-primary animate-pulse" /> Projetos 100% Editáveis em Revit
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter mb-4 md:mb-8 leading-[0.95] md:leading-[0.9] uppercase">
              100 Projetos De Casas <br />
              <span className="text-white italic text-3xl md:text-6xl xl:text-7xl">Populares E Modernas</span> <br />
              <span className="text-primary italic">Para Sair Do Aluguel</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-white/50 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4 md:px-0">
              Mesmo sem arquiteto ou experiência em obras, é só escolher o modelo, entregar ao pedreiro e começar. Plantas, materiais e checklists prontos pra sua obra andar sem erro e sem desperdício.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 md:px-0">
              <a href="#pricing" className="group relative w-full sm:w-auto bg-white text-black px-8 md:px-12 py-5 md:py-6 rounded-2xl text-lg md:text-xl font-black hover:scale-105 transition-all flex items-center justify-center gap-4 shadow-xl">
                QUERO OS PROJETOS <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-center sm:text-left">
                <p className="text-[10px] md:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Entrega via E-mail</p>
                <p className="text-xs md:text-xs font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Acesso Imediato
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section id="para-quem" className="py-12 md:py-24 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-4 md:mb-8 uppercase leading-tight">🏠 PARA QUEM É ESTA <span className="text-white/30 text-2xl md:text-6xl block md:inline">COLEÇÃO?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Você que está saindo do aluguel", desc: "Já tem o terreno (ou vai ter) e quer começar certo, com orçamento claro e projeto profissional." },
              { title: "Você que quer economizar sem perder qualidade", desc: "Lista de materiais e simulador de custos eliminam desperdícios. Economize até 50%!" },
              { title: "Investidor que quer construir para alugar/vender", desc: "Variedade de metragens e plantas aprovadas para executar rápido e com menos risco." },
              { title: "Profissional de obras que não aceita retrabalho", desc: "Plantas técnicas, checklists e versão para canteiro que sua equipe consegue seguir." }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] bg-white/5 border border-white/5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-8 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 tracking-tight">✅ {item.title}</h3>
                  <p className="text-white/40 leading-relaxed font-light text-base md:text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center mt-10 md:mt-16">
            <p className="text-white/60 font-black tracking-widest text-sm md:text-base uppercase">👉 Se você marcou 2 ou mais perfis, essa coleção foi feita pra você!</p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Fachadas */}
      <section className="py-12 md:py-24 overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-6 mb-8 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black tracking-tight uppercase leading-tight">Uma parte dos projetos <br /><span className="text-white/30 italic text-xl md:text-5xl">que vai receber👇🏻</span></h2>
        </div>
        
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="flex whitespace-nowrap">
            <motion.div animate={{ x: [0, -1500] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {[...fachadas, ...fachadas].map((img, i) => (
                <div key={i} className="w-[240px] md:w-[450px] aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-white/5 shadow-2xl shrink-0">
                  <img src={img} alt={`Fachada ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex whitespace-nowrap">
            <motion.div animate={{ x: [-1500, 0] }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {[...fachadas.slice().reverse(), ...fachadas].map((img, i) => (
                <div key={i} className="w-[240px] md:w-[450px] aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-white/5 shadow-2xl shrink-0">
                  <img src={img} alt={`Fachada Rev ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex whitespace-nowrap">
            <motion.div animate={{ x: [0, -1500] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {[...fachadas.slice(10), ...fachadas.slice(0, 10)].map((img, i) => (
                <div key={i} className="w-[240px] md:w-[450px] aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-white/5 shadow-2xl shrink-0">
                  <img src={img} alt={`Fachada Offset ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex whitespace-nowrap">
            <motion.div animate={{ x: [-1500, 0] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {[...fachadas.slice(20), ...fachadas.slice(0, 20)].map((img, i) => (
                <div key={i} className="w-[240px] md:w-[450px] aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-white/5 shadow-2xl shrink-0">
                  <img src={img} alt={`Fachada Offset Rev ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="conquistas" className="py-12 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-4 md:mb-8 uppercase leading-tight">🎯 O QUE VOCÊ VAI <span className="text-white/30 italic block md:inline">CONQUISTAR💸</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: <DollarSign />, title: "Economia Real e Comprovada", desc: "Até 50% de redução nos custos com lista por etapa e zero desperdício." },
              { icon: <Layers />, title: "Projeto Técnico Completo", desc: "Arquitetônico + elétrica + hidráulica prontos. Zero necessidade de contratar separadamente." },
              { icon: <Award />, title: "Aprovação Mais Rápida", desc: "Documentos compatíveis com prefeituras reduzem atrasos burocráticos." },
              { icon: <Calculator />, title: "Controle Total do Orçamento", desc: "Simulador automático por região prevê gastos por fase. Sem surpresas!" },
              { icon: <Layout />, title: "Visualize Antes de Construir", desc: "Renderizações 3D para tomar decisões com confiança." },
              { icon: <Smartphone />, title: "PDF para o Canteiro", desc: "Versão simplificada que o pedreiro entende e consegue executar." }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[40px] bg-white/5 border border-white/5 text-center sm:text-left">
                <div className="text-primary mb-6 md:mb-8 flex justify-center sm:justify-start">{React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8 md:w-8 md:h-8" })}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-white/40 leading-relaxed font-light text-base md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Showcase */}
      <section className="py-12 md:py-24 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-4 md:mb-8 uppercase">🎁 Bônus <span className="text-white/30 italic block md:inline">Exclusivos</span></h2>
            <p className="text-white/40 text-base md:text-lg font-light">E não para por aí, você também leva:</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-6xl mx-auto">
            {[
              { id: 1, title: "Checklist Aprovação Prefeituras", value: "R$ 67.00" },
              { id: 2, title: "Planilha Automática de Orçamento", value: "R$ 47.00" },
              { id: 3, title: "Guia 15 Erros Caros em Obras", value: "R$ 49.00" },
              { id: 4, title: "PDF Modo Obra Simplificado", value: "R$ 37.00" },
              { id: 5, title: "Cronograma Realista de Obra", value: "R$ 99.00" }
            ].map((bonus, i) => (
              <div key={i} className="p-4 md:p-8 rounded-[1rem] md:rounded-[2.5rem] bg-white/5 border border-white/5 text-center group">
                <p className="text-primary font-bold text-[10px] md:text-xs mb-2 uppercase tracking-widest">🎁 Bônus {bonus.id}</p>
                <h4 className="text-base md:text-xl font-bold mb-1 md:mb-4 tracking-tight leading-tight">{bonus.title}</h4>
                <p className="text-white/20 line-through text-[10px] md:text-xs mb-0.5 md:mb-2">de {bonus.value} e você leva</p>
                <div className="text-primary font-black text-[10px] md:text-sm uppercase tracking-widest italic group-hover:scale-110 transition-transform">DE GRAÇA</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-24 bg-[#080808]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-24">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4 md:mb-8 uppercase leading-tight">SELECIONE <span className="text-white/30 italic block md:inline">SEU PLANO</span></h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-6">
              <div className="flex items-center gap-3 text-white/40 font-bold uppercase tracking-widest text-[10px]">
                <Smartphone className="w-4 h-4" /> Acesse do computador
              </div>
              <div className="flex items-center gap-3 text-white/40 font-bold uppercase tracking-widest text-[10px]">
                <CheckCircle2 className="w-4 h-4" /> Acesso vitalício
              </div>
              <div className="flex items-center gap-3 text-white/40 font-bold uppercase tracking-widest text-[10px]">
                <Zap className="w-4 h-4" /> Acesso imediato
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch px-2 md:px-0">
            {/* Mega Pack Card */}
            <div className="bg-white/5 rounded-[2rem] md:rounded-[4rem] p-6 md:p-12 border border-white/5 flex flex-col overflow-hidden">
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-1 tracking-tighter italic">MEGA PACK</h3>
                  <p className="text-white/40 text-[10px] md:text-[10px] font-black uppercase tracking-widest">Acesso Completo</p>
                </div>
              </div>
              
              <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-grow">
                {[
                  "100+ Projetos Completos (Editáveis em REVIT e DWG) - R$ 297",
                  "Renderizações 3D de Todos os Projetos - R$ 60",
                  "Lista Completa de Materiais por Projeto - R$ 28",
                  "Planilha PRO de Custos + Cronograma - R$ 97",
                  "PDFs Otimizados \"Modo Obra\" - R$ 20",
                  "Guia Prático de Construção - R$ 15",
                  "🎁 BÔNUS 1 — Checklist Aprovação Prefeituras - R$ 97",
                  "🎁 BÔNUS 2 — Planilha Automática de Orçamento - R$ 67",
                  "🎁 BÔNUS 3 — Guia 15 Erros Caros em Obras - R$ 47",
                  "🎁 BÔNUS 4 — Cronograma Realista de Obra - R$ 67",
                  "🎁 BÔNUS 5 — PDF Modo Obra Simplificado - R$ 28",
                  "🎁 BÔNUS 6 — Grupo VIP WhatsApp - R$ 67"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 text-white/70 text-[10px] md:text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 md:w-4 h-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-8 md:pt-10 border-t border-white/5">
                <div className="mb-6 md:mb-8 text-center sm:text-left">
                  <p className="text-white/20 line-through font-bold text-base md:text-lg mb-1 tracking-tighter">VALOR TOTAL: R$ 890,00</p>
                  <div className="flex items-baseline justify-center sm:justify-start gap-2 md:gap-3">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">R$ 37,90</span>
                    <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-widest italic">Ou 6x R$ 7,24</span>
                  </div>
                </div>
                <a 
                  href="https://checkout.projetodescomplicado.com.br/88565122/"
                  className="block text-center w-full bg-white/5 border border-white/10 text-white py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-lg md:text-lg hover:bg-white hover:text-black transition-all"
                >
                  GARANTIR MEGA PACK
                </a>
              </div>
            </div>

            {/* Ultra Pack Card */}
            <div className="relative group h-full">
              <div className="absolute -inset-[2px] bg-gradient-to-br from-primary to-blue-500 rounded-[2rem] md:rounded-[4rem] blur-sm opacity-20 group-hover:opacity-100 transition duration-1000" />
              <div className="relative bg-[#0a0a0a] rounded-[2rem] md:rounded-[4rem] p-6 md:p-12 border border-white/5 h-full flex flex-col overflow-hidden">
                <div className="flex justify-between items-start mb-8 md:mb-10">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black mb-1 tracking-tighter italic">ULTRA PACK</h3>
                    <p className="text-white/40 text-[10px] md:text-[10px] font-black uppercase tracking-widest">A solução definitiva</p>
                  </div>
                  <div className="px-4 md:px-5 py-1.5 md:py-2 bg-primary text-white text-[10px] md:text-[10px] font-black uppercase tracking-widest rounded-full">Melhor Escolha</div>
                </div>

                <div className="mb-8 p-4 bg-primary/10 border border-primary/20 rounded-2xl">
                  <p className="text-primary font-black text-xs uppercase tracking-widest mb-3">Tudo que contém no Mega Pack, mais:</p>
                  <ul className="space-y-3">
                    {[
                      "500 Projetos em PDF/Planta Humanizada para inspiração",
                      "35 Projetos de casas de campo (Editáveis em DWG)",
                      "100 Projetos de Chalé Alpino (Projetos para lucrar no AirBNB)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white text-[11px] md:text-xs font-bold leading-tight">
                        <Zap className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-grow opacity-60">
                  {[
                    "100+ Projetos Completos (Editáveis em REVIT e DWG)",
                    "Renderizações 3D de Todos os Projetos",
                    "Lista Completa de Materiais por Projeto",
                    "Planilha PRO de Custos + Cronograma",
                    "Acesso Vitalício + Todos os Bônus VIP"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 md:gap-4 text-white text-[10px] md:text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4 md:w-4 h-4 text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-8 md:pt-10 border-t border-white/5">
                  <div className="mb-6 md:mb-8 text-center sm:text-left">
                    <p className="text-white/20 line-through font-bold text-lg md:text-xl mb-1 tracking-tighter">VALOR TOTAL: R$ 1.290,00</p>
                    <div className="flex items-baseline justify-center sm:justify-start gap-2 md:gap-3">
                      <span className="text-5xl md:text-6xl font-black tracking-tighter">R$ 67,00</span>
                      <span className="text-primary font-black text-[10px] md:text-sm uppercase tracking-widest italic">Ou 12x R$ 6,70</span>
                    </div>
                  </div>
                  <a 
                    href="https://checkout.projetodescomplicado.com.br/16660674/"
                    className="block text-center w-full bg-white text-black py-5 md:py-7 rounded-2xl md:rounded-3xl font-black text-xl md:text-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    GARANTIR ULTRA PACK
                  </a>
                </div>
              </div>
            </div>

            {/* Basic Pack Card */}
            <div className="bg-white/5 rounded-[2rem] md:rounded-[4rem] p-6 md:p-12 border border-white/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tighter uppercase">PACK BÁSICO</h3>
                <p className="text-white/20 line-through font-bold text-sm mb-8 tracking-tighter">De R$ 379,00</p>
                
                <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                  {[
                    "10+ Projetos Completos (Editáveis em REVIT e DWG)",
                    "Garantia de 07 dias",
                    "Acesso Vitalício",
                    "Acesso Imediato"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 md:gap-4 text-white/40 text-[10px] md:text-xs font-medium">
                      <Check className="w-4 h-4 text-white/20" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-6 md:mb-10 text-center sm:text-left">
                  <div className="text-4xl md:text-5xl font-black tracking-tighter mb-1">R$ 10,00</div>
                  <p className="text-white/20 font-bold text-[10px] md:text-[10px] uppercase tracking-widest">Ou 6x R$ 3,24</p>
                </div>
                <button 
                  onClick={() => setShowUpsell(true)}
                  className="w-full border border-white/10 py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-white hover:bg-white hover:text-black transition-all text-sm md:text-lg uppercase tracking-widest"
                >
                  Selecionar Básico
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-[#080808]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 uppercase">Dúvidas <span className="text-white/30 italic block md:inline">Frequentes:</span></h2>
            <p className="text-white/40 text-sm md:text-base font-medium uppercase tracking-widest">Aqui estão as dúvidas mais frequentes:</p>
          </div>
          <div className="space-y-2 md:space-y-4">
            {[
              { question: "Estes projetos funcionam em qual versão de Revit?", answer: "A partir do Revit 2020 e todas posteriores (2021, 2022…2026)" },
              { question: "Para quem é este template?", answer: "Para pessoas que querem sair do aluguel construindo com economia, investidores imobiliários e profissionais da construção que buscam agilidade e precisão técnica." },
              { question: "Posso modificar livremente os projetos?", answer: "Sim! Todos os projetos são 100% editáveis em Revit, permitindo que você ou seu profissional façam qualquer ajuste necessário para o seu terreno ou preferência." },
              { question: "Como recebo o acesso ao pack?", answer: "O acesso é imediato e enviado para o e-mail cadastrado no momento da compra. Você receberá um link para download de todos os arquivos e bônus." },
              { question: "E se eu não gostar do projeto?", answer: "Você tem garantia incondicional de 07 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento sem perguntas." }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-white/5">
                <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full py-5 md:py-8 flex items-center justify-between text-left group gap-4">
                  <span className="text-base md:text-lg font-bold text-white/60 group-hover:text-white transition-colors tracking-tight leading-tight">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 md:w-5 md:h-5 shrink-0 text-white/20 transition-transform duration-500 ${activeFaq === idx ? 'rotate-180 text-white' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pb-5 md:pb-8 text-white/40 leading-relaxed font-light text-sm md:text-lg">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Guarantee */}
      <section className="py-12 md:py-24 bg-white text-black text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-6 md:mb-10" />
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 md:mb-8 leading-tight uppercase">RISCO ZERO. GARANTIA DE 07 DIAS.</h2>
          <p className="text-base md:text-xl font-medium leading-relaxed opacity-60">
            Se você não economizar 100 horas de trabalho, devolvemos seu dinheiro. E você AINDA FICA com os Bônus! Obtenha acesso assim que o pagamento for confirmado.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 md:w-5 md:h-5 bg-black rounded-sm" />
            </div>
            <span className="text-sm md:text-base font-bold tracking-tight uppercase">CONSTRUTOR<span className="text-white/40 italic">EXPRESS</span></span>
          </div>
          <div className="text-white/20 text-[9px] md:text-[10px] font-medium uppercase tracking-widest">© 2025 CONSTRUTOR EXPRESS. TODOS OS DIREITOS RESERVADOS. <br className="md:hidden" /> Política de Privacidade | Termos de Uso</div>
          <div className="flex gap-6 md:gap-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp - Floating */}
      <a href="https://wa.me/5511978693918" target="_blank" className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[110] bg-[#25D366] text-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all">
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </a>
    </div>
  );
};

export default App;
