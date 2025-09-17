import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Saya adalah asisten AI untuk Alfrian Nur Ramadhan. Saya bisa membantu Anda mendapatkan informasi seputar Alfrian dan website portfolio ini. Silakan tanyakan apa saja!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const systemPrompt = `Anda adalah asisten AI untuk website portfolio Alfrian Nur Ramadhan. Berikut informasi lengkap tentang Alfrian:

BIODATA:
- Nama: Alfrian Nur Ramadhan
- Tanggal Lahir: 15 September 2009 (umur 15 tahun)
- Alamat: Bida Asri 2 Blok G1 No 20, Batam
- Kelas: X RPL 1 di SMKN 7 Batam
- Jurusan: Rekayasa Perangkat Lunak (RPL)

PENDIDIKAN:
1. SD Sultan Agung Batam (2016-2022)
2. SMPN 42 Batam (2022-2025)
3. SMKN 7 Batam - RPL (2025-2028, sedang berlangsung)

HOBI & MINAT:
- Programming
- Video Editing
- Gaming
- Teknologi dan komputer

PROJEK-PROJEK:
1. Balloon Pop - Game kasual dengan JavaScript dan Phaser 3
   URL: https://balloonp0p.netlify.app/
   Deskripsi: Game di mana pemain berperan sebagai balon yang harus bertahan dari hujan jarum tajam

2. Math Fighter - Game matematika dengan JavaScript dan Phaser 3
   URL: https://mathfighterhvshd.netlify.app/
   Deskripsi: Game yang menguji kecepatan berpikir dalam menjawab soal matematika dalam 1 menit

3. Ambaruwo - Game horror Roblox dengan Luau
   URL: https://www.roblox.com/games/137232135753326/Ambaruwooo
   Deskripsi: Game horror singkat yang menceritakan teror Ambaruwo di rumah

KONTAK:
- WhatsApp: +62 858-7519-2010
- Email: hvshd99@gmail.com
- Instagram: @alfrian148

TEKNOLOGI YANG DIKUASAI:
- JavaScript, HTML, CSS
- Phaser 3 (game development)
- Luau (Roblox scripting)
- React, TypeScript
- Tailwind CSS

TENTANG WEBSITE:
Website ini adalah portfolio pribadi Alfrian yang dibuat dengan React, TypeScript, dan Tailwind CSS. Menampilkan biodata, pendidikan, projek-projek, dan informasi kontak.

Jawab pertanyaan dengan ramah, informatif, dan dalam bahasa Indonesia. Jika ditanya hal di luar informasi Alfrian, arahkan kembali ke topik yang relevan.`;

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          systemPrompt: systemPrompt
        }),
      });

      if (!response.ok) {
        throw new Error('Gagal mendapatkan respons dari AI');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error getting AI response:', error);
      return 'Maaf, saya sedang mengalami gangguan. Silakan coba lagi dalam beberapa saat atau hubungi Alfrian langsung melalui kontak yang tersedia.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);

    try {
      const aiResponse = await getAIResponse(currentInput);
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border-2 border-green-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">Asisten AI Alfrian</h3>
            <p className="text-xs text-green-100">Online • Siap membantu</p>
          </div>
        </div>
        <button
          onClick={onToggle}
          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isBot 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-blue-100 text-blue-600'
              }`}>
                {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>
              <div className={`rounded-2xl p-3 ${
                message.isBot
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-blue-500 text-white'
              }`}>
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.isBot ? 'text-green-600' : 'text-blue-100'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-[80%]">
              <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-3">
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-green-600" />
                  <p className="text-sm text-green-800">AI sedang mengetik...</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-green-200">
        <div className="flex space-x-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tanyakan sesuatu tentang Alfrian..."
            className="flex-1 resize-none border border-green-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isLoading}
            className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;