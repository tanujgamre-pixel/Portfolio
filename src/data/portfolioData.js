export const portfolioData = {
  personal: {
    name: "Tanuj Gamare",
    tagline: "Computer Engineering Student | Focused on AI/ML & Digital Twin Systems",
    college: "Atharva College of Engineering",
    degree: "B.E. Computer Engineering (CMPN)",
    semester: "3rd Semester",
    location: "Mumbai, India",
    dob: "December 5, 2007",
    summary: "Computer Engineering student at Atharva College of Engineering (Semester 3) focused on Machine Learning, digital twins, and software systems. Building a physics-based 4-stroke engine simulation streaming real-time sensor data for an AI-driven aero engine health monitoring project (DRDO SIH problem statement). Practical background in computer vision, spatial mapping, and embedded systems.",
    status: "Exploring AI/ML & Software Opportunities",
    links: {
      linkedin: "https://www.linkedin.com/in/tanuj-gamare-b95a4334a",
      github: "https://github.com/tanujgamare-pixel",
      email: "tanujgamare@gmail.com",
      phone: "+91 9137798015"
    }
  },

  keyHighlights: [
    {
      metric: "DRDO / SIH",
      label: "Aero Digital Twin",
      sub: "Physics simulation & VCAN"
    },
    {
      metric: "Sem 3",
      label: "Computer Engineering",
      sub: "Atharva College of Engg"
    },
    {
      metric: "IDE 2026",
      label: "National Drone Expo",
      sub: "Team platform showcased"
    },
    {
      metric: "NSS",
      label: "National Service Scheme",
      sub: "Active student volunteer"
    }
  ],

  projects: [
    {
      id: "sih-digital-twin",
      title: "AI Real-Time Digital Twin for Aero Piston Engines",
      subtitle: "DRDO Problem Statement (SIH) — Virtual Physics Simulation & Predictive Health Monitoring",
      category: "AI & Systems",
      featured: true,
      badges: [
        "DRDO Problem Statement",
        "SIH 2026",
        "Python & PyTorch",
        "VCAN Architecture"
      ],
      description: "Developing an AI-driven Digital Twin system for MALE UAV aero piston engines. The architecture uses a two-system distributed setup: a virtual four-stroke engine simulation running locally to model real-world thermodynamic parameters (RPM, CHT, EGT, pressure fluctuations), streaming real-time sensor data over VCAN (Virtual CAN bus) to a dedicated AI/ML layer that estimates Remaining Useful Life (RUL) and predicts operational failures before they happen.",
      myRole: "Engineered the virtual 4-stroke engine physics simulation and the VCAN telemetry transmission interface.",
      techStack: ["Python", "PyTorch", "NumPy", "VCAN", "Digital Twins", "Time-Series Data"],
      specs: [
        {
          area: "Virtual Physics Engine Simulation",
          details: [
            "Simulating a 4-stroke aero piston engine generating authentic RPM, Cylinder Head Temperature (CHT), and Exhaust Gas Temperature (EGT)",
            "Models realistic wear, thermal drift, and mechanical fluctuations instead of relying on canned static datasets"
          ]
        },
        {
          area: "VCAN Bus & AI/ML Pipeline",
          details: [
            "Transmits high-frequency telemetry packets across systems via Virtual CAN (VCAN)",
            "Feeds live sensor streams into custom PyTorch models to track engine degradation and predict Remaining Useful Life (RUL)"
          ]
        }
      ],
      learnings: [
        "Distributed telemetry architectures using Virtual CAN",
        "Modeling dynamic physical phenomena with Python and time-series data",
        "Training custom neural networks for predictive maintenance and anomaly detection"
      ]
    },
    {
      id: "spatial-mapping",
      title: "Spatial 3D Mapping & Gaussian Splatting Experiments",
      subtitle: "Computer Vision & Cost-Effective Spatial Reconstruction",
      category: "Computer Vision",
      featured: true,
      badges: [
        "3D Gaussian Splatting",
        "2D LiDAR",
        "Raspberry Pi 4",
        "Photogrammetry"
      ],
      description: "Conducted experiments in low-cost 3D spatial reconstruction. Interfaced 2D LiDAR modules to extract depth data and explored combining photogrammetry with 3D Gaussian Splatting to produce detailed 3D spatial representations without needing expensive industrial scanning hardware.",
      myRole: "Sensor interfacing, data capture pipeline, and reconstruction testing.",
      techStack: ["Python", "2D LiDAR", "Raspberry Pi 4", "3D Gaussian Splatting", "Photogrammetry", "OpenCV"],
      specs: [
        {
          area: "LiDAR & Depth Telemetry",
          details: [
            "Interfaced 2D LiDAR with Raspberry Pi 4 to capture planar distance point arrays",
            "Tested algorithmic techniques to project 2D scan data into 3D spatial representations"
          ]
        },
        {
          area: "Gaussian Splatting & Vision",
          details: [
            "Explored 3D Gaussian Splatting as a lightweight alternative to traditional dense point clouds",
            "Evaluated photogrammetric models for fast environment reconstruction"
          ]
        }
      ],
      learnings: [
        "Working with spatial point clouds and camera coordinate transformations",
        "Hands-on performance benchmarking on Raspberry Pi 4 single-board computers"
      ]
    },
    {
      id: "agridrone-platform",
      title: "Agricultural Hexacopter (Agridrone ➔ Drishti)",
      subtitle: "First-Year Capstone Project — Displayed at International Drone Expo 2026 (New Delhi)",
      category: "Embedded & Systems",
      featured: true,
      badges: [
        "Highest Funded 1st-Year Project @ ACE",
        "International Drone Expo 2026 (New Delhi)",
        "IEEE TechIOTHON 2026",
        "Pixhawk 2.4.8"
      ],
      description: "In our first semester, a team of 4 students conceived a project that expanded into Atharva College of Engineering's highest funded first-year build. We developed an autonomous hexacopter equipped with multispectral NDVI imaging for crop stress detection. The initial version was showcased at IEEE TechIOTHON 2026, and the upgraded Drishti platform was selected and displayed at the International Drone Expo 2026 in New Delhi.",
      myRole: "Core co-developer across all project stages: flight controller setup (Pixhawk 2.4.8), power routing, sensor payload, and field testing.",
      techStack: ["Pixhawk 2.4.8", "Raspberry Pi Zero 2 W", "C++", "Python", "Multispectral NDVI", "Mission Planning"],
      specs: [
        {
          area: "Avionics & Flight Systems",
          details: [
            "Integrated Pixhawk 2.4.8 flight controller, motor-ESC calibration, and fail-safe logic",
            "High-current power distribution routing clean voltage to avionics, onboard computing, and spray actuators"
          ]
        },
        {
          area: "Multispectral Crop Imaging",
          details: [
            "Dual camera configuration (RGB + NoIR) on Raspberry Pi Zero 2 W with custom blue filter modification for NDVI calculations",
            "Interactive mission control dashboard for autonomous boundary survey grids"
          ]
        }
      ],
      learnings: [
        "End-to-end systems integration from scratch with a small, focused team",
        "Embedded troubleshooting and hardware reliability under real-world testing"
      ]
    }
  ],

  skills: {
    aiAndMl: [
      { name: "Python", level: "Intermediate", desc: "Scripting, data handling, and model experimentation" },
      { name: "PyTorch", level: "Learning", desc: "Basic neural network architectures and model training" },
      { name: "NumPy", level: "Intermediate", desc: "Array operations and mathematical computations" },
      { name: "Digital Twin Systems", level: "Learning", desc: "Engine physics simulation and telemetry data flow" },
      { name: "Time-Series Modeling", level: "Learning", desc: "Sensor data processing and basic anomaly trends" }
    ],
    programming: [
      { name: "C++", level: "Intermediate", desc: "Object-oriented programming and fundamental data structures" },
      { name: "Python", level: "Intermediate", desc: "Simulation scripts, data analysis, and automation" },
      { name: "HTML5 / CSS3 / JS", level: "Learning", desc: "Basic web layout and frontend fundamentals" }
    ],
    systemsAndProtocols: [
      { name: "Virtual CAN (VCAN)", level: "Learning", desc: "Basic simulated CAN bus communication between systems" },
      { name: "Computer Vision & 3D Splatting", level: "Learning", desc: "Experiments with photogrammetry and 3D Gaussian splatting" },
      { name: "Computer Engineering (CMPN)", level: "Learning", desc: "Core coursework in digital logic and computer architecture" }
    ],
    embeddedAndTools: [
      { name: "Raspberry Pi 4 & Zero 2 W", level: "Intermediate", desc: "Linux setup, GPIO interfacing, and edge scripts" },
      { name: "Arduino Uno & Nano / ESP32", level: "Intermediate", desc: "Basic microcontroller code and sensor interfacing" },
      { name: "LiDAR Integration", level: "Learning", desc: "2D distance scanning and planar point parsing" },
      { name: "Lab & CAD Tools", level: "Intermediate", desc: "Multimeter, soldering, Fusion 360, 3D printing, Blender" }
    ]
  },

  education: [
    {
      institution: "Atharva College of Engineering",
      degree: "B.E. in Computer Engineering (CMPN)",
      period: "2025 – Present",
      location: "Malad, Mumbai",
      details: "Second Year (3rd Semester). Focusing on Artificial Intelligence, Machine Learning, Data Structures, and Software Systems.",
      current: true
    },
    {
      institution: "Nirmala Memorial Foundation College",
      degree: "Higher Secondary Certificate (HSC) — Science",
      period: "2023 – 2025",
      location: "Mumbai",
      details: "Completed Higher Secondary education with focus on Science and Mathematics.",
      current: false
    },
    {
      institution: "St. Xavier's High School & Jr. College",
      degree: "Secondary School Certificate (SSC)",
      period: "Completed",
      location: "Mumbai",
      details: "Completed secondary education.",
      current: false
    }
  ],

  activities: [
    {
      title: "National Service Scheme (NSS)",
      role: "Active Volunteer",
      organization: "Atharva College of Engineering",
      period: "Joined 2026",
      description: "Participating in community service, social awareness drives, and campus initiatives."
    },
    {
      title: "Smart India Hackathon (SIH 2026)",
      role: "Team Developer",
      organization: "Internal College Selection Round",
      period: "2026",
      description: "Working on the DRDO problem statement developing an AI Digital Twin for MALE UAV aero piston engines."
    },
    {
      title: "International Drone Expo 2026 (New Delhi)",
      role: "Project Co-Developer",
      organization: "Pragati Maidan, New Delhi",
      period: "2026",
      description: "Our 4-student first-year project (Drishti platform) was selected and displayed at the national expo."
    }
  ]
};
