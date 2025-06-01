import Cimg1 from '/public/images/causes/1.jpg';
import Cimg2 from '/public/images/causes/2.jpg';
import Cimg3 from '/public/images/causes/3.jpg';
import Cimg4 from '/public/images/causes/4.jpg';
import Cimg5 from '/public/images/causes/5.jpg';
import Cimg6 from '/public/images/causes/6.jpg';
import Cimg7 from '/public/images/causes/7.jpg';
import Cimg8 from '/public/images/causes/8.jpg';
import Cimg9 from '/public/images/causes/9.jpg';
import Cimg10 from '/public/images/causes/10.jpg';

import Csing1 from '/public/images/cause-single/1.jpg';
import Csing2 from '/public/images/cause-single/2.jpg';
import Csing3 from '/public/images/cause-single/3.jpg';
import Csing4 from '/public/images/cause-single/4.jpg';
import Csing5 from '/public/images/cause-single/5.jpg';
import Csing6 from '/public/images/cause-single/6.jpg';
import Csing7 from '/public/images/cause-single/7.jpg';
import Csing8 from '/public/images/cause-single/8.jpg';
import Csing9 from '/public/images/cause-single/9.jpg';
import Csing10 from '/public/images/cause-single/10.jpg';

const causes = [
  {
    id: '1',
    title: 'Emergency Rescue Operations',
    subtitle: 'Save Children from Cobalt Mines',
    docomunt:
      'Fund immediate extraction of children from hazardous mining sites.',
    slug: 'mining-rescue-fund',
    Cimg: Cimg1,
    CSimg: Csing1,
    location: 'Kolwezi Mining Zone, DRC',
    date: 'Ongoing',
    tag: 'Rescue',
    progress: 75,
    goal: 150000,
    raised: 112500,
    targetGoal: 150000,
  },
  {
    id: '2',
    title: 'Trauma Rehabilitation Program',
    subtitle: 'Healing Young Minds',
    docomunt:
      'Support art therapy and PTSD counseling for 500+ rescued children annually.',
    slug: 'trauma-rehabilitation',
    Cimg: Cimg2,
    CSimg: Csing2,
    location: 'Lubumbashi Center',
    date: '2024-2026',
    tag: 'Health',
    progress: 40,
    goal: 80000,
    raised: 32000,
    targetGoal: 80000,
  },
  {
    id: '3',
    title: 'Mining Community Education',
    subtitle: 'Break the Cycle of Child Labor',
    docomunt:
      'Fund schools and vocational training in high-risk mining communities.',
    slug: 'community-education',
    Cimg: Cimg3,
    CSimg: Csing3,
    location: 'Katanga Province',
    date: '2025 Academic Year',
    tag: 'Education',
    progress: 60,
    goal: 120000,
    raised: 72000,
    targetGoal: 120000,
  },
  {
    id: '4',
    title: 'Legal Advocacy Fund',
    subtitle: 'Strengthen Child Labor Laws',
    docomunt:
      'Support our national campaign to prosecute illegal mining operators.',
    slug: 'legal-advocacy',
    Cimg: Cimg4,
    CSimg: Csing4,
    location: 'DRC National',
    date: '2024-2025',
    tag: 'Legal',
    progress: 35,
    goal: 75000,
    raised: 26250,
    targetGoal: 75000,
  },
  {
    id: '5',
    title: 'Mobile Medical Units',
    subtitle: 'On-Site Mine Region Care',
    docomunt:
      'Maintain fleet of 4WD clinics treating respiratory diseases in mining areas.',
    slug: 'mobile-medical',
    Cimg: Cimg5,
    CSimg: Csing5,
    location: 'DRC Mining Corridor',
    date: 'Monthly Campaigns',
    tag: 'Health',
    progress: 90,
    goal: 60000,
    raised: 54000,
    targetGoal: 60000,
  },
  {
    id: '6',
    title: 'Nutrition Security Program',
    subtitle: 'Feed Rescued Children',
    docomunt:
      'Provide daily meals and nutritional supplements for rehabilitation centers.',
    slug: 'nutrition-program',
    Cimg: Cimg6,
    CSimg: Csing6,
    location: '3 Care Facilities',
    date: '2025 Sustenance',
    tag: 'Nutrition',
    progress: 85,
    goal: 45000,
    raised: 38250,
    targetGoal: 45000,
  },
  {
    id: '7',
    title: 'Anti-Child Labor Tech',
    subtitle: 'AI Mine Monitoring Systems',
    docomunt:
      'Develop detection algorithms to identify underage workers in mining sites.',
    slug: 'tech-monitoring',
    Cimg: Cimg7,
    CSimg: Csing7,
    location: 'Innovation Lab',
    date: '2025 Deployment',
    tag: 'Technology',
    progress: 25,
    goal: 95000,
    raised: 23750,
    targetGoal: 95000,
  },
  {
    id: '8',
    title: 'Vocational Training Center',
    subtitle: 'Youth Skills Development',
    docomunt:
      'Build workshop facilities for mechanical training and sustainable trades.',
    slug: 'vocational-center',
    Cimg: Cimg8,
    CSimg: Csing8,
    location: 'Kinshasa',
    date: '2026 Completion',
    tag: 'Education',
    progress: 50,
    goal: 180000,
    raised: 90000,
    targetGoal: 180000,
  },
  {
    id: '9',
    title: 'Community Farming Initiative',
    subtitle: 'Alternative Livelihoods',
    docomunt:
      'Establish agricultural cooperatives to replace mining-dependent incomes.',
    slug: 'farming-initiative',
    Cimg: Cimg9,
    CSimg: Csing9,
    location: 'Tanganyika Province',
    date: '2025 Growing Season',
    tag: 'Agriculture',
    progress: 65,
    goal: 55000,
    raised: 35750,
    targetGoal: 55000,
  },
  {
    id: '10',
    title: 'Rehabilitation Campus Expansion',
    subtitle: 'Double Our Capacity',
    docomunt:
      'Construct new dormitories and classrooms to house 300+ additional children.',
    slug: 'campus-expansion',
    Cimg: Cimg10,
    CSimg: Csing10,
    location: 'Goma Complex',
    date: '2027 Goal',
    tag: 'Infrastructure',
    progress: 28,
    goal: 250000,
    raised: 70000,
    targetGoal: 250000,
  },
];

export default causes;
