import React from 'react';
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaRobot,
  FaBrain,
  FaCode,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { MdSecurity, MdDevices } from 'react-icons/md';

const iconMap = {
  FaReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  FaCss3Alt,
  SiNodedotjs,
  SiExpress,
  TbApi,
  MdSecurity,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiMysql,
  FaGitAlt,
  FaGithub,
  VscCode,
  MdDevices,
  FaRobot,
  FaBrain,
  FaCode,
};

export default function TechIcon({ name, className = 'w-6 h-6', style = {} }) {
  const IconComponent = iconMap[name] || FaCode;
  return <IconComponent className={className} style={style} aria-hidden="true" />;
}
