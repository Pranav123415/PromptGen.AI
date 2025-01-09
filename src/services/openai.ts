// const systemPrompt = `You are an expert AI prompt engineer. Your task is to enhance and improve user prompts to get better results from AI models. Follow these guidelines:

// 1. Maintain the original intent of the prompt
// 2. Add relevant context and details
// 3. Structure the prompt clearly
// 4. Include specific instructions for tone and format
// 5. Remove ambiguity
// 6. Add constraints where helpful
// 7. Optimize for the desired output format

// Always return an improved version of the input prompt that will generate better results.`;

// export async function enhancePrompt(userPrompt: string): Promise<string> {
//   const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
//   if (!apiKey) {
//     throw new Error('OpenAI API key is not configured');
//   }

//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//       },
//       body: JSON.stringify({
//         model: 'davinci-002',
//         messages: [
//           { role: 'system', content: systemPrompt },
//           { role: 'user', content: `Original prompt: "${userPrompt}"\n\nEnhanced prompt:` }
//         ],
//         temperature: 0.7,
//         max_tokens: 2048
//       })
//     });

//     const responseData = await response.json();
    
//     if (!response.ok) {
//       console.error('OpenAI API Error Response:', responseData);
//       throw new Error(
//         responseData.error?.message || 
//         `API request failed with status ${response.status}: ${JSON.stringify(responseData)}`
//       );
//     }

//     if (!responseData.choices?.[0]?.message?.content) {
//       console.error('Unexpected API response structure:', responseData);
//       throw new Error('Invalid response format from OpenAI API');
//     }

//     return responseData.choices[0].message.content.trim();
//   } catch (error) {
//     console.error('Detailed error:', error);
//     throw error;
//   }
// }