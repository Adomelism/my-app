// import { useState } from 'react';
import { useState } from 'react';
import AiForm from '../../Components/AiComponents/AiForm';
import AiOutput from '../../Components/AiComponents/AiOutput';
import Container from '../../Components/Container/Container';

const AiPage = () => {

    const [information, setInformation] = useState(null)

    const nameFormHandler = async name => {
        const ageRes = await fetch(`https://api.agify.io?name=` + name)
        const ageData = await ageRes.json();
        const age = ageData.age;

        const nationalityRes = await fetch('https://api.nationalize.io?name=' + name)
        const nationalityData = await nationalityRes.json();
        const nationality = nationalityData.country[0].country_id;
       

        const genderRes = await fetch('https://api.genderize.io?name=' + name)
        const genderData = await genderRes.json();
        const gender = genderData.gender;
   

        setInformation({name, age, gender, nationality});

    }

  return (
    <Container>
        <AiForm nameFormHandler={nameFormHandler}/>
        <AiOutput data={information}/>
    </Container>
  )
}

export default AiPage