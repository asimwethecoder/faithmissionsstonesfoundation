import eimg1 from '/public/images/mission-vission/1.jpg';
import eimg2 from '/public/images/mission-vission/2.jpg';
import eimg3 from '/public/images/mission-vission/3.jpg';
import eimg4 from '/public/images/mission-vission/4.jpg';
import eimg5 from '/public/images/mission-vission/5.jpg';
import eimg6 from '/public/images/mission-vission/6.jpg';

import esing1 from '/public/images/events-single/1.jpg';
import esing2 from '/public/images/events-single/2.jpg';
import esing3 from '/public/images/events-single/3.jpg';
import esing4 from '/public/images/events-single/4.jpg';
import esing5 from '/public/images/events-single/5.jpg';
import esing6 from '/public/images/events-single/6.jpg';

const event = [
  {
    id: '1',
    title: 'Mine Rescue Anniversary Gala',
    subtitle: 'Celebrating 500+ Children Liberated',
    docomunt:
      'Annual fundraiser commemorating our mining rescue operations. Features survivor stories, progress reports, and plans for expanding extraction teams.',
    slug: 'rescue-anniversary-gala',
    eimg: eimg1,
    eSimg: esing1,
    location: 'Lubumbashi Convention Center, DRC',
    date: '12 March 2025',
  },
  {
    id: '2',
    title: 'Trauma Care Volunteer Training',
    subtitle: 'Certification in Mining PTSD Support',
    docomunt:
      '3-day intensive program teaching counseling techniques for children recovering from mining trauma. Includes field simulations and art therapy workshops.',
    slug: 'trauma-care-training',
    eimg: eimg2,
    eSimg: esing2,
    location: 'Goma Rehabilitation Campus',
    date: '5-7 April 2025',
  },
  {
    id: '3',
    title: 'Child Labor Legislation Summit',
    subtitle: 'Advocating Stronger Protections',
    docomunt:
      'National conference with lawmakers, NGOs, and survivors to draft new mining labor laws. Open to legal professionals and human rights advocates.',
    slug: 'labor-legislation-summit',
    eimg: eimg3,
    eSimg: esing3,
    location: 'Kinshasa Parliamentary Hall',
    date: '18 June 2025',
  },
  {
    id: '4',
    title: 'Mining Community Health Camp',
    subtitle: 'Free Respiratory Screenings',
    docomunt:
      'Mobile medical unit providing lung exams and treatments for children exposed to mine dust. Volunteer doctors and nurses needed.',
    slug: 'health-camp',
    eimg: eimg4,
    eSimg: esing4,
    location: 'Kolwezi Mining Region',
    date: 'Ongoing Weekly',
  },
  {
    id: '5',
    title: 'Education Kit Assembly Day',
    subtitle: 'Prepare School Supplies for Rescued Children',
    docomunt:
      'Community event to assemble 5,000 school kits with uniforms, books, and trauma-informed learning materials for new rehabilitation center intake.',
    slug: 'education-kit-day',
    eimg: eimg5,
    eSimg: esing5,
    location: 'Stone Foundation HQ, Katanga',
    date: '25 Sept 2025',
  },
  {
    id: '6',
    title: 'Anti-Child Labor Tech Hackathon',
    subtitle: 'Developing Mine Monitoring Solutions',
    docomunt:
      '48-hour innovation challenge creating AI tools to detect underage workers in mining areas. Partnering with local tech universities and UN agencies.',
    slug: 'tech-hackathon',
    eimg: eimg6,
    eSimg: esing6,
    location: 'DRC Digital Innovation Hub',
    date: '8-10 Nov 2025',
  },
];

export default event;
