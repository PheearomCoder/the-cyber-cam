// Course data with lessons and YouTube videos
const courseData = {
    'network-security': {
        title: {
            en: 'Network Security Fundamentals',
            km: 'មូលដ្ឋានសុវត្ថិភាពបណ្តាញ'
        },
        lessons: [
            {
                title: {
                    en: 'Introduction to Network Security',
                    km: 'ការណែនាំអំពីសុវត្ថិភាពបណ្តាញ'
                },
                description: {
                    en: 'Learn the basics of network security and why it matters in today\'s digital world.',
                    km: 'រៀនមូលដ្ឋានសុវត្ថិភាពបណ្តាញ និងហេតុអ្វីវាសំខាន់នៅក្នុងពិភពឌីជីថលសព្វថ្ងៃ។'
                },
                videoId: 'kBXQZMmiA4s'
            },
            {
                title: {
                    en: 'Firewalls and Network Protection',
                    km: 'ជញ្ជាំងភ្លើង និងការការពារបណ្តាញ'
                },
                description: {
                    en: 'Understanding how firewalls work and how to configure them for maximum protection.',
                    km: 'យល់ដឹងពីរបៀបដែលជញ្ជាំងភ្លើងដំណើរការ និងរបៀបកំណត់រចនាសម្ព័ន្ធវាសម្រាប់ការការពារអតិបរមា។'
                },
                videoId: 'kDEX1HXybrU'
            },
            {
                title: {
                    en: 'Intrusion Detection Systems',
                    km: 'ប្រព័ន្ធរកឃើញការលុកលុយ'
                },
                description: {
                    en: 'Learn about IDS and how to detect unauthorized access to your network.',
                    km: 'រៀនអំពី IDS និងរបៀបរកឃើញការចូលដំណើរការដោយគ្មានការអនុញ្ញាតទៅកាន់បណ្តាញរបស់អ្នក។'
                },
                videoId: 'df4Oly6v5Qs'
            },
            {
                title: {
                    en: 'Network Monitoring Tools',
                    km: 'ឧបករណ៍តាមដានបណ្តាញ'
                },
                description: {
                    en: 'Explore various tools for monitoring network traffic and identifying threats.',
                    km: 'ស្វែងយល់ឧបករណ៍ផ្សេងៗសម្រាប់តាមដានចរាចរណ៍បណ្តាញ និងកំណត់អត្តសញ្ញាណការគំរាមកំហែង។'
                },
                videoId: 'Hooft0ms-7U'
            },
            {
                title: {
                    en: 'VPN and Secure Communications',
                    km: 'VPN និងការទំនាក់ទំនងដែលមានសុវត្ថិភាព'
                },
                description: {
                    en: 'Understanding VPNs and how to establish secure communication channels.',
                    km: 'យល់ដឹងអំពី VPN និងរបៀបបង្កើតបណ្តាញទំនាក់ទំនងដែលមានសុវត្ថិភាព។'
                },
                videoId: 'R-JUOpCgTZc'
            },
            {
                title: {
                    en: 'Wireless Network Security',
                    km: 'សុវត្ថិភាពបណ្តាញឥតខ្សែ'
                },
                description: {
                    en: 'Securing wireless networks and understanding Wi-Fi security protocols.',
                    km: 'ធានាសុវត្ថិភាពបណ្តាញឥតខ្សែ និងយល់ដឹងអំពីពិធីការសុវត្ថិភាព Wi-Fi។'
                },
                videoId: 'hxSqVt1RuvI'
            },
            {
                title: {
                    en: 'Network Security Best Practices',
                    km: 'ការអនុវត្តល្អបំផុតសុវត្ថិភាពបណ្តាញ'
                },
                description: {
                    en: 'Learn industry best practices for maintaining network security.',
                    km: 'រៀនការអនុវត្តល្អបំផុតក្នុងឧស្សាហកម្មសម្រាប់រក្សាសុវត្ថិភាពបណ្តាញ។'
                },
                videoId: 'inWWhr5tnEA'
            },
            {
                title: {
                    en: 'Network Security Assessment',
                    km: 'ការវាយតម្លៃសុវត្ថិភាពបណ្តាញ'
                },
                description: {
                    en: 'How to conduct security assessments and vulnerability testing.',
                    km: 'របៀបធ្វើការវាយតម្លៃសុវត្ថិភាព និងការធ្វើតេស្តភាពងាយរងគ្រោះ។'
                },
                videoId: 'zBIyVajkMlE'
            }
        ]
    },
    'ethical-hacking': {
        title: {
            en: 'Ethical Hacking & Penetration Testing',
            km: 'ការហាក់ក្រមសីលធម៌ និងការធ្វើតេស្តជ្រាបចូល'
        },
        lessons: [
            {
                title: {
                    en: 'Introduction to Ethical Hacking',
                    km: 'ការណែនាំអំពីការហាក់ក្រមសីលធម៌'
                },
                description: {
                    en: 'Understanding the fundamentals of ethical hacking and its importance in cybersecurity.',
                    km: 'យល់ដឹងអំពីមូលដ្ឋានការហាក់ក្រមសីលធម៌ និងសារៈសំខាន់របស់វានៅក្នុងសុវត្ថិភាពអ៊ីនធឺណិត។'
                },
                videoId: '3Kq1MIfTWCE'
            },
            {
                title: {
                    en: 'Reconnaissance and Information Gathering',
                    km: 'ការស៊ើបការណ៍ និងការប្រមូលព័ត៌មាន'
                },
                description: {
                    en: 'Learn how to gather information about targets using various reconnaissance techniques.',
                    km: 'រៀនរបៀបប្រមូលព័ត៌មានអំពីគោលដៅដោយប្រើបច្ចេកទេសស៊ើបការណ៍ផ្សេងៗ។'
                },
                videoId: 'q7HcKqrOk-8'
            },
            {
                title: {
                    en: 'Vulnerability Scanning',
                    km: 'ការស្កេនភាពងាយរងគ្រោះ'
                },
                description: {
                    en: 'Using automated tools to identify vulnerabilities in systems and networks.',
                    km: 'ប្រើឧបករណ៍ស្វ័យប្រវត្តិដើម្បីកំណត់អត្តសញ្ញាណភាពងាយរងគ្រោះនៅក្នុងប្រព័ន្ធ និងបណ្តាញ។'
                },
                videoId: 'ol2Id_uJdmU'
            },
            {
                title: {
                    en: 'Web Application Testing',
                    km: 'ការធ្វើតេស្តកម្មវិធីបណ្តាញ'
                },
                description: {
                    en: 'Testing web applications for common vulnerabilities like SQL injection and XSS.',
                    km: 'ធ្វើតេស្តកម្មវិធីបណ្តាញសម្រាប់ភាពងាយរងគ្រោះទូទៅដូចជា SQL injection និង XSS។'
                },
                videoId: 'X4eRbHgRawI'
            },
            {
                title: {
                    en: 'Network Penetration Testing',
                    km: 'ការធ្វើតេស្តជ្រាបចូលបណ្តាញ'
                },
                description: {
                    en: 'Techniques for testing network security and identifying entry points.',
                    km: 'បច្ចេកទេសសម្រាប់ធ្វើតេស្តសុវត្ថិភាពបណ្តាញ និងកំណត់អត្តសញ្ញាណចំណុចចូល។'
                },
                videoId: 'WnN6dbos5u8'
            },
            {
                title: {
                    en: 'Social Engineering Attacks',
                    km: 'ការវាយប្រហារវិស្វកម្មសង្គម'
                },
                description: {
                    en: 'Understanding and testing human vulnerabilities through social engineering.',
                    km: 'យល់ដឹង និងធ្វើតេស្តភាពងាយរងគ្រោះរបស់មនុស្សតាមរយៈវិស្វកម្មសង្គម។'
                },
                videoId: 'lc7scxvKQOo'
            },
            {
                title: {
                    en: 'Post-Exploitation Techniques',
                    km: 'បច្ចេកទេសក្រោយការកេងប្រវ័ញ្ច'
                },
                description: {
                    en: 'What to do after gaining access to a system during penetration testing.',
                    km: 'អ្វីដែលត្រូវធ្វើបន្ទាប់ពីទទួលបានការចូលដំណើរការប្រព័ន្ធក្នុងអំឡុងពេលធ្វើតេស្តជ្រាបចូល។'
                },
                videoId: 'Fg2gvk0qgjM'
            },
            {
                title: {
                    en: 'Reporting and Documentation',
                    km: 'របាយការណ៍ និងឯកសារ'
                },
                description: {
                    en: 'How to document findings and create professional penetration testing reports.',
                    km: 'របៀបចងក្រងឯកសាររកឃើញ និងបង្កើតរបាយការណ៍ធ្វើតេស្តជ្រាបចូលប្រកបដោយវិជ្ជាជីវៈ។'
                },
                videoId: 'EOoBAq6z4Zk'
            }
        ]
    },
    'incident-response': {
        title: {
            en: 'Incident Response & Digital Forensics',
            km: 'ការឆ្លើយតបចំពោះឧប្បត្តិហេតុ និងកោសល្យវិទ្យាឌីជីថល'
        },
        lessons: [
            {
                title: {
                    en: 'Incident Response Fundamentals',
                    km: 'មូលដ្ឋានការឆ្លើយតបចំពោះឧប្បត្តិហេតុ'
                },
                description: {
                    en: 'Learn the basics of incident response and how to prepare for security incidents.',
                    km: 'រៀនមូលដ្ឋានការឆ្លើយតបចំពោះឧប្បត្តិហេតុ និងរបៀបរៀបចំសម្រាប់ឧប្បត្តិហេតុសុវត្ថិភាព។'
                },
                videoId: 'nvTIVrLFJbw'
            },
            {
                title: {
                    en: 'Digital Evidence Collection',
                    km: 'ការប្រមូលភស្តុតាងឌីជីថល'
                },
                description: {
                    en: 'Proper techniques for collecting and preserving digital evidence.',
                    km: 'បច្ចេកទេសត្រឹមត្រូវសម្រាប់ការប្រមូល និងរក្សាទុកភស្តុតាងឌីជីថល។'
                },
                videoId: 'Ct4C_2GnDaE'
            },
            {
                title: {
                    en: 'Memory Analysis',
                    km: 'ការវិភាគអង្គចងចាំ'
                },
                description: {
                    en: 'Analyzing system memory to find traces of malicious activity.',
                    km: 'វិភាគអង្គចងចាំប្រព័ន្ធដើម្បីរកស្នាមនៃសកម្មភាពព្យាបាទ។'
                },
                videoId: 'BMFCdAGxVN4'
            },
            {
                title: {
                    en: 'Network Forensics',
                    km: 'កោសល្យវិទ្យាបណ្តាញ'
                },
                description: {
                    en: 'Investigating network traffic to understand security incidents.',
                    km: 'ស៊ើបអង្កេតចរាចរណ៍បណ្តាញដើម្បីយល់ដឹងអំពីឧប្បត្តិហេតុសុវត្ថិភាព។'
                },
                videoId: 'r0l_54thSRY'
            },
            {
                title: {
                    en: 'Malware Analysis in Incident Response',
                    km: 'ការវិភាគមេរោគក្នុងការឆ្លើយតបចំពោះឧប្បត្តិហេតុ'
                },
                description: {
                    en: 'How to analyze malware found during incident investigations.',
                    km: 'របៀបវិភាគមេរោគដែលរកឃើញក្នុងអំឡុងពេលការស៊ើបអង្កេតឧប្បត្តិហេតុ។'
                },
                videoId: 'VVJlkEj-7g4'
            },
            {
                title: {
                    en: 'Timeline Analysis',
                    km: 'ការវិភាគកាលបរិច្ឆេទ'
                },
                description: {
                    en: 'Creating timelines to understand the sequence of events in an incident.',
                    km: 'បង្កើតកាលបរិច្ឆេទដើម្បីយល់ដឹងអំពីលំដាប់នៃព្រឹត្តិការណ៍នៅក្នុងឧប្បត្តិហេតុ។'
                },
                videoId: 'H0_yBp3V75c'
            },
            {
                title: {
                    en: 'Containment and Eradication',
                    km: 'ការរារាំង និងការលុបបំបាត់'
                },
                description: {
                    en: 'Strategies for containing threats and eradicating malicious presence.',
                    km: 'យុទ្ធសាស្ត្រសម្រាប់រារាំងការគំរាមកំហែង និងលុបបំបាត់វត្តមានព្យាបាទ។'
                },
                videoId: 'TZ6QByAJBRk'
            },
            {
                title: {
                    en: 'Recovery and Lessons Learned',
                    km: 'ការស្តារ និងមេរៀនដែលបានរៀន'
                },
                description: {
                    en: 'Recovery procedures and how to learn from security incidents.',
                    km: 'នីតិវិធីស្តារ និងរបៀបរៀនពីឧប្បត្តិហេតុសុវត្ថិភាព។'
                },
                videoId: 'kI_NNmQAh-8'
            }
        ]
    },
    'cloud-security': {
        title: {
            en: 'Cloud Security Essentials',
            km: 'សុវត្ថិភាពពពកសំខាន់ៗ'
        },
        lessons: [
            {
                title: {
                    en: 'Introduction to Cloud Security',
                    km: 'ការណែនាំអំពីសុវត្ថិភាពពពក'
                },
                description: {
                    en: 'Understanding cloud computing security challenges and opportunities.',
                    km: 'យល់ដឹងអំពីបញ្ហាប្រឈម និងឱកាសសុវត្ថិភាពកុំព្យូទ័រពពក។'
                },
                videoId: 'hxhOMyldSM4'
            },
            {
                title: {
                    en: 'AWS Security Fundamentals',
                    km: 'មូលដ្ឋានសុវត្ថិភាព AWS'
                },
                description: {
                    en: 'Security best practices for Amazon Web Services.',
                    km: 'ការអនុវត្តល្អបំផុតសុវត្ថិភាពសម្រាប់ Amazon Web Services។'
                },
                videoId: 'SU8im6lmsZ0'
            },
            {
                title: {
                    en: 'Azure Security Center',
                    km: 'មជ្ឈមណ្ឌលសុវត្ថិភាព Azure'
                },
                description: {
                    en: 'Using Microsoft Azure security tools and services.',
                    km: 'ប្រើឧបករណ៍ និងសេវាកម្មសុវត្ថិភាព Microsoft Azure។'
                },
                videoId: 'tyztNjQaE8s'
            },
            {
                title: {
                    en: 'Container Security',
                    km: 'សុវត្ថិភាពកុងតេន័រ'
                },
                description: {
                    en: 'Securing containerized applications and Docker environments.',
                    km: 'ធានាសុវត្ថិភាពកម្មវិធីកុងតេន័រ និងបរិស្ថាន Docker។'
                },
                videoId: 'Ostd_SoGvIg'
            },
            {
                title: {
                    en: 'Cloud Identity and Access Management',
                    km: 'ការគ្រប់គ្រងអត្តសញ្ញាណ និងការចូលដំណើរការពពក'
                },
                description: {
                    en: 'Managing identities and access controls in cloud environments.',
                    km: 'គ្រប់គ្រងអត្តសញ្ញាណ និងការត្រួតពិនិត្យការចូលដំណើរការនៅក្នុងបរិស្ថានពពក។'
                },
                videoId: 'YQsK4MtsELU'
            },
            {
                title: {
                    en: 'Cloud Compliance and Governance',
                    km: 'ការអនុលោម និងការគ្រប់គ្រងពពក'
                },
                description: {
                    en: 'Ensuring compliance and governance in cloud deployments.',
                    km: 'ធានាការអនុលោម និងការគ្រប់គ្រងនៅក្នុងការដាក់ពពក។'
                },
                videoId: 'dxzBZpzzzo8'
            },
            {
                title: {
                    en: 'Cloud Security Monitoring',
                    km: 'ការតាមដានសុវត្ថិភាពពពក'
                },
                description: {
                    en: 'Monitoring and logging in cloud environments for security.',
                    km: 'ការតាមដាន និងការកត់ត្រានៅក្នុងបរិស្ថានពពកសម្រាប់សុវត្ថិភាព។'
                },
                videoId: 'ubCNZRNjhyo'
            },
            {
                title: {
                    en: 'Multi-Cloud Security Strategy',
                    km: 'យុទ្ធសាស្ត្រសុវត្ថិភាពពពកច្រើន'
                },
                description: {
                    en: 'Security considerations for multi-cloud and hybrid environments.',
                    km: 'ការពិចារណាសុវត្ថិភាពសម្រាប់បរិស្ថានពពកច្រើន និងកូនកាត់។'
                },
                videoId: 'kBXQZMmiA4s'
            }
        ]
    },
    'malware-analysis': {
        title: {
            en: 'Malware Analysis & Reverse Engineering',
            km: 'ការវិភាគមេរោគ និងវិស្វកម្មបញ្ច្រាស'
        },
        lessons: [
            {
                title: {
                    en: 'Introduction to Malware Analysis',
                    km: 'ការណែនាំអំពីការវិភាគមេរោគ'
                },
                description: {
                    en: 'Understanding different types of malware and analysis approaches.',
                    km: 'យល់ដឹងអំពីប្រភេទមេរោគផ្សេងៗ និងវិធីសាស្រ្តវិភាគ។'
                },
                videoId: 'VVJlkEj-7g4'
            },
            {
                title: {
                    en: 'Static Analysis Techniques',
                    km: 'បច្ចេកទេសវិភាគស្ថិតិ'
                },
                description: {
                    en: 'Analyzing malware without executing it using static analysis tools.',
                    km: 'វិភាគមេរោគដោយមិនប្រតិបត្តិវាដោយប្រើឧបករណ៍វិភាគស្ថិតិ។'
                },
                videoId: 'VVJlkEj-7g4'
            },
            {
                title: {
                    en: 'Dynamic Analysis and Sandboxing',
                    km: 'ការវិភាគថាមវន្ត និងការធ្វើ Sandboxing'
                },
                description: {
                    en: 'Running malware in controlled environments to observe behavior.',
                    km: 'ដំណើរការមេរោគនៅក្នុងបរិស្ថានត្រួតពិនិត្យដើម្បីសង្កេតឥរិយាបថ។'
                },
                videoId: 'VVJlkEj-7g4'
            },
            {
                title: {
                    en: 'Assembly Language Basics',
                    km: 'មូលដ្ឋានភាសា Assembly'
                },
                description: {
                    en: 'Understanding assembly language for reverse engineering.',
                    km: 'យល់ដឹងអំពីភាសា assembly សម្រាប់វិស្វកម្មបញ្ច្រាស។'
                },
                videoId: 'VVJlkEj-7g4'
            },
            {
                title: {
                    en: 'Debuggers and Disassemblers',
                    km: 'កម្មវិធីកែកំហុស និងកម្មវិធីបំបែក'
                },
                description: {
                    en: 'Using tools like IDA Pro, Ghidra, and x64dbg for analysis.',
                    km: 'ប្រើឧបករណ៍ដូចជា IDA Pro, Ghidra, និង x64dbg សម្រាប់ការវិភាគ។'
                },
                videoId: 'VVJlkEj-7g4'
            },
            {
                title: {
                    en: 'Packed Malware Analysis',
                    km: 'ការវិភាគមេរោគដែលបានវេចខ្ចប់'
                },
                description: {
                    en: 'Techniques for unpacking and analyzing obfuscated malware.',
                    km: 'បច្ចេកទេសសម្រាប់ការបើកវេចខ្ចប់ និងវិភាគមេរោគដែលបានធ្វើឱ្យមិនច្បាស់។'
                },
                videoId: 'VVJlkEj-7g4'
            },
            {
                title: {
                    en: 'Network Behavior Analysis',
                    km: 'ការវិភាគឥរិយាបថបណ្តាញ'
                },
                description: {
                    en: 'Analyzing malware network communications and C&C traffic.',
                    km: 'វិភាគការទំនាក់ទំនងបណ្តាញមេរោគ និងចរាចរណ៍ C&C។'
                },
                videoId: 'VVJlkEj-7g4'
            },
            {
                title: {
                    en: 'Advanced Evasion Techniques',
                    km: 'បច្ចេកទេសគេចវេសកម្រិតខ្ពស់'
                },
                description: {
                    en: 'Understanding how malware evades detection and analysis.',
                    km: 'យល់ដឹងពីរបៀបដែលមេរោគគេចវេសការរកឃើញ និងការវិភាគ។'
                },
                videoId: 'VVJlkEj-7g4'
            }
        ]
    },
    'security-awareness': {
        title: {
            en: 'Security Awareness Training',
            km: 'ការបណ្តុះបណ្តាលការយល់ដឹងអំពីសុវត្ថិភាព'
        },
        lessons: [
            {
                title: {
                    en: 'Introduction to Cybersecurity Awareness',
                    km: 'ការណែនាំអំពីការយល់ដឹងសុវត្ថិភាពអ៊ីនធឺណិត'
                },
                description: {
                    en: 'Why security awareness is crucial for every organization.',
                    km: 'ហេតុអ្វីការយល់ដឹងអំពីសុវត្ថិភាពមានសារៈសំខាន់សម្រាប់អង្គការនីមួយៗ។'
                },
                videoId: 'inWWhr5tnEA'
            },
            {
                title: {
                    en: 'Phishing and Email Security',
                    km: 'ការបន្លំ និងសុវត្ថិភាពអ៊ីមែល'
                },
                description: {
                    en: 'Recognizing and avoiding phishing attacks and email threats.',
                    km: 'ការសម្គាល់ និងជៀសវាងការវាយប្រហារបន្លំ និងការគំរាមកំហែងអ៊ីមែល។'
                },
                videoId: 'XBkzBrXlle0'
            },
            {
                title: {
                    en: 'Password Security and Management',
                    km: 'សុវត្ថិភាព និងការគ្រប់គ្រងពាក្យសម្ងាត់'
                },
                description: {
                    en: 'Creating strong passwords and using password managers effectively.',
                    km: 'បង្កើតពាក្យសម្ងាត់ខ្លាំង និងប្រើកម្មវិធីគ្រប់គ្រងពាក្យសម្ងាត់ប្រកបដោយប្រសិទ្ធភាព។'
                },
                videoId: 'aEmF3Iylvr4'
            },
            {
                title: {
                    en: 'Social Engineering Awareness',
                    km: 'ការយល់ដឹងអំពីវិស្វកម្មសង្គម'
                },
                description: {
                    en: 'Understanding social engineering tactics and how to defend against them.',
                    km: 'យល់ដឹងអំពីយុទ្ធសាស្ត្រវិស្វកម្មសង្គម និងរបៀបការពារប្រឆាំងនឹងវា។'
                },
                videoId: 'lc7scxvKQOo'
            },
            {
                title: {
                    en: 'Safe Internet Browsing',
                    km: 'ការរុករកអ៊ីនធឺណិតដោយសុវត្ថិភាព'
                },
                description: {
                    en: 'Best practices for safe web browsing and avoiding malicious websites.',
                    km: 'ការអនុវត្តល្អបំផុតសម្រាប់ការរុករកបណ្តាញដោយសុវត្ថិភាព និងជៀសវាងគេហទំព័រព្យាបាទ។'
                },
                videoId: 'Hxn8XMOnSaw'
            },
            {
                title: {
                    en: 'Mobile Device Security',
                    km: 'សុវត្ថិភាពឧបករណ៍ចល័ត'
                },
                description: {
                    en: 'Securing smartphones and tablets in personal and business use.',
                    km: 'ធានាសុវត្ថិភាពស្មាតហ្វូន និងថេប្លេតក្នុងការប្រើប្រាស់ផ្ទាល់ខ្លួន និងអាជីវកម្ម។'
                },
                videoId: 'BLlBZFp8tJo'
            },
            {
                title: {
                    en: 'Incident Reporting and Response',
                    km: 'ការរាយការណ៍ និងការឆ្លើយតបចំពោះឧប្បត្តិហេតុ'
                },
                description: {
                    en: 'How to report security incidents and respond appropriately.',
                    km: 'របៀបរាយការណ៍ឧប្បត្តិហេតុសុវត្ថិភាព និងឆ្លើយតបឱ្យបានត្រឹមត្រូវ។'
                },
                videoId: 'nvTIVrLFJbw'
            }
        ]
    }
};

// Language management
let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'km' : 'en';
    updateLanguage();
    
    // Update button text
    const langBtn = document.getElementById('lang-toggle');
    langBtn.textContent = currentLanguage === 'en' ? 'ខ្មែរ' : 'English';
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-km]');
    elements.forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${currentLanguage}`);
        } else {
            element.textContent = element.getAttribute(`data-${currentLanguage}`);
        }
    });
}

// Course modal functionality
let currentCourse = null;
let currentLessonIndex = 0;

function openCourseModal(courseId) {
    currentCourse = courseData[courseId];
    currentLessonIndex = 0;
    
    const modal = document.getElementById('course-modal');
    const modalTitle = document.getElementById('modal-title');
    const lessonsList = document.getElementById('lessons-list');
    
    // Set course title
    modalTitle.textContent = currentCourse.title[currentLanguage];
    
    // Clear and populate lessons list
    lessonsList.innerHTML = '';
    currentCourse.lessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.className = `lesson-item ${index === 0 ? 'active' : ''}`;
        lessonItem.innerHTML = `
            <h4>${lesson.title[currentLanguage]}</h4>
            <p>${lesson.description[currentLanguage]}</p>
        `;
        lessonItem.addEventListener('click', () => selectLesson(index));
        lessonsList.appendChild(lessonItem);
    });
    
    // Load first lesson
    loadLesson(0);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function selectLesson(index) {
    currentLessonIndex = index;
    
    // Update active lesson in sidebar
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    
    // Load selected lesson
    loadLesson(index);
}

function loadLesson(index) {
    const lesson = currentCourse.lessons[index];
    const videoFrame = document.getElementById('course-video');
    const lessonTitle = document.getElementById('current-lesson-title');
    const lessonDescription = document.getElementById('current-lesson-description');
    
    // Update video
    videoFrame.src = `https://www.youtube.com/embed/${lesson.videoId}?rel=0&modestbranding=1`;
    
    // Update lesson info
    lessonTitle.textContent = lesson.title[currentLanguage];
    lessonDescription.textContent = lesson.description[currentLanguage];
}

function closeCourseModal() {
    const modal = document.getElementById('course-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Stop video
    const videoFrame = document.getElementById('course-video');
    videoFrame.src = '';
}

// Initialize courses page
document.addEventListener('DOMContentLoaded', function() {
    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Course card click handlers
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const courseBtn = card.querySelector('.course-btn');
        const courseId = card.getAttribute('data-course');
        
        if (courseBtn && courseId) {
            courseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openCourseModal(courseId);
            });
        }
    });
    
    // Modal close functionality
    const modal = document.getElementById('course-modal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', closeCourseModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCourseModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeCourseModal();
        }
    });
    
    // Initialize language
    updateLanguage();
    
    console.log('Courses page initialized successfully!');
});
