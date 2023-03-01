import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

export const Multicolumn = ({children, color="#eee"}) => (
  <div
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000',
      padding: '0.2rem',
      display: 'flex', 
      justifyContent: 'space-around',
      gap: '20px',
      padding: '20px 20px 0px 20px'
    }}>
    {children}
  </div>
);

export const Markdown = ({children, color="#eee"}) => (
  <div
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000',
      padding: '0.2rem',
      display: 'flex', 
      justifyContent: 'space-around',
    }}>
    {children}
  </div>
);

export const Table = ({ children }) => {
  return <div className='table'>{children}</div>;
};

export const Tr = ({ children }) => {
  return <div className='row'>{children}</div>;
};

export const Td = ({ children }) => {
  return <div className='cell'>{children}</div>;
};