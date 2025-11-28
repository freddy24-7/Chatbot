import { NextRequest, NextResponse } from 'next/server';
import schoolInfo from '@/data/school-info.json';

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    // For production, integrate with OpenAI, Anthropic, or another AI service
    // Example with OpenAI:
    /*
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant for ${schoolInfo.schoolName}. 
          Answer questions based on this school information: ${JSON.stringify(schoolInfo)}.
          Be friendly, concise, and helpful. If you don't know something, direct them to contact the office.`
        },
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return NextResponse.json({ 
      response: completion.choices[0].message.content 
    })
    */

    // Fallback response for demo purposes
    // In production, replace this with actual AI API call
    const fallbackResponse = `I'd be happy to help you with that! Based on ${schoolInfo.schoolName}'s information, I can provide general guidance.

For specific questions about:
• **Attendance/Absences** - Ask "How do I report an absence?"
• **Early Pickup** - Ask "What are the early pickup procedures?"
• **School Hours** - Ask "What are the school hours?"
• **Contact Info** - Ask "How do I contact the office?"
• **Health Policies** - Ask "What are the health guidelines?"

Or feel free to ask me any other general questions about the school!`;

    return NextResponse.json({ response: fallbackResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
