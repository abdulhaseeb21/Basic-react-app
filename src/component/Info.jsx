import './info.css'
const Info = ({ name, age, profession }) => {
    return (
        <div className='main_div'>
            <p><strong>Name:</strong> <li>{name}</li></p>
            <p><strong>Age:</strong><li> {age + 10}</li></p>
            <ul>
                <strong>Profession:</strong>
                {profession.map((pro,id )=> <li className='skills__list' key={id}>{pro}</li>)}
            </ul>
        </div>
    )
}
export default Info