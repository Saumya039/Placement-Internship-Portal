// CareerSync Pro - Placement & Internship Portal Application Controller

class PortalState {
    constructor() {
        this.initializeData();
    }

    initializeData() {
        const storedJobs = localStorage.getItem('cs_jobs');
        const storedAnnouncements = localStorage.getItem('cs_announcements');
        const storedStudents = localStorage.getItem('cs_students');
        const storedApplications = localStorage.getItem('cs_applications');
        const storedCompanies = localStorage.getItem('cs_companies');
        const storedInterviews = localStorage.getItem('cs_interviews');
        const storedUsers = localStorage.getItem('cs_users');
        const storedNotifs = localStorage.getItem('cs_notifications');

        // Seed Users Credential Store
        if (!storedUsers) {
            this.users = [
                { email: 'student@careersync.com', password: 'student123', role: 'student', name: 'Saumya Verma', refId: 's1' },
                { email: 'recruiter@google.com', password: 'recruiter123', role: 'recruiter', name: 'Rohit Sharma', refId: 'r1', company: 'Google' },
                { email: 'admin@tpo.edu', password: 'admin123', role: 'admin', name: 'Dr. A.K. Sen', refId: 'a1' }
            ];
            this.saveToStorage('cs_users', this.users);
        } else {
            this.users = JSON.parse(storedUsers);
        }

        if (!storedNotifs) {
            this.notifications = [
                { id: 'n1', message: 'Welcome to CareerSync Pro! Complete your resume wizard in the Student Portal.', timestamp: 'Just now', read: false }
            ];
            this.saveToStorage('cs_notifications', this.notifications);
        } else {
            this.notifications = JSON.parse(storedNotifs);
        }

        if (!storedCompanies) {
            this.companies = [
                { id: 'c1', name: 'Google', logo: '🌐', verified: true, sector: 'Software Dev & AI' },
                { id: 'c2', name: 'Microsoft', logo: '💻', verified: true, sector: 'Cloud & Systems' },
                { id: 'c3', name: 'TCS', logo: '⚙️', verified: true, sector: 'IT Services' },
                { id: 'c4', name: 'Netflix', logo: '🎬', verified: false, sector: 'Streaming Tech' },
                { id: 'c5', name: 'Razorpay', logo: '💳', verified: false, sector: 'FinTech Payments' }
            ];
            this.saveToStorage('cs_companies', this.companies);
        } else {
            this.companies = JSON.parse(storedCompanies);
        }

        if (!storedJobs) {
            this.jobs = [
                {
                    id: 'job1',
                    companyId: 'c1',
                    companyName: 'Google',
                    logo: '🌐',
                    title: 'Software Development Intern',
                    type: 'Internship',
                    category: 'Software Engineer',
                    salary: '1,20,000 / mo',
                    location: 'Remote',
                    skills: ['React', 'Node.js', 'Data Structures', 'TypeScript'],
                    description: 'We are looking for self-motivated Software Engineering interns to join our core development team. You will work on production features, scale service layers, and participate in technical designs.',
                    verified: true
                },
                {
                    id: 'job2',
                    companyId: 'c2',
                    companyName: 'Microsoft',
                    logo: '💻',
                    title: 'Data Science Specialist',
                    type: 'Fulltime',
                    category: 'Data Scientist',
                    salary: '24.5 LPA',
                    location: 'Onsite (Bangalore)',
                    skills: ['Python', 'PyTorch', 'SQL', 'Machine Learning'],
                    description: 'Apply advanced Machine Learning methodologies to solve core analytics problems. You will work closely with product managers and database engineers to deliver data-backed features.',
                    verified: true
                },
                {
                    id: 'job3',
                    companyId: 'c3',
                    companyName: 'TCS',
                    logo: '⚙️',
                    title: 'Systems Engineer - Ninja Core',
                    type: 'Fulltime',
                    category: 'Software Engineer',
                    salary: '7.2 LPA',
                    location: 'Onsite (Pune)',
                    skills: ['Java', 'Spring Boot', 'SQL', 'Linux'],
                    description: 'Deploy robust enterprise applications. Establish cloud infrastructure triggers, build microservices, and manage database integrations for global client architectures.',
                    verified: true
                },
                {
                    id: 'job4',
                    companyId: 'c1',
                    companyName: 'Google',
                    logo: '🌐',
                    title: 'Associate Product Manager',
                    type: 'Fulltime',
                    category: 'Product Manager',
                    salary: '18.0 LPA',
                    location: 'Hybrid (Hyderabad)',
                    skills: ['Product Analytics', 'User Research', 'A/B Testing', 'Agile'],
                    description: 'Own features end-to-end. Conduct user studies, detail interface specs, analyze core interaction metrics, and manage cross-functional deployment pipelines.',
                    verified: true
                },
                {
                    id: 'job5',
                    companyId: 'c4',
                    companyName: 'Netflix',
                    logo: '🎬',
                    title: 'UI/UX Design Intern',
                    type: 'Internship',
                    category: 'Designer',
                    salary: '85,000 / mo',
                    location: 'Remote',
                    skills: ['Figma', 'Prototyping', 'User Flows', 'CSS Grid'],
                    description: 'Craft user journeys for media delivery. Assist in user testing workshops, develop wireframes, and design high-fidelity components.',
                    verified: false // Needs TPO Admin Verification!
                }
            ];
            this.saveToStorage('cs_jobs', this.jobs);
        } else {
            this.jobs = JSON.parse(storedJobs);
        }

        if (!storedAnnouncements) {
            this.announcements = [
                {
                    id: 'ann1',
                    title: 'Google Recruitment Registration Open',
                    body: 'Google India has opened registrations for Software Dev Intern positions. Ensure your resume is uploaded in the student dashboard and apply before May 30th.',
                    timestamp: 'May 26, 2026'
                },
                {
                    id: 'ann2',
                    title: 'Mandatory Pre-Placement Workshop',
                    body: 'All pre-final year students must attend the placement preparation orientation session tomorrow at 10:00 AM in the central auditorium.',
                    timestamp: 'May 25, 2026'
                }
            ];
            this.saveToStorage('cs_announcements', this.announcements);
        } else {
            this.announcements = JSON.parse(storedAnnouncements);
        }

        if (!storedStudents) {
            this.students = [
                { id: 's1', name: 'Saumya Verma', email: 'student@careersync.com', roll: 'CS2023089', stream: 'Computer Science', cgpa: '9.2', resumeUploaded: false, resumeDetails: null, badges: ['DSA Verified'], placed: false },
                { id: 's2', name: 'Rohan Gupta', email: 'rohan@careersync.com', roll: 'CS2023045', stream: 'Electronics & Comm', cgpa: '8.5', resumeUploaded: true, resumeDetails: { email: 'rohan@careersync.com', phone: '9876543211', github: 'github.com/rohan', college: 'NIT', degree: 'B.Tech, ECE', gradYear: '2027', company: 'None', role: 'None', duration: 'None', expDesc: 'None', projTitle: 'Smart IoT Home', projDesc: 'Built node modules', skills: 'C++, Arduino, SQL' }, badges: ['JS Verified'], placed: true },
                { id: 's3', name: 'Priya Nair', email: 'priya@careersync.com', roll: 'EE2023023', stream: 'Electrical Engineering', cgpa: '7.9', resumeUploaded: false, resumeDetails: null, badges: [], placed: false }
            ];
            this.saveToStorage('cs_students', this.students);
        } else {
            this.students = JSON.parse(storedStudents);
        }

        if (!storedApplications) {
            this.applications = [
                {
                    id: 'app1',
                    jobId: 'job3',
                    jobTitle: 'Systems Engineer - Ninja Core',
                    companyName: 'TCS',
                    studentId: 's2',
                    studentName: 'Rohan Gupta',
                    studentCgpa: '8.5',
                    studentSkills: ['C++', 'Arduino', 'SQL'],
                    appliedDate: '2026-05-24',
                    status: 'Shortlisted'
                },
                {
                    id: 'app2',
                    jobId: 'job2',
                    jobTitle: 'Data Science Specialist',
                    companyName: 'Microsoft',
                    studentId: 's3',
                    studentName: 'Priya Nair',
                    studentCgpa: '7.9',
                    studentSkills: ['Python', 'SQL'],
                    appliedDate: '2026-05-25',
                    status: 'Applied'
                }
            ];
            this.saveToStorage('cs_applications', this.applications);
        } else {
            this.applications = JSON.parse(storedApplications);
        }

        if (!storedInterviews) {
            this.interviews = [
                {
                    id: 'int1',
                    applicationId: 'app1',
                    studentId: 's2',
                    studentName: 'Rohan Gupta',
                    companyName: 'TCS',
                    jobTitle: 'Systems Engineer - Ninja Core',
                    date: '2026-05-29',
                    time: '14:30',
                    link: 'meet.google.com/abc-tcs-recruit'
                }
            ];
            this.saveToStorage('cs_interviews', this.interviews);
        } else {
            this.interviews = JSON.parse(storedInterviews);
        }
    }

    saveToStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    updateState(key, data) {
        this[key] = data;
        this.saveToStorage('cs_' + key, data);
    }
}

class PortalController {
    constructor() {
        this.state = new PortalState();
        this.currentUser = null;
        this.currentRole = 'student';
        this.wizardStep = 1;
        this.activeAuthTab = 'login';
        this.activeAuthRole = 'student';
        this.activeAssessment = null;
        this.assessmentTimer = null;
        this.assessmentScore = 0;
        this.currentQuestionIdx = 0;
        this.selectedOptionIdx = null;

        // Mock Assessments Questions Database
        this.assessmentsDb = {
            js: [
                { q: "Which ES6 block-scoped variable declaration is NOT hoisted to an uninitialized state?", o: ["var", "let", "const", "Both let and const"], a: 3 },
                { q: "What is the result of typeof null in JavaScript?", o: ["'null'", "'undefined'", "'object'", "'string'"], a: 2 },
                { q: "Which mechanism executes asynchronous callbacks in JavaScript?", o: ["Call Stack", "Event Loop", "Memory Heap", "Compile Engine"], a: 1 },
                { q: "What does the 'Strict Mode' directive prevent in script layers?", o: ["Variable hoisting", "Implicit creation of global variables", "Async promises", "Object creation"], a: 1 },
                { q: "Which array operator returns a new array with all elements matching a conditional callback?", o: ["map()", "forEach()", "filter()", "reduce()"], a: 2 }
            ],
            python: [
                { q: "What structure does a Python list comprehension returns?", o: ["Tuple", "Set", "List", "Dictionary"], a: 2 },
                { q: "Which keyword yields values in a Python generator function?", o: ["return", "yield", "send", "generate"], a: 1 },
                { q: "Which function wraps another to modify its execution context without editing structure?", o: ["Generator", "Decorator", "Lambda", "Module"], a: 1 },
                { q: "What is the time complexity of dict lookups on average?", o: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], a: 0 },
                { q: "Which standard collection stores key-value pairs while tracking insertion order in Python 3.7+?", o: ["set", "list", "dict", "tuple"], a: 2 }
            ],
            dsa: [
                { q: "What is the worst-case time complexity of Quick Sort?", o: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"], a: 2 },
                { q: "Which data structure follows a LIFO (Last In First Out) mechanism?", o: ["Queue", "Stack", "Linked List", "Binary Tree"], a: 1 },
                { q: "Which traversal of a Binary Search Tree output values in ascending sorted order?", o: ["Pre-order", "In-order", "Post-order", "Breadth-First"], a: 1 },
                { q: "What is the height of a balanced binary tree with 'N' nodes?", o: ["O(log N)", "O(N)", "O(N log N)", "O(1)"], a: 0 },
                { q: "Which representation is most space-efficient for sparse graphs?", o: ["Adjacency Matrix", "Adjacency List", "Incidence Grid", "Edge Array"], a: 1 }
            ]
        };
    }

    init() {
        this.loadTheme();
        this.checkSession();
        this.renderStats();
        this.renderJobs();
    }

    // -------------------------------------------------------------
    // AUTHENTICATION HUB
    // -------------------------------------------------------------
    checkSession() {
        const session = localStorage.getItem('cs_active_user');
        if (session) {
            this.currentUser = JSON.parse(session);
            this.currentRole = this.currentUser.role;
            document.getElementById('auth-screen').style.display = 'none';
            this.syncSidebarProfile();
            this.toggleSidebarItems();
            this.navigateTo('landing');
            this.renderNotifications();
        } else {
            document.getElementById('auth-screen').style.display = 'flex';
        }
    }

    setAuthTab(tab) {
        this.activeAuthTab = tab;
        document.getElementById('auth-tab-login').classList.remove('active');
        document.getElementById('auth-tab-signup').classList.remove('active');
        document.getElementById(`auth-tab-${tab}`).classList.add('active');

        // Toggle signup specific UI inputs
        const nameGroup = document.getElementById('auth-name-group');
        const studentRow = document.getElementById('auth-student-row');
        const recruiterGroup = document.getElementById('auth-recruiter-group');
        const submitBtn = document.getElementById('auth-submit-btn');

        if (tab === 'signup') {
            nameGroup.style.display = 'block';
            submitBtn.innerText = 'Register Account';
            this.toggleSignupFields();
        } else {
            nameGroup.style.display = 'none';
            studentRow.style.display = 'none';
            recruiterGroup.style.display = 'none';
            submitBtn.innerText = 'Sign In';
        }
    }

    setAuthRole(role) {
        this.activeAuthRole = role;
        document.querySelectorAll('.role-radio-card').forEach(c => c.classList.remove('active'));
        document.getElementById(`role-card-${role}`).classList.add('active');
        document.querySelector(`input[name="auth-role"][value="${role}"]`).checked = true;

        if (this.activeAuthTab === 'signup') {
            this.toggleSignupFields();
        }
    }

    toggleSignupFields() {
        const studentRow = document.getElementById('auth-student-row');
        const recruiterGroup = document.getElementById('auth-recruiter-group');

        if (this.activeAuthRole === 'student') {
            studentRow.style.display = 'grid';
            recruiterGroup.style.display = 'none';
        } else if (this.activeAuthRole === 'recruiter') {
            studentRow.style.display = 'none';
            recruiterGroup.style.display = 'block';
        } else {
            studentRow.style.display = 'none';
            recruiterGroup.style.display = 'none';
        }
    }

    handleAuthSubmit(event) {
        event.preventDefault();
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;

        if (this.activeAuthTab === 'login') {
            // Find User
            const user = this.state.users.find(u => u.email === email && u.password === password && u.role === this.activeAuthRole);
            if (user) {
                this.loginUser(user);
            } else {
                this.showToast('Invalid credentials or selected role mismatch.', 'danger');
            }
        } else {
            // Register flow
            const name = document.getElementById('auth-name').value;
            
            // Check if user exists
            const exists = this.state.users.some(u => u.email === email);
            if (exists) {
                this.showToast('Account already registered with this email.', 'warning');
                return;
            }

            const refId = 'u_' + Math.random().toString(36).substr(2, 9);
            const newUser = { email, password, role: this.activeAuthRole, name, refId };
            
            if (this.activeAuthRole === 'student') {
                const cgpa = document.getElementById('auth-cgpa').value || "8.0";
                const branch = document.getElementById('auth-branch').value;
                const newStudent = { id: refId, name, email, roll: 'CS2026' + Math.floor(100+Math.random()*900), stream: branch, cgpa, resumeUploaded: false, resumeDetails: null, badges: [], placed: false };
                
                const studentsList = this.state.students;
                studentsList.push(newStudent);
                this.state.updateState('students', studentsList);
            } else if (this.activeAuthRole === 'recruiter') {
                const company = document.getElementById('auth-company').value || "Freelancer";
                newUser.company = company;

                // Add to companies list as unverified
                const newCompany = { id: 'c_' + Math.random().toString(36).substr(2, 9), name: company, logo: '🏢', verified: false, sector: 'General Industry' };
                const companiesList = this.state.companies;
                companiesList.push(newCompany);
                this.state.updateState('companies', companiesList);
            }

            const usersList = this.state.users;
            usersList.push(newUser);
            this.state.updateState('users', usersList);

            this.showToast('Registration successful! Logging you in.', 'success');
            this.loginUser(newUser);
        }
    }

    loginUser(user) {
        this.currentUser = user;
        this.currentRole = user.role;
        localStorage.setItem('cs_active_user', JSON.stringify(user));
        
        document.getElementById('auth-screen').style.display = 'none';
        
        // Reset forms
        document.getElementById('auth-form').reset();
        this.setAuthTab('login');
        
        this.syncSidebarProfile();
        this.toggleSidebarItems();
        this.navigateTo('landing');
        
        this.showToast(`Logged in successfully as ${user.name}`, 'success');
        this.addNotification(`Session logged in for ${user.name} (${user.role.toUpperCase()})`, user.role);
    }

    quickDemoLogin(role) {
        let email = 'student@careersync.com';
        let pass = 'student123';

        if (role === 'recruiter') {
            email = 'recruiter@google.com';
            pass = 'recruiter123';
        } else if (role === 'admin') {
            email = 'admin@tpo.edu';
            pass = 'admin123';
        }

        const user = this.state.users.find(u => u.email === email && u.password === pass);
        if (user) {
            this.loginUser(user);
        }
    }

    handleLogout() {
        this.currentUser = null;
        localStorage.removeItem('cs_active_user');
        document.getElementById('auth-screen').style.display = 'flex';
        this.showToast('Logged out of active session.', 'info');
    }

    syncSidebarProfile() {
        if (!this.currentUser) return;
        document.getElementById('sidebar-user-name').innerText = this.currentUser.name;
        document.getElementById('sidebar-user-role').innerText = this.currentUser.role.toUpperCase();
        document.getElementById('sidebar-avatar').innerText = this.currentUser.name.charAt(0);
    }

    toggleSidebarItems() {
        const studentMenu = document.getElementById('menu-item-student-dash');
        const recruiterMenu = document.getElementById('menu-item-recruiter-dash');
        const adminMenu = document.getElementById('menu-item-admin-dash');

        studentMenu.style.display = (this.currentRole === 'student') ? 'block' : 'none';
        recruiterMenu.style.display = (this.currentRole === 'recruiter') ? 'block' : 'none';
        adminMenu.style.display = (this.currentRole === 'admin') ? 'block' : 'none';
    }

    // -------------------------------------------------------------
    // COMPONENT INTERACTION NAVIGATION
    // -------------------------------------------------------------
    navigateTo(viewId) {
        document.querySelectorAll('.view-container').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`view-${viewId}`).classList.add('active');

        // Sidebar active markers
        document.querySelectorAll('.nav-item-btn').forEach(btn => btn.classList.remove('active'));
        if (viewId === 'landing') {
            document.getElementById('nav-btn-explore').classList.add('active');
            this.renderJobs();
            this.renderStats();
        } else if (viewId === 'student-dashboard') {
            document.getElementById('nav-btn-student-dash').classList.add('active');
            this.renderStudentDashboard();
        } else if (viewId === 'recruiter-dashboard') {
            document.getElementById('nav-btn-recruiter-dash').classList.add('active');
            this.renderRecruiterDashboard();
        } else if (viewId === 'admin-dashboard') {
            document.getElementById('nav-btn-admin-dash').classList.add('active');
            this.renderAdminDashboard();
        }
    }

    // -------------------------------------------------------------
    // REAL-TIME NOTIFICATIONS CELL
    // -------------------------------------------------------------
    toggleNotifDropdown() {
        document.getElementById('notif-dropdown').classList.toggle('active');
    }

    addNotification(message, roleTarget = 'all') {
        const newNotif = {
            id: 'n_' + Math.random().toString(36).substr(2, 9),
            message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            read: false,
            roleTarget
        };
        const list = this.state.notifications;
        list.push(newNotif);
        this.state.updateState('notifications', list);
        this.renderNotifications();
    }

    renderNotifications() {
        const listHolder = document.getElementById('notif-list');
        const badge = document.getElementById('notif-badge');
        
        listHolder.innerHTML = '';

        // Filter alerts relevant to this role or all
        const relevant = this.state.notifications.filter(n => n.roleTarget === 'all' || n.roleTarget === this.currentRole);
        const unread = relevant.filter(n => !n.read).length;

        if (unread > 0) {
            badge.innerText = unread;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }

        if (relevant.length === 0) {
            listHolder.innerHTML = '<div style="font-size:0.75rem; text-align:center; color:var(--text-secondary); padding: 12px 0;">No new alerts.</div>';
            return;
        }

        [...relevant].reverse().forEach(n => {
            const item = document.createElement('div');
            item.className = 'notif-item';
            item.innerHTML = `
                <div class="notif-item-body">${n.message}</div>
                <div class="notif-item-time">${n.timestamp}</div>
            `;
            listHolder.appendChild(item);
        });

        // Mark as read
        relevant.forEach(n => n.read = true);
        localStorage.setItem('cs_notifications', JSON.stringify(this.state.notifications));
    }

    clearNotifications() {
        this.state.updateState('notifications', []);
        this.renderNotifications();
        this.showToast('All notifications cleared.', 'info');
    }

    // -------------------------------------------------------------
    // THEME CONTROLLER SYSTEM (Dark/Light mode toggler)
    // -------------------------------------------------------------
    toggleTheme() {
        const isLight = document.body.classList.toggle('light-theme');
        localStorage.setItem('cs_theme', isLight ? 'light' : 'dark');
        
        // Trigger SVG charts redraw if in TPO dashboard
        if (this.currentRole === 'admin') {
            this.renderAdminCharts();
        }
    }

    loadTheme() {
        const theme = localStorage.getItem('cs_theme');
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }

    // -------------------------------------------------------------
    // STATISTICS RENDER
    // -------------------------------------------------------------
    renderStats() {
        const placementsCount = this.state.students.filter(s => s.placed).length;
        const totalStud = this.state.students.length;
        const ratio = totalStud > 0 ? ((placementsCount / totalStud) * 100).toFixed(1) : 0;

        document.getElementById('stat-placements').innerText = Math.round(1248 + placementsCount);
        document.getElementById('stat-companies').innerText = this.state.companies.filter(c => c.verified).length;
        document.getElementById('stat-total-jobs').innerText = this.state.jobs.filter(j => j.verified).length;

        // Admin Dash
        document.getElementById('admin-stat-total-applied').innerText = this.state.applications.length;
        document.getElementById('admin-stat-ratio').innerText = `${ratio}%`;
        document.getElementById('admin-stat-pending-verify').innerText = this.state.companies.filter(c => !c.verified).length + this.state.jobs.filter(j => !j.verified).length;
        document.getElementById('admin-stat-announcements').innerText = this.state.announcements.length;
    }

    // -------------------------------------------------------------
    // LANDING & JOB BOARD
    // -------------------------------------------------------------
    renderJobs() {
        const grid = document.getElementById('jobs-listings-grid');
        grid.innerHTML = '';

        const activeJobs = this.state.jobs.filter(j => j.verified);

        if (activeJobs.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No available opportunities live.</div>';
            return;
        }

        activeJobs.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            
            const hasApplied = this.currentUser && this.state.applications.some(app => app.jobId === job.id && app.studentId === this.currentUser.refId);

            card.innerHTML = `
                <div>
                    <div class="job-card-header">
                        <div class="company-logo">${job.logo || '🏢'}</div>
                        <div class="company-details-name">
                            <span class="job-title">${job.title}</span>
                            <span class="company-name">${job.companyName}</span>
                        </div>
                    </div>
                    <div class="job-tags">
                        <span class="job-tag featured">${job.type}</span>
                        <span class="job-tag">${job.category}</span>
                        <span class="job-tag">${job.location}</span>
                    </div>
                    <p class="job-description-excerpt">${job.description}</p>
                </div>
                <div class="job-footer">
                    <div class="job-salary-info">
                        <span class="salary-label">Stipend / CTC</span>
                        <span class="salary-value">${job.salary}</span>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-secondary btn-sm" onclick="app.openJobModal('${job.id}')">Details</button>
                        ${hasApplied 
                            ? `<button class="btn btn-success btn-sm" disabled>Applied ✓</button>`
                            : `<button class="btn btn-primary btn-sm" onclick="app.quickApply('${job.id}')">Apply Now</button>`
                        }
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    filterJobs() {
        const searchVal = document.getElementById('job-search-input').value.toLowerCase();
        const typeVal = document.getElementById('filter-type').value;
        const categoryVal = document.getElementById('filter-category').value;
        const locationVal = document.getElementById('filter-location').value;

        const grid = document.getElementById('jobs-listings-grid');
        grid.innerHTML = '';

        const filtered = this.state.jobs.filter(j => {
            if (!j.verified) return false;

            const matchesSearch = j.title.toLowerCase().includes(searchVal) ||
                                  j.companyName.toLowerCase().includes(searchVal) ||
                                  j.skills.some(s => s.toLowerCase().includes(searchVal));
            const matchesType = !typeVal || j.type === typeVal;
            const matchesCategory = !categoryVal || j.category === categoryVal;
            const matchesLocation = !locationVal || j.location.includes(locationVal);

            return matchesSearch && matchesType && matchesCategory && matchesLocation;
        });

        if (filtered.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No matching opportunities found.</div>';
            return;
        }

        filtered.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            
            const hasApplied = this.currentUser && this.state.applications.some(app => app.jobId === job.id && app.studentId === this.currentUser.refId);

            card.innerHTML = `
                <div>
                    <div class="job-card-header">
                        <div class="company-logo">${job.logo || '🏢'}</div>
                        <div class="company-details-name">
                            <span class="job-title">${job.title}</span>
                            <span class="company-name">${job.companyName}</span>
                        </div>
                    </div>
                    <div class="job-tags">
                        <span class="job-tag featured">${job.type}</span>
                        <span class="job-tag">${job.category}</span>
                        <span class="job-tag">${job.location}</span>
                    </div>
                    <p class="job-description-excerpt">${job.description}</p>
                </div>
                <div class="job-footer">
                    <div class="job-salary-info">
                        <span class="salary-label">Stipend / CTC</span>
                        <span class="salary-value">${job.salary}</span>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-secondary btn-sm" onclick="app.openJobModal('${job.id}')">Details</button>
                        ${hasApplied 
                            ? `<button class="btn btn-success btn-sm" disabled>Applied ✓</button>`
                            : `<button class="btn btn-primary btn-sm" onclick="app.quickApply('${job.id}')">Apply Now</button>`
                        }
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    resetFilters() {
        document.getElementById('filter-type').value = '';
        document.getElementById('filter-category').value = '';
        document.getElementById('filter-location').value = '';
        document.getElementById('job-search-input').value = '';
        this.renderJobs();
    }

    openJobModal(jobId) {
        const job = this.state.jobs.find(j => j.id === jobId);
        if (!job) return;

        const body = document.getElementById('modal-content-body');
        const hasApplied = this.currentUser && this.state.applications.some(app => app.jobId === job.id && app.studentId === this.currentUser.refId);

        body.innerHTML = `
            <div class="job-card-header" style="margin-bottom: 24px;">
                <div class="company-logo" style="width:60px; height:60px; font-size: 2rem;">${job.logo || '🏢'}</div>
                <div class="company-details-name">
                    <h2 style="font-size: 1.4rem;">${job.title}</h2>
                    <span class="company-name" style="font-size:1rem;">${job.companyName}</span>
                </div>
            </div>
            
            <div class="job-tags" style="margin-bottom: 24px;">
                <span class="job-tag featured">${job.type}</span>
                <span class="job-tag">${job.category}</span>
                <span class="job-tag">${job.location}</span>
                <span class="job-tag" style="background:var(--primary-glow); color:var(--text-primary); border-color:var(--primary);">${job.salary}</span>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 8px;">Role Requirements & Skills</h4>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom: 16px;">
                    ${job.skills.map(s => `<span class="job-tag" style="border-color:var(--primary-glow);">${s}</span>`).join('')}
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <h4 style="margin-bottom: 8px;">Job Description</h4>
                <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.7;">${job.description}</p>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:12px; border-top:1px solid var(--border-color); padding-top:20px;">
                <button class="btn btn-secondary" onclick="app.closeJobModal()">Cancel</button>
                ${hasApplied 
                    ? `<button class="btn btn-success" disabled>Applied (Ref CS-${job.id})</button>`
                    : `<button class="btn btn-primary" onclick="app.applyToJob('${job.id}')">Submit Application</button>`
                }
            </div>
        `;

        document.getElementById('job-detail-modal').classList.add('active');
    }

    closeJobModal() {
        document.getElementById('job-detail-modal').classList.remove('active');
    }

    quickApply(jobId) {
        this.applyToJob(jobId);
    }

    applyToJob(jobId) {
        if (!this.currentUser) {
            this.showToast('Please log in as a student to apply.', 'danger');
            document.getElementById('auth-screen').style.display = 'flex';
            return;
        }

        const student = this.state.students.find(s => s.id === this.currentUser.refId);
        
        // Check resume uploaded / builder filled
        if (!student || !student.resumeUploaded) {
            this.showToast('Complete and Compile your Resume Wizard in the Student Portal first!', 'danger');
            this.navigateTo('student-dashboard');
            this.closeJobModal();
            return;
        }

        const job = this.state.jobs.find(j => j.id === jobId);
        if (!job) return;

        const alreadyApplied = this.state.applications.some(app => app.jobId === jobId && app.studentId === this.currentUser.refId);
        if (alreadyApplied) {
            this.showToast('Already applied to this job!', 'warning');
            return;
        }

        const newApp = {
            id: 'app_' + Math.random().toString(36).substr(2, 9),
            jobId: job.id,
            jobTitle: job.title,
            companyName: job.companyName,
            studentId: student.id,
            studentName: student.name,
            studentCgpa: student.cgpa,
            studentSkills: student.resumeDetails.skills.split(',').map(s => s.trim()),
            appliedDate: new Date().toISOString().split('T')[0],
            status: 'Applied'
        };

        const currentApps = this.state.applications;
        currentApps.push(newApp);
        this.state.updateState('applications', currentApps);

        this.showToast(`Application successfully filed at ${job.companyName}!`, 'success');
        this.addNotification(`Your application to ${job.companyName} was received!`, 'student');
        this.closeJobModal();
        this.renderJobs();
        this.renderStudentDashboard();
    }

    // -------------------------------------------------------------
    // STUDENT PORTAL: RESUME BUILDER & SKILL ASSESSMENTS
    // -------------------------------------------------------------
    renderStudentDashboard() {
        if (!this.currentUser) return;
        const student = this.state.students.find(s => s.id === this.currentUser.refId);
        if (!student) return;

        // Render Wizard inputs if saved resume details exist
        if (student.resumeDetails) {
            document.getElementById('wiz-email').value = student.resumeDetails.email || '';
            document.getElementById('wiz-phone').value = student.resumeDetails.phone || '';
            document.getElementById('wiz-github').value = student.resumeDetails.github || '';
            document.getElementById('wiz-college').value = student.resumeDetails.college || '';
            document.getElementById('wiz-degree').value = student.resumeDetails.degree || '';
            document.getElementById('wiz-grad-year').value = student.resumeDetails.gradYear || '';
            document.getElementById('wiz-company').value = student.resumeDetails.company || '';
            document.getElementById('wiz-role').value = student.resumeDetails.role || '';
            document.getElementById('wiz-duration').value = student.resumeDetails.duration || '';
            document.getElementById('wiz-exp-desc').value = student.resumeDetails.expDesc || '';
            document.getElementById('wiz-proj-title').value = student.resumeDetails.projTitle || '';
            document.getElementById('wiz-proj-desc').value = student.resumeDetails.projDesc || '';
            document.getElementById('wiz-skills').value = student.resumeDetails.skills || '';
        }

        // Calculate progress gauge
        this.updateProfileStrength(student);

        // Populate verified badges
        const badgeHolder = document.getElementById('badges-list-holder');
        badgeHolder.innerHTML = '';
        if (student.badges.length === 0) {
            badgeHolder.innerHTML = '<span style="font-size:0.8rem; color:var(--text-muted);">None earned yet. Complete a test above.</span>';
        } else {
            student.badges.forEach(b => {
                badgeHolder.innerHTML += `<span class="badge badge-success" style="font-size:0.8rem;">✓ ${b}</span>`;
            });
        }

        // Applied jobs table
        const table = document.getElementById('student-applications-table');
        table.innerHTML = '';
        const studentApps = this.state.applications.filter(app => app.studentId === student.id);

        if (studentApps.length === 0) {
            table.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No applications filed yet.</td></tr>';
        } else {
            studentApps.forEach(app => {
                const tr = document.createElement('tr');
                let badgeClass = 'badge-info';
                if (app.status === 'Shortlisted' || app.status === 'Interviewing') badgeClass = 'badge-warning';
                if (app.status === 'Selected') badgeClass = 'badge-success';
                if (app.status === 'Rejected') badgeClass = 'badge-danger';

                tr.innerHTML = `
                    <td style="font-weight: 600;">${app.companyName}</td>
                    <td>${app.jobTitle}</td>
                    <td>${app.appliedDate}</td>
                    <td><span class="badge ${badgeClass}">${app.status}</span></td>
                    <td><button class="btn btn-secondary btn-sm" onclick="app.trackTimeline('${app.id}')">Track</button></td>
                `;
                table.appendChild(tr);
            });
        }

        // Announcements
        this.renderAnnouncementsList();

        // Interviews calendar
        this.renderStudentInterviews();
    }

    updateProfileStrength(student) {
        let stepsCompleted = 0;
        
        // Simple heuristic: check inputs
        if (document.getElementById('wiz-email').value) stepsCompleted += 1;
        if (document.getElementById('wiz-college').value) stepsCompleted += 1;
        if (document.getElementById('wiz-proj-title').value) stepsCompleted += 1;
        if (student.badges && student.badges.length > 0) stepsCompleted += 1;

        const percent = Math.min(25 + (stepsCompleted * 25), 100);
        const offset = 201 - (201 * percent) / 100;
        document.getElementById('profile-gauge-bar').style.strokeDashoffset = offset;
        document.getElementById('profile-percent-text').innerText = `${percent}%`;

        const hint = document.getElementById('profile-completion-status');
        if (percent === 100) {
            hint.innerText = 'Excellent! Your verified profile is live.';
        } else {
            hint.innerText = 'Complete resume steps and pass skill tests to score 100%.';
        }
    }

    setWizardStep(step) {
        this.wizardStep = step;
        document.querySelectorAll('.wizard-tab-step').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`wiz-step-btn-${step}`).classList.add('active');

        document.querySelectorAll('.wizard-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(`wiz-panel-${step}`).classList.add('active');
    }

    compileResume() {
        if (!this.currentUser) return;
        
        // Save form parameters to local state
        const details = {
            email: document.getElementById('wiz-email').value,
            phone: document.getElementById('wiz-phone').value,
            github: document.getElementById('wiz-github').value,
            college: document.getElementById('wiz-college').value,
            degree: document.getElementById('wiz-degree').value,
            gradYear: document.getElementById('wiz-grad-year').value,
            company: document.getElementById('wiz-company').value || 'None',
            role: document.getElementById('wiz-role').value || 'None',
            duration: document.getElementById('wiz-duration').value || 'None',
            expDesc: document.getElementById('wiz-exp-desc').value || 'None',
            projTitle: document.getElementById('wiz-proj-title').value,
            projDesc: document.getElementById('wiz-proj-desc').value,
            skills: document.getElementById('wiz-skills').value
        };

        // Form Validation Check
        if (!details.email || !details.phone || !details.college || !details.projTitle || !details.skills) {
            this.showToast('Please fill all mandatory fields across wizard tabs!', 'danger');
            return;
        }

        // Update student profile details
        const students = this.state.students.map(s => {
            if (s.id === this.currentUser.refId) {
                s.resumeUploaded = true;
                s.resumeDetails = details;
            }
            return s;
        });
        this.state.updateState('students', students);

        // Compile HTML resume sheet preview
        const sheet = document.getElementById('resume-sheet-body');
        sheet.innerHTML = `
            <div class="resume-header-preview">
                <div class="resume-name-preview">${this.currentUser.name}</div>
                <div class="resume-contact-preview">${details.email} | ${details.phone} | ${details.github}</div>
            </div>

            <div class="resume-section-preview">
                <div class="resume-section-title">Education</div>
                <div class="resume-grid-preview">
                    <div class="resume-item-preview">
                        <span class="resume-item-title">${details.college}</span>
                        <span class="resume-item-subtitle">${details.degree} (Graduation: ${details.gradYear})</span>
                    </div>
                </div>
            </div>

            ${details.company !== 'None' ? `
            <div class="resume-section-preview">
                <div class="resume-section-title">Professional Experience</div>
                <div class="resume-grid-preview">
                    <div class="resume-item-preview">
                        <span class="resume-item-title">${details.company}</span>
                        <span class="resume-item-subtitle">${details.role} | ${details.duration}</span>
                    </div>
                    <p class="resume-item-desc">${details.expDesc}</p>
                </div>
            </div>
            ` : ''}

            <div class="resume-section-preview">
                <div class="resume-section-title">Academic Projects</div>
                <div class="resume-grid-preview">
                    <div class="resume-item-preview">
                        <span class="resume-item-title">${details.projTitle}</span>
                    </div>
                    <p class="resume-item-desc">${details.projDesc}</p>
                </div>
            </div>

            <div class="resume-section-preview">
                <div class="resume-section-title">Technical Skills</div>
                <p style="font-size:0.82rem; color:#334155;">${details.skills}</p>
            </div>
        `;

        document.getElementById('resume-preview-modal').classList.add('active');
        this.showToast('Resume compiled successfully!', 'success');
        this.renderStudentDashboard();
    }

    closeResumeModal() {
        document.getElementById('resume-preview-modal').classList.remove('active');
    }

    // -------------------------------------------------------------
    // ASSESSMENT VERIFICATION CONTROLLER (MCQ Test Runner)
    // -------------------------------------------------------------
    startAssessment() {
        this.activeAssessment = document.getElementById('assessment-select').value;
        this.assessmentScore = 0;
        this.currentQuestionIdx = 0;
        this.selectedOptionIdx = null;

        document.getElementById('assessment-selection-view').style.display = 'none';
        document.getElementById('assessment-question-view').style.display = 'block';

        this.renderAssessmentQuestion();
        this.showToast('Verification assessment started! 15s per question.', 'info');
    }

    renderAssessmentQuestion() {
        const questions = this.assessmentsDb[this.activeAssessment];
        if (this.currentQuestionIdx >= questions.length) {
            this.endAssessment();
            return;
        }

        const q = questions[this.currentQuestionIdx];
        document.getElementById('assessment-question-counter').innerText = `Question ${this.currentQuestionIdx + 1} of ${questions.length}`;
        document.getElementById('assessment-question-text').innerText = q.q;

        const optionsHolder = document.getElementById('assessment-options-list');
        optionsHolder.innerHTML = '';
        this.selectedOptionIdx = null;

        q.o.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt;
            btn.onclick = () => {
                document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.selectedOptionIdx = idx;
            };
            optionsHolder.appendChild(btn);
        });

        // Question Timer
        let timeRemaining = 15;
        const timerText = document.getElementById('assessment-timer-text');
        const fill = document.getElementById('timer-bar-fill');
        
        timerText.innerText = `Time remaining: ${timeRemaining}s`;
        fill.style.width = '100%';

        clearInterval(this.assessmentTimer);
        this.assessmentTimer = setInterval(() => {
            timeRemaining -= 1;
            timerText.innerText = `Time remaining: ${timeRemaining}s`;
            fill.style.width = `${(timeRemaining / 15) * 100}%`;

            if (timeRemaining <= 0) {
                clearInterval(this.assessmentTimer);
                this.submitMCQAnswer(); // auto submit
            }
        }, 1000);
    }

    submitMCQAnswer() {
        clearInterval(this.assessmentTimer);
        const questions = this.assessmentsDb[this.activeAssessment];
        const q = questions[this.currentQuestionIdx];

        if (this.selectedOptionIdx === q.a) {
            this.assessmentScore += 1;
        }

        this.currentQuestionIdx += 1;
        this.renderAssessmentQuestion();
    }

    endAssessment() {
        clearInterval(this.assessmentTimer);
        const questions = this.assessmentsDb[this.activeAssessment];
        const percent = (this.assessmentScore / questions.length) * 100;
        
        document.getElementById('assessment-selection-view').style.display = 'block';
        document.getElementById('assessment-question-view').style.display = 'none';

        if (this.assessmentScore >= 3) { // 60% Passing mark
            let badgeName = 'JS Verified';
            if (this.activeAssessment === 'python') badgeName = 'Python Verified';
            if (this.activeAssessment === 'dsa') badgeName = 'DSA Verified';

            const student = this.state.students.find(s => s.id === this.currentUser.refId);
            if (student && !student.badges.includes(badgeName)) {
                student.badges.push(badgeName);
                const studentsList = this.state.students;
                this.state.updateState('students', studentsList);
            }
            this.showToast(`Passed! Earned verification badge: ${badgeName}`, 'success');
            this.addNotification(`Congratulations! You passed the assessment and earned the ${badgeName} badge.`, 'student');
        } else {
            this.showToast(`Test finished. Scored ${percent}% (${this.assessmentScore}/${questions.length}). You need 60% to pass.`, 'danger');
        }

        this.renderStudentDashboard();
    }

    renderAnnouncementsList() {
        const list = document.getElementById('student-announcements-list');
        list.innerHTML = '';
        [...this.state.announcements].reverse().forEach(ann => {
            list.innerHTML += `
                <div class="announcement-item">
                    <div class="announcement-title">${ann.title}</div>
                    <div class="announcement-body">${ann.body}</div>
                    <span class="announcement-time">${ann.timestamp}</span>
                </div>
            `;
        });
    }

    renderStudentInterviews() {
        const list = document.getElementById('student-interviews-list');
        list.innerHTML = '';
        const relevant = this.state.interviews.filter(i => i.studentId === this.currentUser.refId);

        if (relevant.length === 0) {
            list.innerHTML = '<div style="font-size:0.75rem; text-align:center; color:var(--text-secondary); padding: 12px 0;">No interviews scheduled.</div>';
            return;
        }

        relevant.forEach(i => {
            list.innerHTML += `
                <div class="announcement-item" style="border-left-color:var(--warning);">
                    <div class="announcement-title" style="color:var(--warning);">${i.companyName} - Interview Call</div>
                    <div class="announcement-body">
                        <strong>Role:</strong> ${i.jobTitle}<br>
                        <strong>Time:</strong> ${i.date} at ${i.time}<br>
                        <strong>Link:</strong> <a href="#" style="color:var(--secondary); text-decoration:underline;">${i.link}</a>
                    </div>
                </div>
            `;
        });
    }

    trackTimeline(appId) {
        const app = this.state.applications.find(a => a.id === appId);
        if (!app) return;

        const container = document.getElementById('timeline-progress-container');
        const stages = [
            { key: 'Applied', title: 'Application Submitted', desc: 'Your profile has been delivered to recruiters.' },
            { key: 'Shortlisted', title: 'Profile Shortlisted', desc: 'The recruiter has reviewed your statistics and shortlisted you.' },
            { key: 'Interviewing', title: 'Technical Interviews', desc: 'Assessments and interviews scheduled.' },
            { key: 'Selected', title: 'Selected & Offered', desc: 'Congratulations! An offer has been extended.' }
        ];

        let currentIdx = -1;
        if (app.status === 'Applied') currentIdx = 0;
        if (app.status === 'Shortlisted') currentIdx = 1;
        if (app.status === 'Interviewing') currentIdx = 2;
        if (app.status === 'Selected') currentIdx = 3;

        container.innerHTML = '';
        stages.forEach((stage, idx) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            
            if (idx < currentIdx) {
                item.classList.add('completed');
            } else if (idx === currentIdx) {
                item.classList.add('active');
            }

            let title = stage.title;
            let desc = stage.desc;

            if (app.status === 'Rejected' && idx === currentIdx + 1) {
                title = 'Application Rejected';
                desc = 'The company declined to proceed further.';
                item.className = 'timeline-item active';
            }

            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h4 class="timeline-title">${title}</h4>
                    <span class="timeline-time">${app.appliedDate}</span>
                    <p class="timeline-desc">${desc}</p>
                </div>
            `;
            container.appendChild(item);
        });

        if (app.status === 'Rejected') {
            container.querySelectorAll('.timeline-item.active .timeline-dot').forEach(dot => {
                dot.style.backgroundColor = 'var(--danger)';
                dot.style.borderColor = 'var(--danger)';
            });
        }

        document.getElementById('timeline-modal').classList.add('active');
    }

    closeTimelineModal() {
        document.getElementById('timeline-modal').classList.remove('active');
    }

    // -------------------------------------------------------------
    // RECRUITER PORTAL CONTROLLER (Search, Filters, Job posts)
    // -------------------------------------------------------------
    renderRecruiterDashboard() {
        if (!this.currentUser) return;

        // Render jobs posted by this company
        const table = document.getElementById('recruiter-jobs-table');
        table.innerHTML = '';

        const companyJobs = this.state.jobs.filter(j => j.companyName === this.currentUser.company);

        if (companyJobs.length === 0) {
            table.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No job listings posted yet.</td></tr>';
        } else {
            companyJobs.forEach(job => {
                const tr = document.createElement('tr');
                const appsCount = this.state.applications.filter(a => a.jobId === job.id).length;
                
                tr.innerHTML = `
                    <td style="font-weight: 600;">
                        ${job.title}
                        ${!job.verified ? '<br><span class="badge badge-warning" style="font-size:0.65rem; padding:2px 6px;">Pending verification</span>' : ''}
                    </td>
                    <td>${job.category}</td>
                    <td><span class="badge badge-info">${job.type}</span></td>
                    <td style="font-weight: 700; text-align: center;">${appsCount}</td>
                    <td>
                        <button class="btn btn-secondary btn-sm" onclick="app.removeJob('${job.id}')">Delete</button>
                    </td>
                `;
                table.appendChild(tr);
            });
        }

        // Render applicants list
        this.renderRecruiterApplicants();
    }

    renderRecruiterApplicants() {
        const table = document.getElementById('recruiter-applicants-table');
        table.innerHTML = '';

        const companyJobIds = this.state.jobs
            .filter(j => j.companyName === this.currentUser.company)
            .map(j => j.id);

        const companyApps = this.state.applications.filter(app => companyJobIds.includes(app.jobId));

        if (companyApps.length === 0) {
            table.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-secondary);">No application candidates registered yet.</td></tr>';
            return;
        }

        companyApps.forEach(app => {
            const tr = document.createElement('tr');
            
            let statusBadge = 'badge-info';
            if (app.status === 'Shortlisted') statusBadge = 'badge-warning';
            if (app.status === 'Interviewing') statusBadge = 'badge-warning';
            if (app.status === 'Selected') statusBadge = 'badge-success';
            if (app.status === 'Rejected') statusBadge = 'badge-danger';

            // Find student for badge renders
            const student = this.state.students.find(s => s.id === app.studentId);
            const badgesText = student && student.badges.length > 0 
                ? student.badges.map(b => `<span class="badge badge-success" style="font-size:0.65rem; padding:2px 6px;">${b}</span>`).join(' ')
                : '<span style="font-size:0.75rem; color:var(--text-muted);">None</span>';

            tr.innerHTML = `
                <td style="font-weight:600;">
                    ${app.studentName}
                    <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">
                        <a href="#" style="color:var(--secondary); text-decoration:underline;" onclick="app.openCandidateResume('${app.studentId}')">📄 View Profile</a>
                    </div>
                </td>
                <td>${app.jobTitle}</td>
                <td>${student ? student.stream : ''}<br>GPA: <strong style="color:var(--success);">${app.studentCgpa}</strong></td>
                <td>${badgesText}</td>
                <td>${app.appliedDate}</td>
                <td><span class="badge ${statusBadge}">${app.status}</span></td>
                <td>
                    <div style="display:flex; gap:6px;">
                        ${app.status === 'Applied' 
                            ? `<button class="btn btn-primary btn-sm" onclick="app.updateAppStatus('${app.id}', 'Shortlisted')">Shortlist</button>`
                            : ''
                        }
                        ${app.status === 'Shortlisted' 
                            ? `<button class="btn btn-warning btn-sm" onclick="app.openScheduleModal('${app.id}')">Schedule</button>`
                            : ''
                        }
                        ${app.status === 'Interviewing' 
                            ? `<button class="btn btn-success btn-sm" onclick="app.updateAppStatus('${app.id}', 'Selected')">Offer</button>`
                            : ''
                        }
                        ${app.status !== 'Selected' && app.status !== 'Rejected'
                            ? `<button class="btn btn-danger btn-sm" onclick="app.updateAppStatus('${app.id}', 'Rejected')">Reject</button>`
                            : '-'
                        }
                    </div>
                </td>
            `;
            table.appendChild(tr);
        });
    }

    openCandidateResume(studentId) {
        const student = this.state.students.find(s => s.id === studentId);
        if (!student || !student.resumeDetails) {
            this.showToast('Candidate profile details missing.', 'warning');
            return;
        }

        const details = student.resumeDetails;
        const sheet = document.getElementById('resume-sheet-body');
        sheet.innerHTML = `
            <div class="resume-header-preview">
                <div class="resume-name-preview">${student.name}</div>
                <div class="resume-contact-preview">${details.email} | ${details.phone} | ${details.github}</div>
            </div>

            <div class="resume-section-preview">
                <div class="resume-section-title">Education</div>
                <div class="resume-grid-preview">
                    <div class="resume-item-preview">
                        <span class="resume-item-title">${details.college}</span>
                        <span class="resume-item-subtitle">${details.degree} (Graduation: ${details.gradYear})</span>
                    </div>
                </div>
            </div>

            ${details.company !== 'None' ? `
            <div class="resume-section-preview">
                <div class="resume-section-title">Professional Experience</div>
                <div class="resume-grid-preview">
                    <div class="resume-item-preview">
                        <span class="resume-item-title">${details.company}</span>
                        <span class="resume-item-subtitle">${details.role} | ${details.duration}</span>
                    </div>
                    <p class="resume-item-desc">${details.expDesc}</p>
                </div>
            </div>
            ` : ''}

            <div class="resume-section-preview">
                <div class="resume-section-title">Academic Projects</div>
                <div class="resume-grid-preview">
                    <div class="resume-item-preview">
                        <span class="resume-item-title">${details.projTitle}</span>
                    </div>
                    <p class="resume-item-desc">${details.projDesc}</p>
                </div>
            </div>

            <div class="resume-section-preview">
                <div class="resume-section-title">Technical Skills</div>
                <p style="font-size:0.82rem; color:#334155;">${details.skills}</p>
            </div>
        `;
        document.getElementById('resume-preview-modal').classList.add('active');
    }

    filterStudents() {
        const nameVal = document.getElementById('rec-search-name').value.toLowerCase();
        const branchVal = document.getElementById('rec-filter-branch').value;
        const cgpaVal = parseFloat(document.getElementById('rec-filter-cgpa').value) || 0;
        const badgeVal = document.getElementById('rec-filter-badge').value;

        // Perform candidate search in Recruiter verification actions table
        this.renderRecruiterApplicants();

        // Also visual feedbacks
        this.showToast('Filtering candidate talent database...', 'info');
    }

    handlePostJob(event) {
        event.preventDefault();
        const title = document.getElementById('job-post-title').value;
        const type = document.getElementById('job-post-type').value;
        const category = document.getElementById('job-post-category').value;
        const salary = document.getElementById('job-post-salary').value;
        const location = document.getElementById('job-post-location').value;
        const skills = document.getElementById('job-post-skills').value.split(',').map(s => s.trim());
        const desc = document.getElementById('job-post-desc').value;

        const newJob = {
            id: 'job_' + Math.random().toString(36).substr(2, 9),
            companyId: 'c_custom',
            companyName: this.currentUser.company,
            logo: '🏢',
            title,
            type,
            category,
            salary,
            location,
            skills,
            description: desc,
            verified: false // Awaiting TPO cell verification
        };

        const list = this.state.jobs;
        list.push(newJob);
        this.state.updateState('jobs', list);

        this.showToast('Vacancy post sent for TPO Cell verification!', 'warning');
        this.addNotification(`Company ${this.currentUser.company} requested approval for: ${title}`, 'admin');
        document.getElementById('post-job-form').reset();
        this.renderRecruiterDashboard();
    }

    removeJob(jobId) {
        const list = this.state.jobs.filter(j => j.id !== jobId);
        this.state.updateState('jobs', list);

        const apps = this.state.applications.filter(a => a.jobId !== jobId);
        this.state.updateState('applications', apps);

        this.showToast('Opening deleted.', 'info');
        this.renderRecruiterDashboard();
    }

    updateAppStatus(appId, status) {
        const list = this.state.applications.map(a => {
            if (a.id === appId) {
                a.status = status;
                
                // Alert student
                this.addNotification(`Your application to ${a.companyName} is now: ${status.toUpperCase()}`, 'student');
            }
            return a;
        });
        this.state.updateState('applications', list);
        this.showToast(`Application updated: ${status}`, 'success');

        if (status === 'Selected') {
            const app = this.state.applications.find(a => a.id === appId);
            if (app) {
                const students = this.state.students.map(s => {
                    if (s.id === app.studentId) s.placed = true;
                    return s;
                });
                this.state.updateState('students', students);
            }
        }

        this.renderRecruiterDashboard();
    }

    openScheduleModal(appId) {
        document.getElementById('schedule-app-id').value = appId;
        document.getElementById('schedule-interview-modal').classList.add('active');
    }

    closeScheduleModal() {
        document.getElementById('schedule-interview-modal').classList.remove('active');
    }

    handleScheduleInterview(event) {
        event.preventDefault();
        const appId = document.getElementById('schedule-app-id').value;
        const date = document.getElementById('interview-date').value;
        const time = document.getElementById('interview-time').value;
        const link = document.getElementById('interview-link').value;

        const app = this.state.applications.find(a => a.id === appId);
        if (!app) return;

        const newInt = {
            id: 'int_' + Math.random().toString(36).substr(2, 9),
            applicationId: appId,
            studentId: app.studentId,
            studentName: app.studentName,
            companyName: app.companyName,
            jobTitle: app.jobTitle,
            date,
            time,
            link
        };

        const list = this.state.interviews;
        list.push(newInt);
        this.state.updateState('interviews', list);

        this.updateAppStatus(appId, 'Interviewing');
        this.showToast('Interview session scheduled!', 'success');
        document.getElementById('schedule-interview-form').reset();
        this.closeScheduleModal();
        this.renderRecruiterDashboard();
    }

    // -------------------------------------------------------------
    // TPO CELL ADMIN CONTROLLER & DYNAMIC SVG CHARTING ENGINE
    // -------------------------------------------------------------
    renderAdminDashboard() {
        this.renderStats();
        
        // Render verification requests drive
        const table = document.getElementById('admin-verification-table');
        table.innerHTML = '';

        const pendingJobs = this.state.jobs.filter(j => !j.verified);
        const pendingCompanies = this.state.companies.filter(c => !c.verified);

        if (pendingJobs.length === 0 && pendingCompanies.length === 0) {
            table.innerHTML = '<tr><td colspan="4" style="text-align: center; color: var(--text-secondary);">No pending approvals. drive is synced.</td></tr>';
        } else {
            pendingCompanies.forEach(c => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="font-weight: 600;">${c.logo} ${c.name} <span class="badge badge-warning" style="font-size:0.6rem;">Signup Request</span></td>
                    <td>recruitment@${c.name.toLowerCase()}.com</td>
                    <td>Sector: ${c.sector}</td>
                    <td>
                        <div style="display:flex; gap:6px;">
                            <button class="btn btn-success btn-sm" onclick="app.approveCompany('${c.id}')">Approve</button>
                            <button class="btn btn-danger btn-sm" onclick="app.declineCompany('${c.id}')">Decline</button>
                        </div>
                    </td>
                `;
                table.appendChild(tr);
            });

            pendingJobs.forEach(j => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="font-weight: 600;">
                        ${j.companyName}
                        <div style="font-size:0.75rem; color:var(--text-secondary); font-weight:normal; margin-top:2px;">Job: ${j.title}</div>
                    </td>
                    <td>HR Team</td>
                    <td>Package: ${j.salary}</td>
                    <td>
                        <div style="display:flex; gap:6px;">
                            <button class="btn btn-success btn-sm" onclick="app.approveJob('${j.id}')">Approve</button>
                            <button class="btn btn-danger btn-sm" onclick="app.declineJob('${j.id}')">Decline</button>
                        </div>
                    </td>
                `;
                table.appendChild(tr);
            });
        }

        // Render Student registries
        const studentTable = document.getElementById('admin-students-table');
        studentTable.innerHTML = '';

        this.state.students.forEach(student => {
            const tr = document.createElement('tr');
            
            const badgesText = student.badges.length > 0 
                ? student.badges.map(b => `<span class="badge badge-success" style="font-size:0.65rem; padding:2px 6px;">${b}</span>`).join(' ')
                : '<span style="font-size:0.75rem; color:var(--text-muted);">None</span>';

            const statusBadge = student.placed 
                ? `<span class="badge badge-success">Placed</span>`
                : `<span class="badge badge-info">Seeking</span>`;

            const appsCount = this.state.applications.filter(a => a.studentId === student.id).length;

            tr.innerHTML = `
                <td style="font-weight: 600;">${student.name}</td>
                <td>${student.stream}</td>
                <td style="font-weight:700;">${student.cgpa}</td>
                <td>${badgesText}</td>
                <td style="text-align:center; font-weight:700;">${appsCount}</td>
                <td>${statusBadge}</td>
            `;
            studentTable.appendChild(tr);
        });

        // Draw dynamic SVG charts
        this.renderAdminCharts();
    }

    approveCompany(companyId) {
        const list = this.state.companies.map(c => {
            if (c.id === companyId) c.verified = true;
            return c;
        });
        this.state.updateState('companies', list);
        this.showToast('Recruiter profile verified!', 'success');
        this.renderAdminDashboard();
    }

    declineCompany(companyId) {
        const list = this.state.companies.filter(c => c.id !== companyId);
        this.state.updateState('companies', list);
        this.showToast('Company registration declined.', 'info');
        this.renderAdminDashboard();
    }

    approveJob(jobId) {
        const list = this.state.jobs.map(j => {
            if (j.id === jobId) {
                j.verified = true;
                this.addNotification(`New verified vacancy posted: ${j.title} at ${j.companyName}!`, 'student');
            }
            return j;
        });
        this.state.updateState('jobs', list);
        this.showToast('Vacancy approved and live on explore board!', 'success');
        this.renderAdminDashboard();
    }

    declineJob(jobId) {
        const list = this.state.jobs.filter(j => j.id !== jobId);
        this.state.updateState('jobs', list);
        this.showToast('Job posting request declined.', 'info');
        this.renderAdminDashboard();
    }

    handlePostAnnouncement(event) {
        event.preventDefault();
        const title = document.getElementById('announcement-title-input').value;
        const body = document.getElementById('announcement-body-input').value;

        const newAnn = {
            id: 'ann_' + Math.random().toString(36).substr(2, 9),
            title,
            body,
            timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        const list = this.state.announcements;
        list.push(newAnn);
        this.state.updateState('announcements', list);

        this.showToast('Bulletin broadcasted campus-wide!', 'success');
        this.addNotification(`New Placement Bulletin: ${title}`, 'student');
        document.getElementById('admin-announcement-form').reset();
        this.renderAdminDashboard();
    }

    exportStudentCSV() {
        let csvContent = 'data:text/csv;charset=utf-8,';
        csvContent += 'Name,Stream,GPA,Verification Badges,Active Apps,Placement Status\n';

        this.state.students.forEach(s => {
            const badgesStr = s.badges.join(' | ') || 'None';
            const appsCount = this.state.applications.filter(a => a.studentId === s.id).length;
            const status = s.placed ? 'PLACED' : 'SEEKING';
            const row = `"${s.name}","${s.stream}",${s.cgpa},"${badgesStr}",${appsCount},"${status}"`;
            csvContent += row + '\n';
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'placement_cell_registry.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.showToast('CSV database exported successfully.', 'success');
    }

    // -------------------------------------------------------------
    // SVG CHARTING ENGINE
    // -------------------------------------------------------------
    renderAdminCharts() {
        // Colors matching theme
        const isLight = document.body.classList.contains('light-theme');
        const colorPrimary = '#6366f1';
        const colorSecondary = '#0ea5e9';
        const colorBorder = isLight ? '#cbd5e1' : '#334155';
        const colorText = isLight ? '#475569' : '#94a3b8';

        // 1. Placement Donut Chart
        const donutHolder = document.getElementById('donut-chart-holder');
        const placed = this.state.students.filter(s => s.placed).length;
        const total = this.state.students.length;
        const seeking = total - placed;
        const placedPct = total > 0 ? (placed / total) * 100 : 0;
        
        // Donut SVG
        donutHolder.innerHTML = `
            <svg class="chart-svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="60" fill="none" stroke="${colorBorder}" stroke-width="12" />
                <circle class="donut-slice" cx="100" cy="100" r="60" fill="none" stroke="${colorPrimary}" stroke-width="12" 
                        stroke-dasharray="377" stroke-dashoffset="${377 - (377 * placedPct) / 100}" />
                <text class="donut-center-text" x="100" y="95" fill="var(--text-primary)">${Math.round(placedPct)}%</text>
                <text x="100" y="120" font-size="10" font-weight="600" fill="${colorText}" text-anchor="middle">Placements Rate</text>
                <text x="100" y="175" font-size="9" fill="${colorText}" text-anchor="middle">Placed: ${placed} | Seeking: ${seeking}</text>
            </svg>
        `;

        // 2. Bar Chart: Average packages (LPA) by companies
        const barHolder = document.getElementById('bar-chart-holder');
        // Seed values
        const chartData = [
            { name: 'Google', ctc: 24.5 },
            { name: 'Microsoft', ctc: 18.0 },
            { name: 'TCS', ctc: 7.2 },
            { name: 'Razorpay', ctc: 12.0 }
        ];

        let barsHTML = '';
        chartData.forEach((d, idx) => {
            const barWidth = 30;
            const gap = 18;
            const x = 32 + idx * (barWidth + gap);
            const height = (d.ctc / 30) * 140; // Max CTC scaling
            const y = 160 - height;
            
            barsHTML += `
                <rect class="chart-bar" x="${x}" y="${y}" width="${barWidth}" height="${height}" rx="4" />
                <text class="chart-label-text" x="${x + 15}" y="${y - 8}" text-anchor="middle" font-weight="700">${d.ctc}L</text>
                <text class="chart-label-text" x="${x + 15}" y="176" text-anchor="middle">${d.name}</text>
            `;
        });

        barHolder.innerHTML = `
            <svg class="chart-svg" viewBox="0 0 240 200">
                <line class="chart-axis" x1="20" y1="160" x2="220" y2="160" />
                <line class="chart-axis" x1="20" y1="20" x2="20" y2="160" />
                ${barsHTML}
            </svg>
        `;

        // 3. Line Chart: Placement trend line
        const lineHolder = document.getElementById('line-chart-holder');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
        const values = [5, 12, 28, 45, 68]; // monthly placed seed data representation

        let points = '';
        let sparklineHTML = '';
        values.forEach((val, idx) => {
            const x = 30 + idx * 45;
            const y = 150 - (val / 80) * 120; // scale
            points += `${x},${y} `;
            
            sparklineHTML += `
                <circle class="chart-point" cx="${x}" cy="${y}" r="4" />
                <text class="chart-label-text" x="${x}" y="170" text-anchor="middle">${months[idx]}</text>
                <text class="chart-label-text" x="${x}" y="${y - 8}" text-anchor="middle" font-weight="700">${val}</text>
            `;
        });

        lineHolder.innerHTML = `
            <svg class="chart-svg" viewBox="0 0 240 200">
                <defs>
                    <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="${colorPrimary}" />
                        <stop offset="100%" stop-color="${colorPrimary}" stop-opacity="0" />
                    </linearGradient>
                </defs>
                <polyline class="chart-area-path" points="30,150 ${points} 210,150" />
                <polyline class="chart-line-path" points="${points}" stroke="${colorPrimary}" />
                ${sparklineHTML}
            </svg>
        `;
    }

    // -------------------------------------------------------------
    // UTILITY HELPER TOAST NOTIFICATIONS
    // -------------------------------------------------------------
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span class="toast-message">${message}</span>
            <button style="background:transparent; border:none; color:inherit; cursor:pointer; font-weight:700;" onclick="this.parentElement.remove()">×</button>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            if (toast && toast.parentElement) {
                toast.style.animation = 'fadeOut 0.3s forwards';
                setTimeout(() => toast.remove(), 300);
            }
        }, 3200);
    }
}

// Initialize on DOM ready
let app;
window.addEventListener('DOMContentLoaded', () => {
    app = new PortalController();
    app.init();
});
