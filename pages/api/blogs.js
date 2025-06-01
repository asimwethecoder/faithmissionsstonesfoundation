// images
import blogImg1 from '/public/images/blog/img-1.jpg';
import blogImg2 from '/public/images/blog/img-2.jpg';
import blogImg3 from '/public/images/blog/img-3.jpg';
import blogImg4 from '/public/images/blog/img-1.jpg';
import blogImg5 from '/public/images/blog/img-2.jpg';
import blogImg6 from '/public/images/blog/img-3.jpg';
import blogImg7 from '/public/images/blog/img-2.jpg';
import blogImg8 from '/public/images/blog/img-4.jpg';
import blogImg9 from '/public/images/blog/img-5.jpg';
import blogImg10 from '/public/images/blog/img-6.jpg';
import blogImg11 from '/public/images/blog/img-7.jpg';

import blogSingleImg1 from '/public/images/blog-details/1.jpg';
import blogSingleImg2 from '/public/images/blog-details/2.jpg';
import blogSingleImg3 from '/public/images/blog-details/3.jpg';
import blogSingleImg4 from '/public/images/blog-details/4.jpg';
import blogSingleImg5 from '/public/images/blog-details/5.jpg';
import blogSingleImg6 from '/public/images/blog-details/6.jpg';
import blogSingleImg7 from '/public/images/blog-details/7.jpg';

import recent1 from '/public/images/recent-posts/img-1.jpg';
import recent2 from '/public/images/recent-posts/img-2.jpg';
import recent3 from '/public/images/recent-posts/img-3.jpg';

const blogs = [
  {
    id: '1',
    title: 'Inside Our Mining Rescue Operations: A Day in the Life',
    title2: 'Saving Children from Cobalt Mines',
    subtitle: 'Field Operations Report',
    slug: 'mining-rescue-operations-diary',
    screens: blogImg1,
    link: 'READ MORE',
    description:
      'First-hand account from our extraction teams navigating dangerous mining tunnels to rescue children',
    author: 'Jacques Mbeka',
    create_at: '15-03-2024',
    blogSingleImg: blogSingleImg1,
    recent: recent1,
    comment: '42',
    day: '12',
    month: 'MAR',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '2',
    title: 'Legal Breakthrough: New Child Labor Protections',
    title2: 'How We Changed DRC Mining Laws',
    subtitle: 'Policy Update',
    slug: 'child-labor-law-reforms',
    screens: blogImg2,
    link: 'READ MORE',
    description:
      'Analysis of recent legislative victories protecting minors in mining regions',
    author: 'Dr. Aminata Diallo',
    create_at: '01-04-2024',
    blogSingleImg: blogSingleImg2,
    recent: recent2,
    comment: '28',
    day: '19',
    month: 'APR',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '3',
    title: 'Healing Through Art: Trauma Therapy Innovations',
    title2: 'Creative Recovery for Mining Survivors',
    subtitle: 'Mental Health Focus',
    slug: 'art-therapy-rehabilitation',
    screens: blogImg3,
    link: 'READ MORE',
    description:
      'How clay sculpting and painting help process mining trauma in young survivors',
    author: 'Élodie Ntumba',
    create_at: '22-05-2024',
    blogSingleImg: blogSingleImg3,
    recent: recent3,
    comment: '35',
    day: '05',
    month: 'MAY',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '4',
    title: 'Community Farming Success Stories',
    title2: 'Alternatives to Mining Labor',
    subtitle: 'Economic Development',
    slug: 'farming-alternatives-success',
    screens: blogImg4,
    link: 'READ MORE',
    description:
      'How mushroom cultivation is breaking cycles of child labor in Katanga',
    author: 'Kinsu Bakari',
    create_at: '10-06-2024',
    blogSingleImg: blogSingleImg4,
    recent: recent3,
    comment: '17',
    day: '24',
    month: 'JUN',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '5',
    title: 'Mobile Clinic Milestones',
    title2: 'Treating Mine-Related Illnesses',
    subtitle: 'Medical Outreach',
    slug: 'mobile-clinic-achievements',
    screens: blogImg5,
    link: 'READ MORE',
    description:
      '5,000+ respiratory treatments provided in remote mining regions last quarter',
    author: 'Dr. Omar Bemba',
    create_at: '08-07-2024',
    blogSingleImg: blogSingleImg5,
    recent: recent3,
    comment: '53',
    day: '08',
    month: 'JUL',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '6',
    title: 'From Mine to Classroom',
    title2: 'Education Success Stories',
    subtitle: 'Rehabilitation Update',
    slug: 'education-success-stories',
    screens: blogImg6,
    link: 'READ MORE',
    description:
      'Meet former child miners now training as electricians and mechanics',
    author: 'Lubangi Mwamba',
    create_at: '15-08-2024',
    blogSingleImg: blogSingleImg6,
    recent: recent3,
    comment: '39',
    day: '15',
    month: 'AUG',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '7',
    title: 'Tech Against Child Labor',
    title2: 'AI in Mining Surveillance',
    subtitle: 'Innovation Feature',
    slug: 'ai-mining-surveillance',
    screens: blogImg7,
    link: 'READ MORE',
    description:
      'How machine learning helps identify underage workers in cobalt mines',
    author: 'Tech Team',
    create_at: '01-09-2024',
    blogSingleImg: blogSingleImg7,
    recent: recent3,
    comment: '47',
    day: '01',
    month: 'SEP',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '8',
    title: 'Volunteer Perspectives',
    title2: 'Rehabilitation Center Diary',
    subtitle: 'Field Experience',
    slug: 'volunteer-experience',
    screens: blogImg8,
    link: 'READ MORE',
    description: 'UN worker month-long experience at our Goma trauma center',
    author: 'Maria Gomez',
    create_at: '18-10-2024',
    blogSingleImg: blogSingleImg7,
    recent: recent3,
    comment: '22',
    day: '18',
    month: 'OCT',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '9',
    title: 'Corporate Accountability Progress',
    title2: 'Mining Company Partnerships',
    subtitle: 'Industry Relations',
    slug: 'corporate-accountability',
    screens: blogImg9,
    link: 'READ MORE',
    description:
      'How we are working with tech companies to create ethical supply chains',
    author: 'Jacques Tshibanda',
    create_at: '05-11-2024',
    blogSingleImg: blogSingleImg7,
    recent: recent3,
    comment: '31',
    day: '05',
    month: 'NOV',
    blClass: 'format-standard-image',
    animation: '1200',
  },
  {
    id: '10',
    title: 'Donor Impact Report',
    title2: '2024 Achievements',
    subtitle: 'Annual Review',
    slug: '2024-donor-impact',
    screens: blogImg10,
    link: 'READ MORE',
    description:
      'How $2.3M in donations transformed lives in DRC mining communities',
    author: 'Finance Team',
    create_at: '15-12-2024',
    blogSingleImg: blogSingleImg7,
    recent: recent3,
    comment: '29',
    day: '15',
    month: 'DEC',
    blClass: 'format-standard-image',
    animation: '1200',
  },
];

export default blogs;
