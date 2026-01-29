export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, message, services } = req.body;

    // Validate required fields
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    // Format email content
    const emailBody = `
Новая заявка с сайта Bright Future

Имя: ${name}
Телефон: ${phone}
Сообщение: ${message || 'Не указано'}
Интересует: ${services || 'Не выбрано'}

---
Отправлено: ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })}
    `.trim();

    // Send via FormSubmit
    const response = await fetch('https://formsubmit.co/ajax/ibrokhimovabrorbek1@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        message: emailBody,
        _subject: `Новая заявка от ${name}`,
        _template: 'table'
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Форма успешно отправлена' });
    } else {
      throw new Error(data.message || 'Failed to send email');
    }

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ error: 'Failed to send form', details: error.message });
  }
}
