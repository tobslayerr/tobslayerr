import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa"
import { SiTailwindcss, SiCplusplus, SiC, SiMysql } from "react-icons/si";
import webPJBL from "../assets/WebPJBL.png"
import webBangkit from "../assets/WebBangkit.png"
import webFeelemku from "../assets/WebFeelemku.png"
import webURP from "../assets/WebUrpTheBasics.png"
import webTobscode from "../assets/Web TobsCode.png"
import webNotes from "../assets/WebNote.png"
import webTrash from "../assets/Trash2Cash.png"


export const techStack = [
  { name: "React.js", icon: <FaReact />, percentage: 80 },
  { name: "Java", icon: <FaJava />, percentage: 40 },
  { name: "Python", icon: <FaPython />, percentage: 15 },
  { name: "C++", icon: <SiCplusplus />, percentage: 80 },
  { name: "C", icon: <SiC />, percentage: 35 },
  { name: "JavaScript", icon: <FaJs />, percentage: 90 },
  { name: "MySQL", icon: <SiMysql />, percentage: 85 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, percentage: 80 },
  { name: "HTML", icon: <FaHtml5 />, percentage: 100 },
  { name: "CSS", icon: <FaCss3Alt />, percentage: 95 },
];

export const projects = [
    {
      title: "Website PJBL",
      description:
        "PJBL merupakan project based learning yang dilakukan mahasiswa UPN VETERAN JAKARTA, dan website ini merupakan dokumentasi dari hasil PJBL salah satu kelompok mahasiswa.",
      techStack: ["Html", "Tailwind", "JavaScript"],
      link: "https://pjblkelompokb.vercel.app/",
      github: 'https://github.com/tobslayerr/website-pjbl.git',
      image: webPJBL, 
    },
    {
      title: "Website Bangkit",
      description:
        "Bangkit merupakan salah satu tugas mahasiswa dalam bentuk film dan website ini digunakan sebagai bahan dokumentasi dari film tersebut.",
      techStack: ["Html", "Css", "JavaScript"],
      link: "https://tubes-tekkom-kel1.netlify.app/",
      github: 'https://github.com/tobslayerr/project-teman.git',
      image: webBangkit, 
    },
    {
      title: "Feelemku",
      description:
        "Feelemku merupakan sebuah website ui untuk menampilkan daftar film film rekomendasi. Ini merupakan project akhir KSM ANDROID UPNVJ Study Club Web Basic.",
      techStack: ["Html", "Css", "JavaScript"],
      link: "https://filmku-zeta.vercel.app/#home",
      github: 'https://github.com/tobslayerr/feelemkuwebsite.git',
      image: webFeelemku, 
    },
    {
      title: "URP the Basics",
      description:
        "Website ini merupakan dokumentasi tugas salah satu mahasiswa. Di fitur web ini terdapat form yang terintegrasi ke spreadsheet.",
      techStack: ["Html", "Css", "JavaScript"],
      link: "https://urpthebasics.vercel.app/",
      github: 'https://github.com/tobslayerr/project-blog-spreadsheet.git',
      image: webURP, 
    },
    {
      title: "TobsCode",
      description:
        "Website ini merupakan dokumentasi tugas salah satu mahasiswa. Di fitur web ini terdapat form yang terintegrasi ke spreadsheet.",
      techStack: ["React JS", "Tailwind"],
      link: "https://tobscode.vercel.app/",
      github: 'https://github.com/tobslayerr/Website-Portofolio-TobsCode.git',
      image: webTobscode, 
    },
    {
      title: "WebNotes",
      description:
        "Website ini merupakan Website untuk menyimpan catatan dan memiliki CRUD. Merupakan Project akhir dicoding React Fundamentals.",
      techStack: ["React JS", "Css"],
      link: "https://mynotes-cyan.vercel.app/",
      github: 'https://github.com/tobslayerr/website-notes-react.git',
      image: webNotes, 
    },
    {
      title: "Trash2Cash",
      description:
        "Website ini merupakan prototype untuk website penukaran sampah menjadi coin yang akan bisa di convert menjadi uang ke e wallet.",
      techStack: ["React JS", "Hero UI", "Tailwind"],
      link: "https://trashtocash.vercel.app/",
      github: 'https://github.com/tobslayerr/trash2cash-frontend.git',
      image: webTrash, 
    },
  ];