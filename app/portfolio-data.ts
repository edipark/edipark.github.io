export const projects: Array<{
  title: string;
  media: { src: string; title: string };
  description: string;
  tags: string[];
  links: Array<{ label: string; href: string }>;
}> = [
  {
    title: "UMMA: University Mobile Management Agent",
    media: {
      src: "/videos/umma.mp4",
      title: "UMMA project demonstration",
    },
    description:
      "Built the robot's control and task-execution stack in ROS2 for an autonomous building management system.",
    tags: ["ROS2", "YOLO", "SLAM", "Hardware Design"],
    links: [{ label: "Project", href: "https://umma-yonsei.github.io/" }],
  },
  {
    title: "PALMA: A Robotic Hand Project",
    media: {
      src: "/videos/palma.mp4",
      title: "PALMA project demonstration",
    },
    description:
      "Fabricated every part in-house by 3D printing and assembled a fully tendon-driven hand with vision-based teleoperation.",
    tags: ["Computer Vision", "Tendon Actuation"],
    links: [
      { label: "Code", href: "https://github.com/edipark/PALMA_teleop" },
    ],
  },
  {
    title: "DEXTRA: A Low-Cost Bipedal Robot",
    media: {
      src: "/videos/dextra.mp4",
      title: "DEXTRA motion imitation GitHub project cover",
    },
    description:
      "Designed, printed, and assembled a 12-DoF bipedal robot from scratch for under $800 in parts, trained to walk via DeepMimic-based motion imitation.",
    tags: ["Motion Retargeting", "RL"],
    links: [
      { label: "Code", href: "https://github.com/edipark/Mimickit_Dextra" },
      { label: "Hardware", href: "https://github.com/edipark/DEXTRA" },
    ],
  },
];

export const interests = [
  "Robot Learning",
  "Policy Adaptation",
  "Robot Foundation Models",
  "Embodied AI",
  "Humanoid Robotics",
];

export const news: Array<{ date: string; text: string }> = [
  {
    date: "Nov. 2026",
    text: "JOSE accepted as a poster to the IEEE RAS Humanoids 2026 Workshop on Trustworthy Humanoid Systems.",
  },
  {
    date: "Oct. 2026",
    text: "CoHuB accepted to the NeurIPS 2026 Robot Learning Workshop.",
  },
];
