/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  plugins: [require.resolve('docusaurus-lunr-search')],
  title: 'Mikrodev Documentation',
  tagline: '',
  url: 'https://mikrodev.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mikrodev_logo2.jpeg',
  organizationName: 'mikrodev', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  themeConfig: { 
  	
    navbar: {
	  
      title: '',
      logo: {
		  	
        alt: 'My Site Logo',
        src: 'img/mikrodevlogo.png',
      },
      items: [
        {			
          to: 'docs/ViewPLUS-SCADA-Editor',
          label: 'Software',
          position: 'left',
        },
		{
          to: 'docs/PLC-MP110-Series-Hardware-Manual',
          label: 'PLC',
          position: 'left',
        },
		{
          to: 'docs/RTU-RTU-Series-Hardware-Manual',
          label: 'RTU',
          position: 'left',
        },
		{
          to: 'docs/Gateway-MBS100-Hardware-Manual',
          label: 'Gateway',
          position: 'left',
        },
		{
          to: 'docs/Downloads',
          label: 'Downloads',
          position: 'left',
        },        
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'Programmable Logic Controller(PLC)',
              href: 'https://www.mikrodev.com/en/products/#plc',
            },
			{
              label: 'Distributed Control System(DCS)',
              href: 'https://www.mikrodev.com/en/rtu350/',
            },
			{
              label: 'Expansion Modules',
              href: 'https://www.mikrodev.com/en/products/#genisleme-modulu',
            },
			{
              label: 'IOT Protocol Converters',
              href: 'https://www.mikrodev.com/en/products/#modbus-gateway',
            },
			{
              label: 'Operator Control And Monitoring System',
              href: 'https://www.mikrodev.com/en/products/#viewplus-scada',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/MikrodevBilisim/',
            },
            {
              label: 'Linkedin',
              href: 'https://tr.linkedin.com/company/mikrodev-bili%C5%9Fim-yaz%C4%B1l%C4%B1m-elektronik-sanayi-ve-ticaret-limited-%C5%9Firketi',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mikrodevTR',
            },
			{
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC-67KqN9lzKKQUuZaMt3Zhg',
            },
			{
              label: 'Instagram',
              href: 'https://www.instagram.com/mikrodevbilisim/',
            },
			{				
              label: 'Technical Forum',
              href: 'https://destek.mikrodev.com/',
            },
          ],
        },
        {
          title: 'Mikrodev UK Limited Company',
          items: [
            {
              label: '338a Regents Park Road, Office 3 And 4, London, England, N3 2LN', 
			  to: '/',
            },
            {
              label: 'sales@mikrodev.com',
			  to: '/',
            },
			  {
              label: '+44 750 225 94 65',
			  to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mikrodev Limited`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mikrodev/Documentation/edit/master/documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mikrodev/Documentation/edit/master/documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
