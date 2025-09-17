import OpenAI from 'openai';

// Inisialisasi OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true // Hanya untuk development, tidak disarankan untuk production
});

export async function POST(request: Request) {
  try {
    const { message, systemPrompt } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ 
          response: 'Maaf, layanan AI sedang tidak tersedia. Silakan hubungi Alfrian langsung melalui kontak yang tersedia di website.' 
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
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

    return new Response(
      JSON.stringify({ response }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error in chat API:', error);
    
    return new Response(
      JSON.stringify({ 
        response: 'Maaf, terjadi kesalahan dalam memproses pertanyaan Anda. Silakan coba lagi atau hubungi Alfrian langsung.' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}