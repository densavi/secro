import React from 'react'

import Link from 'next/link'

import styles from './Case.module.scss'

const Case = ({content}) => {


  let greenText = '';
  let solutionList = '';
  if (content && content.solutions) {
    greenText = content.solutions.greenText;

    solutionList = 
    `<ul>`
        + 
          content.solutions.list.map((item) =>
            `<li key=`+item.text+`>`+item.text+`</li>`
          ).join('')
        +
    `</ul>`

  }

  return (
    <div className={styles.Case}>
      <h2 className={styles.Case__title}>Use case</h2>
      <h4 className={styles.Case__heading}>{content.title}</h4>
      <div className={styles.Case__wrap}>
        <div className={styles.Case__scenario}>
          <h5 className={styles.Case__col_title}>Scenario</h5>
            {content.scenario}
        </div>

        <div className={styles.Case__points}>
          <h5 className={styles.Case__col_title}>Pain Points</h5>
          {content.painPoint &&
          <ul>
            {content.painPoint.map((item) =>
              <li key={item.text}>{item.text}</li>
            )}
          </ul>
          }
          
        </div>

        <div className={styles.Case__solution}>
          <h5 className={styles.Case__col_title}>Solution</h5>

           <p className={styles.Case__green}>{greenText}</p>
           
           <div dangerouslySetInnerHTML={{ __html: solutionList }}></div>
        </div>

      </div>
      {content.link &&
        <div className={styles.Case__link}>
          <Link href={content.link}>
            <a>Go to solutions for Banks and financial institutions</a>
          </Link>
        </div>
      }
    </div>
    
  )
}

export default Case