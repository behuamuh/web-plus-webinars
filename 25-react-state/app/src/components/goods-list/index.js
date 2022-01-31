import React from 'react'
import styles from './styles.module.css'
import Good from '../good'

const GoodsList = () => {
  return <ul className={styles.goods}>
    <Good
      title='Vegemite'
      description='Vegemite (/ˈvɛdʒimaɪt/ VEJ-i-myte) is a thick, dark brown Australian food spread made from leftover brewers yeast extract with various vegetable and spice additives. It was developed by Cyril Callister in Melbourne, Victoria in 1922.'
      price='20$'
      imgSrc='https://upload.wikimedia.org/wikipedia/commons/1/10/Vegemiteontoast_large.jpg'
    />
    <Good
      title='Special Yo-Yo'
      description='A yo-yo (also spelled yoyo) is a toy consisting of an axle connected to two disks, and a string looped around the axle, similar to a spool. It is an ancient toy with proof of existence since 500 BCE. The yo-yo was also called a bandalore in the 17th century.'
      price='100$'
      imgSrc='https://www.mktales.com/wp-content/uploads/2010/07/JTYOYO_big.jpg'
    />
    <Good
      title='The Communist Manifesto'
      description='The Communist Manifesto, originally the Manifesto of the Communist Party (German: Manifest der Kommunistischen Partei), is an 1848 pamphlet by German philosophers Karl Marx and Friedrich Engels.'
      price='150$'
      imgSrc='https://www.abramsbooks.com/cover_images/3/9781910593493_s3.jpg'
    />
    <Good
      title='Minor Threat Album'
      description='Minor Threat was an American hardcore punk band, formed in 1980 in Washington, D.C. by vocalist Ian MacKaye and drummer Jeff Nelson. MacKaye and Nelson had played in several other bands together'
      price='150$'
      imgSrc='https://upload.wikimedia.org/wikipedia/ru/2/2c/Minor_Threat_-_Out_of_Step.jpg'
    />

    <Good
      title='Keith Haring Poster'
      description='Keith Allen Haring (May 4, 1958 – February 16, 1990) was an American artist whose pop art emerged from the New York City graffiti subculture of the 1980s. His animated imagery has "become a widely recognized visual language".'
      price='1000$'
      imgSrc='https://www.passion-estampes.com/deco/affiches/haring/haringsanstitre1988bebes.jpg'
    />

    <Good
      title='Dr.Pepper Old School bottles'
      description='Dr Pepper is a carbonated soft drink. It was created in the 1880s by pharmacist Charles Alderton in Waco, Texas, and first served around 1885. Dr Pepper was first nationally marketed in the United States in 1904'
      price='80$'
      imgSrc='https://news.unipack.ru/light_editor_img/dr-pepper.jpg'
    />
  </ul>
}


export default GoodsList