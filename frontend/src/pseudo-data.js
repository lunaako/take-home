// Represents all people on the platform.
export const users = [
    {
        id: 1,
        first_name: 'Sarah',
        last_name: 'Jenkins',
        email: 'sarah.j@quantumleap.tech',
        profile_picture_url: 'https://i.pravatar.cc/150?u=sarah',
        bio: 'Founder & CEO at QuantumLeap Tech. Driving innovation in cloud computing and distributed systems. We are hiring!',
    },
    {
        id: 2,
        first_name: 'David',
        last_name: 'Chen',
        email: 'david.chen@email.com',
        profile_picture_url: 'https://i.pravatar.cc/150?u=david',
        bio: 'Senior product designer with 5 years of experience in user-centric design for SaaS platforms.',
    },
    {
        id: 3,
        first_name: 'Emily',
        last_name: 'Davis',
        email: 'emily.d@greensprout.com',
        profile_picture_url: 'https://i.pravatar.cc/150?u=emily',
        bio: 'Founder of GreenSprout Foods, on a mission to make healthy eating accessible. Also a full-stack developer.',
    },
    {
        id: 4,
        first_name: 'Michael',
        last_name: 'Rodriguez',
        email: 'michael.r@email.com',
        profile_picture_url: 'https://i.pravatar.cc/150?u=michael',
        bio: 'Recent computer science graduate from Stanford. Eager to apply my skills in machine learning.',
    },
];

// --- CANDIDATE PROFILES ---
// Defines who is a job seeker.
export const candidate_profiles = [
    {
        user_id: 2, // David Chen
        work_authorization: 'H1B',
        experience_level: 'Senior',
        skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
        is_actively_seeking: true,
    },
    {
        user_id: 3, // Emily Davis (Founder who is also job seeking)
        work_authorization: 'Citizen',
        experience_level: 'Mid-level',
        skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL'],
        is_actively_seeking: true,
    },
    {
        user_id: 4, // Michael Rodriguez
        work_authorization: 'Citizen',
        experience_level: 'Entry',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
        is_actively_seeking: true,
    },
];

// --- COMPANIES ---
export const companies = [
    {
        id: 101,
        name: 'QuantumLeap Tech',
        logo_url: 'https://i.pravatar.cc/48?u=quantumleap', // Placeholder logo
        industry: 'Cloud Computing',
        stage: 'Late Stage',
    },
    {
        id: 102,
        name: 'GreenSprout Foods',
        logo_url: 'https://i.pravatar.cc/48?u=greensprout', // Placeholder logo
        industry: 'Health & Wellness',
        stage: 'Seed',
    },
];

// --- COMPANY MEMBERS ---
// Defines who is an employer and their role.
export const company_members = [
    { user_id: 1, company_id: 101, role_in_company: 'founder' }, // Sarah is founder of QuantumLeap
    { user_id: 3, company_id: 102, role_in_company: 'founder' }, // Emily is founder of GreenSprout
];

// --- MASTER TAGS LIST ---
export const tags = [
    { id: 1, name: 'Product Design' },
    { id: 2, name: 'Entry Level' },
    { id: 3, name: 'Remote' },
    { id: 4, name: 'Senior Level' },
    { id: 5, name: 'H1B Sponsor' },
    { id: 6, name: 'New Grad' },
    { id: 7, name: 'Full-stack' },
    { id: 8, name: 'AI / ML' }
];


// --- JOBS ---
// The main data for the job listings.
// Using a date object to simulate "2 hours ago"
const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();

export const jobs = [
    {
        id: 201,
        title: 'Senior Product Designer',
        company_id: 101, // QuantumLeap Tech
        posted_by_user_id: 1, // Sarah Jenkins
        description_short: 'Lead the design of our next-generation cloud management platform.',
        description_full: 'The Hive Data team plays a central role at QuantumLeap in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You’ll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...',
        job_type: 'Full-time',
        location: 'Remote - US',
        experience_level_required: 'Senior Level',
        salary_min: 140000,
        salary_max: 175000,
        sponsorship_available: true, // This should be a "Strong Match" for David Chen
        created_at: twoHoursAgo,
    },
    {
        id: 202,
        title: 'Full-stack Engineer',
        company_id: 102, // GreenSprout Foods
        posted_by_user_id: 3, // Emily Davis
        description_short: 'Build and maintain our customer-facing web application and backend services.',
        description_full: 'The Hive Data team plays a central role at GreenSprout in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You’ll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...',
        job_type: 'Full-time',
        location: 'Remote - US',
        experience_level_required: 'Entry Level',
        salary_min: 120000,
        salary_max: 135000,
        sponsorship_available: false,
        created_at: twoHoursAgo,
    },
    {
        id: 203,
        title: 'Machine Learning Intern (Fall 2025)',
        company_id: 101, // QuantumLeap Tech
        posted_by_user_id: 1, // Sarah Jenkins
        description_short: 'Join our AI research team to work on cutting-edge prediction models.',
        description_full: 'The Hive Data team plays a central role at QuantumLeap in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You’ll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...',
        job_type: 'Internship',
        location: 'Remote - US',
        experience_level_required: 'Entry Level',
        salary_min: 95000,
        salary_max: 110000,
        sponsorship_available: true,
        created_at: twoHoursAgo,
    },
    {
        id: 204,
        title: 'Product Designer',
        company_id: 102, // GreenSprout Foods
        posted_by_user_id: 3, // Emily Davis
        description_short: 'Design intuitive and delightful user experiences for our mobile app.',
        description_full: 'The Hive Data team plays a central role at GreenSprout in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You’ll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...',
        job_type: 'Full-time',
        location: 'Remote - US',
        experience_level_required: 'Entry Level',
        salary_min: 120000,
        salary_max: 135000,
        sponsorship_available: false,
        created_at: twoHoursAgo,
    },
];


// --- JOB-TAGS ---
// Linking table for jobs and tags.
export const job_tags = [
    // Tags for Job 201
    { job_id: 201, tag_id: 1 },
    { job_id: 201, tag_id: 4 },
    { job_id: 201, tag_id: 5 },
    // Tags for Job 202
    { job_id: 202, tag_id: 7 },
    { job_id: 202, tag_id: 2 },
    { job_id: 202, tag_id: 3 },
    // Tags for Job 203
    { job_id: 203, tag_id: 8 },
    { job_id: 203, tag_id: 6 },
    { job_id: 203, tag_id: 3 },
    // Tags for Job 204
    { job_id: 204, tag_id: 1 },
    { job_id: 204, tag_id: 2 },
];


// --- APPLICATIONS ---
// Example data for applications, not all jobs need to have one.
export const applications = [
    { id: 1, user_id: 2, job_id: 201, status: 'applied', created_at: new Date().toISOString() },
    { id: 2, user_id: 4, job_id: 203, status: 'applied', created_at: new Date().toISOString() }
];
