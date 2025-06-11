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
    title: 'Mine Rescue Initiative',
    subtitle: 'Save Children from Abandoned Mines',
    docomunt:
      'Fund emergency extraction of children from dangerous derelict mines.',
    slug: 'sa-mine-rescue',
    Cimg: Cimg1,
    CSimg: Csing1,
    location: 'Johannesburg Gold Belt, Gauteng',
    date: 'Ongoing',
    tag: 'Rescue',
    progress: 68,
    goal: 120000,
    raised: 81600,
    targetGoal: 120000,
  },
  {
    id: '2',
    title: 'Trauma Recovery Network',
    subtitle: 'Healing Victims of Gang Violence',
    docomunt: 'Support counseling services for youth in high-crime townships.',
    slug: 'sa-trauma-care',
    Cimg: Cimg2,
    CSimg: Csing2,
    location: 'Cape Flats, Western Cape',
    date: '2024-2026',
    tag: 'Health',
    progress: 45,
    goal: 95000,
    raised: 42750,
    targetGoal: 95000,
  },
  {
    id: '3',
    title: 'Digital Skills Hubs',
    subtitle: 'Tech Education for Township Youth',
    docomunt: 'Establish coding academies in underserved communities.',
    slug: 'sa-digital-hubs',
    Cimg: Cimg3,
    CSimg: Csing3,
    location: 'Soweto, Gauteng',
    date: '2025 Academic Year',
    tag: 'Education',
    progress: 55,
    goal: 150000,
    raised: 82500,
    targetGoal: 150000,
  },
  {
    id: '4',
    title: 'Child Protection Legal Fund',
    subtitle: 'Combat Human Trafficking Networks',
    docomunt: 'Support prosecution of cross-border child trafficking rings.',
    slug: 'sa-legal-advocacy',
    Cimg: Cimg4,
    CSimg: Csing4,
    location: 'Musina Border Region',
    date: '2024-2025',
    tag: 'Legal',
    progress: 30,
    goal: 110000,
    raised: 33000,
    targetGoal: 110000,
  },
  {
    id: '5',
    title: 'Mobile Health Clinics',
    subtitle: 'Rural Community Healthcare',
    docomunt: 'Maintain mobile units serving remote Eastern Cape villages.',
    slug: 'sa-mobile-health',
    Cimg: Cimg5,
    CSimg: Csing5,
    location: 'Eastern Cape Province',
    date: 'Monthly Campaigns',
    tag: 'Health',
    progress: 82,
    goal: 85000,
    raised: 69700,
    targetGoal: 85000,
  },
  {
    id: '6',
    title: 'School Nutrition Program',
    subtitle: 'Daily Meals for Learners',
    docomunt: 'Provide fortified meals in 50+ under-resourced schools.',
    slug: 'sa-school-meals',
    Cimg: Cimg6,
    CSimg: Csing6,
    location: 'Limpopo Province',
    date: '2025 Sustenance',
    tag: 'Nutrition',
    progress: 78,
    goal: 65000,
    raised: 50700,
    targetGoal: 65000,
  },
  {
    id: '7',
    title: 'AI Farm Safety Monitoring',
    subtitle: 'Prevent Child Labor in Agriculture',
    docomunt: 'Develop detection systems for Western Cape fruit farms.',
    slug: 'sa-farm-tech',
    Cimg: Cimg7,
    CSimg: Csing7,
    location: 'Western Cape Farmlands',
    date: '2025 Deployment',
    tag: 'Technology',
    progress: 28,
    goal: 145000,
    raised: 40600,
    targetGoal: 145000,
  },
  {
    id: '8',
    title: 'Coastal Skills Academy',
    subtitle: 'Maritime Trade Training',
    docomunt: 'Establish vocational center for port-related industries.',
    slug: 'sa-maritime-training',
    Cimg: Cimg8,
    CSimg: Csing8,
    location: 'Durban Harbor, KZN',
    date: '2026 Completion',
    tag: 'Education',
    progress: 42,
    goal: 220000,
    raised: 92400,
    targetGoal: 220000,
  },
  {
    id: '9',
    title: 'Urban Farming Collective',
    subtitle: 'Township Food Security',
    docomunt: 'Create vertical farms in informal settlements.',
    slug: 'sa-urban-farming',
    Cimg: Cimg9,
    CSimg: Csing9,
    location: 'Alexandra Township',
    date: '2025 Growing Season',
    tag: 'Agriculture',
    progress: 58,
    goal: 75000,
    raised: 43500,
    targetGoal: 75000,
  },
  {
    id: '10',
    title: 'Flood Resilience Project',
    subtitle: 'KZN Community Protection',
    docomunt: 'Build flood barriers and emergency shelters in high-risk areas.',
    slug: 'sa-flood-relief',
    Cimg: Cimg10,
    CSimg: Csing10,
    location: 'KwaZulu-Natal Coast',
    date: '2027 Goal',
    tag: 'Infrastructure',
    progress: 35,
    goal: 300000,
    raised: 105000,
    targetGoal: 300000,
  },
];

export default causes;
