import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Inisialisasi OpenAI (akan menggunakan environment variable)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-openai-api-key-here'
});

// Endpoint untuk chat
app.post('/chat', async (req, res) => {
  try {
    const { message, systemPrompt } = req.body;

    // Jika tidak ada API key, berikan respons fallback
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your-openai-api-key-here') {
      const fallbackResponse = getFallbackResponse(message);
      return res.json({ response: fallbackResponse });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 
      'Maaf, saya tidak dapat memproses pertanyaan Anda saat ini.';

    res.json({ response });

  } catch (error) {
    console.error('Error in chat API:', error);
    
    // Fallback response jika terjadi error
    const fallbackResponse = getFallbackResponse(req.body.message);
    res.json({ response: fallbackResponse });
  }
});

// Fungsi fallback response jika OpenAI tidak tersedia
function getFallbackResponse(message) {
  const msg = message.toLowerCase();
  
  if (msg.includes('nama') || msg.includes('siapa')) {
    return "Nama lengkap saya adalah Alfrian Nur Ramadhan. Saya adalah siswa SMK kelas X RPL 1 di SMKN 7 Batam.";
  }
  
  if (msg.includes('umur') || msg.includes('usia') || msg.includes('lahir')) {
    return "Saya lahir pada tanggal 15 September 2009, jadi saat ini saya berusia 15 tahun.";
  }
  
  if (msg.includes('projek') || msg.includes('project')) {
    return "Saya telah membuat beberapa projek menarik seperti Balloon Pop (game kasual), Math Fighter (game matematika), dan Ambaruwo (game horror Roblox). Anda bisa melihat semua projek saya di bagian 'Projek' pada website ini!";
  }
  
  if (msg.includes('kontak') || msg.includes('hubungi')) {
    return "Anda bisa menghubungi saya melalui WhatsApp: +62 858-7519-2010, Email: hvshd99@gmail.com, atau Instagram: @alfrian148";
  }
  
  return "Terima kasih atas pertanyaan Anda! Untuk informasi lebih detail tentang Alfrian, silakan jelajahi bagian-bagian di website ini atau hubungi langsung melalui kontak yang tersedia.";
}

app.listen(port, () => {
  console.log(`Chat server running on http://localhost:${port}`);
});

export default app;