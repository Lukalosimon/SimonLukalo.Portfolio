import { assetUrl } from '@/lib/assets';

export const profile = {
  name: 'Simon Lukalo',
  role: 'IT & Systems Engineer',
  positioning: 'Infrastructure • Cloud • Security • Automation',
  location: 'Nairobi, Kenya',
  phones: ['+254790555936', '+254754532095'],
  emails: ['simon.lukalo@yahoo.com', 'lukalosp@gmail.com'],
  linkedin: 'https://www.linkedin.com/in/simonlukalo',
  github: 'https://github.com/simonlukalo',
  heroStatement:
    'I build, support and improve technology environments across systems, networks, endpoints and security — with a growing focus on cloud infrastructure, automation and modern IT operations.',
  portraitUrl: assetUrl('images/portrait.jpg'),
  casualPortraitUrl: assetUrl('images/portrait-casual.jpg'),
  infraUrl: assetUrl('images/infrastructure.png'),
};

export const techStrip = [
  'Windows Server', 'Microsoft 365', 'Entra ID', 'Intune', 'PowerShell', 'Python',
  'Linux', 'Azure', 'Networking', 'Cybersecurity', 'Proxmox', 'Virtualization',
  'Docker', 'Terraform',
];

/** Homepage Infrastructure & DevOps — virtualization is hands-on lab; rest is exposure/developing */
export const infraDevops = {
  intro:
    'Hands-on virtualization in the lab (Proxmox, Hyper-V, KVM), with practical exposure to containers, Infrastructure as Code, CI/CD and multi-cloud platforms under active development.',
  groups: [
    {
      id: 'virt',
      title: 'Virtualization',
      note: 'Hands-on lab experience',
      items: [
        { name: 'Proxmox', level: 'Hands-on' },
        { name: 'Hyper-V', level: 'Hands-on' },
        { name: 'KVM', level: 'Hands-on' },
      ],
    },
    {
      id: 'iac',
      title: 'Infrastructure as Code & Automation',
      note: 'Practical exposure',
      items: [
        { name: 'Terraform', level: 'Practical Exposure' },
        { name: 'Ansible', level: 'Practical Exposure' },
      ],
    },
    {
      id: 'cicd',
      title: 'CI/CD & Monitoring',
      note: 'Practical exposure',
      items: [
        { name: 'GitHub Actions', level: 'Practical Exposure' },
        { name: 'Jenkins', level: 'Practical Exposure' },
        { name: 'Zabbix', level: 'Practical Exposure' },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      note: 'Actively developing',
      items: [
        { name: 'Azure', level: 'Strong Working Knowledge' },
        { name: 'AWS', level: 'Practical Exposure' },
        { name: 'GCP', level: 'Practical Exposure' },
      ],
    },
  ],
};

export const aboutParagraphs = [
  'I am an IT & Systems Engineer with over two years of professional experience supporting enterprise technology environments across infrastructure, endpoints, networking, Microsoft 365 and cybersecurity operations.',
  'My work sits at the intersection of infrastructure support, systems administration, networking, security and automation. I enjoy understanding how systems connect, identifying why something is failing, and turning repetitive or manual operational work into something more consistent and automated.',
  'My practical experience includes Windows and Linux environments, Microsoft 365 and Entra ID, endpoint administration, network troubleshooting, VPN and remote access, security monitoring, vulnerability management, virtualization and infrastructure operations.',
  'I also have a strong interest in automation and DevOps practices. I work with PowerShell and Python for diagnostics, configuration validation, reporting and infrastructure-related automation, while continuing to develop my skills across Azure, AWS, Linux, containers, Infrastructure as Code and CI/CD.',
  'What interests me most is not simply learning another technology, but understanding how technologies work together to create infrastructure that is reliable, secure, observable and easier to operate.',
];

export const pillars = [
  {
    id: 'infra',
    title: 'Infrastructure & Systems',
    description: 'Windows Server, Linux, endpoint management, patching, hardware diagnostics and the day-to-day operation of business-critical systems.',
  },
  {
    id: 'network',
    title: 'Networking',
    description: 'TCP/IP, DNS, DHCP, VLANs, routing, switching, VPN, remote access and network troubleshooting across wired and wireless environments.',
  },
  {
    id: 'cloud',
    title: 'Cloud Technologies',
    description: 'Microsoft 365, Entra ID, Intune and Azure administration, with practical exposure to AWS and ongoing development across cloud infrastructure concepts.',
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'Security monitoring with SIEM tooling, vulnerability management, endpoint security, access control and supporting incident response operations.',
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'PowerShell and Python for diagnostics, configuration validation, log collection, reporting and reducing repetitive operational work.',
  },
  {
    id: 'devops',
    title: 'DevOps & Modern Operations',
    description: 'Git, containers, Infrastructure as Code and CI/CD concepts — applying software practices to infrastructure to make it more reliable and observable.',
  },
];

export const principles = [
  'Automate repetitive work.',
  'Understand the system before changing it.',
  'Security should be part of operations.',
  'Document what matters.',
  'Design for reliability and recovery.',
  'Keep learning through practical work.',
];

// Proficiency levels ordered from most to least experienced
export const proficiencyLevels = [
  { id: 'hands-on', label: 'Hands-on', rank: 5 },
  { id: 'strong', label: 'Strong Working Knowledge', rank: 4 },
  { id: 'working', label: 'Working Knowledge', rank: 3 },
  { id: 'exposure', label: 'Practical Exposure', rank: 2 },
  { id: 'developing', label: 'Developing', rank: 1 },
];

export const skillGroups = [
  {
    id: 'infra-systems',
    title: 'Infrastructure & Systems',
    skills: [
      { name: 'Windows 10/11', level: 'hands-on' },
      { name: 'Windows Server', level: 'hands-on' },
      { name: 'Linux', level: 'hands-on' },
      { name: 'System Administration', level: 'hands-on' },
      { name: 'Endpoint Management', level: 'hands-on' },
      { name: 'Patch Management', level: 'hands-on' },
      { name: 'Hardware Diagnostics', level: 'hands-on' },
      { name: 'IT Asset Management', level: 'hands-on' },
      { name: 'Backup & Recovery Concepts', level: 'working' },
      { name: 'Infrastructure Monitoring', level: 'working' },
      { name: 'Server Administration', level: 'hands-on' },
    ],
  },
  {
    id: 'networking',
    title: 'Networking & Connectivity',
    skills: [
      { name: 'TCP/IP', level: 'strong' },
      { name: 'DNS', level: 'strong' },
      { name: 'DHCP', level: 'strong' },
      { name: 'VLANs', level: 'working' },
      { name: 'Routing', level: 'working' },
      { name: 'Switching', level: 'working' },
      { name: 'LAN/Wi-Fi Troubleshooting', level: 'hands-on' },
      { name: 'VPN', level: 'hands-on' },
      { name: 'Firewall Environments', level: 'working' },
      { name: 'Network Diagnostics', level: 'hands-on' },
      { name: 'Remote Access', level: 'hands-on' },
      { name: 'RADIUS', level: 'hands-on' },
      { name: 'Cisco', level: 'working' },
      { name: 'Juniper', level: 'exposure' },
      { name: 'Fortinet', level: 'exposure' },
      { name: 'MikroTik', level: 'exposure' },
    ],
  },
  {
    id: 'microsoft-cloud',
    title: 'Microsoft & Cloud',
    skills: [
      { name: 'Microsoft 365', level: 'hands-on' },
      { name: 'Microsoft Teams', level: 'hands-on' },
      { name: 'Exchange Online', level: 'hands-on' },
      { name: 'SharePoint', level: 'working' },
      { name: 'Entra ID / Azure AD', level: 'hands-on' },
      { name: 'Conditional Access', level: 'hands-on' },
      { name: 'Intune', level: 'hands-on' },
      { name: 'Endpoint Compliance', level: 'hands-on' },
      { name: 'Azure', level: 'strong' },
      { name: 'Azure Networking', level: 'strong' },
      { name: 'Azure Identity', level: 'strong' },
      { name: 'Microsoft Graph', level: 'working' },
      { name: 'AWS', level: 'exposure' },
      { name: 'GCP', level: 'exposure' },
      { name: 'Cloud Infrastructure Concepts', level: 'working' },
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity & Security Operations',
    skills: [
      { name: 'Wazuh SIEM', level: 'hands-on' },
      { name: 'Huntress', level: 'hands-on' },
      { name: 'TheHive', level: 'hands-on' },
      { name: 'Cortex', level: 'hands-on' },
      { name: 'MISP', level: 'hands-on' },
      { name: 'InsightVM', level: 'hands-on' },
      { name: 'Rapid7', level: 'hands-on' },
      { name: 'Endpoint Security', level: 'hands-on' },
      { name: 'Threat Monitoring', level: 'hands-on' },
      { name: 'Vulnerability Management', level: 'hands-on' },
      { name: 'Access Control', level: 'hands-on' },
      { name: 'Credential Security', level: 'hands-on' },
      { name: 'Security Incident Support', level: 'hands-on' },
      { name: 'MFA', level: 'hands-on' },
      { name: 'Firewall Policy Support', level: 'working' },
      { name: 'Email Security', level: 'working' },
      { name: 'SPF/DKIM/DMARC', level: 'working' },
      { name: 'Mimecast', level: 'exposure' },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Scripting',
    skills: [
      { name: 'PowerShell', level: 'strong' },
      { name: 'Python', level: 'strong' },
      { name: 'Bash', level: 'working' },
      { name: 'PowerShell automation', level: 'hands-on' },
      { name: 'System diagnostics automation', level: 'hands-on' },
      { name: 'Log collection automation', level: 'hands-on' },
      { name: 'Configuration validation', level: 'hands-on' },
      { name: 'Endpoint health checks', level: 'hands-on' },
      { name: 'Reporting automation', level: 'hands-on' },
      { name: 'Network automation', level: 'hands-on' },
      { name: 'API integration concepts', level: 'working' },
      { name: 'Microsoft Graph automation', level: 'working' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Modern Infrastructure',
    skills: [
      { name: 'Git', level: 'working' },
      { name: 'GitHub', level: 'working' },
      { name: 'Docker', level: 'exposure' },
      { name: 'Kubernetes', level: 'exposure' },
      { name: 'Ansible', level: 'exposure' },
      { name: 'Terraform', level: 'exposure' },
      { name: 'CI/CD concepts', level: 'working' },
      { name: 'GitHub Actions', level: 'exposure' },
      { name: 'Jenkins concepts', level: 'exposure' },
      { name: 'Zabbix', level: 'exposure' },
      { name: 'Infrastructure as Code', level: 'exposure' },
      { name: 'Monitoring', level: 'working' },
      { name: 'Configuration Management', level: 'working' },
      { name: 'DevSecOps concepts', level: 'developing' },
    ],
  },
  {
    id: 'virtualization',
    title: 'Virtualization & Lab Infrastructure',
    skills: [
      { name: 'Proxmox', level: 'hands-on' },
      { name: 'Hyper-V', level: 'working' },
      { name: 'KVM', level: 'working' },
      { name: 'Ubuntu', level: 'hands-on' },
      { name: 'Windows Server', level: 'hands-on' },
      { name: 'XRDP', level: 'hands-on' },
      { name: 'Virtual networking', level: 'hands-on' },
      { name: 'Virtual machines', level: 'hands-on' },
      { name: 'Home laboratory infrastructure', level: 'hands-on' },
    ],
  },
];

export const automationWork = [
  {
    id: 'powershell',
    tool: 'PowerShell',
    items: [
      'Windows diagnostics',
      'Microsoft 365 administration',
      'Endpoint health checks',
      'Configuration validation',
      'Service checks',
      'Log collection',
      'Reporting',
      'Remediation',
    ],
  },
  {
    id: 'python',
    tool: 'Python',
    items: [
      'Network automation',
      'Infrastructure automation',
      'API interaction',
      'Data processing',
      'Operational scripts',
    ],
  },
  {
    id: 'bash',
    tool: 'Bash',
    items: [
      'Linux administration',
      'System diagnostics',
      'Service management',
      'Log analysis',
      'Automation',
    ],
  },
];

export const projects = [
  {
    id: 'm365-endpoint',
    category: 'Microsoft 365 & Endpoint Security',
    title: 'Conditional Access & Endpoint Security',
    summary:
      'Microsoft 365 identity and endpoint security operations involving Conditional Access, authentication controls, endpoint compliance, Microsoft Defender/security tooling and device management.',
    stack: ['Microsoft 365', 'Entra ID', 'Conditional Access', 'Intune', 'Endpoint Compliance'],
  },
  {
    id: 'secops',
    category: 'Security Operations',
    title: 'Security Monitoring & Threat Intelligence',
    summary:
      'Security monitoring and threat intelligence operations using open-source and commercial security tooling for detection, investigation and response support.',
    stack: ['Wazuh', 'TheHive', 'Cortex', 'MISP'],
  },
  {
    id: 'vuln',
    category: 'Vulnerability Management',
    title: 'Vulnerability Visibility & Assessment',
    summary:
      'Vulnerability visibility and assessment across infrastructure and endpoints, supporting prioritisation and remediation tracking.',
    stack: ['InsightVM', 'Rapid7'],
  },
  {
    id: 'ps-automation',
    category: 'Infrastructure Automation',
    title: 'PowerShell IT Operations Automation',
    summary:
      'PowerShell automation for recurring IT operations work — diagnostics, health checks, configuration validation, log collection and reporting made reproducible.',
    stack: ['Diagnostics', 'Health Checks', 'Configuration Validation', 'Log Collection', 'Reporting'],
  },
  {
    id: 'net-automation',
    category: 'Network Automation',
    title: 'Python Network Automation',
    summary:
      'Python scripts for network diagnostics, device interaction and automation workflows that reduce manual, repetitive network operations work.',
    stack: ['Network diagnostics', 'Device interaction', 'Automation workflows'],
  },
  {
    id: 'radius',
    category: 'Identity & Network Authentication',
    title: 'RADIUS Authentication Infrastructure',
    summary:
      'Authentication infrastructure and network access concepts supporting centralised identity-based network authentication.',
    stack: ['RADIUS', 'Authentication', 'Network Access'],
  },
  {
    id: 'remote',
    category: 'Remote Access',
    title: 'Secure Remote Support Infrastructure',
    summary:
      'Secure remote support infrastructure for endpoint assistance and remote administration across distributed users.',
    stack: ['AnyDesk', 'BeyondTrust'],
  },
  {
    id: 'homelab',
    category: 'Virtualization',
    title: 'Infrastructure Home Lab',
    summary:
      'A self-built virtualization lab running Windows Server, Ubuntu/Linux and remote access tooling — where theory becomes practical, repeatable infrastructure.',
    stack: ['Proxmox', 'Hyper-V', 'KVM', 'Windows Server', 'Ubuntu', 'Linux', 'XRDP'],
  },
];

export const experience = [
  {
    id: 'wioccc',
    role: 'IT & Systems Engineer',
    org: 'West Indian Ocean Cable Company Group',
    period: '2025 – Present',
    groups: [
      {
        title: 'Infrastructure & Systems Operations',
        points: [
          'Support and maintain Windows Server and Linux environments across business-critical systems.',
          'Perform system administration, monitoring and operational troubleshooting to sustain service continuity.',
        ],
      },
      {
        title: 'Microsoft 365 & Endpoint Management',
        points: [
          'Administer Microsoft 365 tenants, Entra ID identity, Conditional Access and Intune-managed endpoints.',
          'Manage endpoint compliance, device lifecycle and Microsoft Teams/Exchange Online operations.',
        ],
      },
      {
        title: 'Networking & Connectivity',
        points: [
          'Troubleshoot LAN/Wi-Fi, VPN and remote access issues across the corporate network.',
          'Support DNS, DHCP, switching and routing operations and network diagnostics.',
        ],
      },
      {
        title: 'Cybersecurity Operations',
        points: [
          'Support security monitoring, threat detection and vulnerability management using SIEM and security tooling.',
          'Assist with endpoint security, access control, MFA and security incident response.',
        ],
      },
      {
        title: 'Remote Access & Business Continuity',
        points: [
          'Maintain secure remote support infrastructure enabling remote administration and user assistance.',
          'Support backup, recovery and continuity practices for critical systems.',
        ],
      },
      {
        title: 'Automation & Operational Improvement',
        points: [
          'Develop PowerShell and Python automation for diagnostics, health checks, configuration validation and reporting.',
          'Reduce repetitive manual operational work through reproducible scripts and workflows.',
        ],
      },
      {
        title: 'IT Asset & Hardware Operations',
        points: [
          'Manage IT assets, hardware diagnostics and endpoint hardware lifecycle.',
          'Support patch management and infrastructure hardware operations.',
        ],
      },
      {
        title: 'Documentation & Service Delivery',
        points: [
          'Maintain operational documentation, runbooks and service delivery records.',
          'Ensure documentation accuracy and support consistent service delivery.',
        ],
      },
    ],
  },
];

export const labSections = [
  { id: 'virtualization', title: 'Virtualization', items: ['Proxmox', 'Hyper-V', 'KVM'] },
  { id: 'os', title: 'Operating Systems', items: ['Windows Server', 'Ubuntu/Linux'] },
  { id: 'remote', title: 'Remote Access', items: ['XRDP', 'Remote administration'] },
  { id: 'networking', title: 'Networking', items: ['Virtual networks', 'Routing', 'Segmentation'] },
  { id: 'devops', title: 'DevOps', items: ['Git', 'Docker', 'Terraform', 'CI/CD experimentation'] },
  { id: 'security', title: 'Security', items: ['Identity', 'Hardening', 'Monitoring', 'Security tooling'] },
];

export const learning = {
  current: [
    { id: 'az-700', title: 'AZ-700 — Microsoft Azure Network Engineer Associate' },
    { id: 'az-305', title: 'AZ-305 — Microsoft Azure Solutions Architect Expert' },
  ],
  practical: [
    { id: 'ps', title: 'PowerShell Automation' },
    { id: 'py', title: 'Python Automation' },
    { id: 'linux', title: 'Linux Administration' },
    { id: 'devops', title: 'DevOps & DevSecOps' },
  ],
  completed: [
    { id: 'cisco-endpoint', title: 'Cisco Endpoint Security' },
    { id: 'cisco-cyber', title: 'Cisco Cybersecurity' },
    { id: 'cisco-data', title: 'Cisco Data Analysis' },
  ],
  education: [
    {
      id: 'ku',
      title: 'Bachelor of Science in Economics and Finance',
      org: 'Kenyatta University',
      period: '2021–2025',
    },
  ],
};
