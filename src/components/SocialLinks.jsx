import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaCheck, FaCopy } from 'react-icons/fa';
import { profileData } from '../data/profile';

export default function SocialLinks({ className = '', iconSize = 'w-5 h-5', showLabels = false }) {
  const { contact } = profileData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      name: 'GitHub',
      href: contact.github,
      icon: FaGithub,
      isExternal: true,
      color: 'hover:text-white hover:border-slate-400 hover:bg-slate-800/80',
      tooltip: 'github.com/jobayerh99',
    },
    {
      name: 'LinkedIn',
      href: contact.linkedin,
      icon: FaLinkedin,
      isExternal: true,
      color: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10',
      tooltip: 'LinkedIn Profile [Placeholder]',
    },
    {
      name: 'Email',
      href: `mailto:${contact.email}`,
      icon: FaEnvelope,
      isExternal: false,
      color: 'hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10',
      tooltip: contact.email,
      onClick: handleCopyEmail,
    },
    {
      name: 'WhatsApp',
      href: contact.whatsappLink,
      icon: FaWhatsapp,
      isExternal: true,
      color: 'hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10',
      tooltip: 'WhatsApp [Placeholder]',
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            onClick={link.onClick}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
            title={link.name === 'Email' && copied ? 'Email Copied!' : `${link.name}: ${link.tooltip}`}
            aria-label={`Visit Jobayer's ${link.name}`}
            className={`group relative flex items-center justify-center p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 transition-all duration-200 ${link.color} focus:outline-none focus:ring-2 focus:ring-pink-500`}
          >
            {link.name === 'Email' && copied ? (
              <FaCheck className={`${iconSize} text-emerald-400`} />
            ) : (
              <Icon className={iconSize} />
            )}
            {showLabels && (
              <span className="ml-2 text-sm font-medium text-slate-300 group-hover:text-white">
                {link.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
