import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList = [
  {
    title: 'ViewPLUS SCADA',
    Svg: require('../../static/img/scada.svg').default,
    description: (
      <>
Electricity Generation Systems<br/>
Natural Gas and Petroleum Pipelines<br/>
Water Treatment and Distribution Facilities<br/>
Automotive Industry<br/>
Building Automation<br/>
Process Plants
				<br/><br/>

        <code><a href="https://www.mikrodev.com/en/scada/">Website Link for SCADA</a></code>
      </>	  
    ),	
  },
  
  {
    title: 'PLC-RTU',
    Svg: require('../../static/img/mikrodiagram.svg').default,
    description: (
      <>
Temperature Control Applications<br/>
Building Automation<br/>
Process Automation<br/>
Lighting Automation<br/>
Machine Automation<br/>
IoT Applications
		<br/><br/>
<code><a href="https://www.mikrodev.com/en/mp211e/">Website Link for PLC</a></code>
<br/>
        <code><a href="https://www.mikrodev.com/en/rtu301/">Website Link for RTU</a></code>
      </>
    ),
  },
  {
    title: 'Gateway',
    Svg: require('../../static/img/gateway.svg').default,
    description: (
      <>
Monitoring Energy Analysers<br/>
Monitoring Power Protection Relays<br/>
Remote Monitoring of Calorimeter Data<br/>
Remote Monitoring of Gas Meter Data<br/>
AMR(Automatic Meter Reading) Solutions<br/>
Load Profile Data
				<br/><br/>

        <code><a href="https://www.mikrodev.com/en/mbs100e/">Website Link for Gateway</a></code>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
