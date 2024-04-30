import { getPersonById } from '../../Database/Database'
import PersonCard from './Components/PersonCard'
import MainBackground from '/MainBackground.png'
import Ben from '/ben.png'

export default function Main() {
  const person1 = getPersonById(1).data
  const person2 = getPersonById(2).data
  const person3 = getPersonById(3).data
  const person4 = getPersonById(4).data
  const person5 = getPersonById(5).data
  const person6 = getPersonById(6).data


  person1.description = person1.name + " " + person1.surname + " Yazılımcı Pazarı sayesinde şirketlerden teklif aldı. Sonrasında güvenilir biri olduğunu kanıtladı ve şirketlerin gözdesi oldu. Pazarın boş kalmayanları arasında yerini aldı."
  person2.description = person2.name + " " + person2.surname + " Bu arkadaşımız işsizdi. Kendisi boş durmamak için amele pazarında takılıyordu. Kendisi bizi gördü ve amele pazarından yazılımcı pazarına geçiş yaptı. Kendisi amelelikteki gibi çalışkanlığını yazılımda göstermekte"
  person3.description = person3.name + " " + person3.surname + " Genç yaşta pazara girdi. Girişimcilik kitabı yazdı. Sende onun gibi olabilirsin. Haydi pazarda bir limon ol."
  person4.description = person4.name + " " + person4.surname + " Ayın pazarcısı kelimeler yetmez ona"
  const lorem = "Bu Benim \n" + "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam accusamus cum odit, quod excepturi impedit, ducimus quibusdam exercitationem ullam iste itaque dolor consectetur illum illo, quisquam repellendus dolore quae autem."
  return (
    <div className='position-relative'>
      <img src={MainBackground} className='w-100 ps-2 pe-2 img-fluid rounded d-block' alt='yazılım pazara yazilim pazari sitesi backgroun resmi arkaplan resmi'/>
      <div className='d-flex justify-content-center mainCard'>
        <PersonCard id={person1.id} age={person1.age} description={person1.description} image={person1.image} name={person1.name} surname={person1.surname} />
        <PersonCard id={person2.id} age={person2.age} description={person2.description} image={person2.image} name={person2.name} surname={person2.surname} />
        <PersonCard id={person3.id} age={person3.age} description={person3.description} image={person3.image} name={person3.name} surname={person3.surname} />
        <PersonCard id={0} age={26} description={lorem} image={Ben} name="Ahmet Taha" surname="Mücasiroğlu" />
        <PersonCard id={person4.id} age={person4.age} description={person4.description} image={person4.image} name={person4.name} surname={person4.surname} />
        <PersonCard id={person5.id} age={person5.age} description={person5.description} image={person5.image} name={person5.name} surname={person5.surname} />
        <PersonCard id={person6.id} age={person6.age} description={person6.description} image={person6.image} name={person6.name} surname={person6.surname} />
      </div>
      
    </div>
  )
}
