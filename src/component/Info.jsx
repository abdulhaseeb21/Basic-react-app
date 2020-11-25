const Info = ({ name, age, profession }) => {
    return (
        <div>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age + 10}</p>
            <ul>
                <strong>Profession:</strong>
                {profession.map(pro => <li>{pro}</li>)}
            </ul>
        </div>
    )
}
export default Info