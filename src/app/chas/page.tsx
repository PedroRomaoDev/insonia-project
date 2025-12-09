"use client"

import { ArrowLeft, Coffee, Clock, Leaf } from "lucide-react"
import Link from "next/link"

interface ReceitaCha {
  id: string
  nome: string
  ingredientes: string[]
  preparo: string[]
  beneficios: string
  tempo: string
  cor: string
}

const receitas: ReceitaCha[] = [
  {
    id: "1",
    nome: "Chá de Camomila",
    ingredientes: [
      "1 colher de sopa de flores de camomila",
      "250ml de água fervente",
      "Mel a gosto (opcional)"
    ],
    preparo: [
      "Ferva a água",
      "Adicione as flores de camomila",
      "Deixe em infusão por 5-7 minutos",
      "Coe e adoce com mel se desejar"
    ],
    beneficios: "Reduz ansiedade, promove relaxamento e melhora a qualidade do sono",
    tempo: "10 min",
    cor: "from-yellow-600/20 to-amber-800/20"
  },
  {
    id: "2",
    nome: "Chá de Erva-Cidreira",
    ingredientes: [
      "2 colheres de sopa de folhas de erva-cidreira",
      "250ml de água fervente",
      "Limão (opcional)"
    ],
    preparo: [
      "Ferva a água",
      "Adicione as folhas de erva-cidreira",
      "Deixe em infusão por 5 minutos",
      "Coe e adicione limão se preferir"
    ],
    beneficios: "Acalma o sistema nervoso, alivia estresse e facilita o sono",
    tempo: "8 min",
    cor: "from-green-600/20 to-emerald-800/20"
  },
  {
    id: "3",
    nome: "Chá de Lavanda",
    ingredientes: [
      "1 colher de chá de flores de lavanda secas",
      "250ml de água fervente",
      "Mel a gosto (opcional)"
    ],
    preparo: [
      "Ferva a água",
      "Adicione as flores de lavanda",
      "Deixe em infusão por 5 minutos",
      "Coe e adoce se desejar"
    ],
    beneficios: "Propriedades calmantes, reduz insônia e ansiedade",
    tempo: "8 min",
    cor: "from-purple-600/20 to-violet-800/20"
  },
  {
    id: "4",
    nome: "Chá de Valeriana",
    ingredientes: [
      "1 colher de chá de raiz de valeriana",
      "250ml de água fervente"
    ],
    preparo: [
      "Ferva a água",
      "Adicione a raiz de valeriana",
      "Deixe em infusão por 10 minutos",
      "Coe antes de beber"
    ],
    beneficios: "Poderoso sedativo natural, melhora qualidade do sono profundo",
    tempo: "12 min",
    cor: "from-indigo-600/20 to-blue-800/20"
  },
  {
    id: "5",
    nome: "Chá de Maracujá",
    ingredientes: [
      "2 colheres de sopa de folhas de maracujá",
      "250ml de água fervente",
      "Mel a gosto (opcional)"
    ],
    preparo: [
      "Ferva a água",
      "Adicione as folhas de maracujá",
      "Deixe em infusão por 7 minutos",
      "Coe e adoce se preferir"
    ],
    beneficios: "Efeito calmante, reduz agitação e melhora o sono",
    tempo: "10 min",
    cor: "from-orange-600/20 to-red-800/20"
  },
  {
    id: "6",
    nome: "Chá Misto Relaxante",
    ingredientes: [
      "1 colher de chá de camomila",
      "1 colher de chá de erva-cidreira",
      "1/2 colher de chá de lavanda",
      "250ml de água fervente",
      "Mel a gosto"
    ],
    preparo: [
      "Ferva a água",
      "Misture todas as ervas",
      "Deixe em infusão por 7 minutos",
      "Coe e adoce com mel"
    ],
    beneficios: "Combinação poderosa para relaxamento profundo e sono reparador",
    tempo: "10 min",
    cor: "from-teal-600/20 to-cyan-800/20"
  }
]

export default function ChasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1929] via-[#1A2847] to-[#0B1929] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B1929]/80 backdrop-blur-lg border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Coffee className="w-4 h-4" />
            <span>{receitas.length} receitas</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Title */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <Coffee className="w-6 h-6 text-amber-400" />
              <span className="text-lg font-semibold text-amber-300">Receitas de Chá</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Chás Calmantes
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Receitas naturais para relaxar e preparar seu corpo para uma noite tranquila
            </p>
          </div>

          {/* Dica */}
          <div className="bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-2xl border border-amber-500/30 p-6">
            <div className="flex items-start gap-4">
              <Leaf className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-amber-300 mb-2">Dica Importante</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tome seu chá 30-60 minutos antes de dormir para permitir que os efeitos relaxantes façam efeito. 
                  Evite adicionar açúcar refinado, prefira mel natural.
                </p>
              </div>
            </div>
          </div>

          {/* Receitas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {receitas.map((receita) => (
              <div
                key={receita.id}
                className={`bg-gradient-to-br ${receita.cor} rounded-3xl border border-amber-500/30 p-8 hover:border-amber-400/60 transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{receita.nome}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{receita.tempo}</span>
                      </div>
                    </div>
                    <Coffee className="w-10 h-10 text-amber-400" />
                  </div>

                  {/* Benefícios */}
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="font-semibold text-amber-400">Benefícios:</span> {receita.beneficios}
                    </p>
                  </div>

                  {/* Ingredientes */}
                  <div>
                    <h4 className="text-sm font-bold text-amber-300 mb-3">Ingredientes:</h4>
                    <ul className="space-y-2">
                      {receita.ingredientes.map((ingrediente, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-amber-400 mt-1">•</span>
                          <span>{ingrediente}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preparo */}
                  <div>
                    <h4 className="text-sm font-bold text-amber-300 mb-3">Modo de Preparo:</h4>
                    <ol className="space-y-2">
                      {receita.preparo.map((passo, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 text-xs font-bold">
                            {index + 1}
                          </span>
                          <span className="pt-0.5">{passo}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Aviso */}
          <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-2xl border border-red-500/30 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                <span className="text-red-400 font-bold">!</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-300 mb-2">Aviso</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Consulte um médico antes de usar chás medicinais regularmente, especialmente se estiver grávida, 
                  amamentando ou tomando medicamentos. Algumas ervas podem interagir com medicamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
