import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: 'https://serp.ly/@serp/youtube',
          target: '_blank',
        },
      ],
    },
    {
      text: 'Content',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Glossary',
        //   href: getPermalink('/glossary'),
        // },
      ],
    },
    // {
    //   text: '',
    //   links: [
    //     {
    //       text: 'Concealed Carry Laws',
    //       href: getPermalink('/category//'),
    //     },
    //     {
    //       text: 'Alabama',
    //       href: getPermalink('/'),
    //     },
    //     {
    //       text: 'Alaska',
    //       href: getPermalink('/'),
    //     },
    //     {
    //       text: 'Arizona',
    //       href: getPermalink('/'),
    //     },
    //   ],
    // },
    
   
  ],
  actions: [{ text: 'Subscribe', href: '/subscribe/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Website', href: 'https://best.serp.co' },
        { text: 'SERP', href: 'https://serp.co' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Newsletter', href: '/subscribe/' },
        // { text: 'Forum', href: '/#' },
        // { text: 'Community', href: '/#' },
      ],
    },
    {
      title: 'Links',
      links: [
        // { text: 'Substack', href: 'https://universityofguns.substack.com/', target: '_blank' },
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms & Conditions', href: '/terms/' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
        { text: 'DMCA', href: '/dmca/' },
        { text: 'Archive', href: '/archive/' },
        { text: 'Tags', href: '/tags/' },
      ],
    },
  ],
  //   secondaryLinks: [
  //     { text: 'Free Stuff', href: 'https://stuff' },
  //   ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@serp/twitter', target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://serp.ly/@serp/instagram',
      target: '_blank',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://serp.ly/@serp/facebook',
      target: '_blank',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://serp.ly/@serp/youtube',
      target: '_blank',
    },
    {
      ariaLabel: 'Linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://serp.ly/@serp/linkedin',
      target: '_blank',
    },
    {
      ariaLabel: 'TikTok',
      icon: 'tabler:brand-tiktok',
      href: 'https://serp.ly/@serp/tiktok',
      target: '_blank',
    },
  ],
};
