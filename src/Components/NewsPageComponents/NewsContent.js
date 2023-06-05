import NewsItem from "./NewsItem";
import ButtonLarge from "../Partials/ButtonLarge";

const NewsContent = ({title}) => {

    const mainNewsData = [
        {
        url:'/#',
        imgSrc:'https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg',
        imgAlt:'news one',
        category:'AI & deep learning',
        title:'Ar „ChatGPT“ užims mūsų darbo vietas?',
        date:'2023-01-27',
        },
        {
        url:'/#',
        imgSrc:'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
        imgAlt:'news two',
        category:'Naujienos',
        title:'Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?',
        date:'2022-12-12',
        },
    ];

    const secondaryNewsData = [
        {
        url:'/#',
        imgSrc:'https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1024x994.jpg',
        imgAlt:'news three',
        category:'Naujienos',
        title:'Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?',
        date:'2022-03-23',
        },
        {
        url:'/#',
        imgSrc:'https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg',
        imgAlt:'news four',
        category:'Naujienos',
        title:'„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį',
        date:'2021-11-09',
        },
        {
        url:'/#',
        imgSrc:'https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg',
        imgAlt:'news five',
        category:'Technologijų ritmu',
        title:'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
        date:'2021-09-02',
        },
        {
        url:'/#',
        imgSrc:'https://codeacademy.lt/wp-content/uploads/2021/09/mintosko-Ro0PNXcpCus-unsplash-1024x705.jpg',
        imgAlt:'news two',
        category:'Technologijų ritmu',
        title:'Ar skaitmeninė mada išties yra ekologiška industrijos gelbėtoja?',
        date:'2021-09-02',
        },
    ]

    const mainNewsElements = mainNewsData.map((newsData, index) => <NewsItem data={newsData} key={index} />);

    const secondaryNewsElements = secondaryNewsData.map((newsData, index) => <NewsItem data={newsData} key={index} />);


     

  return (
    <div className="news-wrapper">
    <h2 className="section-title">{title}</h2>
    <div className="main-news">
        {mainNewsElements}
    </div>
    <div className="secondary-news">
        {secondaryNewsElements}
    </div> 
    <ButtonLarge />
</div>
  )
}

export default NewsContent
