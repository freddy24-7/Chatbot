import schoolInfo from '@/data/school-info.json';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// FAQ patterns for sensitive questions
const FAQ_PATTERNS = [
  {
    keywords: [
      'report',
      'late',
      'arrival',
      'tardy',
      'absent',
      'absence',
      'miss',
    ],
    category: 'attendance',
    handler: () => {
      const info = schoolInfo.reportAbsences;
      return `To report an absence or late arrival at ${schoolInfo.schoolName}, you have three options:

📞 **Phone**: Call the attendance line at ${info.phone.attendanceLine} (available 24/7 via voicemail)

📧 **Email**: Send an email to ${info.email.address} with the following information:
${info.email.requiredInfo.map((item) => `• ${item}`).join('\n')}

💻 **Parent Portal**: ${info.parentPortal.instructions}
Visit: ${info.parentPortal.link}

**Important**: Please notify us before ${schoolInfo.attendancePolicy.notificationDeadline} on the day of absence.`;
    },
  },
  {
    keywords: ['early pickup', 'pick up early', 'check out', 'early dismissal'],
    category: 'earlyPickup',
    handler: () => {
      const info = schoolInfo.earlyPickupProcedures;
      return `For early pickup at ${schoolInfo.schoolName}:

⏰ **Latest pickup time**: ${info.latestPickupTime}

**Requirements**:
${info.requirements.map((req) => `• ${req}`).join('\n')}

💡 **Tip**: ${info.advanceNotice}`;
    },
  },
  {
    keywords: [
      'school hours',
      'bell schedule',
      'start time',
      'dismissal',
      'lunch time',
    ],
    category: 'schedule',
    handler: () => {
      const schedule = schoolInfo.bellSchedules.regularDay;
      return `**Regular Day Schedule**:
• Start: ${schedule.start}
• Tardy bell: ${schedule.tardyBell}
• Lunch: ${schedule.lunch}
• Dismissal: ${schedule.dismissal}

**Minimum Day**: Dismissal at ${schoolInfo.bellSchedules.minimumDay.dismissal}
**Two-Hour Delay**: Start at ${schoolInfo.bellSchedules.twoHourDelay.start}, dismissal at ${schoolInfo.bellSchedules.twoHourDelay.dismissal}`;
    },
  },
  {
    keywords: ['contact', 'phone', 'email', 'office', 'principal', 'nurse'],
    category: 'contact',
    handler: () => {
      const contact = schoolInfo.contactInfo;
      return `**Contact Information for ${schoolInfo.schoolName}**:

📍 **Address**: ${contact.address}

📞 **Phone Numbers**:
• Main Office: ${contact.mainOffice}
• Attendance Line: ${contact.attendanceLine}
• Nurse's Office: ${contact.nurseOffice}

📧 **Email**:
• Front Office: ${contact.emails.frontOffice}
• Principal: ${contact.emails.principal}

⏰ **Office Hours**: ${contact.officeHours}`;
    },
  },
  {
    keywords: [
      'sick',
      'illness',
      'fever',
      'vomit',
      'health',
      'medication',
      'allergy',
    ],
    category: 'health',
    handler: () => {
      const health = schoolInfo.healthGuidelines;
      return `**Health Guidelines**:

🤒 **Keep your child home if**:
${health.illness.map((item) => `• ${item}`).join('\n')}

💊 **Medications**:
${health.medications.map((item) => `• ${item}`).join('\n')}

🦠 **COVID/Flu**:
${health.covidFlu.map((item) => `• ${item}`).join('\n')}

🥜 **Allergies**:
${health.allergies.map((item) => `• ${item}`).join('\n')}

📞 **Nurse's Office**: ${schoolInfo.contactInfo.nurseOffice}`;
    },
  },
  {
    keywords: ['form', 'handbook', 'portal', 'link', 'download'],
    category: 'forms',
    handler: () => {
      const forms = schoolInfo.formsAndLinks;
      return `**Forms & Links**:

📄 **Forms**:
• Absence Report: ${forms.forms.absenceReportForm}
• Early Pickup Request: ${forms.forms.earlyPickupRequest}
• Medication Authorization: ${forms.forms.medicationAuthorization}
• Parent Handbook: ${forms.forms.parentHandbook}
• Volunteer Application: ${forms.forms.volunteerApplication}

🔗 **Quick Links**:
• Parent Portal: ${forms.links.parentPortal}
• Lunch Menu: ${forms.links.lunchMenu}
• Bus Schedules: ${forms.links.busSchedules}`;
    },
  },
];

export function matchFAQ(question: string): string | null {
  const lowerQuestion = question.toLowerCase();

  for (const pattern of FAQ_PATTERNS) {
    if (pattern.keywords.some((keyword) => lowerQuestion.includes(keyword))) {
      return pattern.handler();
    }
  }

  return null;
}

export async function getAIResponse(question: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    return (
      data.response ||
      "I apologize, but I couldn't process your question. Please try rephrasing it or contact the office directly."
    );
  } catch (error) {
    console.error('Error getting AI response:', error);
    return `I'd be happy to help you with that! Based on ${schoolInfo.schoolName}'s information, I can provide general guidance. 

For specific questions about:
• **Attendance/Absences** - Ask "How do I report an absence?"
• **Early Pickup** - Ask "What are the early pickup procedures?"
• **School Hours** - Ask "What are the school hours?"
• **Contact Info** - Ask "How do I contact the office?"
• **Health Policies** - Ask "What are the health guidelines?"

Or feel free to ask me any other general questions about the school!`;
  }
}
