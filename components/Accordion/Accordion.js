import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      question: 'How does your foundation rescue children from mining work?',
      answer:
        'Our emergency response teams work with local authorities to identify and extract children from hazardous mining sites. We provide immediate medical care, shelter, and begin rehabilitation processes within 24 hours of rescue.',
    },
    {
      question: "What happens to children after they're rescued?",
      answer:
        'Children receive comprehensive care including medical treatment, trauma counseling, and education at our rehabilitation centers. We focus on family reunification when safe, or provide long-term residential care and vocational training.',
    },
    {
      question: 'How are donations used to support your programs?',
      answer:
        '85% of donations directly fund rescue operations, medical care, and education programs. 15% supports operational costs including staff training and community outreach initiatives. We publish annual financial reports for transparency.',
    },
    {
      question: 'Can I volunteer with your organization?',
      answer:
        "We accept skilled volunteers in medical, education, and technical fields. All volunteers undergo strict background checks and receive cultural sensitivity training. Visit our 'Become a Volunteer' page for current opportunities.",
    },
  ];

  return (
    <div className='accordion'>
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${index === activeIndex ? 'active' : ''}`}>
          <button
            className='accordion-header'
            onClick={() => toggleAccordion(index)}>
            {item.question}
          </button>
          <div
            className='accordion-content'
            style={{ display: index === activeIndex ? 'block' : 'none' }}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
