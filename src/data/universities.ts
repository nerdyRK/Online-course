export type UniversityType = 'Central' | 'Private' | 'Deemed' | 'State';

export interface Program {
  id: string;
  title: string;
  level: 'Bachelor' | 'Master' | 'Diploma' | 'Certificate';
  duration: string;
  feePerSem: string;
  mode: string;
  category: string;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  type: UniversityType;
  rating: number;
  estYear: number;
  ugcDebApproved: boolean;
  monogramGradient: string;
  initials: string;
  programs: Program[];
  categoryTags: string[];
  commissionRate: string;
  highlights: string[];
}

export const UNIVERSITIES: University[] = [
  {
    id: 'amity-online',
    name: 'Amity University Online',
    shortName: 'Amity Online',
    city: 'Noida',
    state: 'Uttar Pradesh',
    type: 'Private',
    rating: 4.8,
    estYear: 2005,
    ugcDebApproved: true,
    monogramGradient: 'linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)',
    initials: 'AU',
    commissionRate: 'Up to 22%',
    categoryTags: ['MBA', 'MCA', 'Data Science', 'BBA', 'AI & ML'],
    highlights: ['NAAC A+ Accredited', 'QS World Ranked #1 in India for Online', 'WASC USA Approved'],
    programs: [
      { id: 'p1', title: 'Master of Business Administration (MBA)', level: 'Master', duration: '2 Years', feePerSem: '₹45,000', mode: '100% Online', category: 'Management' },
      { id: 'p2', title: 'Master of Computer Applications (MCA)', level: 'Master', duration: '2 Years', feePerSem: '₹38,000', mode: '100% Online', category: 'IT & Software' },
      { id: 'p3', title: 'Bachelor of Business Administration (BBA)', level: 'Bachelor', duration: '3 Years', feePerSem: '₹30,000', mode: '100% Online', category: 'Management' },
      { id: 'p4', title: 'M.Sc. Data Science', level: 'Master', duration: '2 Years', feePerSem: '₹50,000', mode: '100% Online', category: 'Data Science' },
    ],
  },
  {
    id: 'manipal-online',
    name: 'Manipal University Online',
    shortName: 'Manipal Online',
    city: 'Jaipur',
    state: 'Rajasthan',
    type: 'Private',
    rating: 4.9,
    estYear: 2011,
    ugcDebApproved: true,
    monogramGradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    initials: 'MU',
    commissionRate: 'Up to 20%',
    categoryTags: ['MBA', 'BCA', 'B.Com', 'MCA', 'Finance'],
    highlights: ['NAAC A+ Grade', 'UGC Entitled Degree', 'Global Alumni Network of 100K+'],
    programs: [
      { id: 'p5', title: 'Online MBA - Dual Specialization', level: 'Master', duration: '2 Years', feePerSem: '₹43,750', mode: '100% Online', category: 'Management' },
      { id: 'p6', title: 'Bachelor of Computer Applications (BCA)', level: 'Bachelor', duration: '3 Years', feePerSem: '₹22,500', mode: '100% Online', category: 'IT & Software' },
      { id: 'p7', title: 'Master of Commerce (M.Com)', level: 'Master', duration: '2 Years', feePerSem: '₹25,000', mode: '100% Online', category: 'Commerce' },
      { id: 'p8', title: 'Online MCA in Cybersecurity', level: 'Master', duration: '2 Years', feePerSem: '₹39,000', mode: '100% Online', category: 'IT & Software' },
    ],
  },
  {
    id: 'chandigarh-online',
    name: 'Chandigarh University Online',
    shortName: 'CU Online',
    city: 'Mohali',
    state: 'Punjab',
    type: 'Private',
    rating: 4.7,
    estYear: 2012,
    ugcDebApproved: true,
    monogramGradient: 'linear-gradient(135deg, #0284c7 0%, #1e40af 100%)',
    initials: 'CU',
    commissionRate: 'Up to 25%',
    categoryTags: ['MBA', 'MA English', 'M.Sc Maths', 'BBA', 'BA'],
    highlights: ['NAAC A+ Accredited', 'QS Asia Rank #185', 'Dedicated Placement Portal'],
    programs: [
      { id: 'p9', title: 'Online MBA in Digital Marketing', level: 'Master', duration: '2 Years', feePerSem: '₹37,500', mode: '100% Online', category: 'Management' },
      { id: 'p10', title: 'Master of Arts (MA) English', level: 'Master', duration: '2 Years', feePerSem: '₹16,000', mode: '100% Online', category: 'Humanities' },
      { id: 'p11', title: 'Bachelor of Business Administration (BBA)', level: 'Bachelor', duration: '3 Years', feePerSem: '₹26,000', mode: '100% Online', category: 'Management' },
    ],
  },
  {
    id: 'ignou-online',
    name: 'Indira Gandhi National Open University',
    shortName: 'IGNOU Online',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Central',
    rating: 4.6,
    estYear: 1985,
    ugcDebApproved: true,
    monogramGradient: 'linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%)',
    initials: 'IG',
    commissionRate: 'Standard Partner Fee',
    categoryTags: ['MBA', 'B.Ed', 'MCA', 'BA', 'M.Com'],
    highlights: ['Largest Open University in World', 'NAAC A++ Grade', 'Central Government University'],
    programs: [
      { id: 'p12', title: 'Master of Business Administration (Banking & Finance)', level: 'Master', duration: '2 Years', feePerSem: '₹15,500', mode: 'Distance / Online', category: 'Management' },
      { id: 'p13', title: 'Master of Computer Applications (MCA)', level: 'Master', duration: '2 Years', feePerSem: '₹12,000', mode: 'Distance / Online', category: 'IT & Software' },
      { id: 'p14', title: 'Bachelor of Arts (Honours)', level: 'Bachelor', duration: '3 Years', feePerSem: '₹4,500', mode: 'Distance / Online', category: 'Humanities' },
    ],
  },
  {
    id: 'jain-online',
    name: 'Jain University Online',
    shortName: 'Jain Online',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Deemed',
    rating: 4.8,
    estYear: 1990,
    ugcDebApproved: true,
    monogramGradient: 'linear-gradient(135deg, #0d9488 0%, #1e40af 100%)',
    initials: 'JU',
    commissionRate: 'Up to 24%',
    categoryTags: ['MBA', 'BBA', 'Fintech', 'AI', 'Commerical Law'],
    highlights: ['NAAC A++ Grade', 'Ranked 68th by NIRF', 'Electives Powered by Wiley & HBS'],
    programs: [
      { id: 'p15', title: 'MBA in Financial Technology (Fintech)', level: 'Master', duration: '2 Years', feePerSem: '₹50,000', mode: '100% Online', category: 'Management' },
      { id: 'p16', title: 'BBA in International Finance & Accounting', level: 'Bachelor', duration: '3 Years', feePerSem: '₹36,000', mode: '100% Online', category: 'Management' },
      { id: 'p17', title: 'MCA in Artificial Intelligence', level: 'Master', duration: '2 Years', feePerSem: '₹45,000', mode: '100% Online', category: 'IT & Software' },
    ],
  },
  {
    id: 'dypatil-online',
    name: 'Dr. D.Y. Patil Vidyapeeth Online',
    shortName: 'DY Patil Online',
    city: 'Pune',
    state: 'Maharashtra',
    type: 'Deemed',
    rating: 4.7,
    estYear: 2003,
    ugcDebApproved: true,
    monogramGradient: 'linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)',
    initials: 'DY',
    commissionRate: 'Up to 21%',
    categoryTags: ['Hospital Management', 'MBA', 'BBA', 'Supply Chain'],
    highlights: ['NAAC A++ Accredited', 'Category I University Status', 'Harvard Case Study Method'],
    programs: [
      { id: 'p18', title: 'MBA in Hospital & Healthcare Management', level: 'Master', duration: '2 Years', feePerSem: '₹42,500', mode: '100% Online', category: 'Healthcare' },
      { id: 'p19', title: 'BBA in Logistics & Supply Chain', level: 'Bachelor', duration: '3 Years', feePerSem: '₹31,000', mode: '100% Online', category: 'Management' },
    ],
  },
  {
    id: 'srm-online',
    name: 'SRM Institute of Science & Technology',
    shortName: 'SRM Online',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Deemed',
    rating: 4.8,
    estYear: 1985,
    ugcDebApproved: true,
    monogramGradient: 'linear-gradient(135deg, #2563eb 0%, #0d9488 100%)',
    initials: 'SRM',
    commissionRate: 'Up to 20%',
    categoryTags: ['MBA', 'BBA', 'M.Com', 'BCA'],
    highlights: ['NAAC A++ Grade', 'QS Diamond Rating', 'Top Ranked Private Institution'],
    programs: [
      { id: 'p20', title: 'Online MBA in Data Analytics', level: 'Master', duration: '2 Years', feePerSem: '₹47,000', mode: '100% Online', category: 'Management' },
      { id: 'p21', title: 'Online BCA in Cloud Computing', level: 'Bachelor', duration: '3 Years', feePerSem: '₹28,000', mode: '100% Online', category: 'IT & Software' },
    ],
  },
  {
    id: 'kurukshetra-online',
    name: 'Kurukshetra University Online',
    shortName: 'KUK Online',
    city: 'Kurukshetra',
    state: 'Haryana',
    type: 'State',
    rating: 4.6,
    estYear: 1956,
    ugcDebApproved: true,
    monogramGradient: 'linear-gradient(135deg, #1e40af 0%, #0369a1 100%)',
    initials: 'KU',
    commissionRate: 'Up to 18%',
    categoryTags: ['MA', 'M.Com', 'MBA', 'BA'],
    highlights: ['Premier State Government University', 'NAAC A+ Grade', 'Low Cost Online Degrees'],
    programs: [
      { id: 'p22', title: 'Master of Commerce (M.Com)', level: 'Master', duration: '2 Years', feePerSem: '₹14,000', mode: '100% Online', category: 'Commerce' },
      { id: 'p23', title: 'Master of Business Administration (MBA)', level: 'Master', duration: '2 Years', feePerSem: '₹24,000', mode: '100% Online', category: 'Management' },
    ],
  },
];
